import React from 'react'
import { render } from 'react-dom'
import Counter from './counter'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers'
import photoReducer from './photoReducer'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import MainComponent from './MainComponent'
import ChildComponent from './ChildComponent'
import FindBook from './components/FindBook/Main';
import Todo from './components/Todo/Main';
import './css/main.css';
// const store = createStore(counterApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(combineReducers({
  photo:photoReducer,
  global: counterApp,
  routing: routerReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const history = syncHistoryWithStore(browserHistory, store)
// <Router history={history}>

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainComponent}>
        <IndexRoute component={Counter} />
        <Route path={"cnt"} component={Counter}></Route>
        <Route path='test' component={ChildComponent}></Route>
        <Route path='douban' component={FindBook}></Route>
        <Route path='todo' component={Todo}></Route>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')

)
