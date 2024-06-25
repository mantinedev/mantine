import { createContextContainer, render, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import {
  ComboboxDropdown,
  ComboboxDropdownProps,
  ComboboxDropdownStylesNames,
} from './ComboboxDropdown';

const TestContainer = createContextContainer(ComboboxDropdown, Combobox, { withinPortal: false });

const defaultProps: ComboboxDropdownProps = {};

describe('@mantine/core/ComboboxDropdown', () => {
  tests.itSupportsSystemProps<ComboboxDropdownProps, ComboboxDropdownStylesNames>({
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
    displayName: '@mantine/core/ComboboxDropdown',
    stylesApiSelectors: ['dropdown'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-dropdown',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxDropdown,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });

  it('sets data-hidden attribute based on hidden prop', () => {
    const { container, rerender } = render(<TestContainer hidden>test</TestContainer>);
    expect(container.querySelector('.mantine-Combobox-dropdown')).toHaveAttribute('data-hidden');

    rerender(<TestContainer hidden={false}>test</TestContainer>);
    expect(container.querySelector('.mantine-Combobox-dropdown')).not.toHaveAttribute(
      'data-hidden'
    );
  });
});
