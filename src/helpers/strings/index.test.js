import { unslugify, titleCase } from 'helpers/strings';

describe('unslugify', () => {
  it('unslugify two word', () => {
    const slug = 'hello-world';
    expect(unslugify(slug)).toBe('hello world');
  });

  it('unslugify more than two word', () => {
    const slug = 'hello-my-world';
    expect(unslugify(slug)).toBe('hello my world');
  });
});

describe('titleCase', () => {
  it('title case two words', () => {
    const slug = 'hello world';
    expect(titleCase(slug)).toBe('Hello World');
  });

  it('title case more than two words', () => {
    const slug = 'hello my world';
    expect(titleCase(slug)).toBe('Hello My World');
  });
});
