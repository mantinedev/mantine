import { tests } from '@mantine-tests/core';
import { RadioIndicator, RadioIndicatorProps, RadioIndicatorStylesNames } from './RadioIndicator';

const defaultProps: RadioIndicatorProps = {};

describe('@mantine/core/RadioIndicator', () => {
  tests.itSupportsSystemProps<RadioIndicatorProps, RadioIndicatorStylesNames>({
    component: RadioIndicator,
    props: defaultProps,
    displayName: '@mantine/core/RadioIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });
});
