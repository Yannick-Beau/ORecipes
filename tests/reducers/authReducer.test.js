import { expect } from 'chai';

import authReducer from '../../src/reducers/authReducer';

// on se sert de l'action creator dans le test
import { connectUser, logout, updateField } from '../../src/actions/auth';

import recipesData from '../data/recipes';

describe('authReducer', () => {
  it('is a function', () => {
    expect(authReducer).to.be.a('function');
  });
  // on voudrait être alertés si on a changé temporairement une valeur dans le state
  // et qu'on a oublié de l'enlever
  it('test initial state', () => {
    // on "prend une photo" du state initial qu'on devrait avoir
    const expectedInitialState = {
      email: '',
      password: '',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };
    // - comment récupérer le state initial à partir du reducer

    // comparaison en profondeur ("deep") : on compare chaque propriété des deux objets
    // une comparaison to.equal regarde si les raccourcis font référence au même objet
    expect(authReducer()).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action CONNECT_USER', () => {
    // on prépare un state d'avant
    const stateBefore = {
      email: 'bouclierman@herocorp.io',
      password: 'jennifer',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = connectUser('John');

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      email: '',
      password: '',
      username: 'John',
      isLogged: true,
      loggedMessage: 'Bonjour John',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = authReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action LOGOUT', () => {
    // on prépare un state d'avant
    const stateBefore = {
      email: '',
      password: '',
      username: 'John',
      isLogged: true,
      loggedMessage: 'Bonjour John',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = logout();

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      email: '',
      password: '',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = authReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action UPDATE_FIELD email', () => {
    // on prépare un state d'avant
    const stateBefore = {
      email: '',
      password: '',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = updateField('pofpof@oclock.io', 'email');

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      email: 'pofpof@oclock.io',
      password: '',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = authReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action UPDATE_FIELD password', () => {
    // on prépare un state d'avant
    const stateBefore = {
      email: '',
      password: '',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = updateField('password1234', 'password');

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      email: '',
      password: 'password1234',
      username: '',
      isLogged: false,
      loggedMessage: 'Déconnecté',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = authReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });
});
