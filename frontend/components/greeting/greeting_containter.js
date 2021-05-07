import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

// .then(() => this.props.history.push('/'))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);