import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { routes } from 'routes'
import { Provider } from 'react-redux'
import store from 'store'

// views
import Home from 'views/Home'
import NotFound from 'views/NotFound'

// style
import GlobalStyle from 'themes/GlobalStyle'
import { Page, App, BGImage } from './styles'

const Root = () => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <Page>
                    <BGImage />
                    <App>
                        <Switch>
                            <Route
                                exact
                                path={routes.homepage}
                                component={Home}
                            />
                            <Route
                                path={routes.notfound}
                                component={NotFound}
                            />
                        </Switch>
                    </App>
                </Page>
            </Router>
        </Provider>
    )
}

export default Root
