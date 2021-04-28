import React from 'react';
import TrieTree, { timeInterval } from '../../util/util_functions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            date: 0,
            time: 0,
            guest_count: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
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
        // debugger
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
            let restCity = this.props.restaurants.find(restaurant => {
                return restaurant.name === name;
            }).city
            return  <li key={i}
                        className="search-list-item">
                        {name}
                        <div className="search-list-item-city">
                            {restCity}, New Jersey
                        </div>
                    </li>
        });

        restaurantNames.unshift(
            <li key={-1}
            className="list-item-title">
                Restaurants
            </li>
        )

        let j = 0;
        let searchCity = null;
        let restaurantCities = trieCities.rootNode.filterWords(trieCities.rootNode, this.state.searchTerm).map(city => {
            j += 1;
            searchCity = city;
            //each of these guys should be a link to the search page with the searchTerm
            //passed in as a prop through state. This way we can dispatch restaurants/search
            //with the searchTerm. that should render on the search show page.
            return  <li key={j}
                        className="search-list-item">
                        {city}
                        <div className="search-list-item-city">
                            New Jersey - North, New York / Tri-State Area, United States
                        </div>
                    </li>
        })

        restaurantCities.unshift(
            <li key={-1}
                className="list-item-title">
                Locations
            </li>
        )
        if (restaurantNames.length < 2) {
            restaurantCities.push(
                <li key={j+=1}
                className="list-item-title">
                    Restaurants
                </li>
            )
            restaurantCities = restaurantCities.concat(this.props.restaurants.filter(restaurant => {
                return restaurant.city === searchCity
            }).map(restaurant => {
                j += 1;
                return  <li key={j}
                            className="search-list-item">
                            {restaurant.name}
                            <div className="search-list-item-city">
                                {restaurant.city}, New Jersey
                            </div>
                        </li>
            }))
        }

        const options = timeInterval("1:00am - 11:30pm")
        return (
            <form onSubmit={this.handleSubmit}
                    className="search-container">
                <div className="search-resi-div">
                    <input type="date"
                            value={this.state.date}
                            onChange={this.update('date')}
                            className="search-resi-dropdown"/>
                    <select value={this.state.time}
                            onChange={this.update('time')}
                            className="search-resi-dropdown">
                                {options}
                    </select>
                    <select value={this.state.guest_count} 
                            onChange={this.update('guest_count')}
                            className="search-resi-dropdown">
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                    </select>
                </div>
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
                            </li> 
                            : 
                            <li className="recent-searches">
                                Your recent searches
                            </li>}
                        {this.state.searchTerm.length >= 1 && restaurantNames.length > 1 ? 
                            restaurantNames : null}
                        {this.state.searchTerm.length >= 1 && restaurantCities.length > 2 ? 
                            restaurantCities : null}
                    </ul>
                </div>
                <button className="search-submit">Let's go</button>
            </form>
        )
    }
}

export default Search