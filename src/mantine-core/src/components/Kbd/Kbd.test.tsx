import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Kbd } from './Kbd';

const defaultProps = { children: 'test' };

describe('@mantine/core/Kbd', () => {
  itSupportsStyle(Kbd, defaultProps);
  itSupportsOthers(Kbd, defaultProps);
  itSupportsClassName(Kbd, defaultProps);
  itSupportsMargins(Kbd, defaultProps);
  itRendersChildren(Kbd, defaultProps);
  itSupportsSx(Kbd, defaultProps);
  itSupportsRef(Kbd, defaultProps, HTMLElement);

  it('has correct displayName', () => {
    expect(Kbd.displayName).toEqual('@mantine/core/Kbd');
  });
});
