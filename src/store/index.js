import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// le store est le "gardien" de notre state : il le stocke et il le protège (il
// autorise seulement certaines modifications qu'on a prévues à l'avance)

// On construit un enhancer avec à la fois les dev tools et les middleware
const enhancer = composeWithDevTools(
  applyMiddleware(

    // d'autres middlewares
  ),
);

const store = createStore(
  // le reducer
  reducer,
  // enhancer
  enhancer,
);

// enhancer est normalement le troisième paramètre de createStore, mais si on le
// fournit en deuxième argument, createStore détecte que c'est un enhancer et
// l'utilise comme si c'était le troisième argument (mécanisme spécifique à cette
// fonction)

export default store;
