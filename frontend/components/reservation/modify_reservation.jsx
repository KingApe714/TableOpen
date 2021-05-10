import React from 'react';
import { Link } from 'react-router-dom';
import { renderTime, timeInterval, handleTime } from '../../util/util_functions'

class ModifyReservation extends React.Component {
    constructor(props) {
        super(props)

        let dt = new Date()
        let m = dt.getMonth() + 1 >= 10  ? 
                dt.getMonth() + 1 :
                `0${dt.getMonth()+1}`
        let d = `${dt.getFullYear()}-${m}-${dt.getDate()}`
        this.state = {
            restaurant: null,
            reservation: null,
            guest_count: 0,
            date: d,
            time: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        window.userShow = false;
    }

    componentDidMount() {
        let reservation, restaurant;
        if (this.props.location.state) {
            reservation = this.props.location.state.reservation;
            restaurant = this.props.location.state.restaurant
        } else {
            reservation = JSON.parse(localStorage.getItem('reservation'))
            restaurant = JSON.parse(localStorage.getItem('restaurant'))
            // this.setState({
                //     restaurant: JSON.parse(localStorage.getItem('restaurant')),
                //     reservation: reservation,
                //     guest_count: reservation.guest_count,
                //     date: reservation.reservation_date_time.split('T')[0]
                // })
        }
        this.setState({
            restaurant: restaurant,
            reservation: reservation,
            guest_count: reservation.guest_count,
            date: reservation.reservation_date_time.split('T')[0],
        })
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const guest_count = this.state.guest_count;
        const date = this.state.date;
        const time = this.state.time;
        const obj = {
            guest_count,
            date,
            time
        }

        let reservation = handleTime(
            this.state.reservation.guest_id,
            this.state.restaurant.id,
            obj
        )

        reservation.id = this.state.reservation.id

        this.props.updateReservation(reservation)
            .then(this.props.history.push({
                pathname: `/reservations/${this.state.reservation.id}/view`,
                state: {
                    reservation: reservation,
                    restaurant: this.state.restaurant
                }
            }))
    }

    render() {
        let options = null;
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

        if (restaurant.operation_hours) {
            options = timeInterval(restaurant.operation_hours)
        }
        let [date, time] = reservation.reservation_date_time.split('T');
        let d = new Date(reservation.reservation_date_time).toDateString()
        time = renderTime(time)
        debugger

        return (
            <div className="edit-resi-container">
                <div className="edit-resi-inner-container">
                    <div className="edit-resi-title">
                        Your current reservation
                    </div>
                    <div className="edit-resi-detail-container">
                        <Link 
                            id="restaurant-link"
                            to={`/restaurants/${reservation.restaurant_id}`}>   
                            <img src={restaurant.photoUrl} 
                                alt="Restaurant Image"
                                className="resi-edit-rest-image" />
                        </Link>
                        <div className="edit-resi-detail">
                            <div className="edit-resi-rest-name">
                                {restaurant.name}
                            </div>
                            <div className="edit-resi-info">
                                <div className="edit-resi-content">{d}</div>
                                <div className="edit-resi-content">{time}</div>
                                <div className="edit-resi-content">
                                    {reservation.guest_count}
                                    &nbsp;
                                    {reservation.guest_count === 1 ? <>person</> : <>people</>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-resi-form-container">
                        <div className="edit-resi-form-title">Modify your reservation</div>
                        <form onSubmit={this.handleSubmit}
                                className="edit-resi-form">
                            <div className="edit-resi-div">
                                <input type="date"
                                        value={this.state.date}
                                        onChange={this.handleChange('date')}
                                        className="edit-resi-dropdown"/>
                                <select value={this.state.time}
                                        onChange={this.handleChange('time')}
                                        className="edit-resi-dropdown">
                                    {options}
                                </select>
                                <select value={this.state.guest_count} 
                                        onChange={this.handleChange('guest_count')}
                                        className="edit-resi-dropdown">
                                    <option value="1">1 person</option>
                                    <option value="2">2 people</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5">5 people</option>
                                    <option value="6">6 people</option>
                                    <option value="7">7 people</option>
                                    <option value="8">8 people</option>
                                </select>
                            </div>
                            <button className="edit-res-submit">Find a new table</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifyReservation