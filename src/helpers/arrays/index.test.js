import { filterByLanguage } from 'helpers/arrays';

describe('filterByLanguage', () => {
  it('default language (EN)', () => {
    const source = [
      {
        language: {
          name: 'roomaji'
        },
        name: 'Hitokage'
      },
      {
        language: {
          name: 'de'
        },
        name: 'Glumanda'
      },
      {
        language: {
          name: 'en'
        },
        name: 'Charmander'
      }
    ];

    expect(filterByLanguage({ source })).toStrictEqual([
      { language: { name: 'en' }, name: 'Charmander' }
    ]);
  });

  it('custom language (IT)', () => {
    const source = [
      {
        language: {
          name: 'roomaji'
        },
        name: 'Hitokage'
      },
      {
        language: {
          name: 'de'
        },
        name: 'Glumanda'
      },
      {
        language: {
          name: 'en'
        },
        name: 'Charmander'
      }
    ];

    expect(filterByLanguage({ source, language: 'roomaji' })).toStrictEqual([
      { language: { name: 'roomaji' }, name: 'Hitokage' }
    ]);
  });
});
