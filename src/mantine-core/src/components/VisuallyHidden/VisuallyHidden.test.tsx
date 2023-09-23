import { tests } from '@mantine/tests';
import { VisuallyHidden, VisuallyHiddenProps, VisuallyHiddenStylesNames } from './VisuallyHidden';

const defaultProps: VisuallyHiddenProps = {};

describe('@mantine/core/VisuallyHidden', () => {
  tests.itSupportsSystemProps<VisuallyHiddenProps, VisuallyHiddenStylesNames>({
    component: VisuallyHidden,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLSpanElement,
    displayName: '@mantine/core/VisuallyHidden',
    stylesApiSelectors: ['root'],
  });
});
