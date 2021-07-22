import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
} from '@mantine/tests';
import { TypographyStylesProvider } from './TypographyStylesProvider';

describe('@mantine/core/TypographyStylesProvider', () => {
  itSupportsClassName(TypographyStylesProvider, {});
  itSupportsStyle(TypographyStylesProvider, {});
  itSupportsOthers(TypographyStylesProvider, {});
  itRendersChildren(TypographyStylesProvider, {});

  it('has correct displayName', () => {
    expect(TypographyStylesProvider.displayName).toEqual('@mantine/core/TypographyStylesProvider');
  });
});
