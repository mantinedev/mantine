import { tests } from '@mantine-tests/core';
import {
  CheckboxIndicator,
  CheckboxIndicatorProps,
  CheckboxIndicatorStylesNames,
} from './CheckboxIndicator';

const defaultProps: CheckboxIndicatorProps = {};

describe('@mantine/core/CheckboxIndicator', () => {
  tests.itSupportsSystemProps<CheckboxIndicatorProps, CheckboxIndicatorStylesNames>({
    component: CheckboxIndicator,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/CheckboxIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });
});
