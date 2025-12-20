import { tests } from '@mantine-tests/core';
import { VisuallyHidden, VisuallyHiddenProps, VisuallyHiddenStylesNames } from './VisuallyHidden';

const defaultProps: VisuallyHiddenProps = {};

describe('@mantine/core/VisuallyHidden', () => {
  tests.itSupportsSystemProps<VisuallyHiddenProps, VisuallyHiddenStylesNames>({
    component: VisuallyHidden,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/VisuallyHidden',
    stylesApiSelectors: ['root'],
  });
});
