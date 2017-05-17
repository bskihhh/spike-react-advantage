import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';

class AppComponent extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    }
    this.handleLogin = this.handleLogin.bind (this)
    this.handleInputChange = this.handleInputChange.bind (this)
  }

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
        <h1>REACT JHIPSTER SPIKE</h1>
        </div>
        <form onSubmit={this.handlelogin}>
          <label>Username
          <br/>
          <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>

          <br/>
          <label>Password
          <br/>
          <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
          </label>

          <br/>
          <label>Remember Me?
          <input name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange={this.handleInputChange}/>
          </label>

        </form>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }

  handleLogin () {
    let {actions} = this.props
    actions.login (this.state)
  }

  handleInputChange (event) {
    const name = event.target.name,
          value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState ({[name]: value})
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
