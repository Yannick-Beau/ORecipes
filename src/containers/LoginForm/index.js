import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';
import { updateField, login, logout } from '../../actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loggedMessage: state.auth.loggedMessage,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, identifier) => {
    const action = updateField(newValue, identifier);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
