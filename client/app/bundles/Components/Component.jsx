import React, { PropTypes } from 'react';


export default class ComponentRow extends React.Component{

  constructor() {
    super();
    this.state = {
      edit: false,
    }
  };

  componentRow() {
    return(
      <tr>
        <td>{this.props.component.name}</td>
        <td>{this.props.component.category}</td>
        <td>{this.props.component.min_teams} - {this.props.component.max_teams}</td>
        <td>{this.props.component.description}</td>
      </tr>
    );
  };

  render() {
      return this.componentRow();
  };
}
