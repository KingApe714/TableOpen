import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render() {
        if (!this.props.restaurant) return null;
        return (
            <div>
                <img src={this.props.restaurant.photoUrls} className="rest-background"></img>
                <div className="rest-show">
                    <p className="show-title">{this.props.restaurant.name}</p>
                </div>
            </div>
        )
    }
}

export default RestaurantShow