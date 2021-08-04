import React from 'react';

import { expect } from 'chai';

// enzyme : bibliothèque pour faciliter le test unitaire des composants React
// shallow : fonction qui permet de faire le rendu d'un composant React, seulement
// au premier niveau, c'est-à-dire qu'on ne fait pas le rendu des sous-composants
import { shallow } from 'enzyme';

// on se sert du composant Link dans l'un des tests
import { Link } from 'react-router-dom';

// import du composant à tester
import RecipeSmall from '../../src/components/Home/RecipeSmall';

describe('<RecipeSmall />', () => {
  it('Uses the title given as prop', () => {
    // on prépare un titre à fournir pour la prop
    const titleValue = 'pizza';

    // on fait le rendu du composant pour pouvoir vérifier des choses dans ce rendu
    // ici on a mis des valeurs de props en dur pour les props pas nécessaires
    // pour ce test
    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img.png" difficulty="facile" />);

    // vérifier que le contenu du h2 c'est la valeur qu'on a donnée pour la prop title
    // - faire une recherche de balise h2 et vérifier qu'on en a un seul
    // => find permet de rechercher des balises, des classes...
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).to.have.lengthOf(1);

    // - vérifier le contenu du h2 => s'il y a un seul élément Enzyme a retourné
    // directement l'élément et pas un tableau
    expect(h2Elements.text()).to.equal(titleValue);
  });

  it('has a link towards the recipe', () => {
    // vérifier qu'on utilise le composant Link et vérifier la valeur de sa prop to

    const titleValue = 'pizza margherita';
    const slug = 'pizza-margherita';

    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img.png" difficulty="facile" />);

    // vérifier qu'on a le composant Link qui apparaît dans le rendu
    const linkElements = wrapper.find(Link);
    expect(linkElements).to.have.lengthOf(1);

    // vérifier la valeur de sa prop to par rapport au titre qu'on a utilisé

    // pour récupérer les props d'un composant dans le rendu, on appelle
    // la méthode props() sur le composant trouvé dans le rendu

    // console.log(linkElements.props());
    expect(linkElements.props()).to.have.property('to', `/recipe/${slug}`);

    // to.have.property(nom, valeur)
    // => vérifier si un objet a telle valeur pour telle propriété
  });

  // TODO vérifier que la prop difficulty est utilisée pour le p
  it('Uses the difficulty given as prop', () => {
    // on prépare une difficulté à fournir pour la prop
    const difficultyValue = 'facile';

    // on fait le rendu du composant pour pouvoir vérifier des choses dans ce rendu
    // ici on a mis des valeurs de props en dur pour les props pas nécessaires
    // pour ce test
    const wrapper = shallow(<RecipeSmall title="hello" thumbnail="img.png" difficulty={difficultyValue} />);

    // vérifier que le contenu du p c'est la valeur qu'on a donnée pour la prop difficulté
    // - faire une recherche de balise p et vérifier qu'on en a un seul
    // => find permet de rechercher des balises, des classes...
    const pElements = wrapper.find('p');
    expect(pElements).to.have.lengthOf(1);

    // - vérifier le contenu du p => s'il y a un seul élément Enzyme a retourné
    // directement l'élément et pas un tableau
    expect(pElements.text()).to.equal(`Difficulté : ${difficultyValue}`);
  });

  // TODO vérifier que la prop thumbnail est utilisée comme src pour l'image
  it('Uses the difficulty given as prop', () => {
    // on prépare une image à fournir pour la prop
    const thumbnailValue = 'img.png';

    // on fait le rendu du composant pour pouvoir vérifier des choses dans ce rendu
    // ici on a mis des valeurs de props en dur pour les props pas nécessaires
    // pour ce test
    const wrapper = shallow(<RecipeSmall title="hello" thumbnail="img.png" difficulty={thumbnailValue} />);

    // vérifier que le contenu de img c'est la valeur qu'on a donnée pour la prop thumbnail
    // - faire une recherche de balise img et vérifier qu'on en a un seul
    // => find permet de rechercher des balises, des classes...
    const imgElements = wrapper.find('img');
    expect(imgElements).to.have.lengthOf(1);

    // - vérifier le contenu de img => s'il y a un seul élément Enzyme a retourné
    // directement l'élément et pas un tableau
    expect(imgElements.prop('src')).to.equal(thumbnailValue);
  });
});
