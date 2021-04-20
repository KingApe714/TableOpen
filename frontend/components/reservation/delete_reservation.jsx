import React from 'react';
import { Link } from 'react-router-dom';
import { renderTime } from '../../util/util_functions'

class DeleteReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: null,
            reservation: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                restaurant: this.props.location.state.restaurant,
                reservation: this.props.location.state.reservation
            })
        } else {
            this.setState({
                restaurant: JSON.parse(localStorage.getItem('restaurant')),
                reservation: JSON.parse(localStorage.getItem('reservation'))
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        // debugger
        this.props.deleteReservation(this.state.reservation.id)
            .then(this.props.history.push({
                pathname: `/restaurants/${this.state.restaurant.id}/cancel-confirm`,
                state: {
                    restaurant: this.state.restaurant
                }
            }))
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
        console.log(restaurant)
        console.log(reservation)
        return (
            <div className="delete-resi-container">
                <div className="delete-resi-title">
                    Cancel Your Reservation
                </div>
                <div className="delete-resi-outer-container">
                    <div className="delete-resi-inner-container">
                        <Link
                            id="restaurant-link"
                            to={`/restaurants/${reservation.restaurant_id}`}>
                            <img src={restaurant.photoUrl}
                                alt="Restaurant Image"
                                className="resi-delete-rest-image"/>
                        </Link>
                        <div className="delete-resi-content">
                            <div className="delete-resi-info">
                                <p>GUESTS</p>
                                <p className="delete-resi-detail">
                                    {reservation.guest_count}
                                    &nbsp;
                                    {reservation.guest_count === 1 ? <>person</> : <>people</>}
                                </p>
                            </div>
                            <div className="delete-resi-info">
                                <p>DATE</p>
                                <p className="delete-resi-detail">{d}</p>
                            </div>
                            <div className="delete-resi-info">
                                <p>TIME</p>
                                <p className="delete-resi-detail">{time}</p>
                            </div>
                            <div className="delete-resi-info">
                                <p>RESTAURANT</p>
                                <Link
                                    id="restaurant-link"
                                    to={`/restaurants/${reservation.restaurant_id}`}>
                                    <p className="delete-resi-name">{restaurant.name}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}
                            className="delete-resi-form">
                        <button className="delete-resi-submit">Cancel Reservation</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DeleteReservation