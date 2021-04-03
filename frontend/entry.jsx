import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                id: window.currentUser.id
            }
        }
    }
    const root = document.getElementById('root')
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root)
})