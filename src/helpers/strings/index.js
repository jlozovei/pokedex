const unslugify = (string) => {
  return string.replace(/-/g, ' ');
};

const titleCase = (string) => {
  return string
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};

export { unslugify, titleCase };
