import { cover } from './cover';
import { rem } from '../../../utils';

describe('@mantine/styles/cover', () => {
  it('returns correct styles', () => {
    expect(cover(16)).toStrictEqual({
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      left: '1rem',
      bottom: '1rem',
    });

    expect(cover()).toStrictEqual({
      position: 'absolute',
      top: rem(0),
      right: rem(0),
      left: rem(0),
      bottom: rem(0),
    });

    expect(cover('10%')).toStrictEqual({
      position: 'absolute',
      top: '10%',
      right: '10%',
      left: '10%',
      bottom: '10%',
    });
  });
});
