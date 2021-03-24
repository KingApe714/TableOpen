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
                    <div>
                        {restaurant.name}
                    </div>
                    <div>
                        <p>{restaurant.phone_number}</p>
                        <p>{restaurant.executive_chef}</p>
                        <p>{restaurant.city}</p>
                        <p>{restaurant.description} Description HERE!!</p>
                        <p>{restaurant.operation_hours}</p>
                    </div>
                    <img src={restaurant.photoUrl}></img>
            </Link>
        ))

        return (
            <div>
                {/* {this.props.restaurants} */}
                {restaurants}
                Absolutely anything!!
            </div>
        )
    }
}

export default RestaurantIndex