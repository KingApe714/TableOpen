import React from 'react';
import { Link } from 'react-router-dom';
import TrieTree, { timeInterval } from '../../util/util_functions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            date: 0,
            time: 0,
            guest_count: 0,
            querryArray: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        //this still needs the querry array to pass to the backend
        //consider using state
        this.props.history.push({
            pathname: '/search',
            state: this.state
        })
    }

    componentDidMount() {
        // this.props.fetchRestaurants()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateQuerryArray(querryArray) {
        return this.setState({
            querryArray: querryArray
        })
    }

    render() {
        // debugger
        //I've now set up a Trie Tree with all of the restaurant names
        let trieNames, trieCities;
        const names = [];
        const cities = [];
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
            names.push(name)
            let restCity = this.props.restaurants.find(restaurant => {
                return restaurant.name === name;
            }).city
            return  <Link key={i}
                        className="search-list-item"
                        to={{
                            pathname: '/search',
                            state: Object.assign({}, this.state, { keyWord: name })
                        }}
                        replace>
                        {name}
                        <div className="search-list-item-city">
                            {restCity}, New Jersey
                        </div>
                    </Link>
        });

        restaurantNames.unshift(
            <div key={-1}
            className="list-item-title">
                Restaurants
            </div>
        )

        let j = 0;
        let searchCity = null;
        let restaurantCities = trieCities.rootNode.filterWords(trieCities.rootNode, this.state.searchTerm).map(city => {
            j += 1;
            searchCity = city;
            cities.push(city)
            //each of these guys should be a link to the search page with the searchTerm
            //passed in as a prop through state. This way we can dispatch restaurants/search
            //with the searchTerm. that should render on the search show page.
            return  <Link key={j}
                        className="search-list-item"
                        to={{
                            pathname: '/search',
                            state: Object.assign({}, this.state, { keyWord: city })
                        }}
                        replace>
                        {city}
                        <div className="search-list-item-city">
                            New Jersey - North, New York / Tri-State Area, United States
                        </div>
                    </Link>
        })

        restaurantCities.unshift(
            <div key={-1}
                className="list-item-title">
                Locations
            </div>
        )
        if (restaurantNames.length < 2) {
            restaurantCities.push(
                <div key={j+=1}
                className="list-item-title">
                    Restaurants
                </div>
            )
            restaurantCities = restaurantCities.concat(this.props.restaurants.filter(restaurant => {
                return restaurant.city === searchCity
            }).map(restaurant => {
                j += 1;
                return  <Link key={j}
                            className="search-list-item"
                            to={{
                                pathname: '/search',
                                state: Object.assign({}, this.state, { keyWord: restaurant.name })
                            }}
                            replace>
                                {restaurant.name}
                                <div className="search-list-item-city">
                                    {restaurant.city}, New Jersey
                                </div>
                        </Link>
            }))
        }
        let querryArray = [];
        if (names.length === 25) {
            querryArray[0] = names;
        } else {
            querryArray[1] = cities;
            querryArray[0] = names;
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
                    <div className="search-dropdown-list">
                        {this.state.searchTerm.length >= 1 ? 
                            <Link key={0}
                                className="search-list-item"
                                to={{
                                    pathname: '/search',
                                    state: Object.assign({}, this.state, { querryArray: querryArray })
                                }}
                                replace>
                                    Search: "{this.state.searchTerm}"
                            </Link> 
                         : 
                            <div className="recent-searches">
                                Your recent searches
                            </div>}
                        {this.state.searchTerm.length >= 1 && restaurantNames.length > 1 ? 
                            restaurantNames : null}
                        {this.state.searchTerm.length >= 1 && restaurantCities.length > 2 ? 
                            restaurantCities : null}
                    </div>
                </div>
                <button className="search-submit">Let's go</button>
            </form>
        )
    }
}

export default Search