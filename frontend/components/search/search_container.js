import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './search';
import { fetchRestaurants, searchRestaurants } from '../../actions/restaurant_actions';
import { sendForm, clearForm } from '../../actions/search_actions';

const mSTP = (state) => {
    return {
        // restaurants: Object.values(state.session.search)
        restaurants: Object.values(state.session.search.searchInfo),
        trieTrees: state.session.search.trieTrees
    }
}

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    sendForm: (form) => dispatch(sendForm(form))
})

export default withRouter(connect(mSTP, mDTP)(Search))