import React, { PropTypes } from 'react';
import TagBox from './Tag';
import ButtonContainer from './ButtonContainer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6


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
    this.state = {
      edit_mode: false
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
  };

  toggleEditMode() {
    this.setState({edit_mode: !this.state.edit_mode});
  };

  render() {
    var edit_icon_class = "edit-button glyphicon glyphicon-pencil"
    if(this.state.edit_mode) {
      edit_icon_class = "edit-clicked glyphicon glyphicon-ok"
    }
    return (
      <div className="component-box">
        <header>
            <div className="component-header">
              <h2>{this.props.component.name}</h2>
              <h3>{this.props.component.category}</h3>
              <span className={edit_icon_class} onClick={this.toggleEditMode}></span>
            </div>
        </header>
        <div className="tag-container">
          {this.props.component.tags.map(function(tag) {
                   console.log(tag)
                   return <TagBox key={tag.id} tag={tag}/>
                 })}
        </div>
        <div>
          <h5>For {this.props.component.min_teams} to {this.props.component.max_teams} teams</h5>
        </div>
        <div className="scrolling-description">
          <p>{this.props.component.description}</p>
        </div>
        <ReactCSSTransitionGroup
          transitionName="button-transition"
          transitionAppear={this.state.edit_mode}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={400}>
            {this.state.edit_mode && <ButtonContainer/>}
        </ReactCSSTransitionGroup>
      </div>

    )
  }

}
