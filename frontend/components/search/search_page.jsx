import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import { timeButtons } from '../../util/util_functions';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null
        }
    }

    componentDidMount() {
        // debugger
        if (this.props.location.state) {
            this.setState({
                info: this.props.location.state
            })
        } else {
            this.setState({
                info: JSON.parse(localStorage.getItem('info'))
            })
        }
        // let info = JSON.parse(localStorage.getItem('info'))
        // let recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
        // if (info.keyWord) {
        //     recentSearches.push(info.keyWord)
        //     localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
        //     // this.props.searchRestaurants(info.keyWord)
        // } else {
        //     recentSearches.push(info.searchTerm)
        //     localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
        //     // this.props.searchRestaurants(info.querryArray)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        let info = JSON.parse(localStorage.getItem('info'))
        // debugger
        if (this.state.info.searchTerm !== info.searchTerm){
            this.setState({
                info: info
            })
            // let recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
            // if (info.keyWord) {
            //     recentSearches.push(info.keyWord)
            //     localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
            // } else {
            //     recentSearches.push(info.searchTerm)
            //     localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
            // }
        }
    }

    render() {
        let restaurants;
        if (this.props.restaurants.length) {
            restaurants = this.props.restaurants;
            localStorage.setItem('restaurants', JSON.stringify(restaurants))
        } else {
            restaurants = JSON.parse(localStorage.getItem('restaurants'))
        }
        let info
        // debugger
        if (this.props.location.state) {
            info = this.props.location.state;
            localStorage.setItem('info', JSON.stringify(info));
        } else {
            info = JSON.parse(localStorage.getItem('info'));
        }
        console.log(this.props.location)

        let i = 0;
        let j = 100;
        restaurants = restaurants.map(restaurant => {
            let buttons = timeButtons(restaurant.operation_hours, info.time ? info.time : '3:00pm').map(button => {
                i++;
                return  <Link key={i}
                                to={`/restaurants/${restaurant.id}`}
                                className='search-time-button'>
                            { button }
                        </Link>
            })
            j += 2;
            return <div className="restaurant-search-container">
                <Link key={j}
                        to={`/restaurants/${restaurant.id}`}>
                    <img src={restaurant.photoUrl} className="search-page-img"/>
                </Link>
                <div className="restaurant-search-inner-container">
                    <Link key={j+1}
                            to={`/restaurants/${restaurant.id}`}>
                        <p className="search-title">{restaurant.name} - {restaurant.city}</p>
                    </Link>
                    <div className="search-button-container">
                        {buttons}
                    </div>
                </div>
            </div>
        })
        // debugger

        return (
            <div className="search-page-outer-container">
                <header className="search-page-header">
                    <SearchContainer />
                </header>
                <div className="search-page-inner-container">
                    <div className="search-title-container">
                        <p className="search-title-upper">    
                            You searched for "{info.keyWord ? info.keyWord : info.searchTerm}" in New York / Tri-State Area
                        </p>
                        <p className="search-title-lower">
                            {restaurants.length} restaurants available in New Jersey - North
                        </p>
                    </div>
                    {restaurants}
                </div>
            </div>
        )
    }
}

export default SearchPage;