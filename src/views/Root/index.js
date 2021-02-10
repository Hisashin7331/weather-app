import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from 'routes'

// components
import Homepage from 'views/Home'
import Login from 'views/Login'
import Details from 'views/Details'
import NotFound from 'views/NotFound'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.homepage} component={Homepage} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.details} component={Details} />
        <Route path={routes.notfound} component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Root
