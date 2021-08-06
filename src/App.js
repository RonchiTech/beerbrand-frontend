import { Switch, Route } from 'react-router-dom';
import LoginSuccess from './app/containers/loginSuccess';
import Home from './pages/home';
import Login from './pages/login';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        {/* <Route exact path="/">
          <GoogleButton onClick={signInWithGoogle} />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login/success" component={LoginSuccess} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
