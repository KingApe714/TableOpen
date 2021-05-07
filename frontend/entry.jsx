import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import Root from './components/root'
import { fetchRestaurants } from './util/restaurant_util'
import TrieTree from './util/util_functions'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};
    let obj = new Object();
    console.log(localStorage)
    if (localStorage.searchInfo) {
        obj = JSON.parse(localStorage.getItem('searchInfo'))
        preloadedState = {
            session: {
                search: {
                    searchInfo: obj,
                },
                currentUser: window.currentUser ? window.currentUser : null
            }
        }
        console.log('search info is in localStorage')
        const store = configureStore(preloadedState);
        const root = document.getElementById('root')
        ReactDOM.render(<Root store={store}/>, root)
    } else {
        fetchRestaurants().done(function(data) { 
            for (let i in data) {
                obj[i] = { name: data[i].name, city: data[i].city }
            }
    
            localStorage.setItem('searchInfo', JSON.stringify(obj))
    
            preloadedState = {
                session: {
                    search: {
                        searchInfo: obj,
                    },
                    currentUser: window.currentUser ? window.currentUser : null
                }
            }
            // if (window.currentUser) {
            //     preloadedState.session.currentUser = window.currentUser
            // }
            console.log('no info in localStorage')
            const store = configureStore(preloadedState);
            const root = document.getElementById('root')
            ReactDOM.render(<Root store={store}/>, root)
        })
    }
})