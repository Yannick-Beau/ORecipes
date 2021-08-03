import { combineReducers } from 'redux';

// on importe tous les reducers
import recipesReducer from './recipesReducer';
import authReducer from './authReducer';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  recipes: recipesReducer,
  auth: authReducer,
  // etc
});

export default rootReducer;
