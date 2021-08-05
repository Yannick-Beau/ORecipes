// temporaire : ensuite on ira récupérer les infos depuis l'api
// import recipes from 'src/data';
import { SAVE_RECIPES, SAVE_FAVORITES } from '../actions/recipes';
const initialState = {
  recipesList: [],
  favorites: [],
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
}

export default recipesReducer;
