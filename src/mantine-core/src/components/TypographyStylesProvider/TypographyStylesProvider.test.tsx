import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { TypographyStylesProvider } from './TypographyStylesProvider';

describe('@mantine/core/TypographyStylesProvider', () => {
  itSupportsClassName(TypographyStylesProvider, {});
  itSupportsStyle(TypographyStylesProvider, {});
  itSupportsOthers(TypographyStylesProvider, {});
  itRendersChildren(TypographyStylesProvider, {});
  itSupportsMargins(TypographyStylesProvider, {});
  itSupportsRef(TypographyStylesProvider, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(TypographyStylesProvider.displayName).toEqual('@mantine/core/TypographyStylesProvider');
  });
});
