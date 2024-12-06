import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  renderUsernameEnter = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          className="input-username"
          onChange={this.onUsernameEnter}
        />
      </>
    )
  }

  renderPasswordEnter = () => {
    const {password} = this.state
    return (
      <>
        <label className="password" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          className="input-password"
          onChange={this.onEnterPassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-main-bg-container">
        <div className="mobile-view-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
        </div>
        <form className="from-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />
          <div className="user-name-container">
            {this.renderUsernameEnter()}
          </div>
          <div className="password-container">{this.renderPasswordEnter()}</div>
          <button type="submit" className="Login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm

// <div className="user-name-container"></div>
//         <div className="password-container"></div>
