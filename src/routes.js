import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/private_router'
import Categories from './views/categories'
import Login from './views/login'
import Home from './views/home'
import Logout from './views/logout'


const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/categories" component={Categories} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes