import { DEFAULT_THEME } from '@mantine/styles';
import { getMargins } from './get-margins';

describe('@mantine/core/Box/get-margins', () => {
  it('extracts margins with theme.spacing values', () => {
    expect(getMargins({ mt: 'xl', mb: 'sm' }, DEFAULT_THEME)).toEqual({
      marginTop: DEFAULT_THEME.spacing.xl,
      marginBottom: DEFAULT_THEME.spacing.sm,
    });
  });

  it('extracts margins with string values', () => {
    expect(getMargins({ mx: 'auto', mt: '50%' }, DEFAULT_THEME)).toEqual({
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50%',
    });
  });

  it('extracts margins with number values', () => {
    expect(getMargins({ my: 121, mr: 17 }, DEFAULT_THEME)).toEqual({
      marginTop: 121,
      marginBottom: 121,
      marginRight: 17,
    });
  });
});
