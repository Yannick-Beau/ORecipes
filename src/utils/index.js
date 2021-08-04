import slugify from 'slugify';

// obtenir le slug qui correspond à un titre
export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true, // on veut que tout soit en minuscules
  });

  return slug;
};

// JSDoc : informations pour l'utilisation de la fonction : paramètres,
// valeur de retour
// https://jsdoc.app/
/**
 * récupérer la recette qui a le slug indiqué
 * @param {String} slug Le slug à rechercher
 * @param {Array} recipes Toutes les recettes
 * @return la recette qui a le slug indiqué
 */
export const getRecipeBySlug = (slug, recipes) => {
  const recipeFound = recipes.find((recipe) => {
    // return un booléen qui indique si l'élément en cours d'étude correspond
    // au critère

    // on calcule le slug de la recette en cours d'étude
    const recipeSlug = slugifyTitle(recipe.title);

    // on regarde si le slug calculé correspond au slug recherché
    return slug === recipeSlug;
  });

  return recipeFound;

  // const recipe = recipes.find((item) => item.id === parseInt(id, 10))
};
