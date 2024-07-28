import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxOption, ComboboxOptionProps, ComboboxOptionStylesNames } from './ComboboxOption';

const TestContainer = createContextContainer(ComboboxOption, Combobox, { withinPortal: false });

const defaultProps: ComboboxOptionProps = {
  value: 'test',
};

describe('@mantine/core/ComboboxOption', () => {
  tests.itSupportsSystemProps<ComboboxOptionProps, ComboboxOptionStylesNames>({
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
    displayName: '@mantine/core/ComboboxOption',
    stylesApiSelectors: ['option'],
    stylesApiName: 'Combobox',
    selector: '.mantine-Combobox-option',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxOption,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });

  it('sets data-combobox-active attribute based on active prop', () => {
    const { rerender } = render(<TestContainer {...defaultProps} active />);
    expect(screen.getByRole('option')).toHaveAttribute('data-combobox-active');

    rerender(<TestContainer {...defaultProps} active={false} />);
    expect(screen.getByRole('option')).not.toHaveAttribute('data-combobox-active');
  });

  it('sets data-combobox-selected attribute based on selected prop', () => {
    const { rerender } = render(<TestContainer {...defaultProps} selected />);
    expect(screen.getByRole('option')).toHaveAttribute('data-combobox-selected');

    rerender(<TestContainer {...defaultProps} selected={false} />);
    expect(screen.getByRole('option')).not.toHaveAttribute('data-combobox-selected');
  });

  it('sets data-combobox-disabled attribute based on disabled prop', () => {
    const { rerender } = render(<TestContainer {...defaultProps} disabled />);
    expect(screen.getByRole('option')).toHaveAttribute('data-combobox-disabled');

    rerender(<TestContainer {...defaultProps} disabled={false} />);
    expect(screen.getByRole('option')).not.toHaveAttribute('data-combobox-disabled');
  });

  it('calls onClick when the option is clicked', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);

    await userEvent.click(screen.getByRole('option'));
    expect(spy).toHaveBeenCalled();
  });

  it('calls onMouseDown when the option is clicked', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onMouseDown={spy} />);

    await userEvent.click(screen.getByRole('option'));
    expect(spy).toHaveBeenCalled();
  });

  it('calls onMouseOver when the option is hovered', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onMouseOver={spy} />);

    await userEvent.hover(screen.getByRole('option'));
    expect(spy).toHaveBeenCalled();
  });
});
