import React from 'react';

class CreateReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guest_count: 0,
            reservation_date_time: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.CreateReservation(this.state)
            .then((res) => {
                // this.props.history.push(`/${}`)
            })
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
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
                            <select name="" id="">
                                <option value="none" selected disabled hidden></option>
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
                            <select name="" id="">
                                <option value="" selected>Today</option>
                            </select>
                        </div>
                        <div className="resi-detail">
                            <p>Time</p>
                            <select name="" id="">
                                <option value=""></option>
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