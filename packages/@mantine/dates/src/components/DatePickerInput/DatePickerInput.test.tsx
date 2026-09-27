import { useState } from 'react';
import { act } from '@testing-library/react';
import { __InputStylesNames } from '@mantine/core';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  mockMatchMedia,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import {
  clickControl,
  clickInput,
  datesTests,
  expectValue,
  getInputValue,
} from '@mantine-tests/dates';
import { DatesProvider } from '../DatesProvider';
import { DatePickerInput, DatePickerInputProps } from './DatePickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/DatePickerInput', () => {
  tests.axe([
    <DatePickerInput aria-label="test-label" key="1" />,
    <DatePickerInput aria-label="test-label" error key="2" />,
    <DatePickerInput aria-label="test-label" error="test-error" id="test" key="3" />,
    <DatePickerInput aria-label="test-label" description="test-description" key="4" />,
  ]);

  tests.itSupportsSystemProps<DatePickerInputProps, __InputStylesNames>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    displayName: '@mantine/dates/DatePickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    componentName: 'DatePickerInput',
  });

  datesTests.itSupportsDateInputProps({ component: DatePickerInput, props: defaultProps });
  datesTests.itSupportsClearableProps({
    component: DatePickerInput,
    props: { ...defaultProps, defaultValue: '2022-04-11' },
  });
  datesTests.itSupportsYearsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'year',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <DatePickerInput {...defaultProps} valueFormat="MMMM" value="2022-04-11" />
    );
    expectValue(container, 'April');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={['2022-04-11', '2022-05-11']}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="range"
        valueFormat="MMMM"
        value={['2022-04-11', '2022-05-11']}
      />
    );
    expectValue(container, 'April – May');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DatePickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DatePickerInput-day');
  });

  it('returns focus to the input when the dropdown is closed after keyboard selection', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} defaultDate="2022-04-11" />);
    await clickInput(container);
    const day = container.querySelector<HTMLButtonElement>('table button')!;
    day.focus();
    await userEvent.keyboard('{Enter}');
    expectValue(container, 'March 28, 2022');
    expect(container.querySelector('[data-dates-input]')).toHaveFocus();
  });

  it('does not return focus to the input when the dropdown is closed after mouse selection', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} defaultDate="2022-04-11" />);
    await clickInput(container);
    await clickControl(container, 0);
    expectValue(container, 'March 28, 2022');
    expect(container.querySelector('[data-dates-input]')).not.toHaveFocus();
  });

  it('sets data-with-presets attribute on the dropdown when presets are provided', async () => {
    const { container, rerender } = render(
      <DatePickerInput {...defaultProps} presets={[{ label: 'Today', value: '2022-04-11' }]} />
    );
    await clickInput(container);
    expect(container.querySelector('[data-dates-dropdown]')).toHaveAttribute('data-with-presets');

    rerender(<DatePickerInput {...defaultProps} />);
    expect(container.querySelector('[data-dates-dropdown]')).not.toHaveAttribute(
      'data-with-presets'
    );
  });

  it('supports controlled state (dropdown click)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePickerInput {...defaultProps} value="2022-04-11" onChange={spy} />
    );
    await clickInput(container);
    await clickControl(container, 4);
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenCalledWith('2022-04-01');
  });

  it('marks dropdown controls with data-mantine-stop-propagation for popover dropdown', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} />);
    await clickInput(container);

    expect(container.querySelector('table button')).toHaveAttribute(
      'data-mantine-stop-propagation'
    );
    expect(container.querySelector('[data-level-control]')).toHaveAttribute(
      'data-mantine-stop-propagation'
    );
  });
});

