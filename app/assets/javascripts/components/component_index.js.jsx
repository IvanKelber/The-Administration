//Do not require react because it will override react-rails gem
var ComponentIndex = React.createClass({
  getInitialState: function() {
    return {
      components: this.props.data,
      create_mode: false
    }
  },
  getDefaultProps: function() {
    return {
      components: []
    }
  },
  handleClick: function(event) {
    event.preventDefault();
    if(event.target.value=="New Component") {
      this.setState({create_mode:true})
    } else {
      this.setState({create_mode:false})
    }
  },
  addComponent: function (component) {
    components = React.addons.update(this.state.components, { $push: [component] })
    this.replaceState({ components: components});
  },
  deleteComponent: function(component) {
    var index = this.state.components.indexOf(component)
    components = React.addons.update(this.state.components, { $splice: [[index,1]] })
    this.replaceState({ components: components});
  },
  render: function() {
    return (
      <div className="components">
        <h2 className="title">Components</h2>
        <button className="btn btn-primary" onClick={this.handleClick}
          value={this.state.create_mode?"Cancel":"New Component"}
          >{this.state.create_mode?"Cancel":"New Component"}</button>
        <br/>
        <div className="col-md-offset-1">

          {this.state.create_mode &&<ComponentForm authenticity_token={this.props.authenticity_token}
          handleSubmit={this.addComponent}/>}
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
  }
});
