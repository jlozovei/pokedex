import { unslugify, titlecase, uppercase } from 'helpers/strings';

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

describe('titlecase', () => {
  it('titlecase two words', () => {
    const sentence = 'hello world';
    expect(titlecase(sentence)).toBe('Hello World');
  });

  it('titlecase more than two words', () => {
    const sentence = 'hello my world';
    expect(titlecase(sentence)).toBe('Hello My World');
  });

  it('titlecase turn into uppercase', () => {
    const word = 'rpm';
    expect(titlecase(word)).toBe('RPM');
  });
});

describe('uppercase', () => {
  it('uppercase single word', () => {
    const word = 'hello';
    expect(uppercase(word)).toBe('HELLO');
  });

  it('uppercase sentence', () => {
    const sentence = 'hello World';
    expect(uppercase(sentence)).toBe('HELLO WORLD');
  });
});
