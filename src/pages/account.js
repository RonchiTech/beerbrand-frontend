import { useEffect } from 'react';
import { connect } from 'react-redux';
import GoogleButton from '../components/Authentication/SigninWithGoogle';
import * as action from '../store/actions/';
const Account = ({ email, fullName, onAuthCheck }) => {

  // const [user, setUser] = useState({});
  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);


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
  
  let display = (
    <GoogleButton />
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
