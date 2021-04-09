import React from 'react';

class ModifyReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: null,
            reservation: null
        }
    }

    componentDidMount() {
        // debugger
        // this.props.fetchRestaurants();
        // this.props.fetchReservations()
        // debugger
        if (this.props.location.state) {
            this.setState({
                restaurant: this.props.location.state.restaurant,
                reservation: this.props.location.state.reservation
            })
        }
        // console.log(this.state)
    }

    render() {
        // let restaurant;
        // if (this.state.restaurant) restaurant = this.state.restaurant;
        console.log(`through state: ${this.state.restaurant}`)
        console.log(`through location: ${this.props.location.state.restaurant}`)
        let restaurant = this.props.location.state.restaurant
        let reservation = this.props.location.state.reservation
        let [date, time] = reservation.reservation_date_time.split('T');
        return (
            <div className="edit-resi-container">
                <div className="edit-resi-title">
                    Your current reservation
                </div>
                <div className="edit-resi-detail-container">
                    <div className="edit-resi-image">
                        <img src={restaurant.photoUrl} 
                            alt="Restaurant Image"
                            className="resi-edit-rest-image" />
                    </div>
                    <div className="edit-resi-detail">
                        <div className="edit-resi-rest-name">
                            {restaurant.name}
                        </div>
                        <div className="edit-resi-info">
                            <div>{date}</div>
                            <div>{time}</div>
                            <div>{reservation.guest_count}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifyReservation