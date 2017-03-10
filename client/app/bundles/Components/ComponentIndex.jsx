import React, { PropTypes } from 'react';
import ComponentForm from './ComponentForm';
import {ComponentRow,ComponentBox}  from "./Component";
import Modal from "react-overlays/lib/Modal";


const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0,
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50
  let left = 50

  return {
    position: 'absolute',
    width: 'auto',
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};

export default class ComponentIndex extends React.Component {
  // static defaultProps = {components:[]};

  constructor(props,_railsContext) {
    super(props)
    var suggestions = [];
    this.props.suggestions.forEach(function(suggestion) {
        suggestions.push(suggestion.word);
    });

    var components = this.props.data;
    console.log(this.props.tags.length);
    for(let [index,value] of this.props.tags.entries()) {
      components[index]["tags"] = value;
    }

    this.state = {
      suggestions: suggestions,
      components: this.props.data,
      tags: this.props.tags,
      create_mode: false,
      modal_open: false,
      current_component: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.addComponent = this.addComponent.bind(this);
    this.deleteComponent = this.deleteComponent.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  };


  handleClick() {
    // event.preventDefault();
    // console.log(this)
    // console.log(event)
    if(this.state.create_mode) {
      this.setState({create_mode:false})
    } else {
      this.setState({create_mode:true})
    }
  };

  openModal(component) {
    this.setState({
        modal_open:true,
        current_component:component
    });
  };

  closeModal() {
    this.setState({
      modal_open:false,
      current_component: null
    });
  };

  addComponent(component) {
    var components = this.state.components;
    components.push(component);
    this.setState(components);
    // components = React.addons.update(this.state.components, { $push: [component] })
    // this.replaceState({ components: components});
  };

  deleteComponent(component) {
    var index = this.state.components.indexOf(component)
    components = React.addons.update(this.state.components, { $splice: [[index,1]] })
    this.replaceState({ components: components});
  };
  //
  render() {
    return (
      <div className="components">
        <h2 className="title">Components</h2>
        <button className={"btn " + (this.state.create_mode? "btn-danger":"btn-primary")} onClick={this.handleClick}
          value={this.state.create_mode?"Cancel":"New Component"}>
          {this.state.create_mode?"Cancel":"New Component"}
        </button>

        <br/>
        <div className="col-md-offset-1">
          {this.state.create_mode &&
          <ComponentForm authenticity_token={this.props.authenticity_token} suggestions={this.state.suggestions}
            handleSubmit={this.addComponent}/>}
        </div>

        <Modal
          style={modalStyle}
          backdropStyle={backdropStyle}
          autoFocus={false}
          show={this.state.modal_open}
          onHide={this.closeModal}>
          <div style={dialogStyle()}>
            <ComponentBox component={this.state.current_component}/>
          </div>
        </Modal>

        <br/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Team Range</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody className="component-table">
            {this.state.components.map(function(component) {
                   return <ComponentRow key={component.id} component={component} handleClick={this.openModal}/>
                  }.bind(this)
                )
            }
          </tbody>
        </table>
      </div>
    );
  };
};
