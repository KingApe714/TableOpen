import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchReservations, deleteReservations } from '../../actions/reservation_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reservations: Object.values(state.entities.reservations),
})

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
})

export default connect(mSTP, mDTP)(UserShow)