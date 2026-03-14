import { createContextContainer, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxGroup, ComboboxGroupProps, ComboboxGroupStylesNames } from './ComboboxGroup';

const TestContainer = createContextContainer(ComboboxGroup, Combobox, { withinPortal: false });

const defaultProps: ComboboxGroupProps = {
  label: 'test-label',
};

describe('@mantine/core/ComboboxGroup', () => {
  tests.itSupportsSystemProps<ComboboxGroupProps, ComboboxGroupStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ComboboxGroup',
    stylesApiSelectors: ['group', 'groupLabel'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-group',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxGroup,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });
});
