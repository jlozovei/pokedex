import { padding } from 'helpers/numbers';

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
