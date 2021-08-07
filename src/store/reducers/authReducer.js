import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  email: null,
  fullName: null,
  imageUrl: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        email: action.email,
        fullName: action.fullName,
        imageUrl: action.imageUrl,
      };
    case actionTypes.AUTH_FAILED:
        return {
            ...state,
            isLoading: false
        }
    default:
      return state;
  }
};

export default reducers;
