import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';

const RecipeSmall = ({
  title,
  thumbnail,
  difficulty,
}) => (
  <article className="recipe-small">
    <img
      src={thumbnail}
      alt=""
    />
    <div className="recipe-small-content">
      <h2>{title}</h2>
      <p>Difficulté : {difficulty}</p>
      <Link
        className="recipe-small-link"
        to={`/recipe/${slugifyTitle(title)}`}
      >
        Voir la recette
      </Link>
    </div>
  </article>
);

RecipeSmall.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default RecipeSmall;
