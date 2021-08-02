import recipeData from 'src/data';
import {
  SWITCH_ON,
} from 'src/actions';

const initialState = {
  recipe: recipeData,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_ON:
      return {
        ...state,
        active: true,
      };

    default:
      return state;
  }
};

export default reducer;
