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
        // debugger
        return (
            <div>
                <img src={this.props.restaurant.photoUrls} className="rest-background"></img>
                <div className="rest-show">
                    <p className="show-title">{this.props.restaurant.name}</p>
                    <div className="rest-rate-review">
                        Reviews | Price Range | Cuisine Type
                    </div>
                    <div className="rest-reservation">
                        <div className="reservation-title">
                            Make a reservation
                        </div>
                        <div className="reservation-details">
                            Party size<br/>
                            Date | Time
                        </div>
                    </div>
                    <div className="rest-delivery-takeout">
                        <div className="del-tak-title">
                            Order delivery or takeout 
                        </div>
                        <div className="del-tak-details">
                            Takeout<br/>
                            {this.props.restaurant.phone_number}
                        </div>
                    </div>
                    <div className="description">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-details">
                        {this.props.restaurant.city} <br/>
                        {this.props.restaurant.operation_hours} <br/>
                        {this.props.restaurant.phone_number} <br/>
                    </div>
                    <div className="rest-menu">
                        Menu
                    </div>
                    <div className="rest-reviews">
                        Reviews
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow