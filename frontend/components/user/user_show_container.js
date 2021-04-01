import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reservations: Object.values(state.entities.reservations),
    restaurants: state.entities.restaurants
})

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
})

export default connect(mSTP, mDTP)(UserShow)