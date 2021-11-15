# TableOpen

By Jonathan Diaz

TableOpen is a clone of the popular website OpenTable, where users can look up restaurant information of their choice, make reservations and comment on their experience amongst other things. Users are privied to information like cuisine type, price range, dress code and the likes. The website makes for a streamline experience betweens restaurants and consumers

# Technologies

* React
* Redux
* Ruby on Rails
* PotgreSQL
* JBuilder
* AWS S3
* Active Storage
* CSS3

# Search

This feature is unique in that a Trie tree was used to render the restaurant names and cities. There is one tree for the names and one tree for the cities. So in real time, as users are typing in the search bar a drop down appears below it rendering all possible search querries. Even if users search for a fragment of a word, the search feature will retrieve all restaurants who's name and/or city include that fragment.

```javascript
class TrieTree {
    constructor(filter) {
        //rootNode will have populated in it the entire tree
        this.rootNode = new PolyTreeNode(null);
        this.filter = filter;
        this.buildTree();
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
    return arr
}

export default TrieTree
```

# Reservations

Users can select the restaurant of their choosing and set up a date and time (within the hours of operation) to reserve a table at a party size of their choosing.

# Restaurants

Each reastaurant page has relevant information to display to the user to better assist their decision making process. Details like hours of operation, city, cuisine type, food menus and drink menus are all available here
