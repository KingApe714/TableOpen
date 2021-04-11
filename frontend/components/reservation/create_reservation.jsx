import React from 'react';
import { timeInterval, handleTime } from '../../util/util_functions'

class CreateReservation extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            guest_count: 0,
            date: 0,
            time: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let reservation = handleTime(
            this.props.currentUser.id,
            this.props.restaurant.id,
            this.state
        )
        console.log(reservation)
        this.props.createReservation(reservation)
            .then((res) => {
                // this.props.history.push(`/${}`)
            })
    }

    handleChange(type) {
        console.log(`${type} selected`)
        console.log(this.state)
        return e => {
            console.log(e.target.value)
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
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