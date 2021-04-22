import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.searchRestaurants('Clifton')
    }

    render() {
        return (
            <div>
                Something BABY BOY
            </div>
        )
    }
}

export default Search