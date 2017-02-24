//Do not require react because it will override react-rails gem
var ComponentIndex = React.createClass({
  getInitialState: function() {
    return {
      components: this.props.data
    }
  },
  getDefaultProps: function() {
    return {
      components: []
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
        <ComponentForm authenticity_token={this.props.authenticity_token} handleSubmit={this.addComponent}/>
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
                   return <Component key={component.id} component={component}/>
                  }.bind(this)
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
});
