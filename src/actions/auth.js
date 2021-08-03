// === actions types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CONNECT_USER = 'CONNECT_USER';
// actions creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const connectUser = (username) => ({
  type: CONNECT_USER,
  username: username,
});
