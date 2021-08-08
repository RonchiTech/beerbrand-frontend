import * as actionTypes from './actionTypes';

export const auth = () => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (!response.ok) {
        const error = new Error('Not authenticated');
        throw error;
      }
      const result = await response.json();
      console.log('Result from reducer', result.email);
      localStorage.setItem('email', result.email);
      localStorage.setItem('fullName', result.fullName);
      localStorage.setItem('imageUrl', result.picture);
      dispatch(authSuccess(result));
    } catch (err) {
      console.log('first err', err);
      localStorage.clear();
      dispatch(authFailed());
    }
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (result) => {
  console.log('From auth Success', result);
  const email = localStorage.getItem('email');
  const fullName = localStorage.getItem('fullName');
  const imageUrl = localStorage.getItem('imageUrl');
  //   console.log('AUTH START', email, fullName, imageUrl);
  return {
    type: actionTypes.AUTH_SUCCESS,
    email,
    fullName,
    imageUrl,
  };
};
export const authFailed = () => {
  return {
    type: actionTypes.AUTH_FAILED,
  };
};

export const authCheck = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('authCheck response', response);
      if (!response.ok) {
        throw response.statusText;
      }
      const result = await response.json();
      console.log('authCheck result', result);
      localStorage.setItem('email', result.email);
      localStorage.setItem('fullName', result.fullName);
      localStorage.setItem('imageUrl', result.picture);
      dispatch(authSuccess(result));
      // setUser({ email: result.email });
    } catch (err) {
      console.log('authCheck error:', err);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
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
      console.log('logout', result);
      localStorage.clear();
      dispatch(logoutSuccess())
    } catch (err) {
      console.log('ERR:', err);
    }
  };
};
export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}