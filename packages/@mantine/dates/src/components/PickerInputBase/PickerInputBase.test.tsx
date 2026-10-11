import { render, screen, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DatePickerInput } from '../DatePickerInput';
import { DateTimePicker } from '../DateTimePicker';
import { MonthPickerInput } from '../MonthPickerInput';
import { QuarterPickerInput } from '../QuarterPickerInput';
import { WeekPickerInput } from '../WeekPickerInput';
import { YearPickerInput } from '../YearPickerInput';
import { PickerInputBase, PickerInputBaseProps } from './PickerInputBase';

const noop = () => {};

const defaultProps: PickerInputBaseProps = {
  dropdownOpened: false,
  dropdownType: 'popover',
  dropdownHandlers: { open: noop, close: noop, toggle: noop, set: noop },
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

  it('does not render clear button when input is disabled or read only', () => {
    const { rerender } = render(
      <PickerInputBase
        {...defaultProps}
        clearable
        shouldClear
        disabled
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();

    rerender(
      <PickerInputBase
        {...defaultProps}
        clearable
        shouldClear
        readOnly
        clearButtonProps={{ 'aria-label': 'test-clear' }}
      />
    );
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();
  });

  it('sets data-read-only and does not render dropdown when read only', () => {
    const { container, rerender } = render(
      <PickerInputBase {...defaultProps} dropdownOpened readOnly />
    );
    expect(screen.getByText('test-value')).toHaveAttribute('data-read-only');
    expect(container.querySelector('.mantine-Popover-dropdown')).not.toBeInTheDocument();

    rerender(<PickerInputBase {...defaultProps} dropdownOpened dropdownType="modal" readOnly />);
    expect(container.querySelector('.mantine-Modal-content')).not.toBeInTheDocument();
  });

  it('does not open dropdown when picker input is disabled or read only', async () => {
    const { rerender } = render(
      <DatePickerInput disabled popoverProps={{ withinPortal: false }} />
    );
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    rerender(<DatePickerInput readOnly popoverProps={{ withinPortal: false }} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('data-read-only');
  });

  it('does not reference popover dropdown from the trigger in modal mode', () => {
    const { rerender } = render(<PickerInputBase {...defaultProps} dropdownType="modal" />);
    const trigger = screen.getByText('test-value');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    rerender(<PickerInputBase {...defaultProps} dropdownType="modal" dropdownOpened />);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const controlled = document.getElementById(trigger.getAttribute('aria-controls')!);
    expect(controlled).toHaveTextContent('test-children');
    expect(controlled!.closest('[data-dates-modal]')).not.toBeNull();
  });

  it('labels popover dropdown with the trigger and marks it as modal', () => {
    render(<PickerInputBase {...defaultProps} dropdownOpened label="Pick date" />);
    const dialog = screen.getByRole('dialog');
    const trigger = screen.getByRole('button', { name: 'Pick date' });
    expect(dialog).toHaveAttribute('aria-labelledby', trigger.id);
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('dialog', { name: 'Pick date' })).toBe(dialog);
  });

  it('references popover dropdown from the trigger in popover mode', () => {
    const { container } = render(<PickerInputBase {...defaultProps} dropdownOpened />);
    const trigger = screen.getByText('test-value');
    const dropdown = container.querySelector('.mantine-Popover-dropdown')!;
    expect(trigger).toHaveAttribute('aria-controls', dropdown.id);
  });

  it.each([
    ['DatePickerInput', DatePickerInput],
    ['MonthPickerInput', MonthPickerInput],
    ['YearPickerInput', YearPickerInput],
    ['WeekPickerInput', WeekPickerInput],
    ['QuarterPickerInput', QuarterPickerInput],
    ['DateTimePicker', DateTimePicker],
  ] as [string, any][])(
    '%s does not call onDateChange when the dropdown reopens on the displayed date',
    async (_, Component) => {
      const onDateChange = jest.fn();
      const { unmount } = render(
        <Component
          label="picker"
          defaultValue="2024-05-06"
          onDateChange={onDateChange}
          popoverProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        />
      );

      await userEvent.click(screen.getByLabelText('picker'));
      await userEvent.click(screen.getByLabelText('picker'));
      await userEvent.click(screen.getByLabelText('picker'));
      expect(onDateChange).not.toHaveBeenCalled();
      unmount();

      render(
        <Component
          label="picker"
          onDateChange={onDateChange}
          popoverProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        />
      );

      await userEvent.click(screen.getByLabelText('picker'));
      await userEvent.click(screen.getByLabelText('picker'));
      await userEvent.click(screen.getByLabelText('picker'));
      expect(onDateChange).toHaveBeenCalledTimes(1);
    }
  );
});
