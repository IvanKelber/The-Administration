import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';



export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">

          <form action="/login" method="post">
            <input name="utf8" type="hidden" value="&#x2713;" />
            <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />

            <div className="form-group">
              <label htmlFor="session_email">Email</label>
              <input type="text" className="form-control"
                placeholder='Email' id='session_email'
                name="session[email]"></input>
            </div>
            <div className="form-group">
              <label htmlFor="session_password">Password</label>
              <a tabIndex="10" href="password_resets/new"> (forgot password?)</a>
              <input type="password" className="form-control"
                placeholder='Password' id='session_password'
                name="session[password]"></input>
            </div>
            <label className="checkbox inline" htmlFor="session_remember_me">
              <input name="session[remember_me]" type="hidden" value="0" /><input type="checkbox" value="1" name="session[remember_me]" id="session_remember_me" />
              <span>Remember me on this computer</span>
            </label>

            <input type="submit" name="commit" value="Log in" className="btn btn-primary" data-disable-with="Log in" />
          </form>
          <p>New User? <a href="/signup">Sign up now!</a></p>
        </div>
      </div>

    )
  }
}

// ReactOnRails.register({
//   LoginForm,
// });
