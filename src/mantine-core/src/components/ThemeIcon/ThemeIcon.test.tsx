import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { ThemeIcon } from './ThemeIcon';

describe('@mantine/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, {});
  itSupportsClassName(ThemeIcon, {});
  itSupportsOthers(ThemeIcon, {});
  itSupportsStyle(ThemeIcon, {});
  itSupportsMargins(ThemeIcon, {});

  it('has correct displayName', () => {
    expect(ThemeIcon.displayName).toEqual('@mantine/core/ThemeIcon');
  });
});
