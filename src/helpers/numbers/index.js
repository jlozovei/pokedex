const padding = (number, padding = 3, mask = '0') => {
  return String(number).padStart(padding, mask);
};

const randomInt = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { padding, randomInt };
