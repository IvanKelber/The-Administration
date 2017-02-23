var Header = React.createClass({
  getInitialState: function() {
    return {
      logged_in: false
    }
  },
  getDefaultProps: function() {
    return {
      site: "Survivor Party"
    }
  },
  render: function() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <nav>
            <ul className="nav navbar-nav navbar-right">

            </ul>
          </nav>
        </div>
      </header>

    )
  }
})
