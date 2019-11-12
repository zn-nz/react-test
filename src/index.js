import React from 'react'
import ReactDOM from 'react-dom'
import { Router, BrowserRouter, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import * as serviceWorker from './serviceWorker'
import routes from 'router'
import { Provider } from 'react-redux'
import store from 'store'
import 'element-theme-default'
import './index.scss'


const history = createHashHistory()
const App = () => (
  <Router history={history}>
    <BrowserRouter>
      {routes.map((route, i) => (
        <Route
          exact={route.exact}
          key={i}
          path={route.path}
          render={props => <route.component {...props} routes={route.routes} redirect={route.redirect} />}>
        </Route>
      ))}
    </BrowserRouter>
  </Router>
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
