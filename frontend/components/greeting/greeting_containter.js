import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { dateBuilder } from '../../util/util_functions';
import Greeting from './greeting';

const mapStateToProps = ({ session, session: { search: { searchInfo } } }) => {

  let upcomingResis = session.currentUser.reservations.sort((a, b) => {
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
    currentUser: session.currentUser,
    upcomingResis: upcomingResis,
    userShow: window.userShow,
    restaurants: Object.values(searchInfo)
  };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);