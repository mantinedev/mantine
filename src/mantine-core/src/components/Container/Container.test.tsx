import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Container } from './Container';

const defaultProps = {};

describe('@mantine/core/Container', () => {
  itSupportsClassName(Container, defaultProps);
  itRendersChildren(Container, defaultProps);
  itSupportsOthers(Container, defaultProps);
  itSupportsStyle(Container, defaultProps);
  itSupportsMargins(Container, defaultProps);
  itSupportsSx(Container, defaultProps);
  itSupportsRef(Container, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@mantine/core/Container');
  });
});
