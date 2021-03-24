import { combineReducers } from 'redux';

import users from './users_reducer.js'
import restaurants from './restaurants_reducer'

export default combineReducers({
    users,
    restaurants,
});