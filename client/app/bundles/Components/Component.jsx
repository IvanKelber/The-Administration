import React, { PropTypes } from 'react';
import TagBox from './Tag';

const buttonStyle = {
  marginRight: 5 +'px'
}


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
        <td className="tag-container">
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
      <div className="component-box">
        <header>
            <div className="component-header">
              <h2>{this.props.component.name}</h2>
              <h3>{this.props.component.category}</h3>
              <span className="edit-button glyphicon glyphicon-pencil"></span>
            </div>
        </header>
        <div className="tag-container">
          {this.props.component.tags.map(function(tag) {
                   return <TagBox key={tag.id} tag={tag}/>
                 })}
        </div>
        <div>
          <h5>For {this.props.component.min_teams} to {this.props.component.max_teams} teams</h5>
        </div>
        <div className="scrolling-description">
          <p>{this.props.component.description}</p>
        </div>
        <div className="button-container">
          <button className="btn btn">Cancel</button>
          <button className="btn btn-danger">Delete Component</button>
        </div>
      </div>

      // <div>
      //   <table className="table table-bordered">
      //     <thead>
      //       <tr>
      //         <th>Name</th>
      //         <th>Category</th>
      //         <th>Description</th>
      //         <th>Teams</th>
      //         <th>Tags</th>
      //         <th>Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>{this.props.component.name}</td>
      //         <td>{this.props.component.category}</td>
      //         <td>{this.props.component.description}</td>
      //           <td>{this.props.component.min_teams} - {this.props.component.max_teams}</td>
      //           <td>
      //             {this.props.component.tags.map(function(tag) {
      //               return <TagBox key={tag.id} tag={tag}/>
      //             })}
      //           </td>
      //
      //         <td>
      //           <button style={buttonStyle} className="btn btn-info">Edit</button>
      //           <button className="btn btn-danger">Delete</button>
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
    )
  }

}
