import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservation_actions';
import DeleteReservation from './delete_reservation';

const mSTP = (state) => {
    window.userShow = true;
    return {
        
    }
}

const mDTP = (dispatch) => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
})

export default connect(mSTP, mDTP)(DeleteReservation)