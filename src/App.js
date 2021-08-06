import { Switch, Route } from 'react-router-dom';
import LoginSuccess from './app/containers/loginSuccess';
import Home from './pages/home'
function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/">
          <GoogleButton onClick={signInWithGoogle} />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login/success" component={LoginSuccess} />
        
      </Switch>
    </div>
  );
}

export default App;
