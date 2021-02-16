import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    headerMessage: 'Welcome to TableOpen!',
    buttonMessage: 'Create Account'
    //navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: <label>Already have an account? &nbsp;
                  <Link to='login' 
                        onClick={() => dispatch(openModal('login'))}
                        className="create-account"
                        >
                    Sign in
                  </Link>
  </label>,
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
