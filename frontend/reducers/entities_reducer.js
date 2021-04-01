import { combineReducers } from 'redux';

import users from './users_reducer.js'
import restaurants from './restaurants_reducer'
import reservations from './reservations_reducer'

export default combineReducers({
    users,
    restaurants,
    reservations
});