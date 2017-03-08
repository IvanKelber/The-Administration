import React, { PropTypes } from 'react';


export default class TagBox extends React.Component{

  constructor(props) {
    super(props);

  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
      return (
        <span className="component_tag">
          {this.capitalizeFirstLetter(this.props.tag.word)}
        </span>
      )
  };
}
