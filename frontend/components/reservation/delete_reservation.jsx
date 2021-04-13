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
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        // debugger
        this.props.deleteReservation(this.state.reservation.id)
    }

    render() {
        let restaurant = this.props.location.state.restaurant;
        let reservation = this.props.location.state.reservation;
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
                            <div>
                                <p>GUESTS</p>
                                <p>
                                    {reservation.guest_count}
                                    &nbsp;
                                    {reservation.guest_count === 1 ? <>person</> : <>people</>}
                                </p>
                            </div>
                            <div>
                                <p>DATE</p>
                                <p>{d}</p>
                            </div>
                            <div>
                                <p>TIME</p>
                                <p>{time}</p>
                            </div>
                            <div>
                                <p>RESTAURANT</p>
                                <p>{restaurant.name}</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <button>Cancel Reservation</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DeleteReservation