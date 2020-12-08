import { kilogramsToPounds, metersToFeet } from 'helpers/units';

describe('kilogramsToPounds', () => {
  it('19.5kg to 43.00lbs', () => {
    const kg = 19.5;
    expect(kilogramsToPounds(kg)).toBe('43.00');
  });

  it('100kg to 220.50lbs', () => {
    const kg = 100;
    expect(kilogramsToPounds(kg)).toBe('220.50');
  });
});

describe('metersToFeet', () => {
  it('1m to 3\'28"', () => {
    const m = 1;
    expect(metersToFeet(m)).toBe('3.28');
  });

  it('1.70m to 5\'58"', () => {
    const m = 1.7;
    expect(metersToFeet(m)).toBe('5.58');
  });
});
