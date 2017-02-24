var Component = React.createClass({
  getInitialState: function() {
    return {
      edit: false,
    }
  },
  componentRow: function() {
    return(
      <tr>
        <td>{this.props.component.name}</td>
        <td>{this.props.component.category}</td>
        <td>{this.props.component.min_teams} - {this.props.component.max_teams}</td>
        <td>{this.props.component.description}</td>
      </tr>
    );
  },

  render: function() {
      return this.componentRow();
  }
})
