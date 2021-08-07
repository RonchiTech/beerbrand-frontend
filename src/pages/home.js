import { useEffect, useState, Fragment } from 'react';
import { Route } from 'react-router-dom';
import * as action from '../store/actions/';
import { connect } from 'react-redux';
const Home = ({ onLogout, email }) => {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/auth/user', {
  //         method: 'GET',
  //         credentials: 'include',
  //         mode: 'cors',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       const result = await response.json();
  //       console.log(result);
  //       setUser({ email: result.email });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const fetchAuthUser = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/auth/user', {
  //       method: 'GET',
  //       credentials: 'include',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw response.statusText;
  //     }
  //     const result = await response.json();
  //     console.log(result);

  //     setUser({ email: result.email });
  //   } catch (err) {
  //     console.log('ERR:', err);
  //   }
  // };
  const logout = () => {
    onLogout();
  };
  // const signInWithGoogle = async () => {
  //   let timer;
  //   const googleLoginUrl = 'http://localhost:3000/api/login/google';
  //   const newWindow = window.open(
  //     googleLoginUrl,
  //     '_blank',
  //     'width:500,height:600'
  //   );
  //   if (newWindow) {
  //     timer = setInterval(() => {
  //       if (newWindow.closed) {
  //         console.log('You will be authenticated!');
  //         fetchAuthUser();
  //         if (timer) clearInterval(timer);
  //       }
  //     }, 500);
  //   }
  // };
  let display = 'Loading...';
  display = (
    <div>
      <h2>Welcome {email ? email : 'guest'}</h2>
      {email ? <button onClick={logout}>Logout</button> : null}
    </div>
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
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(action.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
