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
                        </div>
                        <div className="resi-detail">
                            <p>Date</p>
                        </div>
                        <div className="resi-detail">
                            <p>Time</p>
                        </div>
                    </div>
                    <button className="res-submit">Find a table</button>
                </form>
            </div>
        )
    }
}

export default CreateReservation