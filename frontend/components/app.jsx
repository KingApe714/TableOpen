import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_containter'
import Modal from './modal/modal_container'
import NotFoundPage from './not_found.jsx'
import SplashContainer from './splash_page/splash_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import UserShowContainer from './user/user_show_container'
import CreateResiShowContainer from './reservation/create-resi-show-container';
import ViewReservationContainer from './reservation/view_reservation_container';
import DeleteReservationContainer from './reservation/delete_reservation_container';
import ModifyReservationContainer from './reservation/modify_reservation_container';
import CancelConfirmContainer from './reservation/cancel_confirm_container';
import SearchPageContainer from './search/search_page_container'
import Footer from './footer/footer'

const App = () => (
    <div className="app">
        <header className="header-container">
            <Link to='/' className="header-logo-container">
                <img src={window.logoURL} className="header-logo"/>
                TableOpen
            </Link>
            <GreetingContainer />
            <Modal />
        </header>
        <Route exact path="/" component={SplashContainer}/>
        <Route exact path="/search/:searchTerm" component={SearchPageContainer}/>
        <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
        <ProtectedRoute exact path="/restaurants/:restaurantId/reserve" component={CreateResiShowContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
        <ProtectedRoute exact path="/reservations/:reservationId/view" component={ViewReservationContainer} />
        <ProtectedRoute exact path="/reservations/:reservationId/modify" component={ModifyReservationContainer} />
        <ProtectedRoute exact path="/reservations/:reservationId/delete" component={DeleteReservationContainer} />
        <ProtectedRoute exact path="/restaurants/:restaurantId/cancel-confirm" component={CancelConfirmContainer} />
        <footer className="footer-container">
            <Footer />
        </footer>
    </div>
);

export default App;