import { render, screen, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { PickerInputBase, PickerInputBaseProps } from './PickerInputBase';

const noop = () => {};

const defaultProps: PickerInputBaseProps = {
  dropdownOpened: false,
  dropdownHandlers: { open: noop, close: noop, toggle: noop },
  formattedValue: 'test-value',
  __staticSelector: 'PickerInputBase',
  children: 'test-children',
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
  popoverProps: { transitionProps: { duration: 0 }, withinPortal: false },
  onClear: noop,
  shouldClear: true,
  type: 'default',
  value: null,
};

describe('@mantine/dates/PickerInputBase', () => {
  datesTests.itSupportsClearableProps({ component: PickerInputBase, props: defaultProps });

  it('supports __staticSelector', () => {
    const { container } = render(
      <PickerInputBase {...defaultProps} __staticSelector="TestStaticSelector" />
    );
    expect(container.querySelector('*:not(style)')).toHaveClass('mantine-TestStaticSelector-root');
    expect(screen.getByText('test-value')).toHaveClass('mantine-TestStaticSelector-input');
  });

  it('changes between Popover and Modal based on dropdownType prop', () => {
    const { rerender, container } = render(
      <PickerInputBase {...defaultProps} dropdownOpened dropdownType="popover" />
    );

    expect(container.querySelector('.mantine-Popover-dropdown')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Modal-content')).not.toBeInTheDocument();
    expect(screen.getByText('test-children')).toBeInTheDocument();

    rerender(<PickerInputBase {...defaultProps} dropdownOpened dropdownType="modal" />);
    expect(container.querySelector('.mantine-Popover-dropdown')).not.toBeInTheDocument();
    expect(container.querySelector('.mantine-Modal-content')).toBeInTheDocument();
    expect(screen.getByText('test-children')).toBeInTheDocument();
  });

  it('supports onClick handler', async () => {
    const spy = jest.fn();
    render(<PickerInputBase {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByText('test-value'));
    expect(spy).toHaveBeenCalled();
  });

  it('displays placeholder if formattedValue is not provided', () => {
    const { rerender } = render(
      <PickerInputBase {...defaultProps} formattedValue={null} placeholder="test-placeholder" />
    );

    expect(screen.getByText('test-placeholder')).toBeInTheDocument();
    rerender(
      <PickerInputBase
        {...defaultProps}
        formattedValue="test-value"
        placeholder="test-placeholder"
      />
    );
    expect(screen.getByText('test-value')).toBeInTheDocument();
    expect(screen.queryAllByText('test-placeholder')).toHaveLength(0);
  });

  it('renders clear button if both clearable and shouldClear props are set', () => {
    const { rerender } = render(
      <PickerInputBase
        {...defaultProps}
        clearable
        shouldClear
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );

    expect(screen.getByLabelText('test-clear')).toBeInTheDocument();

    rerender(
      <PickerInputBase
        {...defaultProps}
        clearable={false}
        shouldClear
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );

    expect(screen.queryAllByLabelText('test-clear')).toHaveLength(0);

    rerender(
      <PickerInputBase
        {...defaultProps}
        clearable
        shouldClear={false}
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );

    expect(screen.queryAllByLabelText('test-clear')).toHaveLength(0);
  });

  it('calls onClear when clear button is clicked', async () => {
    const spy = jest.fn();

    render(
      <PickerInputBase
        {...defaultProps}
        clearable
        shouldClear
        onClear={spy}
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );

    await userEvent.click(screen.getByLabelText('test-clear'));
    expect(spy).toHaveBeenCalled();
  });
});
