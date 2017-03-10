import React, { PropTypes } from 'react';
import TagBox from './Tag';

export class ComponentRow extends React.Component{

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    this.props.handleClick(this.props.component);
    // console.log(event);
  }

  componentRow() {
    return(
      <tr className="component-row" onClick={this.handleClick}>
        <td>{this.props.component.name}</td>
        <td>{this.props.component.category}</td>
        <td>{this.props.component.min_teams} - {this.props.component.max_teams}</td>
        <td>
          {this.props.component.tags.map(function(tag) {
            return <TagBox key={tag.id} tag={tag}/>
          })}
        </td>
      </tr>
    );
  };


  render() {
      return this.componentRow();
  };
};

export class ComponentBox extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Teams</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chug</td>
              <td>categories and stuff</td>
              <td>beer and stuff</td>
              <td>teams and stuff</td>
              <td>tags and stuff</td>

              <td><button className="btn btn-small">Edit</button> <button className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}
