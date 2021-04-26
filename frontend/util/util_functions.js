import React from 'react';

export const timeInterval = (hoursOfOp) => {
    if (hoursOfOp) {
        let [start, end] = hoursOfOp.split(' - ');
        let [startHour, startMinute] = start.split(':');
        let [endHour, endMinute] = end.split(':');
        if (startMinute[2] === 'p' && startHour[0] !== '1' && startHour[1] !== '2') startHour = parseInt(startHour) + 12
        if (endMinute[2] === 'p') endHour = parseInt(endHour) + 12
        let times = [];
        for (let i = startHour; i <= endHour; i++) {
            let h = i;
            let suffix = 'am';
            let option;
            if (h >= 12) suffix = 'pm';
            if (h > 12) h -= 12;
            if (i === startHour && startMinute[0] === '3') {
                option = h + ":30" + suffix
                times.push(<option key={option}>{option}</option>)
            } else if (i === endHour && endMinute[0] === '0'){
                option = h + ":00" + suffix
                times.push(<option key={option}>{option}</option>)
            } else {
                option = h + ":00" + suffix
                times.push(<option key={option}>{option}</option>)
                option = h + ":30" + suffix
                times.push(<option key={option}>{option}</option>)
            }
        }
        return times;
    }
}

export const handleTime = (currentUserId, restaurantId, state) => {
    //return an object with the correct key names and correct values
    //state has guest_count in it and date and time separately
    //lets bring it all together
    let [year, month, day] = state.date.split('-')
    let [hour, minute] = state.time.split(':');
    if (minute[2] === 'p') hour = parseInt(hour) + 12;
    minute = minute[0] + minute[1];
    let time = hour + ' ' + minute;
    console.log(hour)
    let reservation_date_time = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`
    return {
        restaurant_id: restaurantId,
        guest_id: currentUserId,
        guest_count: state.guest_count,
        reservation_date_time: reservation_date_time
    }
}

export const renderTime = (time) => {
    let [hour, minute, second] = time.split(':');
    let suffix = 'AM';
    if (hour >= 12) {
        suffix = 'PM'
        hour -= 12
    }
    return hour + ':' + minute + ' ' + suffix
}

class PolyTreeNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
        this.complete = false;
    }

    parentEquals(node) {
        if ( this.parent !== null ) {
            let idx = this.parent.children.indexOf(this)
            this.parent.children.splice(idx, 1)
        }
        this.parent = node;
        if (node === null) return
        if (!node.children.includes(this)) {
            node.children.push(this)
        }
    }

    addChild(child) {
        if (!this.children.includes(child)) {
            this.children.push(child)
            child.parentEquals(this)
        }
    }

    removeChild(child) {
        if (this.children.includes(child)) {
            child.parentEquals(null)
        }
    }

    //dfs through the node that I pass to this function
    //return the remaining tree once we've reached the end of the fragment
    //I need a way to hold the node that I am currently at to make efficient searches
    dfsFrag(node, frag) {
        if (frag.length === 0) {
            return node
        }
        for (let child of node.children) {
            if (child.value === frag[0]) {
                frag = frag.slice(1);
                let result = this.dfsFrag(child, frag)
                if (result !== null) {
                    //result is the tree that I want
                    //it will have the nodes that I want
                    return result
                }
            }
        }

        return null
    }

    currentWord(currentNode) {
        let nodeCheck = currentNode;
        let wordFrag = '';
        while(nodeCheck.parent !== null) {
            wordFrag = nodeCheck.value + wordFrag;
            nodeCheck = nodeCheck.parent;
        }

        return wordFrag;
    }

    //I just need all of the leaf nodes to return all of the possible words from the current node
    filterWords(node, frag) {
        let currentNode = this.dfsFrag(node, frag);
        let queueArray = [currentNode];
        let words = [];

        while (queueArray.length > 0) {
            if (queueArray[0].children.length === 0 || queueArray[0].complete) {
                words.push(this.currentWord(queueArray[0]));
            } else {
                // return ""
            }

            queueArray = queueArray.concat(queueArray[0].children);
            queueArray.shift();
        }

        return words;
    }
}

class TrieTree {
    constructor(filter) {
        //rootNode will have populated in it the entire tree
        this.rootNode = new PolyTreeNode(null);
        this.filter = filter;
        this.buildTree()
    }

    buildTree() {
        let currentNode = null;

        this.filter.forEach(word => {
            currentNode = this.rootNode
            //I need to know that I've reached the end of a word to turn 'complete' to true
            for (let i = 0; i < word.length; i++) {
                let chr = word[i];
                let previousNode = currentNode;
                if (currentNode.children.length > 0) {
                    for (let child of currentNode.children) {
                        if (child.value === chr) {
                            currentNode = child;
                            break
                        }
                    }
                }
                if (currentNode === previousNode) {
                    let newNode = new PolyTreeNode(chr);
                    if (i === word.length - 1) newNode.complete = true;
                    currentNode.addChild(newNode);
                    currentNode = newNode
                }
            }
        })
    }
}

export default TrieTree

// let trie = new TrieTree(['abc', 'abcd', 'abcde', 'add', 'baa', 'bad', 'back', 'baq', 'baaaaaaa'])

// let check = trie.rootNode.children[1].children[0].children[2]

// console.log(trie.rootNode.dfsFrag(trie.rootNode, 'bac'))

// let test = trie.rootNode.filterWords(trie.rootNode, 'ab')

// console.log(test)