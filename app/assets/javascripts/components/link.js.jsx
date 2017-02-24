var Link = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>{this.props.title}</a>
    )
  }
})
