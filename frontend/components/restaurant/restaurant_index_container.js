import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mSTP = (state) => ({
        restaurants: Object.values(state.entities.restaurants)
})

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSTP, mDTP)(RestaurantIndex)