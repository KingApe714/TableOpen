import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions'

const mSTP = (state, ownProps) => {
    return{
        currentUser: Object.values(state.session)[0],
        reservations: Object.values(state.entities.reservations),
        restaurants: state.entities.restaurants,
        fetchRestaurant: restaurantId => state.entities.restaurants[restaurantId]
    }
}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSTP, mDTP)(UserShow)