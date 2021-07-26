import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { dateBuilder, renderTime } from '../../util/util_functions'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (window.newResi) {
      // debugger
      this.props.fetchReservations()
      window.newResi = false;
    }
  }

  componentDidMount() {
    if (window.newResi) {
      // debugger
      this.props.fetchReservations()
      // window.newResi = false;
    }
  }

  render() {
    console.log(window.newResi)
    // if (window.newResi) {
    //   debugger
    //   this.props.fetchReservations()
    //   window.newResi = false;
    // }
    const currentUser = this.props.currentUser;
    const upcomingResis = this.props.upcomingResis;
    const userShow = this.props.userShow;
    const restaurants = this.props.restaurants;
    const logout = this.props.logout;
    const openModal = this.props.openModal;
    const sessionLinks = () => (
      <nav className="login-signup">
        <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
        &nbsp;
        <button className="signin-button" onClick={() => openModal('login')}>Sign In</button>
      </nav>
    );
    const personalGreeting = () => {
      // debugger
      const upcoming = upcomingResis.map(reservation => {
        const restaurant = restaurants[reservation.restaurant_id - 1];
        const resi = dateBuilder(reservation);
        const time = `${resi.getHours()}:${resi.getMinutes()}:${resi.getSeconds()}`;
        return <div className="resi-list-item" 
                    key={resi.getTime()}>
                  <Link to={`/restaurants/${restaurant.id}`}
                        className="rest-dropdown-link">
                    {restaurant.name} - {restaurant.city}
                  </Link>
                  <div className="list-item-container">
                    <div className="list-item-details">Table for {reservation.guest_count} people</div>
                    <div className="list-item-details">
                      {resi.toLocaleString('default', { month: 'long'})}
                      &nbsp;{resi.getDate()}, {resi.getFullYear()} {renderTime(time)}
                    </div>
                    <div className="resi-dropdown-links">
                      <Link to={{
                          pathname: `/reservations/${reservation.id}/view`,
                          state: {
                              reservation: reservation,
                              restaurant: restaurant
                          }
                          }}>View</Link>
                      <Link to={{
                          pathname: `/reservations/${reservation.id}/modify`,
                          state: {
                              reservation: reservation,
                              restaurant: restaurant
                          }
                          }}>Modify</Link>
                      <Link to={{
                          pathname: `/reservations/${reservation.id}/delete`,
                          state: {
                              reservation: reservation,
                              restaurant: restaurant
                          }
                          }}>Cancel</Link>
                      </div>
                  </div>
                </div>
      })
      return  <div className="personal-greeting">
                <div className="user-dropdown">
                  <img src={window.rescal} className="calendar-icon"/>
                  <div className="dropdown-list">
                    <div className="resi-dropdown-greeting">UPCOMING</div>
                    {upcoming.length === 0 ? <>No Upcoming Reservations</> :
                    <>
                      {upcoming}
                      <Link to={`/users/${currentUser.id}`}
                            className="resi-dropdown-footer">
                        View All
                      </Link>
                    </>}
                  </div>
                </div>
                <div className="user-dropdown">
                  {userShow ? <div className="greeting-user-icon">Hi, {currentUser.username.split(' ')[0]}</div> : 
                  <img src={window.profileIcon} className="user-icon"/> }
                  <ul className="dropdown-list arrow">
                    <li className="dropdown-greeting">{userShow ? <>Dining Points coming soon!</> : <>Hello, {currentUser.username}!</>}</li>
                    <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Profile</Link></li>
                    <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Dining History</Link></li>
                    <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Saved Restaurants</Link></li>
                    <li className="dropdown-signout" onClick={logout}><Link to={`/`}>Sign Out</Link></li>
                  </ul>
                </div>
              </div>
    };

    return currentUser ? personalGreeting() : sessionLinks();
  }
}
// const Greeting = ({ currentUser, upcomingResis, userShow, restaurants, logout, openModal }) => {

// };


export default Greeting;