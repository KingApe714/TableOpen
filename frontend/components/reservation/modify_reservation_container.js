import { connect } from 'react-redux';
import { fetchReservations, updateReservation } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import ModifyReservation from './modify_reservation';

const mSTP = (state, ownProps) => {
    // debugger
    return{
    // reservation: state.entities.reservations
}}
//[ownProps.match.params.reservationId]
const mDTP = (dispatch) => ({
    updateReservation: reservation => dispatch(updateReservation(reservation)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReservations: () => dispatch(fetchReservations())
})

export default connect(mSTP, mDTP)(ModifyReservation);