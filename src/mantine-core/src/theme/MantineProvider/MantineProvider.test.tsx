import React from 'react';
import { shallow } from 'enzyme';
import { DEFAULT_THEME } from '../default-theme';
import { MantineProvider } from './MantineProvider';

describe('../theme/MantineProvider', () => {
  it('has correct displayName', () => {
    expect(MantineProvider.displayName).toEqual('@mantine/Provider');
  });

  it('provides given theme to ThemeProvider', () => {
    const theme = { ...DEFAULT_THEME, primaryColor: 'red' };
    const element = shallow(<MantineProvider theme={theme}>Mantine provider</MantineProvider>);
    expect(element.prop('theme')).toEqual({ __mantine_theme: true, ...theme });
  });
});
