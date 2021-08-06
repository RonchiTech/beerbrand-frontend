import { useEffect, useState, useHistory, Fragment } from 'react';
import { Route } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const Home = () => {
  const history = useHistory;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/user', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        console.log(result);
        setUser({ email: result.email });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const fetchAuthUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw response.statusText;
      }
      const result = await response.json();
      console.log(result);

      setUser({ email: result.email });
    } catch (err) {
      console.log('ERR:', err);
      history.push('/login/error');
    }
  };
  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw response.statusText;
      }
      const result = await response.json();
      console.log(result);

      setUser({ email: undefined });
    } catch (err) {
      console.log('ERR:', err);
      history.push('/login/error');
    }
  };
  const signInWithGoogle = async () => {
    let timer;
    const googleLoginUrl = 'http://localhost:3000/api/login/google';
    const newWindow = window.open(
      googleLoginUrl,
      '_blank',
      'width:500,height:600'
    );
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('You will be authenticated!');
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };
  let display = 'Loading...';
  display = user.email ? (
    <div>
      <h2>Welcome {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <GoogleButton onClick={signInWithGoogle} />
  );
  return (
    <Fragment>
      {display}
      <Route path="/login/error">
        Error loging in. Please try again later!
      </Route>
    </Fragment>
  );
};
export default Home;
