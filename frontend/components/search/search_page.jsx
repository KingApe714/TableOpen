import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.location.state.keyWord) {
            this.props.searchRestaurants(this.props.location.state.keyWord)
        } else {
            this.props.searchRestaurants(this.props.location.state.searchTerm)
        }
    }

    render() {
        // const restaurants = this.props.location.state.restaurants
        // debugger
        console.log(this.props.restaurants)
        return (
            <div>
                Halaba!!
            </div>
        )
    }
}

export default SearchPage;