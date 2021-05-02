import React from 'react';
import { Link } from 'react-router-dom';

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

        let info = JSON.parse(localStorage.getItem('info'))
        if (info.keyWord) {
            this.props.searchRestaurants(info.keyWord)
        } else {
            debugger
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
            return <div>
                <Link key={restaurant.id}
                        id="restaurant-link"
                        to={`/restaurants/${restaurant.id}`}>
                    <img src={restaurant.photoUrl} alt=""/>
                </Link>
                <div>
                    <Link key={restaurant.id}
                            to={`/restaurants/${restaurant.id}`}>
                        <p>{restaurant.name} - {restaurant.city}</p>
                    </Link>
                    <div>
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
                            
                        </Link>
                    </div>
                </div>
            </div>
        })
        // debugger

        return (
            <div>
                {restaurants}
            </div>
        )
    }
}

export default SearchPage;