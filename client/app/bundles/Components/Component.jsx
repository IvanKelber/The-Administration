import React, { PropTypes } from 'react';
import TagBox from './Tag';

export default class ComponentRow extends React.Component{

  constructor() {
    super();
    this.state = {
      edit: false,
    }
  };

  componentRow() {
    console.log(this.props.component)
    return(
      <tr>
        <td>{this.props.component.name}</td>
        <td>{this.props.component.category}</td>
        <td>{this.props.component.min_teams} - {this.props.component.max_teams}</td>
        <td>{this.props.component.description}</td>
        <td className="tag_box">
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
}
