// Action Types
export const ACTIONS = {
  LOGIN: 'auth/UPDATE',
  CLEAR: 'auth/CLEAR',
  UPDATE: 'auth/UPDATE',
};

// Action Creators
export const update = payload => ({
  type: ACTIONS.UPDATE,
  payload,
});

export const clear = _ => ({
  type: ACTIONS.CLEAR,
});

export const login = payload => dispatch => {
  console.log(payload);
};

export const logout = _ => dispatch => dispatch(clear());

const initialState = {
  uuid: '',
  email: '',
  displayName: '',
  isLogged: false,
};

const AuthReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
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

export default AuthReducer;
