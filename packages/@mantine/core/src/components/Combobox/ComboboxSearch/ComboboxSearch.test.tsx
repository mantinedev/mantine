import { createContextContainer, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxSearch, ComboboxSearchProps, ComboboxSearchStylesNames } from './ComboboxSearch';

const TestContainer = createContextContainer(ComboboxSearch, Combobox, { withinPortal: false });

const defaultProps: ComboboxSearchProps = {
  leftSection: '$',
};

describe('@mantine/core/ComboboxSearch', () => {
  tests.itSupportsSystemProps<ComboboxSearchProps, ComboboxSearchStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/ComboboxSearch',
    stylesApiSelectors: ['input', 'section', 'wrapper'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-wrapper',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxSearch,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });

  tests.itSupportsFocusEvents({
    component: TestContainer,
    props: defaultProps,
    selector: '.mantine-Combobox-input',
  });
});
