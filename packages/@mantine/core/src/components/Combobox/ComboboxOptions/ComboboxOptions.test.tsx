import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
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
    children: true,
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

  it('is not a Tab stop by default', () => {
    render(<TestContainer />);
    expect(screen.getByRole('listbox')).toHaveAttribute('tabindex', '-1');
  });

  it('lets tabIndex prop override the default', () => {
    render(<TestContainer tabIndex={0} />);
    expect(screen.getByRole('listbox')).toHaveAttribute('tabindex', '0');
  });
});
