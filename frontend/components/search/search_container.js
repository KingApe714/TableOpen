import { connect } from 'react-redux';
import Search from './search';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { sendForm, clearForm } from '../../actions/search_actions';

const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => ({
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    sendForm: (form) => dispatch(sendForm(form))
})

export default connect(mSTP, mDTP)(Search)