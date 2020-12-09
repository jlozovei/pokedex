const unslugify = (string) => {
  return string.replace(/-/g, ' ');
};

const titlecase = (string) => {
  if (string.length < 4) {
    return uppercase(string);
  } else {
    return string
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }
};

const uppercase = (string) => {
  return string.toUpperCase();
};

export { unslugify, titlecase, uppercase };
