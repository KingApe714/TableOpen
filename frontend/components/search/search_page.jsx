import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null
        }
    }

    componentDidMount() {
        // if (this.props.location.state.keyWord) {
        //     this.props.searchRestaurants(this.props.location.state.keyWord)
        // } else {
        //     this.props.searchRestaurants(this.props.location.state.searchTerm)
        // }

        // if (this.props.location.state) {
            
        // } else {
        //     this.setState({
        //         info: JSON.parse(localStorage.getItem('info'))
        //     })
        // }

        // if (this.state.info) {
        //     if (this.state.info.keyWord) {
        //         this.props.searchRestaurants(this.state.info.keyWord)
        //     } else {
        //         this.props.searchRestaurants(this.state.info.searchTerm)
        //     }
        // }
    }

    render() {
        console.log(this.state)
        let info
        // debugger
        // if (this.props.location.state) {
        //     info = this.props.location.state;
        //     localStorage.setItem('info', JSON.stringify(info));
        //     this.setState({
        //         info: info
        //     })
        // } else {
        //     info = JSON.parse(localStorage.getItem('info'));
        //     this.setState({
        //         info: info
        //     })
        // }
        return (
            <div>
                Halaba!!
            </div>
        )
    }
}

export default SearchPage;