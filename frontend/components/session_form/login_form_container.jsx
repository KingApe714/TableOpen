import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign In',
    headerMessage: 'Please sign in',
    buttonMessage: 'Sign In'
    //navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <label>New to TableOpen? &nbsp;
        <Link to='signup' 
              onClick={() => dispatch(openModal('signup'))}
              className="create-account"
              >
          Create an account
        </Link>
      </label>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
