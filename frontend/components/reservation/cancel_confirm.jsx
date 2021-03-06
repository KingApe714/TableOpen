import React from 'react';
import SearchContainer from '../search/search_container';

class CancelConfirm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        window.userShow = false;
    }

    render() {
        let restaurant

        if (this.props.location.state) {
            restaurant = this.props.location.state.restaurant
            localStorage.setItem('restaurant', JSON.stringify(restaurant))
        } else {
            restaurant = JSON.parse(localStorage.getItem('restaurant'))
        }
        return (
            <div className="cancel-resi-container">
                <p className="cancel-resi-message">
                    {this.props.currentUser.username}, your reservation has been canceled
                </p>
                <p className="cancel-resi-support">
                    You can still get great food, and support {restaurant.name}.
                </p>
                <div className="cancel-takeout-container">
                    <p className="cancel-takeout-title">
                        Order takeout
                    </p>
                    <p className="cancel-takeout-order">
                        Call {restaurant.phone_number} to place your order.
                    </p>
                </div>
                <div className="new-resi-container">
                    <p className="new-resi-title">Make a new reservation</p>
                    <SearchContainer container="cancel-confirm"/>
                </div>
            </div>
        )
    }
}

export default CancelConfirm