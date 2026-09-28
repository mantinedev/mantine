import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { InlineDateTimePicker, InlineDateTimePickerProps } from './InlineDateTimePicker';

const defaultProps: InlineDateTimePickerProps = {
  timePickerProps: {
    'aria-label': 'test-time-picker',
    hoursInputLabel: 'test-time-picker-hours',
    secondsInputLabel: 'test-time-picker-seconds',
  },
  submitButtonProps: { 'aria-label': 'test-submit' },
  ariaLabels: {
    monthLevelControl: 'level-control',
    yearLevelControl: 'level-control',
    nextMonth: 'next',
    previousMonth: 'previous',
    nextYear: 'next',
    previousYear: 'previous',
    nextDecade: 'next',
    previousDecade: 'previous',
  },
};

const getTimePicker = () => screen.getByLabelText('test-time-picker-hours');
const getSubmitButton = () => screen.getByLabelText('test-submit');
const getDay = (day: string) =>
  screen.getAllByRole('button').find((btn) => btn.textContent === day)!;

describe('@mantine/dates/InlineDateTimePicker', () => {
  tests.axe([
    <InlineDateTimePicker
      aria-label="test-label"
      submitButtonProps={{ 'aria-label': 'submit' }}
      {...defaultProps}
      key="1"
    />,
    <InlineDateTimePicker
      aria-label="test-label"
      defaultValue="2022-04-11"
      submitButtonProps={{ 'aria-label': 'submit' }}
      {...defaultProps}
      key="2"
    />,
  ]);

  tests.itSupportsSystemProps<InlineDateTimePickerProps>({
    component: InlineDateTimePicker,
    props: defaultProps,
    displayName: '@mantine/dates/InlineDateTimePicker',
    variant: false,
    size: false,
  });

  it('supports uncontrolled state (default type)', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" onChange={spy} />);
    expect(getDay('11')).toHaveAttribute('data-selected');

    await userEvent.click(getDay('3'));

    expect(spy).toHaveBeenLastCalledWith('2022-04-03 00:00:00');
    expect(getDay('3')).toHaveAttribute('data-selected');
    expect(getDay('11')).not.toHaveAttribute('data-selected');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} value="2022-04-11" onChange={spy} />);

    await userEvent.click(getDay('3'));

    expect(spy).toHaveBeenLastCalledWith('2022-04-03 00:00:00');
    expect(getDay('11')).toHaveAttribute('data-selected');
    expect(getDay('3')).not.toHaveAttribute('data-selected');
  });

  it('focuses TimePicker after date selection', async () => {
    render(<InlineDateTimePicker {...defaultProps} />);
    const dayButton = screen.getAllByRole('button').find((btn) => btn.textContent === '1');
    await userEvent.click(dayButton!);
    expect(getTimePicker()).toHaveFocus();
  });

  it('calls onSubmit when submit button is clicked', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" onSubmit={spy} />);
    await userEvent.click(getSubmitButton());
    expect(spy).toHaveBeenCalled();
  });

  it('handles time change', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" onChange={spy} />);

    await userEvent.clear(getTimePicker());
    await userEvent.type(getTimePicker(), '14');

    expect(spy).toHaveBeenLastCalledWith('2022-04-11 14:00:00');
  });

  it('supports withSeconds prop', () => {
    const { rerender } = render(
      <InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11 14:45:54" />
    );
    expect(screen.queryByLabelText('test-time-picker-seconds')).not.toBeInTheDocument();

    rerender(
      <InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11 14:45:54" withSeconds />
    );
    expect(screen.getByLabelText('test-time-picker-seconds')).toHaveValue('54');
  });

  it('sets preset value verbatim including its time', async () => {
    const spy = jest.fn();
    render(
      <InlineDateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11 10:00:00"
        onChange={spy}
        presets={[{ label: 'Custom preset', value: '2022-05-12 09:15:30' }]}
      />
    );

    await userEvent.click(screen.getByText('Custom preset'));
    expect(spy).toHaveBeenLastCalledWith('2022-05-12 09:15:30');
    expect(screen.getByLabelText('level-control').textContent).toBe('May 2022');
  });

  it('calls onSubmit when Enter is pressed in the hours field', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" onSubmit={spy} />);
    await userEvent.type(getTimePicker(), '{Enter}');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('range type', () => {
    const rangeProps: any = {
      ...defaultProps,
      type: 'range',
      endTimePickerProps: {
        'aria-label': 'test-end-time-picker',
        hoursInputLabel: 'test-end-time-picker-hours',
      },
    };

    it('renders two TimePickers in range mode', () => {
      render(<InlineDateTimePicker {...rangeProps} defaultValue={['2022-04-11', '2022-04-15']} />);
      expect(screen.getByLabelText('test-time-picker-hours')).toBeInTheDocument();
      expect(screen.getByLabelText('test-end-time-picker-hours')).toBeInTheDocument();
    });

    it('supports uncontrolled range state', async () => {
      const spy = jest.fn();
      render(<InlineDateTimePicker {...rangeProps} defaultDate="2022-04-01" onChange={spy} />);

      const dayButtons = screen
        .getAllByRole('button')
        .filter((btn) => btn.getAttribute('data-outside') === null && btn.closest('table'));
      const firstDay = dayButtons.find((btn) => btn.textContent === '1');
      const lastDay = dayButtons.find((btn) => btn.textContent === '15');

      await userEvent.click(firstDay!);
      expect(spy).toHaveBeenLastCalledWith(['2022-04-01 00:00:00', null]);

      await userEvent.click(lastDay!);
      expect(spy).toHaveBeenLastCalledWith(['2022-04-01 00:00:00', '2022-04-15 00:00:00']);
      expect(firstDay).toHaveAttribute('data-first-in-range');
      expect(lastDay).toHaveAttribute('data-last-in-range');
    });

    it('supports controlled range state', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker {...rangeProps} value={['2022-04-11', '2022-04-15']} onChange={spy} />
      );

      await userEvent.click(getDay('20'));

      expect(spy).toHaveBeenLastCalledWith(['2022-04-20 00:00:00', null]);
      expect(getDay('11')).toHaveAttribute('data-first-in-range');
      expect(getDay('15')).toHaveAttribute('data-last-in-range');
      expect(getDay('20')).not.toHaveAttribute('data-selected');
    });

    it('displays range info text', () => {
      const { container } = render(
        <InlineDateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11 14:30:00', '2022-04-15 16:00:00']}
        />
      );

      const rangeInfo = container.querySelector('.mantine-InlineDateTimePicker-rangeInfo');
      expect(rangeInfo).toBeInTheDocument();
      expect(rangeInfo!.textContent).toContain('11/04/2022');
      expect(rangeInfo!.textContent).toContain('15/04/2022');
    });

    it('calls onSubmit in range mode', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11', '2022-04-15']}
          onSubmit={spy}
        />
      );

      await userEvent.click(getSubmitButton());
      expect(spy).toHaveBeenCalled();
    });

    it('does not call onSubmit when Enter is pressed with an incomplete range', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11 10:00:00', null]}
          onSubmit={spy}
        />
      );

      await userEvent.type(screen.getByLabelText('test-time-picker-hours'), '{Enter}');
      expect(spy).not.toHaveBeenCalled();
    });

    it('handles start time change in range mode', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11', '2022-04-15']}
          onChange={spy}
        />
      );

      await userEvent.clear(screen.getByLabelText('test-time-picker-hours'));
      await userEvent.type(screen.getByLabelText('test-time-picker-hours'), '14');

      expect(spy).toHaveBeenLastCalledWith(['2022-04-11 14:00:00', '2022-04-15 00:00:00']);
    });

    it('handles end time change in range mode', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11', '2022-04-15']}
          onChange={spy}
        />
      );

      await userEvent.clear(screen.getByLabelText('test-end-time-picker-hours'));
      await userEvent.type(screen.getByLabelText('test-end-time-picker-hours'), '16');

      expect(spy).toHaveBeenLastCalledWith(['2022-04-11 00:00:00', '2022-04-15 16:00:00']);
    });
  });
});
