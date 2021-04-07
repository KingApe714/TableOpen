import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    debugger
    if (window.currentUser) {
        preloadedState = {
            session: {
                [window.currentUser.id]: window.currentUser
            }
        }
    }
    const root = document.getElementById('root')
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root)
})