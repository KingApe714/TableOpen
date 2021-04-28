import React from 'react';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container';
import SearchContainer from '../search/search_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="splash">
                    <div className="splash-inner">
                        <div className="splash-title">
                            Find your table for any occasion
                        </div>
                        <SearchContainer />
                    </div>
                </div>
                <RestaurantIndexContainer/>
            </div>
        )
    }
}

export default Splash;