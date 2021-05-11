import { connect } from 'react-redux';
import CancelConfirm from './cancel_confirm';

const mSTP = (state) => {
    window.userShow = true;
    return {
        currentUser: state.session.currentUser
    }
}

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(CancelConfirm);