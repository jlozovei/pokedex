const filterByLanguage = ({ source, language = 'en' }) => {
  const filter = source.filter((item) => {
    return item.language.name === language;
  });

  return filter;
};

export { filterByLanguage };
