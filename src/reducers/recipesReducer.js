// temporaire : ensuite on ira récupérer les infos depuis l'api
// import recipes from 'src/data';
import { SAVE_RECIPES } from '../actions/recipes';
const initialState = {
  recipesList: [],
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
      };
    default:
      return state;
  }
}

export default recipesReducer;
