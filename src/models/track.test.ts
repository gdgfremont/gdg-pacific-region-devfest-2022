import data from '../../docs/default-firebase-data.json';
import { Track } from './track';
import { allKeys } from './utils';

describe('track', () => {
  it('matches the shape of the default data', () => {
    const days: Track[] = data['schedule']['2022-11-03']['tracks'];
    const keys: Array<keyof Track> = ['title'];
    expect(days).toHaveLength(2);
    expect(allKeys(days)).toStrictEqual(keys);
  });
});
