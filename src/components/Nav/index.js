import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { slugifyTitle } from 'src/utils';

import './nav.scss';

const Nav = ({ recipes }) => (
  <nav className="nav">
    <NavLink
      to="/"
      className="nav-item"
      activeClassName="nav-item--active"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        to={`/recipe/${slugifyTitle(recipe.title)}`}
        className="nav-item"
        activeClassName="nav-item--active"
        key={recipe.id}
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
