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
        if (this.props.location.state) {
            this.setState({
                info: this.props.location.state
            })
        } else {
            this.setState({
                info: JSON.parse(localStorage.getItem('info'))
            })
        }
        // debugger
        let info = JSON.parse(localStorage.getItem('info'))
        if (info.keyWord) {
            this.props.searchRestaurants(info.keyWord)
        } else {
            this.props.searchRestaurants(info.querryArray)
        }
    }

    render() {
        let info
        if (this.props.location.state) {
            info = this.props.location.state;
            localStorage.setItem('info', JSON.stringify(info));
        } else {
            info = JSON.parse(localStorage.getItem('info'));
        }

        if (!this.props.restaurants.length) return null;

        let i = 0;
        let j = 100;
        const restaurants = this.props.restaurants.map(restaurant => {
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
                            {this.props.restaurants.length} restaurants available in New Jersey - North
                        </p>
                    </div>
                    {restaurants}
                </div>
            </div>
        )
    }
}

export default SearchPage;