import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null
        }
    }

    componentDidMount() {
        
        if (this.props.location.state) {
            this.setState({
                info: this.props.location.state
            })
        } else {
            this.setState({
                info: JSON.parse(localStorage.getItem('info'))
            })
        }

        let info = JSON.parse(localStorage.getItem('info'))
        if (info.keyWord) {
            this.props.searchRestaurants(info.keyWord)
        } else {
            this.props.searchRestaurants(info.querryArray)
        }
    }

    render() {
        let info
        if (this.props.location.state) {
            info = this.props.location.state;
            localStorage.setItem('info', JSON.stringify(info));
        } else {
            info = JSON.parse(localStorage.getItem('info'));
        }

        // debugger

        return (
            <div>
                Halaba!!
            </div>
        )
    }
}

export default SearchPage;