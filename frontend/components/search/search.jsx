import React from 'react';
import { Link } from 'react-router-dom';
import { timeInterval, trieTrees } from '../../util/util_functions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            date: 0,
            time: 0,
            guest_count: 0,
            querryArray: [],
            keyWord: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let querryItem, currentSearch
        if (this.state.keyWord) {
            querryItem = this.state.keyWord
            currentSearch = this.state.keyWord
            this.setState({
                keyWord: null
            })
        } else {
            querryItem = this.state.querryArray
            currentSearch = this.state.searchTerm
        }

        if (!localStorage.recentSearches) {
            localStorage.setItem('recentSearches', JSON.stringify([currentSearch]))
        } else {
            let recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
            if (recentSearches.length >= 2) {
                recentSearches.push(currentSearch)
                recentSearches.shift();
            } else {
                recentSearches.push(currentSearch)
            }
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        }
        //pass querryItem in as a wildcard
        this.props.searchRestaurants(querryItem).then(res => {
            console.log(`search this.state = `)
            console.log(this.state)
            this.props.history.push({
                pathname: `/search/${currentSearch}`,
                state: Object.assign({}, this.state),
            })
        })
    }

    styleSearchWord(name) {
        let searchFrag = name.substring(this.state.searchTerm.length)
        let searchTerm = this.state.searchTerm
        if (searchTerm.length > 0) {
            let arr = name.split(' ').map(word => word.toLowerCase());
            searchTerm = searchTerm.split(' ').map(word => {
                if (word === '') return
                return  <>
                            {word[0].toUpperCase() + word.slice(1).toLowerCase()}
                            {arr.includes(word.toLowerCase()) && arr.length > 1 ? <>&nbsp;</> : null}
                        </>
            })
        }
        const searchWord =  <div className="search-words">
                                <p className="search-frags">{searchTerm}</p>
                                <p>{searchFrag}</p>
                            </div>;
        return searchWord
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        // console.log(trieTrees())
        // console.log(trieTrees)
        let recentSearches = null;
        if (localStorage.recentSearches) {
            recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
        }
        let h = 0;
        recentSearches = recentSearches ? recentSearches.map(item => {
            h += 1;
            if (this.props.restaurantNames.includes(item)) {
                let restCity = this.props.restaurants.find(obj => obj.name === item).city
                return  <button key={h}
                            className="search-list-item"
                            value={item}
                            onClick={this.update('keyWord')}
                            replace="true">
                            {item}
                            <div className="search-list-item-city">
                                {restCity}, New Jersey
                            </div>
                        </button>
            } else if (this.props.restaurantCities.includes(item)) {
                return  <button key={h}
                            className="search-list-item"
                            value={item}
                            onClick={this.update('keyWord')}
                            replace="true">
                            {item}
                            <div className="search-list-item-city">
                                New Jersey - North, New York / Tri-State Area, United States
                            </div>
                        </button>
            } else {
                return  <button key={h}
                            className="search-list-item"
                            value={item}
                            onClick={this.update('keyWord')}>
                                {item}
                        </button>
            }
        }) : null
        const trieNames = this.props.trieTrees.names; 
        const trieCities = this.props.trieTrees.cities;
        const names = [];
        const cities = [];
        let i = 0;
        const restaurantNames = trieNames.rootNode.filterWords(trieNames.rootNode, this.state.searchTerm).map(name => {
            i += 1;
            names.push(name)
            let restCity = this.props.restaurants.find(restaurant => {
                return restaurant.name === name;
            }).city
            const searchWord = this.styleSearchWord(name)
            return  <button key={i}
                        className="search-list-item"
                        value={name}
                        onClick={this.update('keyWord')}
                        replace="true">
                        {searchWord}
                        <div className="search-list-item-city">
                            {restCity}, New Jersey
                        </div>
                    </button>
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
            const searchWordCity = this.styleSearchWord(city)
            return  <button key={j}
                        className="search-list-item"
                        value={city}
                        onClick={this.update('keyWord')}
                        replace="true">
                        {searchWordCity}
                        <div className="search-list-item-city">
                            New Jersey - North, New York / Tri-State Area, United States
                        </div>
                    </button>
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
                const searchRestaurantCity = this.styleSearchWord(restaurant.city)
                return  <button key={j}
                            className="search-list-item"
                            value={restaurant.name}
                            onClick={this.update('keyWord')}
                            replace="true">
                                {restaurant.name}
                                <div className="search-list-item-city">
                                    {searchRestaurantCity}, New Jersey
                                </div>
                        </button>
            }))
        }

        if (names.length === 25) {
            this.state.querryArray[0] = names;
        } else {
            this.state.querryArray[1] = cities;
            this.state.querryArray[0] = names;
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
                            <button key={0}
                                className="search-list-item"
                                replace="true">
                                    Search: "{this.state.searchTerm}"
                            </button> 
                         : 
                            <>
                                <div className="recent-searches">
                                    Your recent searches
                                </div>
                                {recentSearches}
                            </>
                            }
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