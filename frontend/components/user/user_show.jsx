import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations()
    }

    render() {
        const restaurants = this.props.restaurants;
        const reservations = this.props.reservations.map(reservation => (
            <div className="reservation-container">
                <Link 
                    key={reservation.id}
                    id="reservation-link"
                    to={`/restaurants/${reservation.restaurant_id}`}>
                        <img src={restaurants[reservation.restaurant_id].photoUrl} className="res-rest-image"></img>
                </Link>
                <div className="res-detail-container">
                    <div>
                        {restaurants[reservation.restaurant_id].name}
                        <br/>
                        {reservation.reservation_date_time}
                    </div>
                    <p className="table-status">
                        Table for {reservation.guest_count} {reservation.guest_count === 1 ? <>person</> : <>people</>}
                    </p>
                </div>
            </div>
        ))
        return (
            <div className="past-reservations">
                {reservations}
            </div>
        )
    }
}

export default UserShow