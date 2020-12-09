import { padding, randomInt } from 'helpers/numbers';

describe('padding', () => {
  it('default padding', () => {
    const number = 1;
    expect(padding(number)).toBe('001');
  });

  it('custom padding', () => {
    const number = 350;
    expect(padding(number, 5, '-')).toBe('--350');
  });
});

describe('randomInt', () => {
  it('randomInt with default values', () => {
    const random = randomInt();

    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThanOrEqual(10);
  });

  it('randomInt with default values', () => {
    const random = randomInt(50, 100);

    expect(random).toBeGreaterThanOrEqual(50);
    expect(random).toBeLessThanOrEqual(100);
  });
});
