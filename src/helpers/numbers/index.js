const padding = (number, padding = 3, mask = '0') => {
  return String(number).padStart(padding, mask);
};

export { padding };
