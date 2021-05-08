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
        let restaurant = restaurants[reservation.restaurant_id];
        upcomingResis.push(<div key={resiDateTime.getTime()}>
                            <div>{restaurant.name} - {restaurant.city}</div>
                            <div>
                              <div>Table for {reservation.guest_count} people</div>
                              <div>
                                {resiDateTime.toLocaleString('default', { month: 'long'})}
                                {day}, {year} {renderTime(time)}
                              </div>
                            </div>
                          </div>)
      } 
    })
    return  <div className="personal-greeting">
              <div>
                <img src={window.rescal} className="calendar-icon"/>
                <div>
                  {upcomingResis}
                </div>
              </div>
              <div className="user-dropdown">
                {userShow ? <div>Hi, {currentUser.username.split(' ')[0]}</div> : 
                <img src={window.profileIcon} className="user-icon"/> }
                <ul className="dropdown-list arrow">
                  <li className="dropdown-greeting">Hello, {currentUser.username}!</li>
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