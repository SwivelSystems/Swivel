import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Landing from './components/Landing.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles/entry.scss';
import actions from './actions/index.js';
import requestMethods from './utils/requestMethods.js';
const store = configureStore();

requestMethods.loadTeacherData(3, (error, teacherData) => {
  if (error) {
    return 'Server Could Not load teacher information ${error}';
  }
  return store.dispatch(actions.receiveCourses(teacherData.courses));
});
// load data with teacher id, made it up but right now can change once we have auth

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Landing} />
      <Route path="/demo" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
