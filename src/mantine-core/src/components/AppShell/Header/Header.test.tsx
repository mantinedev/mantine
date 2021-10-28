import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { Header } from './Header';

const defaultProps = { children: 'test-header' };

describe('@mantine/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsClassName(Header, defaultProps);
  itSupportsMargins(Header, defaultProps);
  itSupportsOthers(Header, defaultProps);
  itSupportsStyle(Header, defaultProps);
  itSupportsRef(Header, defaultProps, HTMLElement);

  it('has correct displayName', () => {
    expect(Header.displayName).toEqual('@mantine/core/Header');
  });
});
