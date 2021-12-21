import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Text } from './Text';

const defaultProps = {};

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, defaultProps);
  itSupportsStyle(Text, defaultProps);
  itSupportsClassName(Text, defaultProps);
  itSupportsOthers(Text, defaultProps);
  itSupportsMargins(Text, defaultProps);
  itIsPolymorphic(Text, defaultProps, { dive: 1 });
  itSupportsRef(Text, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Text.displayName).toEqual('@mantine/core/Text');
  });
});
