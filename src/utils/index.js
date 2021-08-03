import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true, // on veut que tout soit en minuscules
  });

  return slug;
};
