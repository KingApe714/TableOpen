import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import Root from './components/root'
import { fetchRestaurants } from './util/restaurant_util'
import TrieTree from './util/util_functions'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};
    let obj = new Object();
    fetchRestaurants().done(function(data) { 
        let names = [];
        let cities = [];
        for (let i in data) {
            obj[i] = { name: data[i].name, city: data[i].city }
            names.push(data[i].name);
            cities.includes(data[i].city) ? null : cities.push(data[i].city);
        }
        const trieNames = new TrieTree(names)
        const trieCities = new TrieTree(cities)
        preloadedState = {
            session: {
                search: {
                    searchInfo: obj,
                    trieTrees: {
                        names: trieNames,
                        cities: trieCities,
                    }
                },
                currentUser: null
            }
        }
        
        if (window.currentUser) {
            preloadedState.session.currentUser = window.currentUser
        }
        
        const store = configureStore(preloadedState);
        const root = document.getElementById('root')
        ReactDOM.render(<Root store={store}/>, root)
    })
})