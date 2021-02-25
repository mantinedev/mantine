import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Container } from './Container';

describe('@mantine/core/Container', () => {
  itSupportsClassName(Container, {});
  itRendersChildren(Container, {});
  itSupportsOthers(Container, {});
  itSupportsStyle(Container, {});

  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@mantine/core/Container');
  });
});
