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
        let trieNames, trieCities;
        if (this.props.restaurants.length > 0) {
            trieNames = new TrieTree(this.props.restaurants.map(restaurant => {
                return restaurant.name
            }))
            trieCities = new TrieTree(this.props.restaurants.map(restaurant => {
                return restaurant.city
            }))
        } else {
            return null
        }
        let i = 0;
        const restaurantNames = trieNames.rootNode.filterWords(trieNames.rootNode, this.state.searchTerm).map(name => {
            i += 1;
            return  <div key={i}>
                        {name}
                    </div>
        });

        let j = 0;
        const restaurantCities = trieCities.rootNode.filterWords(trieCities.rootNode, this.state.searchTerm).map(city => {
            j += 1;
            return  <div key={j}>
                        {city}
                    </div>
        })


        // console.log(this.state.searchTerm)
        // debugger
        return (
            <div>
                <input  type="text"
                        value={this.state.searchTerm}
                        onChange={this.update('searchTerm')}
                        placeholder="Location, Restaurant, or Cuisine"/>
                <div>
                    {restaurantNames}
                </div>
                <div>
                    {restaurantCities}
                </div>
            </div>
        )
    }
}

export default Search