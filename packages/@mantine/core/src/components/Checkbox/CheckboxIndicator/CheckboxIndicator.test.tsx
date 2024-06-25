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
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CheckboxIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });
});
