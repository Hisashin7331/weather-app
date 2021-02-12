import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from 'routes'


// views
import Home from 'views/Home'
import Login from 'views/Login'
import Details from 'views/Details'
import NotFound from 'views/NotFound'

// style
import GlobalStyle from 'themes/GlobalStyle'
import { Page, App, BGImage } from './styles'

const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <Page>
        <BGImage />
        <App>
          <Switch>
            <Route exact path={routes.homepage} component={Home} />
            <Route exact path={routes.login} component={Login} />
            <Route exact path={routes.details} component={Details} />
            <Route path={routes.notfound} component={NotFound} />
           </Switch>
        </App>
      </Page>
    </Router>
  )
}

export default Root
