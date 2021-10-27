import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { Box } from './Box';

describe('@mantine/core/Box', () => {
  itSupportsClassName(Box, {});
  itRendersChildren(Box, {});
  itSupportsMargins(Box, {});
  itSupportsOthers(Box, {});
  itSupportsStyle(Box, {});
  itSupportsRef(Box, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Box.displayName).toEqual('@mantine/core/Box');
  });
});
