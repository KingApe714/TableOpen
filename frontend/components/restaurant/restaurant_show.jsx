import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(this.props.match.params.restaurantId)
        // debugger
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        console.log(this.props.restaurant)
    }

    render() {
        return (
            <div>
                {/* {this.props.restaurant} */}
            </div>
        )
    }
}

export default RestaurantShow