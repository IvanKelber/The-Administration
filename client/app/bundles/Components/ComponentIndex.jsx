import React, { PropTypes } from 'react';
import ComponentForm from './ComponentForm';
import ComponentRow from "./Component";

export default class ComponentIndex extends React.Component {
  // static defaultProps = {components:[]};

  constructor(props,_railsContext) {
    super(props)
    this.state = {
      components: this.props.data,
      create_mode: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.addComponent = this.addComponent.bind(this);
    this.deleteComponent = this.deleteComponent.bind(this);
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
          <ComponentForm authenticity_token={this.props.authenticity_token} handleSubmit={this.addComponent}/>}
        </div>

        <br/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Team Range</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.components.map(function(component) {
                   return <ComponentRow key={component.id} component={component}/>
                  }.bind(this)
                )
            }
          </tbody>
        </table>
      </div>
    );
  };
};
