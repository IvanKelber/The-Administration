import React, { PropTypes } from 'react';

export default class ErrorBox extends React.Component {

  render() {
    var length = this.props.errors.responseJSON.length
    return(
      <div id="error_explanation">
        <div className="alert alert-danger">
          The form contains {length} error{length > 1? 's':''}.
        </div>
        <ul>
            {this.props.errors.responseJSON.map(function(message) {
              return <li key={message}>{message}</li>
            })
            }
        </ul>
      </div>
    );
  };
}
