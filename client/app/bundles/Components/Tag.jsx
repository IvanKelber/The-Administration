import React, { PropTypes } from 'react';


export default class TagBox extends React.Component{

  constructor(props) {
    super(props);

  };


  render() {
      return (
        <div className="ReactTags__tags">
          {this.props.tag.word}
        </div>
      )
  };
}
