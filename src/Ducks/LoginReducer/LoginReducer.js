// Constants
export const ACTIONS = {
  LOGIN: 'login/UPDATE',
  UPDATE: 'login/UPDATE',
  CLEAR: 'login/CLEAR',
  LOGIN_ERROR: 'login/LOGIN_ERROR',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
};

// Actions
export const updateLogin = payload => ({
  type: ACTIONS.UPDATE,
  payload,
});

export const clearLogin = () => ({
  type: ACTIONS.CLEAR,
});

const initialState = {
  success: false,
  email: '',
  password: '',
  displayName: '',
  token: '',
  errors: { emailError: '', passwordError: '', displayNameError: '' },
  loading: false,
};

const LoginReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.LOGIN_SUCCESS: {
      return {
        ...initialState,
        success: true,
      };
    }
    case ACTIONS.LOGIN_ERROR: {
      return {
        success: false,
        error: payload,
      };
    }
    case ACTIONS.UPDATE: {
      return {
        ...state,
        ...payload,
      };
    }
    case ACTIONS.CLEAR: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
