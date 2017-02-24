var Header = React.createClass({
  getInitialState: function() {
    return {
      isLoggedIn: false
    }
  },
  getDefaultProps: function() {
    return {
      site: "Survivor Party"
    }
  },
  render: function() {
    if(this.state.isLoggdIn) {

    } else {

    }

    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <nav>
            <ul className="nav navbar-nav navbar-right">
              <li><Link url="/" title="Home"/></li>
              <li><Link url="/rules" title="Rules"/></li>
              <li><Link url="/about" title="About"/></li>
            {this.state.isLoggedIn ?
              (<li><Link url="/login" title="Log Out"/></li>)
              :
              (<li><Link url="/login" title="Log In"/></li>)
            }

            </ul>
          </nav>
        </div>
      </header>

    )
  }
})
