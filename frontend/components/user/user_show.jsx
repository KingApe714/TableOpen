import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations()
        this.props.fetchRestaurants()
    }

    render() {
        // debugger
        const restaurants = this.props.restaurants;
        // if (!restaurants.length || !this.props.reservations.length) {
        //     return null;
        // }
        const reservations = this.props.reservations.map(reservation => {
            let arr = reservation.reservation_date_time.split("T")
            let date = arr[0];
            let time = arr[1];
            date = date.split('-').reverse().join('/')
            return <div className="reservation-container"
                        key={reservation.id}>
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
                        {date}
                    </div>
                    <p className="table-status">
                        Table for {reservation.guest_count} {reservation.guest_count === 1 ? <>person</> : <>people</>}
                    </p>
                </div>
            </div>
        })
        return (
            <div className="user-show-container">
                <div className="username">
                    {this.props.currentUser.username}
                </div>
                <div>
                    <p>
                        Upcoming Reservations
                    </p>
                </div>
                <div className="past-reservations">
                    <p className="past-resi-title">
                        Past Reservations
                    </p>
                    {reservations}
                </div>
            </div>
        )
    }
}

export default UserShow