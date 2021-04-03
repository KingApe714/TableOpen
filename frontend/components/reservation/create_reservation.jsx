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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Party Size</p>
                        <select onChange={this.handleChange('party-size')}
                            defaultValue={}>
                        </select>
                    </div>
                    <div>
                        <div>
                            Date
                        </div>
                        <div>
                            Time
                        </div>
                    </div>
                    <button >Find a table</button>
                </form>
            </div>
        )
    }
}

export default CreateReservation