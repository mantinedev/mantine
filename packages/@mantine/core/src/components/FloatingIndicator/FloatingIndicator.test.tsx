import { tests } from '@mantine-tests/core';
import {
  FloatingIndicator,
  FloatingIndicatorProps,
  FloatingIndicatorStylesNames,
} from './FloatingIndicator';

const defaultProps: FloatingIndicatorProps = {
  target: document.createElement('div'),
  parent: document.createElement('div'),
  transitionDuration: 150,
  displayAfterTransitionEnd: false,
};

describe('@mantine/core/FloatingIndicator', () => {
  tests.itSupportsSystemProps<FloatingIndicatorProps, FloatingIndicatorStylesNames>({
    component: FloatingIndicator,
    props: defaultProps,
    varsResolver: true,
    children: true,
    styleProps: false, // Some styles are overridden by style attribute
    displayName: '@mantine/core/FloatingIndicator',
    stylesApiSelectors: ['root'],
  });
});
