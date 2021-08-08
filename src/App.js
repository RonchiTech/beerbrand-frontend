import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as action from './store/actions';

import LoginSuccess from './app/containers/loginSuccess';

import Home from './pages/home';
import Account from './pages/account';

import Navigation from './components/Navigation/Navigation';

import './App.scss';


function App({ onAuth }) {
  useEffect(() => {
    onAuth();
    
  });
  return (
    <div>
      <Navigation />
      <Switch>
        {/* <Route exact path="/">
          <GoogleButton onClick={signInWithGoogle} />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login/success" component={LoginSuccess} />
        <Route path="/account" component={Account} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.email !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: () => dispatch(action.auth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
