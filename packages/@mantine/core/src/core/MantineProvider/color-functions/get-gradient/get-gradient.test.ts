import { DEFAULT_THEME } from '../../default-theme';
import { getGradient } from './get-gradient';

describe('@mantine/core/get-gradient', () => {
  it('returns default gradient from theme if gradient is not provided', () => {
    expect(getGradient(undefined, DEFAULT_THEME)).toStrictEqual(
      'linear-gradient(45deg, var(--mantine-color-blue-filled) 0%, var(--mantine-color-cyan-filled) 100%)'
    );
  });

  it('merges given gradient with theme default gradient', () => {
    expect(
      getGradient(
        {
          from: 'red',
          to: 'blue',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual(
      'linear-gradient(90deg, var(--mantine-color-red-filled) 0%, var(--mantine-color-blue-filled) 100%)'
    );
  });

  it('get colors from theme by index', () => {
    expect(
      getGradient(
        {
          from: 'red.3',
          to: 'blue.8',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual(
      'linear-gradient(90deg, var(--mantine-color-red-3) 0%, var(--mantine-color-blue-8) 100%)'
    );
  });

  it('allows using CSS colors', () => {
    expect(
      getGradient(
        {
          from: '#FEFEFE',
          to: '#CDCDCD',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual('linear-gradient(90deg, #FEFEFE 0%, #CDCDCD 100%)');
  });

  it('sets deg to 0', () => {
    expect(
      getGradient(
        {
          from: '#FEFEFE',
          to: '#CDCDCD',
          deg: 0,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual('linear-gradient(0deg, #FEFEFE 0%, #CDCDCD 100%)');
  });
});
