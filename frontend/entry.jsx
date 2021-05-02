import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import Root from './components/root'
import { fetchRestaurants } from './util/restaurant_util'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                [window.currentUser.id]: window.currentUser
            }
        }
    }
    
    let obj = new Object();
    
    fetchRestaurants().done(function(data) { 
        for (let i in data) {
            obj[i] = { name: data[i].name, city: data[i].city }
        }
    })
    preloadedState.session.searchInfo = obj

    const root = document.getElementById('root')
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root)
})


window.searchInfo = obj;