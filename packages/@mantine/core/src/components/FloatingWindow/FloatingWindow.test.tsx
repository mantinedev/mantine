import { tests } from '@mantine-tests/core';
import { FloatingWindow, FloatingWindowProps, FloatingWindowStylesNames } from './FloatingWindow';

const defaultProps: FloatingWindowProps = {};

describe('@mantine/core/FloatingWindow', () => {
  tests.itSupportsSystemProps<FloatingWindowProps, FloatingWindowStylesNames>({
    component: FloatingWindow,
    props: defaultProps,
    polymorphic: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    displayName: '@mantine/core/FloatingWindow',
    stylesApiSelectors: ['root'],
  });
});
