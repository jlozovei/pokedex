import { isAccessibleColor } from 'helpers/colors';

describe('isAccessibleColor', () => {
  it('should return true', () => {
    const colors = {
      base: 'white',
      bg: 'black'
    };

    expect(isAccessibleColor(colors.bg, colors.base)).toBeTruthy();
  });

  it('should return false', () => {
    const colors = {
      base: 'white',
      bg: '#eee'
    };

    expect(isAccessibleColor(colors.bg, colors.base)).toBeFalsy();
  });
});
