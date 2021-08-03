import React from 'react';
import PropTypes from 'prop-types';

import RecipeSmall from './RecipeSmall';

import './home.scss';

const Home = ({ recipes }) => (
  <div className="home">
    <p>Bienvenue sur mon site de recettes. Régalez-vous !</p>
    <div className="recipes-small">
      {recipes.map((recipe) => (
        <RecipeSmall
          {...recipe}
          key={recipe.id}
        />
      ))}
    </div>
  </div>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
