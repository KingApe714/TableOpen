import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import { logout } from '../../actions/session_actions';
import { dateBuilder } from '../../util/util_functions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  debugger
  let resis;
  if (window.newResi) {
    resis = state.entities.reservations
  } else {
    resis = state.session.currentUser.reservations
  }
  
  let upcomingResis = resis.sort((a, b) => {
    let da = a.reservation_date_time,
        db = b.reservation_date_time;
    if (da < db) {
      return -1
    } else if (da > db) {
      return 1
    } else {
      return 0
    }
  }).filter(reservation => {
    let resiDateTime = dateBuilder(reservation)
    let currentDateTime = new Date()
    return resiDateTime.getTime() - currentDateTime.getTime() >= 0
  })

  return {
    currentUser: state.session.currentUser,
    upcomingResis: upcomingResis,
    userShow: window.userShow,
    restaurants: Object.values(state.session.search.searchInfo)
  };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchReservations: () => dispatch(fetchReservations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);