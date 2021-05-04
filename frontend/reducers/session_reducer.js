import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
  } from '../actions/session_actions';
  
  const _nullUser = Object.freeze({
    id: null
  });
  
  const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        newState.currentUser = action.currentUser
        // { [action.currentUser.id]: action.currentUser }
        return newState
      case LOGOUT_CURRENT_USER:
        newState.currentUser = null
        return newState;
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  