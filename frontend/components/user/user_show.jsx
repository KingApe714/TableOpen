import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        let today = new Date()
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let year = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let date = month + "/" + day + "/" + year;

        console.log(today)
        this.state = {
            today: today,
            currentDateTime: date,
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute
          }
    }

    componentDidMount() {
        this.props.fetchReservations()
        this.props.fetchRestaurants()
    }

    render() {
        // console.log(this.state.year)

        const restaurants = this.props.restaurants;
        if (Object.keys(restaurants).length === 0) return null
        const reservations = this.props.reservations.map(reservation => {
            let arr = reservation.reservation_date_time.split("T")
            let date = arr[0];
            let time = arr[1]
            let year, month, day, hour, minute, second;
            [year, month, day] = date.split('-');
            [hour, minute, second] = time.split(':');
            //we do month -1 because js computes months from 0 - 11
            let resiDateTime = new Date(year, month - 1, day, hour, minute);
            let currentDateTime = new Date()
            let pastResi = true;
            let resiTime = null;
            if (resiDateTime.getTime() - currentDateTime.getTime() >= 0) {
                pastResi = false;
                let suffix = "AM";
                if (hour >= 12) {
                    suffix = "PM";
                    hour -= 12;
                }
                resiTime = hour + ":" + minute + " " + suffix;
            }
            // debugger
            return [pastResi, <div className="reservation-container"
                        key={reservation.id}>
                        <Link 
                            key={reservation.restaurant_id}
                            id="restaurant-link"
                            to={`/restaurants/${reservation.restaurant_id}`}>
                            <img src={restaurants[reservation.restaurant_id].photoUrl} className="res-rest-image"></img>
                        </Link>
                        <div className="res-detail-container">
                            <div>
                                {restaurants[reservation.restaurant_id].name}
                                <br/>
                                {month}/{day}/{year} {resiTime ? <>at {resiTime}.</> : null}
                            </div>
                            <p className="table-status">
                                Table for {reservation.guest_count} {reservation.guest_count === 1 ? <>person</> : <>people</>}
                            </p>
                            {pastResi === false ?
                                <div>
                                    <Link
                                        key={reservation.id}
                                        id="reservation-link"
                                        to={`/reservations/${reservation.id}/view`}>
                                        View
                                    </Link>
                                    <Link
                                        key={reservation.id}
                                        id="reservation-link"
                                        to={`/reservations/${reservation.id}/view`}>
                                        Modify
                                    </Link>
                                    <Link
                                        key={reservation.id}
                                        id="reservation-link"
                                        to={`/reservations/${reservation.id}/delete`}>
                                        Cancel
                                    </Link>
                                </div>
                                : null}
                        </div>
                    </div>]
        })
        // debugger

        const past = reservations.filter(res => res[0] === true);
        const upcoming = reservations.filter(res => res[0] === false);
        // console.log(upcoming)
        return (
            <div className="user-show-container">
                <div className="username">
                    {this.props.currentUser.username}
                </div>
                <div className="past-reservations">
                    {/* <p>{ this.state.currentDateTime }</p>
                    <p>{ this.state.today.getTime() }</p> */}
                    <p className="past-resi-title">
                        Upcoming Reservations
                    </p>
                    {upcoming}
                </div>
                <div className="past-reservations">
                    <p className="past-resi-title">
                        Past Reservations
                    </p>
                    {past}
                    {/* {reservations} */}
                </div>
            </div>
        )
    }
}

export default UserShow