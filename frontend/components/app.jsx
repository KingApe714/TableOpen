import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_containter'
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal_container'


const App = () => (
    <div>
        <header>
            <Link to='/'>
                <h1>Let's head back to that young root page baby</h1>
            </Link>
            <GreetingContainer />
            <Modal />
        </header>
        <Switch>
            {/* <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        </Switch>
    </div>
);

export default App;