import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { renderTime } from '../../util/util_functions'

const Greeting = ({ currentUser, userShow, restaurants, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
      &nbsp;
      <button className="signin-button" onClick={() => openModal('login')}>Sign In</button>
    </nav>
  );
  const personalGreeting = () => {
    // console.log(currentUser.reservations)
    const upcomingResis = [];
    currentUser.reservations.forEach(reservation => {
      let arr = reservation.reservation_date_time.split("T")
      let date = arr[0];
      let time = arr[1]
      let year, month, day, hour, minute, second;
      [year, month, day] = date.split('-');
      [hour, minute, second] = time.split(':');
      //we do month -1 because js computes months from 0 - 11
      let resiDateTime = new Date(year, month - 1, day, hour, minute);
      let currentDateTime = new Date()
      if (resiDateTime.getTime() - currentDateTime.getTime() >= 0) {
        let restaurant = restaurants[reservation.restaurant_id - 1];
        upcomingResis.push(<div className="resi-list-item" 
                                key={resiDateTime.getTime()}>
                            <Link to={`restaurants/${restaurant.id}`}
                                  className="rest-dropdown-link">
                              {restaurant.name} - {restaurant.city}
                            </Link>
                            <div className="list-item-container">
                              <div className="list-item-details">Table for {reservation.guest_count} people</div>
                              <div className="list-item-details">
                                {resiDateTime.toLocaleString('default', { month: 'long'})}
                                &nbsp;{day}, {year} {renderTime(time)}
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
                          </div>)
      } 
    })
    return  <div className="personal-greeting">
              <div className="user-dropdown">
                <img src={window.rescal} className="calendar-icon"/>
                <div className="dropdown-list">
                  <div className="resi-dropdown-greeting">UPCOMING</div>
                  {upcomingResis.length === 0 ? <>No Upcoming Reservations</> :
                  <>
                    {upcomingResis}
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
};


export default Greeting;