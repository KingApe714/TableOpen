import { RECEIVE_MENU } from '../actions/menu_actions';

const menusReducer =(state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_MENU:
            newState[action.menu.id] = action.menu
            return newState[action.menu.id]
        default: 
            return state
    }
}

export default menusReducer