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

  render() {
    let userErrors = null;
    if (this.props.formType === 'Sign In') {
      userErrors = <p className="error-list">
        {this.props.errors}
      </p>
    }
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
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>{this.props.headerMessage}</p>
          <div className="login-form">
            {usernameField}
            <br/>
            <p className="error-list">{this.handleErrors('Email')}</p>
            {userErrors}
            <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
            <p className="error-list">{this.handleErrors('Password')}</p>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <br/>
            <input className="session-submit" type="submit" value={this.props.buttonMessage} />
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
