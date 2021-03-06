import { connect } from 'react-redux';
import { updateReservation } from '../../actions/reservation_actions';
import ViewReservation from './view_reservation';

const mSTP = (state) => {
    window.userShow = true;
    return {
        
    }
}

const mDTP = (dispatch) => ({
    updateReservation: reservation => dispatch(updateReservation(reservation))
})

export default connect(mSTP, mDTP)(ViewReservation);