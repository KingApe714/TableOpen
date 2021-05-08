import { connect } from 'react-redux';
import CreateResiShow from './create-resi-show';

const mSTP = (state) => {
    window.userShow = true;
    return {
        
    }
}

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(CreateResiShow)