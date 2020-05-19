import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from 'config/history'
import Dashboard from './pages/dashboard'
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

export default App
