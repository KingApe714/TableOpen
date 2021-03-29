import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_containter'
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal_container'
import NotFoundPage from './not_found.jsx'
import SplashContainer from './splash_page/splash_container';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container'

const App = () => (
    <div>
        <header className="header-container">
            <Link to='/' className="header-logo-container">
                <img src={window.logoURL} className="header-logo"/>
                TableOpen
            </Link>
            <GreetingContainer />
            <Modal />
        </header>
        <Route exact path="/" component={SplashContainer}/>
        <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
    </div>
);

export default App;