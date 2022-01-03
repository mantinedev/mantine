import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Text, TextProps } from './Text';

const defaultProps: TextProps<'div'> = {};

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, defaultProps);
  itIsPolymorphic(Text, defaultProps);
  itSupportsSystemProps({
    component: Text,
    props: defaultProps,
    displayName: '@mantine/core/Text',
    refType: HTMLDivElement,
  });
});
