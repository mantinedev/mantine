import { createContextContainer, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import {
  ComboboxOptions,
  ComboboxOptionsProps,
  ComboboxOptionsStylesNames,
} from './ComboboxOptions';

const TestContainer = createContextContainer(ComboboxOptions, Combobox, { withinPortal: false });

const defaultProps: ComboboxOptionsProps = {};

describe('@mantine/core/ComboboxOptions', () => {
  tests.itSupportsSystemProps<ComboboxOptionsProps, ComboboxOptionsStylesNames>({
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
    displayName: '@mantine/core/ComboboxOptions',
    stylesApiSelectors: ['options'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-options',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxOptions,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });
});
