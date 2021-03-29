import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr
    }

    render() {
        let restaurants = this.props.restaurants.map(restaurant => (
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
        restaurants = this.shuffleArray(restaurants);
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