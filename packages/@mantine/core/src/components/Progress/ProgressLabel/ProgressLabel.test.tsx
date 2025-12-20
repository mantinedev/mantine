import { createContextContainer, tests } from '@mantine-tests/core';
import { ProgressRoot } from '../ProgressRoot/ProgressRoot';
import { ProgressLabel, ProgressLabelProps, ProgressLabelStylesNames } from './ProgressLabel';

const TestContainer = createContextContainer(ProgressLabel, ProgressRoot, {});

const defaultProps: ProgressLabelProps = {};

describe('@mantine/core/ProgressLabel', () => {
  tests.itSupportsSystemProps<ProgressLabelProps, ProgressLabelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/ProgressLabel',
    stylesApiSelectors: ['label'],
    stylesApiName: 'Progress',
    selector: '.mantine-Progress-label',
    compound: true,
    providerStylesApi: false,
  });
});
