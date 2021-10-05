import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Space } from './Space';

describe('@mantine/core/Space', () => {
  itSupportsClassName(Space, {});
  itSupportsMargins(Space, {});
  itSupportsOthers(Space, {});
  itSupportsStyle(Space, {});
  itSupportsRef(Space, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Space.displayName).toEqual('@mantine/core/Space');
  });
});
