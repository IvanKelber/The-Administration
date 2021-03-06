import React, { PropTypes } from 'react';

export default class SignupForm extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <form action={this.props.url} method='post'>
        {this.props.url != "/users" &&
           <input name="_method" type="hidden" value="patch"/>
         }

        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />

        <div className="form-group">
          <label htmlFor="session_name">Name</label>
          <input type="text" className="form-control"
            id='session_name' name="user[name]"></input>
        </div>

        <div className="form-group">
          <label htmlFor="session_email">Email</label>
          <input type="text" className="form-control"
            id='session_email' name="user[email]"></input>
        </div>
        <div className="form-group">
          <label htmlFor="session_password">Password</label>
          <input type="password" className="form-control"
             id='session_password'name="user[password]"></input>
        </div>
        <div className="form-group">
          <label htmlFor="session_password_confirmation">Confirmation</label>
          <input type="password" className="form-control"
            id='session_password_confirmation'name="user[password_confirmation]"></input>
        </div>
        <input type="submit" name="commit" value={this.props.button_text}
          className="btn btn-primary" data-disable-with={this.props.button_text} />
      </form>
    )
  }
}
