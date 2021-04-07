import React from 'react';

class CreateReservation extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            guest_count: 0,
            reservation_date_time: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        // debugger
        console.log(this.props.restaurant)
        let reservation = Object.assign({}, this.state)
        reservation.restaurant_id = this.props.restaurant.id;
        reservation.guest_id = this.props.currentUser.id;
        console.log(reservation)
        this.props.createReservation(reservation)
            .then((res) => {
                // this.props.history.push(`/${}`)
            })
    }

    handleChange(type) {
        console.log(`${type} selected`)
        // console.log(this)
        return e => {
            // console.log(e.target.value)
            this.setState({ [type]: e.target.value })
        }
    }

    time_interval(hours_of_op) {
        // console.log(hours_of_op)
        if (hours_of_op) {
            let [start, end] = hours_of_op.split(' - ');
            let [startHour, startMinute] = start.split(':');
            let [endHour, endMinute] = end.split(':');
            if (startMinute[2] === 'p') startHour = (parseInt(startHour) + 12).toString();
            if (endMinute[2] === 'p') endHour = (parseInt(endHour) + 12).toString();
            console.log(startHour)
            console.log(startMinute)
            console.log(endHour)
            console.log(endMinute)
            let times = [];
            for (let i = parseInt(startHour); i <= parseInt(endHour); i++) {
                
            }
        }
    }

    render() {
        this.time_interval(this.props.restaurant.operation_hours)
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
                            <select value={this.state.guest_count} onChange={this.handleChange('guest_count')}>
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
                            {/* <select name="" id="">
                                <option value="" selected>Today</option>
                            </select> */}
                            <input type="date" 
                                    value={this.state.reservation_date_time}
                                    // onChange={this.handleChange('reservation_date_time')}
                                    />
                        </div>
                        <div className="resi-detail">
                            <p>Time</p>
                            {/* <select name="" id="">
                                <option value=""></option>
                            </select> */}
                            <input type="time"/>
                        </div>
                    </div>
                    <button className="res-submit">Find a table</button>
                </form>
                {/* {times} */}
                <br/>
                {this.props.restaurant.operation_hours}
            </div>
        )
    }
}

export default CreateReservation