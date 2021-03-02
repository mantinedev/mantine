import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  isHasComposableAttribute,
} from '@mantine/tests';
import { ThemeIcon } from './ThemeIcon';

describe('@mantine/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, {});
  itSupportsClassName(ThemeIcon, {});
  itSupportsOthers(ThemeIcon, {});
  itSupportsStyle(ThemeIcon, {});
  isHasComposableAttribute(ThemeIcon, {});

  it('has correct displayName', () => {
    expect(ThemeIcon.displayName).toEqual('@mantine/core/ThemeIcon');
  });
});
