import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store'
import Routes from './routes'
import { Link } from 'react-router-dom'
import { isAuthenticated } from './services/auth'

const App = () => {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        {isAuthenticated() ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
        <Routes />
      </ConnectedRouter>
    </React.Fragment>
  )
}

export default App;
