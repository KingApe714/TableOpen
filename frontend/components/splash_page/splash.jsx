import React from 'react';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="splash">
                    Find your table for any occasion
                </div>
                <RestaurantIndexContainer/>
            </div>
        )
    }
}

export default Splash;