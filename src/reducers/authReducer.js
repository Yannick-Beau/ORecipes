import { UPDATE_FIELD, CONNECT_USER, LOGOUT } from '../actions/auth';

const initialState = {
  email: '',
  password: '',
  username: '',
  isLogged: false,
  loggedMessage: 'Déconnecté',
  token: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }

      // pas nécessaire d'avoir un else quand on a fait un return dans le if : de
      // toute façon, si on arrive à cette ligne c'est que forcément on n'est pas
      // passé dans le if
      return {
        ...state,
        password: action.newValue,
      };

    case CONNECT_USER:
      return {
        ...state,
        username: action.username,
        loggedMessage: `Bonjour ${action.username}`,
        isLogged: true,
        email: '',
        password: '',
        token: action.token,
      };

    case LOGOUT:
      return {
        ...state,
        username: '',
        loggedMessage: 'Déconnecté',
        isLogged: false,
      };

    default:
      return state;
  }
}

export default authReducer;
