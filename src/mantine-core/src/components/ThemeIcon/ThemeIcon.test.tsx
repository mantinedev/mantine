import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { ThemeIcon } from './ThemeIcon';

const defaultProps = {};

describe('@mantine/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsClassName(ThemeIcon, defaultProps);
  itSupportsOthers(ThemeIcon, defaultProps);
  itSupportsStyle(ThemeIcon, defaultProps);
  itSupportsMargins(ThemeIcon, defaultProps);
  itSupportsSx(ThemeIcon, defaultProps);
  itSupportsRef(ThemeIcon, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(ThemeIcon.displayName).toEqual('@mantine/core/ThemeIcon');
  });
});
