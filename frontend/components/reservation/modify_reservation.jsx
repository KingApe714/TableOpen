import React from 'react';
import { renderTime, timeInterval, handleTime } from '../../util/util_functions'

class ModifyReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: null,
            reservation: null,
            guest_count: 0,
            date: 0,
            time: 0
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

    handleChange(type) {
        console.log(`${type} selected`)
        console.log(this.state)
        return e => {
            console.log(e.target.value)
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
    }

    render() {
        let options = null;

        console.log(`through state: ${this.state.restaurant}`)
        console.log(`through location: ${this.props.location.state.restaurant}`)
        let restaurant = this.props.location.state.restaurant
        let reservation = this.props.location.state.reservation
        if (restaurant.operation_hours) {
            options = timeInterval(restaurant.operation_hours)
        }
        let [date, time] = reservation.reservation_date_time.split('T');
        let d = new Date(reservation.reservation_date_time).toDateString()
        time = renderTime(time)
        let test = renderTime(reservation.reservation_date_time)
        return (
            <div className="edit-resi-container">
                <div className="edit-resi-title">
                    Your current reservation
                </div>
                <div className="edit-resi-detail-container">
                    {/* <div className="edit-resi-image"> */}
                        <img src={restaurant.photoUrl} 
                            alt="Restaurant Image"
                            className="resi-edit-rest-image" />
                    {/* </div> */}
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
                <div>
                    <div>Modify your reservation</div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="date"
                                    value={this.state.date}
                                    onChange={this.handleChange('date')}
                                    className="resi-dropdown"/>
                            <select value={this.state.time}
                                    onChange={this.handleChange('time')}
                                    className="resi-dropdown">
                                {options}
                            </select>
                            <select value={this.state.guest_count} 
                                    onChange={this.handleChange('guest_count')}
                                    className="resi-dropdown">
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
                        <button className="res-submit">Find a new table</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ModifyReservation