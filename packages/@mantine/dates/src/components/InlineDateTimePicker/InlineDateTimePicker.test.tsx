import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { InlineDateTimePicker, type InlineDateTimePickerProps } from './InlineDateTimePicker';

const defaultProps: InlineDateTimePickerProps = {
  timePickerProps: {
    'aria-label': 'test-time-picker',
    hoursInputLabel: 'test-time-picker-hours',
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

  it('renders TimePicker and submit button', () => {
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" />);
    expect(getTimePicker()).toBeInTheDocument();
    expect(getSubmitButton()).toBeInTheDocument();
  });

  it('supports uncontrolled state (default type)', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" onChange={spy} />);

    await userEvent.click(screen.getAllByRole('button').find((btn) => btn.textContent === '3')!);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('2022-04-03'));
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<InlineDateTimePicker {...defaultProps} value="2022-04-11" onChange={spy} />);

    await userEvent.click(screen.getAllByRole('button').find((btn) => btn.textContent === '3')!);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('2022-04-03'));
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

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('14'));
  });

  it('supports withSeconds prop', () => {
    render(
      <InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11T14:45:54" withSeconds />
    );
    expect(getTimePicker()).toBeInTheDocument();
  });

  it('allows navigating calendar levels', async () => {
    render(<InlineDateTimePicker {...defaultProps} defaultValue="2022-04-11" />);
    await userEvent.click(screen.getByLabelText('level-control'));
    expect(screen.queryByLabelText('test-time-picker-hours')).not.toBeInTheDocument();
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
      render(<InlineDateTimePicker {...rangeProps} onChange={spy} />);

      const dayButtons = screen
        .getAllByRole('button')
        .filter((btn) => btn.getAttribute('data-outside') === null && btn.closest('table'));
      const firstDay = dayButtons.find((btn) => btn.textContent === '1');
      const lastDay = dayButtons.find((btn) => btn.textContent === '15');

      await userEvent.click(firstDay!);
      expect(spy).toHaveBeenCalled();
      const firstCall = spy.mock.calls[spy.mock.calls.length - 1][0];
      expect(firstCall[0]).toContain('01');

      await userEvent.click(lastDay!);
      const secondCall = spy.mock.calls[spy.mock.calls.length - 1][0];
      expect(secondCall[0]).toBeTruthy();
      expect(secondCall[1]).toBeTruthy();
    });

    it('supports controlled range state', async () => {
      const spy = jest.fn();
      render(
        <InlineDateTimePicker {...rangeProps} value={['2022-04-11', '2022-04-15']} onChange={spy} />
      );

      expect(screen.getByLabelText('test-time-picker-hours')).toBeInTheDocument();
      expect(screen.getByLabelText('test-end-time-picker-hours')).toBeInTheDocument();
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

      expect(spy).toHaveBeenCalled();
      const lastCall = spy.mock.calls[spy.mock.calls.length - 1][0];
      expect(lastCall[0]).toContain('14');
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

      expect(spy).toHaveBeenCalled();
      const lastCall = spy.mock.calls[spy.mock.calls.length - 1][0];
      expect(lastCall[1]).toContain('16');
    });
  });
});
