import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        const restaurants = this.props.restaurants.map(restaurant => (
            <Link 
                key={restaurant.id}
                id="restaurant-link"
                to={`/restaurants/${restaurant.id}`}>
                    <div className="restaurant-card">
                        <img src={restaurant.photoUrl} className="restaurant-image"></img>
                        <div>
                            <p className="rest-title">{restaurant.name}</p>
                        </div>
                        <div>
                            <p className="rest-city">{restaurant.city}</p>
                        </div>
                    </div>
            </Link>
        ))

        return (
            <div>
                <div className="res-header">
                    <h2>Restaurants Nearby</h2>
                </div>
                <div className="res-icon-cont">
                    {restaurants.slice(0, 5)}   
                </div>
                <div className="res-header">
                    <h2>Most Popular</h2>
                </div>
                <div className="res-icon-cont">
                    {restaurants.reverse().slice(0, 5)}
                </div>
                <div className="res-header">
                    <h2>Top Rated</h2>
                </div>
                <div className="res-icon-cont">
                    {restaurants.slice(3, 6).concat(restaurants.reverse().slice(3, 5))}
                </div>
            </div>
        )
    }
}

export default RestaurantIndex