import { createContextContainer, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxHeader, ComboboxHeaderProps, ComboboxHeaderStylesNames } from './ComboboxHeader';

const TestContainer = createContextContainer(ComboboxHeader, Combobox, { withinPortal: false });

const defaultProps: ComboboxHeaderProps = {};

describe('@mantine/core/ComboboxHeader', () => {
  tests.itSupportsSystemProps<ComboboxHeaderProps, ComboboxHeaderStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ComboboxHeader',
    stylesApiSelectors: ['header'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-header',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxHeader,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });
});
