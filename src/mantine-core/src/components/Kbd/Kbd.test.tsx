import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
} from '@mantine/tests';
import { Kbd } from './Kbd';

describe('@mantine/core/Kbd', () => {
  itSupportsStyle(Kbd, { children: 'test' });
  itSupportsOthers(Kbd, { children: 'test' });
  itSupportsClassName(Kbd, { children: 'test' });
  itRendersChildren(Kbd, {});

  it('has correct displayName', () => {
    expect(Kbd.displayName).toEqual('@mantine/core/Kbd');
  });
});
