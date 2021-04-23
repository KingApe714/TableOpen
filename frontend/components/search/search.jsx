import React from 'react';
import TrieTree from '../../util/util_functions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        // this.props.searchRestaurants('Clifton')
        this.props.fetchRestaurants()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        //I've now set up a Trie Tree with all of the restaurant names
        let trie;
        if (this.props.restaurants.length > 0) {
            trie = new TrieTree(this.props.restaurants.map(restaurant => {
                return restaurant.name
            }))
            // console.log(trie.rootNode.filterWords(trie.rootNode, 'S'))
            // console.log(trie.rootNode.filterWords(trie.rootNode, 'U'))
            // console.log(trie.rootNode.filterWords(trie.rootNode, 'Unc'))
        } else {
            return null
        }
        const restaurantNames = trie.rootNode.filterWords(trie.rootNode, this.state.searchTerm);


        // console.log(this.state.searchTerm)
        // debugger
        return (
            <div>
                <input  type="text"
                        value={this.state.searchTerm}
                        onChange={this.update('searchTerm')}
                        placeholder="Location, Restaurant, or Cuisine"/>
                {restaurantNames}
            </div>
        )
    }
}

export default Search