// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import './styles.css';

// == Composant
const App = ({ loadRecipes }) => {
  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Page />
    </div>
  );
};

App.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
};

// == Export
export default App;
