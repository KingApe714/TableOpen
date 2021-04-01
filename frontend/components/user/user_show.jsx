import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations()
    }

    render() {
        this.props.reservations.map(reservation => {
            
        })
        return (
            <div>
                
            </div>
        )
    }
}

export default UserShow