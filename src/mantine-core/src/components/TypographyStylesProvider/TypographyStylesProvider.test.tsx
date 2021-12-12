import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { TypographyStylesProvider } from './TypographyStylesProvider';

const defaultProps = {};

describe('@mantine/core/TypographyStylesProvider', () => {
  itSupportsClassName(TypographyStylesProvider, defaultProps);
  itSupportsStyle(TypographyStylesProvider, defaultProps);
  itSupportsOthers(TypographyStylesProvider, defaultProps);
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsMargins(TypographyStylesProvider, defaultProps);
  itSupportsSx(TypographyStylesProvider, defaultProps);
  itSupportsRef(TypographyStylesProvider, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(TypographyStylesProvider.displayName).toEqual('@mantine/core/TypographyStylesProvider');
  });
});
