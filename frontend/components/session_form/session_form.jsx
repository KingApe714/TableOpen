import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleErrors(errType) {
    //maybe make this return lis that will be rendered in the relevant UL
    //for now just send it to the relevant input field
    return this.props.errors.filter(error => error.includes(errType))
  }

  loginDemo(e) {
    e.preventDefault()
    this.props.loginDemo({
      email: "test123",
      password: "123456"
    }).then(this.props.closeModal)
  }

  render() {
    let usernameField = null;
    if (this.props.formType === 'signup') {
        usernameField = ( <>
                            <p className="error-list">{this.handleErrors('Username')}</p>
                            <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder="Username"
                            />
                          </>
                      )
    }
    let demoUser = null;
    if (this.props.formType === 'Sign In') {
      demoUser = <input 
                    onClick={this.loginDemo} 
                    className="demo-submit" 
                    type="submit" 
                    value="Login Demo User" 
                  />
    }
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.headerMessage}
          <div className="login-form">
            {usernameField}
            <p className="error-list">{this.props.formType === 'Sign In' ? this.props.errors : this.handleErrors('Email')}</p>
            <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <p className="error-list">{this.handleErrors('Password')}</p>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <input className="session-submit" type="submit" value={this.props.buttonMessage} />
            {demoUser}
          </div>
        <br/>
        {this.props.otherForm}
        <br/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
