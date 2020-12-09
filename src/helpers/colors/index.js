import { meetsContrastGuidelines } from 'polished';

const isAccessibleColor = (backgroundColor, baseColor) => {
  const isBaseColorCompliant = meetsContrastGuidelines(backgroundColor, baseColor);

  return isBaseColorCompliant.AAALarge;
};

export { isAccessibleColor };
