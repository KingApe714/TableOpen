import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { logout } from '../../actions/session_actions';
import RestaurantShow from './restaurant_show';

const mSTP = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(RestaurantShow)