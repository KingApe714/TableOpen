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
            return  <li key={i}
                        className="search-list-item">
                        {name}
                    </li>
            //below is the built in method
            // return <option key={i} value={name}/>
        });

        let j = 0;
        const restaurantCities = trieCities.rootNode.filterWords(trieCities.rootNode, this.state.searchTerm).map(city => {
            j += 1;
            //each of these guys should be a link to the search page with the searchTerm
            //passed in as a prop through state. This way we can dispatch restaurants/search
            //with the searchTerm. that should render on the search show page.
            return  <li key={j}
                        className="search-list-item">
                        {city}
                    </li>
        })


        // console.log(this.state.searchTerm)
        // debugger
        return (
            <div>
                <div className="search-dropdown">
                    <input  type="text"
                            className="search-text-box"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}
                            placeholder="Location, Restaurant, or Cuisine"/>
                    <ul className="search-dropdown-list">
                        {this.state.searchTerm.length >= 1 ? 
                            <li key={0}
                                className="search-list-item">
                                    Search: "{this.state.searchTerm}"
                            </li> : <>Your recent searches</>}
                        {this.state.searchTerm.length >= 1 ? restaurantNames : null}
                    </ul>
                </div>
                <ul>
                    {restaurantCities}
                </ul>
                {/* <input type="text" list="data" onChange={this.update('searchTerm')} /> */}
                {/* <datalist id="data">
                    {restaurantNames}
                </datalist> */}
            </div>
        )
    }
}

export default Search