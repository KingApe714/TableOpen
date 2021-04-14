import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createReservation } from '../../actions/reservation_actions';
import CreateReservation from './create_reservation';

const mSTP = (state) => ({
    currentUser: Object.values(state.session)[0]
})

const mDTP = (dispatch) => ({
    createReservation: reservation => dispatch(createReservation(reservation))
})

export default withRouter(connect(mSTP, mDTP)(CreateReservation))