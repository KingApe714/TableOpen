import React from 'react';
import { fetchRestaurants } from './restaurant_util'

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
    console.log(currentUserId)
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

// this function splits up the time variable into 5 buttons
// the middle button is the time they selected, 2, and 2 below
export const timeButtons = (operation_hours, time) => {
    let [start, end] = operation_hours.split(' - ');
    let [startHour, startMinute] = start.split(':');
    let [endHour, endMinute] = end.split(':');
    if (startMinute[2] === 'p' && startHour[0] !== '1' && startHour[1] !== '2') startHour = parseInt(startHour) + 12
    if (endMinute[2] === 'p') endHour = parseInt(endHour) + 12

    let [checkHour, checkMinute] = time.split(':')
    if (checkMinute[2] === 'p' && checkHour !== '12') checkHour = parseInt(checkHour) + 12
    let sMinute = parseInt(startMinute.slice(0, 2))
    let eMinute = parseInt(endMinute.slice(0, 2))
    let cMinute = parseInt(checkMinute.slice(0, 2))

    let startDate = new Date(2021, 5, 20, startHour, sMinute)
    let endDate = new Date(2021, 5, 20, endHour, eMinute)
    let checkDate = new Date(2021, 5, 20, checkHour, cMinute)
    let suffix = 'AM';
    let minutes;
    let hours;
    let arr = [];
    // debugger
    if (checkDate.getHours() <= startDate.getHours() + 2) {
        for (let i = 0; i < 5; i++) {
            if (startDate.getHours() >= 12) suffix = 'PM'
            minutes = startDate.getMinutes() === 0 ? '00' : '30'
            hours = startDate.getHours() > 12 ? startDate.getHours() - 12 : startDate.getHours()
            arr.push(`${hours}:${minutes} ${suffix}`);
            startDate.setMinutes(startDate.getMinutes() + 30)
        }
    } else if (checkDate.getHours() >= endDate.getHours()) {
        console.log(`check hour: ${checkDate.getHours()}`)
        console.log(`end hour: ${endDate.getHours()}`)
        for (let i = 0; i < 5; i++) {
            if (endDate.getHours() >= 12) suffix = 'PM'
            minutes = endDate.getMinutes() === 0 ? '00' : '30'
            hours = endDate.getHours() > 12 ? endDate.getHours() - 12 : endDate.getHours()
            arr.unshift(`${hours}:${minutes} ${suffix}`)
            endDate.setMinutes(endDate.getMinutes() - 30)
        }
    } else {
        checkDate.setMinutes(checkDate.getMinutes() - 60)
        for (let i = 0; i < 5; i++) {
            if (checkDate.getHours() >= 12) suffix = 'PM'
            minutes = checkDate.getMinutes() === 0 ? '00' : '30'
            hours = checkDate.getHours() > 12 ? checkDate.getHours() - 12 : checkDate.getHours()
            arr.push(`${hours}:${minutes} ${suffix}`);
            checkDate.setMinutes(checkDate.getMinutes() + 30)
        }
    }
    // console.log(arr)
    return arr
}

// console.log(timeButtons("10:00am - 10:00pm", "2:30pm"))


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
            if (child.value.toLowerCase() === frag[0].toLowerCase()) {
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
        let i = 0;
        while (queueArray[0] && queueArray.length > 0) {
            if (queueArray[0] && (queueArray[0].children.length === 0 || queueArray[0].complete)) {
                words.push(this.currentWord(queueArray[0]));
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
        this.buildTree();
    }

    buildTree() {
        // debugger
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

export const trieTrees = () => {
    let obj = new Object();
    let arr = fetchRestaurants().then(function(data) { 
        let names = [];
        let cities = [];
        for (let i in data) {
            obj[i] = { name: data[i].name, city: data[i].city }
            names.push(data[i].name);
            cities.includes(data[i].city) ? null : cities.push(data[i].city);
        }
        const trieNames = new TrieTree(names)
        const trieCities = new TrieTree(cities)
        return [trieNames, trieCities]
    }).then(res => {
        console.log(res)
        return res
    })
    console.log(arr instanceof Array)
    return arr
}

export default TrieTree