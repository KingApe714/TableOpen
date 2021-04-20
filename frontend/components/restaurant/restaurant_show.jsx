import React from 'react';
import CreateReservationContainer from '../reservation/create_reservation_container'

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        // this.props.fetchMenu(this.props.match.params.restaurantId);
    }

    render() {
        let photo0, photo1, photo2
        if (this.props.restaurant.photoUrls) {
            photo0 = this.props.restaurant.photoUrls[0] ? 
                <img className="menu-image" 
                    src={this.props.restaurant.photoUrls[0]}/> : null;
            photo1 = this.props.restaurant.photoUrls[1] ?
                <img className="menu-image" 
                    src={this.props.restaurant.photoUrls[1]}/> : null;
            photo2 = this.props.restaurant.photoUrls[2] ?
                <img className="menu-image" 
                    src={this.props.restaurant.photoUrls[2]}/> : null;;
        } else {
            return null
        }
        let menu_key = 0;
        const menu_items = this.props.restaurant.menu.menu_items.map(menu_item => {
            menu_key++;
            return <div key={menu_key} className="menu-items">
                {menu_item}
            </div>
        })
        
        let drink_container = null;
        if (this.props.restaurant.menu.drink_items.length !== 0) {
            let drink_key = 0;
            const drink_items = this.props.restaurant.menu.drink_items.map(drink_item => {
                drink_key++;
                return <div key={drink_key} className="menu-items">
                    {drink_item}
                </div>
            })
            drink_container = <div className="rest-menu-items-container">
                                <p className="items-title">Drink Menu</p>
                                {drink_items}
                            </div>
        }
        return (
            <div>
                <img src={this.props.restaurant.photoUrl} className="rest-background"></img>
                <div className="rest-show">
                    <p className="show-title">{this.props.restaurant.name}</p>
                    <div className="rest-rate-review">
                        Reviews | Price Range | Cuisine Type
                    </div>
                    <CreateReservationContainer 
                    restaurant={this.props.restaurant}/>
                    <div className="rest-delivery-takeout">
                        <div className="del-tak-title">
                            Order delivery or takeout 
                        </div>
                        <div className="del-tak-details">
                            Takeout<br/>
                            {this.props.restaurant.phone_number}
                        </div>
                    </div>
                    <div className="description">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-details">
                        <p className="det-title">Neighborhood</p>
                        <p className="det-detail">{this.props.restaurant.city}</p>
                        <p className="det-title">Hours of Operation</p>
                        <p className="det-detail">{this.props.restaurant.operation_hours}</p>
                        <p className="det-title">Phone Number</p>
                        <p className="det-detail">{this.props.restaurant.phone_number}</p>
                        {this.props.restaurant.executive_chef !== "N/A" ?
                        <>
                            <p className="det-title">Executive Chef</p>
                            <p className="det-detail">{this.props.restaurant.executive_chef}</p> 
                        </> : null }
                    </div>
                    <div className="rest-image-outer-container">
                        <p className="rest-show-titles">
                            {this.props.restaurant.photoUrls.length} Photos
                        </p>
                        <div className="menu-images-container">
                            {photo0}
                            {photo1}
                            {photo2}
                        </div>
                    </div>
                    <div className="rest-menu-outer-container">
                        <p className="rest-show-titles">
                            Menu
                        </p>
                        <div className="rest-menu-inner-container">
                            <div className="rest-menu-items-container">
                                <p className="items-title">Dinner Menu</p>
                                {menu_items}
                            </div>
                            {drink_container}
                        </div>
                    </div>
                    <p className="rest-show-titles">
                        Reviews
                    </p>
                </div>
            </div>
        )
    }
}

export default RestaurantShow