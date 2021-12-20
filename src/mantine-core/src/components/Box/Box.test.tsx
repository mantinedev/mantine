import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itIsPolymorphic,
} from '@mantine/tests';
import { Box } from './Box';

const defaultProps = {};

describe('@mantine/core/Box', () => {
  itSupportsClassName(Box, defaultProps);
  itRendersChildren(Box, defaultProps);
  itSupportsMargins(Box, defaultProps);
  itSupportsOthers(Box, defaultProps);
  itSupportsStyle(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsRef(Box, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Box.displayName).toEqual('MantineBox');
  });
});
