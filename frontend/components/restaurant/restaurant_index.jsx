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
                            <p className="rest-detail">{restaurant.name}</p>
                        </div>
                        <div>
                            <p className="rest-detail">{restaurant.city}</p>
                        </div>
                    </div>
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