describe('@mantine/dates/DatePickerInput responsive dropdownType', () => {
  const isMinWidthQuery = (query: string) => query.includes('min-width');
  let media: ReturnType<typeof mockMatchMedia>;

  afterEach(() => {
    media?.restore();
  });

  it('renders drawer below sm breakpoint by default', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        presets={[{ value: '2022-04-11', label: 'Test preset' }]}
      />
    );

    await clickInput(container);
    expect(container.querySelector('.mantine-Drawer-content')).toBeInTheDocument();
    expect(container.querySelector('[data-dates-dropdown]')).not.toBeInTheDocument();
    expect(container.querySelector('[data-preset]')).toHaveAttribute('data-layout', 'sheet');
    expect(container.querySelector('[data-full-width]')).toBeInTheDocument();
    expect(media.queries).toEqual(['(min-width: 48em)']);
  });

  it('renders popover above sm breakpoint by default', async () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(<DatePickerInput {...defaultProps} />);

    await clickInput(container);
    expect(container.querySelector('[data-dates-dropdown]')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it('switches between drawer and popover when the viewport changes', async () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        dropdownType={{ base: 'drawer', 600: 'popover' }}
      />
    );

    expect(media.queries).toEqual(['(min-width: 37.5em)']);
    await clickInput(container);
    expect(container.querySelector('[data-dates-dropdown]')).toBeInTheDocument();

    act(() => media.setMatches(false));
    expect(container.querySelector('[data-dates-dropdown]')).not.toBeInTheDocument();
    expect(container.querySelector('.mantine-Drawer-content')).toBeInTheDocument();
  });

  it('applies the value only when the submit button is pressed in drawer mode', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onChange = jest.fn();
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        onChange={onChange}
        onDropdownClose={onDropdownClose}
        placeholder="test-placeholder"
      />
    );

    await clickInput(container);
    await clickControl(container, 0);
    expect(container.querySelector('.mantine-Drawer-content')).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expectValue(container, 'test-placeholder');

    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
    expect(getInputValue(container)).not.toBe('test-placeholder');
  });

  it('discards the draft value when the drawer is dismissed', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onChange = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        onChange={onChange}
        placeholder="test-placeholder"
      />
    );

    await clickInput(container);
    await clickControl(container, 0);
    await userEvent.keyboard('{Escape}');
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expectValue(container, 'test-placeholder');
  });

  it('resets the draft when the controlled value changes while the drawer is open', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onChange = jest.fn();
    const { container, rerender } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        value="2022-04-11"
        onChange={onChange}
      />
    );

    await clickInput(container);
    await clickControl(container, 0);
    rerender(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        value="2022-04-20"
        onChange={onChange}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onChange).not.toHaveBeenCalled();
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it('applies the value on selection in drawer mode when applyOnSubmit is false', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onChange = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        onChange={onChange}
        applyOnSubmit={false}
      />
    );

    await clickInput(container);
    expect(screen.queryByRole('button', { name: 'Save' })).not.toBeInTheDocument();
    await clickControl(container, 0);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it('disables the submit button while the range is incomplete', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        type="range"
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );

    await clickInput(container);
    expect(screen.getByRole('button', { name: 'Save' })).not.toBeDisabled();
    await clickControl(container, 0);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await clickControl(container, 3);
    expect(screen.getByRole('button', { name: 'Save' })).not.toBeDisabled();
  });

  it('uses submitButtonLabel from props and DatesProvider', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container, rerender } = render(
      <DatesProvider settings={{ submitButtonLabel: 'Apply' }}>
        <DatePickerInput
          {...defaultProps}
          drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        />
      </DatesProvider>
    );

    await clickInput(container);
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument();

    rerender(
      <DatesProvider settings={{ submitButtonLabel: 'Apply' }}>
        <DatePickerInput
          {...defaultProps}
          drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
          submitButtonLabel="Done"
        />
      </DatesProvider>
    );
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
  });

  it('applies the value only when the submit button is pressed in modal mode', async () => {
    const onChange = jest.fn();
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        dropdownType="modal"
        onChange={onChange}
        onDropdownClose={onDropdownClose}
      />
    );

    await clickInput(container);
    await clickControl(container, 0);
    expect(onChange).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('calls consumer drawerProps.onClose together with the picker close handler', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onClose = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 }, onClose }}
      />
    );

    await clickInput(container);
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it('forces a single column in drawer mode', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        numberOfColumns={3}
      />
    );

    await clickInput(container);
    expect(container.querySelectorAll('table')).toHaveLength(1);
  });

  it.each(['drawer', 'modal'] as const)(
    'controls the %s dropdown with popoverProps.opened and popoverProps.onChange',
    async (dropdownType) => {
      media = mockMatchMedia(false, { filter: isMinWidthQuery });
      const onOpenedChange = jest.fn();

      function Controlled() {
        const [opened, setOpened] = useState(false);
        return (
          <DatePickerInput
            {...defaultProps}
            dropdownType={dropdownType}
            drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
            popoverProps={{
              opened,
              onChange: (value) => {
                onOpenedChange(value);
                setOpened(value);
              },
            }}
          />
        );
      }

      const { container } = render(<Controlled />);
      const selector =
        dropdownType === 'drawer' ? '.mantine-Drawer-content' : '.mantine-Modal-content';

      await clickInput(container);
      expect(onOpenedChange).toHaveBeenLastCalledWith(true);
      expect(container.querySelector(selector)).toBeInTheDocument();

      await userEvent.click(screen.getByRole('button', { name: 'Save' }));
      expect(onOpenedChange).toHaveBeenLastCalledWith(false);
      expect(container.querySelector(selector)).not.toBeInTheDocument();
    }
  );
});
