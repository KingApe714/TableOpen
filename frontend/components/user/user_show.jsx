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
            <Link 
                key={reservation.id}
                id="reservation-link"
                to={`/restaurants/${reservation.restaurant_id}`}>
                    <div>
                        {restaurants[reservation.restaurant_id].name}
                        {reservation.reservation_date_time}
                        <div>
                            {reservation.guest_count}
                        </div>
                        <img src={restaurants[reservation.restaurant_id].photoUrl}></img>
                    </div>
            </Link>
        ))
        return (
            <div>
                {reservations}
            </div>
        )
    }
}

export default UserShow