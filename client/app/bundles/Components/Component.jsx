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
        <td>{this.props.component.description}</td>
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
        <h1>COMPONENT BOX</h1>
      </div>
    )
  }

}
