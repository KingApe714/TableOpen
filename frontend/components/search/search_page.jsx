import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

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
        debugger
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

        const restaurants = this.props.restaurants.map(restaurant => {
            return <div className="restaurant-search-container">
                <Link key={restaurant.id}
                        to={`/restaurants/${restaurant.id}`}>
                    <img src={restaurant.photoUrl} className="search-page-img"/>
                </Link>
                <div className="restaurant-search-inner-container">
                    <Link key={restaurant.id * -1}
                            to={`/restaurants/${restaurant.id}`}>
                        <p className="search-title">{restaurant.name} - {restaurant.city}</p>
                    </Link>
                    <div className="">
                        {/* each one of these will be a button with the time on it 
                        <Link key={restaurant.id}
                                to={`/restaurants/${restaurant.id}`}>
                            
                        </Link>
                        <Link key={restaurant.id}
                                to={`/restaurants/${restaurant.id}`}>
                            
                        </Link>
                        <Link key={restaurant.id}
                                to={`/restaurants/${restaurant.id}`}>
                            
                        </Link>
                        <Link key={restaurant.id}
                                to={`/restaurants/${restaurant.id}`}>
                            
                        </Link>
                        <Link key={restaurant.id}
                                to={`/restaurants/${restaurant.id}`}>
                            
                        </Link> */}
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
                            You searched for "{info.searchTerm}" in New York / Tri-State Area
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