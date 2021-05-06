import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';
import SearchPage from './search_page';

const mSTP = (state, ownProps) => {
    debugger
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = (dispatch) => ({
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword))
})

export default connect(mSTP, mDTP)(SearchPage)