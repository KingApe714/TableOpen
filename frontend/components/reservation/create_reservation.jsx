import React from 'react';

class CreateReservation extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div className="rest-reservation">
                <div className="reservation-title">
                    Make a reservation
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Party Size
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