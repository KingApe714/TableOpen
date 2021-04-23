import React from 'react';
import TrieTree from '../../util/util_functions'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.searchRestaurants('Clifton')
        this.props.fetchRestaurants()
    }

    render() {
        //I've now set up a Trie Tree with all of the restaurant names
        let trie = new TrieTree(this.props.restaurants.map(restaurant => {
            return restaurant.name
        }))
        console.log(trie)
        return (
            <div>
                <input  type="text"
                        placeholder="Location, Restaurant, or Cuisine"/>
                {/* {restaurantNames} */}
            </div>
        )
    }
}

export default Search