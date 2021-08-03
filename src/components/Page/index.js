import React from 'react';
import { Route } from 'react-router-dom';

import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import LoginForm from 'src/containers/LoginForm';

import './page.scss';

const Page = () => (
  <main className="page">
    <h2 className="page-title">
      oRecipes
      <LoginForm />
    </h2>
    <div className="page-content">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/recipe/:slug">
        <Recipe />
      </Route>
    </div>
  </main>
);

export default Page;
