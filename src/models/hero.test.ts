import { Hero } from './hero';
import { allKeys } from './utils';

describe('hero', () => {
  it('matches the shape of the default data', () => {
    const heros: Hero[] = [
      {
        backgroundColor: '#673ab7',
        backgroundImage: '/images/backgrounds/home.jpg',
        fontColor: '#fff',
        hideLogo: true,
      },
    ];
    const keys: Array<keyof Hero> = ['backgroundColor', 'backgroundImage', 'fontColor', 'hideLogo'];
    expect(heros).toHaveLength(1);
    expect(allKeys(heros)).toStrictEqual(keys);
  });
});
