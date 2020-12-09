const kilogramsToPounds = (kg) => {
  return (kg * 2.205).toFixed(2);
};

const metersToFeet = (m) => {
  return (m * 3.281).toFixed(2);
};

const formatFeet = (feet) => {
  return `${String(feet).replace('.', "'")}"`;
};

export { kilogramsToPounds, metersToFeet, formatFeet };
