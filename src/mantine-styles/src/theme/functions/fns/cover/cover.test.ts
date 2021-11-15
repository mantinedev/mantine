import { cover } from './cover';

describe('@mantine/styles/cover', () => {
  it('returns correct styles', () => {
    expect(cover()).toEqual({
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    });
  });
});
