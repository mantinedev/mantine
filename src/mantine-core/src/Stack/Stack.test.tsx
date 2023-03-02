import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsProviderVariant(Stack, defaultProps, 'Stack');
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@mantine/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  });
});
