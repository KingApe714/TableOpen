import React from 'react';
import { Link } from 'react-router-dom';
import { renderTime } from '../../util/util_functions'

class ViewReservation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        window.userShow = false;
    }

    render() {
        let restaurant, reservation

        if (this.props.location.state) {
            restaurant = this.props.location.state.restaurant
            localStorage.setItem('restaurant', JSON.stringify(restaurant))

            reservation = this.props.location.state.reservation
            localStorage.setItem('reservation', JSON.stringify(reservation))
        } else {
            restaurant = JSON.parse(localStorage.getItem('restaurant'))

            reservation = JSON.parse(localStorage.getItem('reservation'))
        }
        let [date, time] = reservation.reservation_date_time.split('T');
        let d = new Date(reservation.reservation_date_time).toDateString()
        time = renderTime(time)
        return (
            <div className="view-reservation-container">
                <div className="view-res-title">
                    Thanks! Your reservation is confirmed.
                </div>
                <div className="view-resi-detail-container">
                    <Link
                        id="restaurant-link"
                        to={`/restaurants/${reservation.restaurant_id}`}>
                        <img src={restaurant.photoUrl}
                            alt="Restaurant Image"
                            className="resi-view-rest-image"/>
                    </Link>
                    <div className="view-resi-detail">
                        <p className="reservation-rest-title">{restaurant.name}</p>
                        <p>{d}, {time}</p>
                        <p>
                            {reservation.guest_count}
                            &nbsp;
                            {reservation.guest_count === 1 ? <>person</> : <>people</>}
                        </p>
                        <div className="view-resi-links">
                        <Link to={{
                                pathname: `/reservations/${reservation.id}/modify`,
                                state: {
                                    reservation: reservation,
                                    restaurant: restaurant
                                }
                            }}
                            className="view-resi-link">Modify</Link>
                        <Link to={{
                                pathname: `/reservations/${reservation.id}/delete`,
                                state: {
                                    reservation: reservation,
                                    restaurant: restaurant
                                }
                            }}
                            className="view-resi-link">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewReservation