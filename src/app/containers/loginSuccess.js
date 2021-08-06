import React, { useEffect } from 'react';

const   LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return <div>Thanks for logging in</div>;
};
export default LoginSuccess;
