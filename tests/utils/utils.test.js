// fichier de tests pour src/utils/index.js

// on importe ce qu'on veut tester
import { slugifyTitle, getRecipeBySlug } from 'src/utils';

// on importe les données de test
import recipesData from './recipes';

// on importe l'une des syntaxes de chai
import { should } from 'chai';

// spécificité de should : il faut l'appeler une première fois pour pouvoir l'utiliser
should();

/*
describe décrit un bloc de tests (on peut en imbriquer plusieurs)
2 paramètres :
- un texte qui décrit le bloc (qui apparaitra dans le compte-rendu)
- une callback qui permet d'exécuter les tests pour ce bloc
*/
describe('utils', () => {
  describe('slugifyTitle', () => {
    // ici les tests de la fonction slugifyTitle

    /*
    it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
    - un texte qui décrit le cas (qui apparaitra dans le compte-rendu)
    - une callback qui permet d'exécuter les tests pour ce cas
    */
    it('is a function', () => {
      // on veut vérifier que slugifyTitle est bien une fonction
      slugifyTitle.should.be.a('function');
    });

    it('replaces spaces', () => {
      slugifyTitle('pizza au chorizo').should.equal('pizza-au-chorizo');
    });

    it('replaces upper case', () => {
      slugifyTitle('Pizza-aux-Anchois').should.equal('pizza-aux-anchois');
    });
  });

  describe('getRecipeBySlug', () => {
    // ici les tests de la fonction getRecipeBySlug
    it('is a function', () => {
      // on veut vérifier que slugifyTitle est bien une fonction
      getRecipeBySlug.should.be.a('function');
    });

    it('get the recipe with the given slug', () => {
      // on calcule le slug de l'une des recettes (soit slugifyTitle, soit on fait nous même)
      const slug = slugifyTitle(recipesData[2].title);
      getRecipeBySlug(slug, recipesData).should.equal(recipesData[2]);
    });
  });
});
