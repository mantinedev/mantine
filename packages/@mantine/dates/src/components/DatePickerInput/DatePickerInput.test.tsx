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
  expectOpenedPopover,
  expectValue,
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

  it('displays month of defaultDate when the dropdown is opened', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} defaultDate="2021-08-15" />);
    await clickInput(container);
    expect(
      container.querySelector('.mantine-DatePickerInput-calendarHeaderLevel')
    ).toHaveTextContent('August 2021');
  });

  it('displays month of minDate when the current date is before minDate', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} minDate="2100-03-10" />);
    await clickInput(container);
    expect(
      container.querySelector('.mantine-DatePickerInput-calendarHeaderLevel')
    ).toHaveTextContent('March 2100');
  });

  it('displays month of maxDate when the current date is after maxDate', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} maxDate="2000-06-10" />);
    await clickInput(container);
    expect(
      container.querySelector('.mantine-DatePickerInput-calendarHeaderLevel')
    ).toHaveTextContent('June 2000');
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

  it('uses the sm breakpoint for the default dropdownType', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    render(<DatePickerInput {...defaultProps} />);
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

  it('calls onDropdownClose once when the drawer is closed with the submit button', async () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        onDropdownClose={onDropdownClose}
      />
    );

    await clickInput(container);
    await clickControl(container, 0);
    expect(onDropdownClose).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
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

  it('controls the modal dropdown with popoverProps.opened and popoverProps.onChange', async () => {
    const onOpenedChange = jest.fn();

    function Controlled() {
      const [opened, setOpened] = useState(false);
      return (
        <DatePickerInput
          {...defaultProps}
          dropdownType="modal"
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

    await clickInput(container);
    expect(onOpenedChange).toHaveBeenLastCalledWith(true);
    expect(container.querySelector('.mantine-Modal-content')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onOpenedChange).toHaveBeenLastCalledWith(false);
    expect(container.querySelector('.mantine-Modal-content')).not.toBeInTheDocument();
  });

  describe('valueDisplay="pills"', () => {
    const pillsProps = {
      ...defaultProps,
      type: 'multiple' as const,
      valueDisplay: 'pills' as const,
      dropdownType: 'popover' as const,
      valueFormat: 'MMM D',
      label: 'Dates',
    };

    it('renders a pill per selected date instead of the joined text', () => {
      render(<DatePickerInput {...pillsProps} value={['2022-04-11', '2022-05-11']} />);
      expect(screen.getByText('Apr 11')).toBeInTheDocument();
      expect(screen.getByText('May 11')).toBeInTheDocument();
      expect(screen.queryByText('Apr 11, May 11')).not.toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: 'Dates' })).toHaveAttribute('readonly');
    });

    it('shows the placeholder while no date is selected', () => {
      render(<DatePickerInput {...pillsProps} value={[]} placeholder="Pick dates" />);
      expect(screen.getByRole('textbox', { name: 'Dates' })).toHaveAttribute(
        'placeholder',
        'Pick dates'
      );
    });

    it('hides the placeholder when dates are selected', () => {
      render(<DatePickerInput {...pillsProps} value={['2022-04-11']} placeholder="Pick dates" />);
      expect(screen.getByRole('textbox', { name: 'Dates' })).not.toHaveAttribute('placeholder');
    });

    it('removes a date with its pill remove button', async () => {
      const spy = jest.fn();
      render(
        <DatePickerInput {...pillsProps} value={['2022-04-11', '2022-05-11']} onChange={spy} />
      );
      await userEvent.click(screen.getByLabelText('Remove Apr 11'));
      expect(spy).toHaveBeenCalledWith(['2022-05-11']);
    });

    it('removes the last date with Backspace', async () => {
      const spy = jest.fn();
      render(
        <DatePickerInput {...pillsProps} value={['2022-04-11', '2022-05-11']} onChange={spy} />
      );
      screen.getByRole('textbox', { name: 'Dates' }).focus();
      await userEvent.keyboard('{Backspace}');
      expect(spy).toHaveBeenCalledWith(['2022-04-11']);
    });

    it('opens the dropdown on click', async () => {
      const { container } = render(<DatePickerInput {...pillsProps} value={[]} />);
      await clickInput(container);
      expectOpenedPopover(container);
    });

    it('opens the dropdown with Enter on the field', async () => {
      const { container } = render(<DatePickerInput {...pillsProps} value={[]} />);
      screen.getByRole('textbox', { name: 'Dates' }).focus();
      await userEvent.keyboard('{Enter}');
      expectOpenedPopover(container);
    });

    it('does not render remove buttons when readOnly', () => {
      render(<DatePickerInput {...pillsProps} value={['2022-04-11']} readOnly />);
      expect(screen.queryByLabelText('Remove Apr 11')).not.toBeInTheDocument();
    });

    it('ignores valueDisplay with other types', () => {
      const { container } = render(
        <DatePickerInput {...pillsProps} type="default" value="2022-04-11" />
      );
      expectValue(container, 'Apr 11');
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('supports pill, pillsList and inputField Styles API selectors', () => {
      const { container } = render(
        <DatePickerInput
          {...pillsProps}
          value={['2022-04-11']}
          classNames={{ pill: 'test-pill', pillsList: 'test-list', inputField: 'test-field' }}
        />
      );
      expect(container.querySelector('.test-pill')).toBeInTheDocument();
      expect(container.querySelector('.test-list')).toBeInTheDocument();
      expect(container.querySelector('.test-field')).toBeInTheDocument();
    });
  });
});
