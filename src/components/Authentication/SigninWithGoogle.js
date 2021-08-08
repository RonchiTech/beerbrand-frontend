import { connect } from 'react-redux';
import * as action from '../../store/actions/';
import GoogleButton from 'react-google-button';
const SigninWithGoogle = (props) => {
  const fetchAuthUser = () => {
    props.onAuthCheck();
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
  return <GoogleButton onClick={signInWithGoogle} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(action.authCheck()),
  };
};
export default connect(null, mapDispatchToProps)(SigninWithGoogle);
