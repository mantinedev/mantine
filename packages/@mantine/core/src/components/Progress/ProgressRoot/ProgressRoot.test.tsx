import { tests } from '@mantine-tests/core';
import { ProgressRoot, ProgressRootProps, ProgressRootStylesNames } from './ProgressRoot';

const defaultProps: ProgressRootProps = {};

describe('@mantine/core/ProgressRoot', () => {
  tests.itSupportsSystemProps<ProgressRootProps, ProgressRootStylesNames>({
    component: ProgressRoot,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ProgressRoot',
    stylesApiSelectors: ['root'],
    stylesApiName: 'Progress',
  });
});
