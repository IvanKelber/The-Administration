var Test = React.createClass({
  getInitialState: function() {
    return {
      open:false
    }
  },
  toggle: function() {
    var new_open = !this.state.open;
    this.setState({open:new_open})
  },
  render:function() {
    return (
      <div>
        <ReactModal isOpen={this.state.open} contentLabel="Modal">
          <button onClick={this.toggle}>Close</button>
        </ReactModal>
        <button onClick={this.toggle}>Open</button>
      </div>
    )
  }
})
