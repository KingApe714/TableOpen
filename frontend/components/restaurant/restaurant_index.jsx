import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
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
                        <p>{restaurant.description}</p>
                        <p>{restaurant.operation_hours}</p>
                    </div>
            </Link>
        ))
    }
}