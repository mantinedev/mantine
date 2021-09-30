import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsMargins,
} from '@mantine/tests';
import { Group } from './Group';

describe('@mantine/core/Group', () => {
  itSupportsOthers(Group, {});
  itSupportsClassName(Group, {});
  itSupportsStyle(Group, {});
  itRendersChildren(Group, {});
  itSupportsMargins(Group, {});

  it('has correct displayName', () => {
    expect(Group.displayName).toEqual('@mantine/core/Group');
  });
});
