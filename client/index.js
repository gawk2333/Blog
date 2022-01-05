import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'

const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
                          typeof window !== 'undefined' &&
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
                          compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Provider>,
    document.getElementById('app')
  )
})
