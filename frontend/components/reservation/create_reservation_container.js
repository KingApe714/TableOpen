import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import CreateReservation from './create_reservation';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    createReservation: reservation => dispatch(createReservation(reservation))
})

export default connect(mSTP, mDTP)(CreateReservation)