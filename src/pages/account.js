import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import * as action from '../store/actions/';
const Account = ({ email, fullName, onAuthCheck }) => {
  const history = useHistory();
  // const [user, setUser] = useState({});
  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  const fetchAuthUser = () => {
    onAuthCheck();
  };
  //   const logout = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/auth/logout', {
  //         method: 'GET',
  //         credentials: 'include',
  //         mode: 'cors',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       if (!response.ok) {
  //         throw response.statusText;
  //       }
  //       const result = await response.json();
  //       console.log(result);

  //       setUser({ email: undefined });
  //     } catch (err) {
  //       console.log('ERR:', err);
  //     }
  //   };
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
  let display = (
    <GoogleButton className="google_btn" onClick={signInWithGoogle} />
  );
  if (email) {
    display = <h2>Profile: {email}</h2>;
  }
  return display;
};
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    fullName: state.authReducer.fullName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(action.authCheck()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
