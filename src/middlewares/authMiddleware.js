import axios from 'axios';
import { LOGIN, connectUser } from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState().auth;
      console.log(`On va se connecter avec email: ${email} et mdp: ${password}`);
      axios.post(
        // URL
        'http://localhost:3001/login',
        // paramètres
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);
          // on veut enregistrer le pseudo dans le state
          console.log('on veut enregistrer le pseudo dans le state', response.data.pseudo);
          store.dispatch(connectUser(response.data.pseudo));
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
