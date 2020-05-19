import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './routes/App'

const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // to configure our devtool
const reduxStore = createStore(() => {},
composeEnchacers(applyMiddleware(reduxThunk))) //  wiring up devtool and reducers to store
//function will be replaced (reducers)

ReactDOM.render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
