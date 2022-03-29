import { SIGNUP, LOGIN, LOGOUT } from "../shared/types";

const authReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export { authReducer };
