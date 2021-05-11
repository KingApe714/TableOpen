import React from 'react';
import { Link } from 'react-router-dom';
import { dateBuilder, renderTime } from '../../util/util_functions'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations()
        this.props.fetchRestaurants()
    }

    componentWillUnmount() {
        window.userShow = false;
    }

    render() {
        const restaurants = this.props.restaurants;
        if (!restaurants || Object.keys(restaurants).length < 25) return null
        if (this.props.reservations.length === 0) return null
        const reservations = this.props.reservations.map(reservation => {
            let restaurant = restaurants[reservation.restaurant_id]
            let resi = dateBuilder(reservation)
            let currentDateTime = new Date()
            let pastResi = true;
            let resiTime = null;
            if (resi.getTime() - currentDateTime.getTime() >= 0) {
                pastResi = false;
                resiTime = renderTime(`${resi.getHours()}:${resi.getMinutes()}:${resi.getSeconds()}`);
            }

            return [pastResi, <div className="reservation-container"
                                    key={reservation.reservation_date_time}>
                        <Link 
                            id="restaurant-link"
                            to={`/restaurants/${reservation.restaurant_id}`}>
                            <img src={restaurant.photoUrl} className="res-rest-image"></img>
                        </Link>
                        <div className="res-detail-container">
                            <div>
                                {restaurant.name}
                                <br/>
                                {resi.getMonth()}/{resi.getDate()}/{resi.getFullYear()} {resiTime ? <>at {resiTime}.</> : null}
                            </div>
                            <p className="table-status">
                                Table for {reservation.guest_count} {reservation.guest_count === 1 ? <>person</> : <>people</>}
                            </p>
                            {pastResi === false ?
                                <div className="resi-links">
                                    <Link to={{
                                        pathname: `/reservations/${reservation.id}/view`,
                                        state: {
                                            reservation: reservation,
                                            restaurant: restaurant
                                        }
                                        }}>View</Link>
                                    <Link to={{
                                        pathname: `/reservations/${reservation.id}/modify`,
                                        state: {
                                            reservation: reservation,
                                            restaurant: restaurant
                                        }
                                        }}>Modify</Link>
                                    <Link to={{
                                        pathname: `/reservations/${reservation.id}/delete`,
                                        state: {
                                            reservation: reservation,
                                            restaurant: restaurant
                                        }
                                        }}>Cancel</Link>
                                </div>
                                : null}
                        </div>
                    </div>]
        })

        const past = reservations.filter(res => res[0] === true);
        const upcoming = reservations.filter(res => res[0] === false);
        return (
            <div className="user-show-container">
                <div className="username">
                    {this.props.currentUser.username}
                </div>
                <div className="past-reservations">
                    <p className="past-resi-title">
                        Upcoming Reservations
                    </p>
                    {upcoming}
                </div>
                <div className="past-reservations">
                    <p className="past-resi-title">
                        Past Reservations
                    </p>
                    {past}
                </div>
            </div>
        )
    }
}

export default UserShow