import React, { PropTypes } from 'react';


export default class ButtonContainer extends React.Component{

  constructor(props) {
    super(props);
    this.cancelClick = this.cancelClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);

  };

  cancelClick(event) {
    console.log("cancel");
  };

  deleteClick(event) {
    console.log("delete");
  };

  render() {
      return (
        <div>
          <button className="btn btn" onClick={this.cancelClick}>Cancel</button>
          <button className="btn btn-danger" onClick={this.deleteClick}>Delete Component</button>
        </div>
      )
  };
}
