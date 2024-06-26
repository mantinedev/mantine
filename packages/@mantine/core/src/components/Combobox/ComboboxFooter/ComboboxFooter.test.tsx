import { createContextContainer, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxFooter, ComboboxFooterProps, ComboboxFooterStylesNames } from './ComboboxFooter';

const TestContainer = createContextContainer(ComboboxFooter, Combobox, { withinPortal: false });

const defaultProps: ComboboxFooterProps = {};

describe('@mantine/core/ComboboxFooter', () => {
  tests.itSupportsSystemProps<ComboboxFooterProps, ComboboxFooterStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ComboboxFooter',
    stylesApiSelectors: ['footer'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-footer',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxFooter,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });
});
