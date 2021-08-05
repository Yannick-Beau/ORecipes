import axios from 'axios';
import { LOGIN, connectUser } from '../actions/auth';
import { fetchFavorites, FETCH_FAVORITES, saveFavorites } from '../actions/recipes';

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
          store.dispatch(connectUser(response.data.pseudo, response.data.token));
          store.dispatch(fetchFavorites());
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
        });
      break;
    }
    case FETCH_FAVORITES:
      console.log('on va aller chercher kes recettes préférées');
      // On envoie le token : dans le header Authorization, en précisant le mot
      // "Bearer" avant le token
      axios.post(
        // URL
        'http://localhost:3001/favorites',
        // les données
        {},
        // option, notamment les headers
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavorites(response.data.favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
