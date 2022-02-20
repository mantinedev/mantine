import { DEFAULT_THEME } from '@mantine/styles';
import { getSystemStyles } from './get-system-styles';

describe('@mantine/core/Box/get-system-styles', () => {
  it('extracts margins and paddings with theme.spacing values', () => {
    expect(getSystemStyles({ mt: 'xl', mb: 'sm' }, DEFAULT_THEME)).toStrictEqual({
      marginTop: DEFAULT_THEME.spacing.xl,
      marginBottom: DEFAULT_THEME.spacing.sm,
    });

    expect(getSystemStyles({ pt: 'xl', pb: 'sm' }, DEFAULT_THEME)).toStrictEqual({
      paddingTop: DEFAULT_THEME.spacing.xl,
      paddingBottom: DEFAULT_THEME.spacing.sm,
    });
  });

  it('extracts margins and paddings with string values', () => {
    expect(getSystemStyles({ mx: 'auto', mt: '50%' }, DEFAULT_THEME)).toStrictEqual({
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50%',
    });

    expect(getSystemStyles({ px: 'auto', pt: '50%' }, DEFAULT_THEME)).toStrictEqual({
      paddingLeft: 'auto',
      paddingRight: 'auto',
      paddingTop: '50%',
    });
  });

  it('extracts margins and paddings with number values', () => {
    expect(getSystemStyles({ my: 121, mr: 17 }, DEFAULT_THEME)).toStrictEqual({
      marginTop: 121,
      marginBottom: 121,
      marginRight: 17,
    });

    expect(getSystemStyles({ py: 121, pr: 17 }, DEFAULT_THEME)).toStrictEqual({
      paddingTop: 121,
      paddingBottom: 121,
      paddingRight: 17,
    });
  });
});
