import React from 'react';
import { timeInterval, handleTime } from '../../util/util_functions'

class CreateReservation extends React.Component {
    constructor(props) {
        super(props)

        let dt = new Date()
        let m = dt.getMonth() + 1 >= 10  ? 
                dt.getMonth() + 1 :
                `0${dt.getMonth()+1}`
        let d = `${dt.getFullYear()}-${m}-${dt.getDate()}`

        this.state = {
            guest_count: 1,
            date: d,
            time: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        window.userShow = false;
    }

    handleSubmit(e) {
        e.preventDefault()
        let reservation = handleTime(
            this.props.currentUser.id,
            this.props.restaurant.id,
            this.state
        )
        const restaurant = this.props.restaurant
        this.props.createReservation(reservation)
        .then((res) => {
            this.props.history.push({
                pathname: `/reservations/${res.reservation.id}/view`,
                state: {
                    reservation: res.reservation,
                    restaurant: restaurant
                }
            })
        })
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    componentDidMount() {
        let createInfo;
        if (this.props.location.state || localStorage.createInfo) {
            if (this.props.location.state) {
                createInfo = this.props.location.state;
            } else {
                createInfo = JSON.parse(localStorage.getItem('createInfo'));
            }
            this.setState({
                guest_count: createInfo.guest_count,
                date: createInfo.date,
                time: createInfo.time
            })
        }
    }

    componentWillUnmount() {

    }

    render() {
        debugger
        let options = null;
        if (this.props.restaurant.operation_hours) {
            options = timeInterval(this.props.restaurant.operation_hours)
        }
        return (
            <div className="rest-reservation">
                <div className="reservation-title">
                    Make a reservation
                </div>
                <form onSubmit={this.handleSubmit}
                        className="resi-form">
                    <div className="resi-info">
                        <div className="resi-detail">
                            <p>Party Size</p>
                            <select value={this.state.guest_count} 
                                    onChange={this.handleChange('guest_count')}
                                    className="resi-dropdown"
                                    required>
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
                        <div className="resi-detail">
                            <p>Date</p>
                            <input type="date" 
                                    value={this.state.date}
                                    onChange={this.handleChange('date')}
                                    className="resi-dropdown"
                                    />
                        </div>
                        <div className="resi-detail">
                            <p>Time</p>
                            <select value={this.state.time}
                                    onChange={this.handleChange('time')}
                                    className="resi-dropdown">
                                {options}
                            </select>
                        </div>
                    </div>
                    <button className="res-submit">Find a table</button>
                </form>
            </div>
        )
    }
}

export default CreateReservation