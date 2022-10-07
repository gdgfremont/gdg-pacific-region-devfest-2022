import data from '../../docs/default-firebase-data.json';
import { Badge } from './badge';
import { allKeys } from './utils';

describe('badge', () => {
  it('matches the shape of the default data', () => {
    const badges: Badge[] = Object.values(data['speakers']['mark_johnson']['badges']);
    const keys: Array<keyof Badge> = ['description', 'link', 'name'];
    expect(badges).toHaveLength(4);
    expect(allKeys(badges)).toStrictEqual(keys);
  });
});
