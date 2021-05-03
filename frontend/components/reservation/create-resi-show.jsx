import React from 'react';

class CreateResiShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        let dropdownArr = [
            'something',
            'something else',
            'banana',
            'this is just a test',
            'Muhammed Ali',
            'Verga',
            'Glang'
        ].filter(word => {
            return word.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        }).map(word => {
            return  <div className='test-list-item'>
                        {word}
                    </div>
        })
        return (
            <div className="test-container">
                <div className="test-dropdown">
                    <input type="text" 
                            className="test-text-box"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}/>
                    <div className="test-dropdown-list">
                        {dropdownArr}
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateResiShow