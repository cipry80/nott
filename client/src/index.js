import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/Store';
import ScrollToTop from 'common/components/ScrollToTop/ScrollToTop';
import AuthenticateRoute from 'common/components/AuthenticateRoute/AuthenticateRoute';
import Login from 'pages/Login/LoginContainer';
import Home from 'pages/Home/Home';
import Protected from 'pages/Protected/Protected';
import NotFound from 'pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'index.css';
import 'antd/dist/antd.css';

const Root = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <main>
          <Switch>
            <Route exact path="/login" component={Login} />
            <AuthenticateRoute exact path="/" component={Home} />
            <AuthenticateRoute exact path="/protected" component={Protected} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </ScrollToTop>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
