import GoogleButton from 'react-google-button';
function App() {
  const fetchAuthUser = () => {
    fetch('http://localhost:3000/api/auth/user', { credentials: 'include' });
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
      });
    }
  };
  return (
    <div>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
}

export default App;
