import { render, screen, userEvent } from '@mantine-tests/core';
import { ScheduleHeaderBase, ScheduleHeaderBaseProps } from './ScheduleHeaderBase';

const defaultNavigationHandlers = {
  previous: () => '2024-01-14',
  next: () => '2024-01-16',
  today: () => '2024-01-15',
};

const defaultControl = { title: 'Test Title' };

const defaultProps: ScheduleHeaderBaseProps = {
  view: 'day',
  navigationHandlers: defaultNavigationHandlers,
  control: defaultControl,
};

describe('@mantine/schedule/ScheduleHeaderBase', () => {
  it('renders header with title control', () => {
    render(<ScheduleHeaderBase {...defaultProps} control={{ title: 'January 15, 2024' }} />);
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
  });

  it('renders header with monthYearSelect control', () => {
    const { container } = render(
      <ScheduleHeaderBase
        {...defaultProps}
        view="month"
        control={{
          monthYearSelect: {
            yearValue: 2024,
            monthValue: 0,
            onYearChange: () => {},
            onMonthChange: () => {},
          },
        }}
      />
    );

    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectTarget')
    ).toBeInTheDocument();
  });

  it('accepts custom labels', () => {
    render(
      <ScheduleHeaderBase
        {...defaultProps}
        labels={{ previous: 'Prev', next: 'Next', today: 'Now' }}
      />
    );
    expect(screen.getByLabelText('Prev')).toBeInTheDocument();
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByLabelText('Now')).toBeInTheDocument();
  });

  it('accepts onDateChange callback', async () => {
    const onDateChange = jest.fn();

    render(<ScheduleHeaderBase {...defaultProps} onDateChange={onDateChange} />);

    const previousButton = screen.getByLabelText('Previous');
    const nextButton = screen.getByLabelText('Next');
    const todayButton = screen.getByLabelText('Today');

    await userEvent.click(previousButton);
    expect(onDateChange).toHaveBeenCalledWith('2024-01-14');

    await userEvent.click(nextButton);
    expect(onDateChange).toHaveBeenCalledWith('2024-01-16');

    await userEvent.click(todayButton);
    expect(onDateChange).toHaveBeenCalledWith('2024-01-15');
  });

  it('accepts onViewChange callback', async () => {
    const onViewChange = jest.fn();
    render(<ScheduleHeaderBase {...defaultProps} onViewChange={onViewChange} />);
    await userEvent.click(screen.getByRole('tab', { name: /week/i }));
    expect(onViewChange).toHaveBeenCalledWith('week');
  });

  it('accepts control props', () => {
    const { container } = render(
      <ScheduleHeaderBase
        {...defaultProps}
        previousControlProps={{ disabled: true, 'aria-label': 'Custom previous' }}
        nextControlProps={{ disabled: true, 'aria-label': 'Custom next' }}
        todayControlProps={{ disabled: true, 'aria-label': 'Custom today' }}
        viewSelectProps={{ className: 'custom-view-select' }}
      />
    );

    const previousButton = screen.getByLabelText('Custom previous');
    const nextButton = screen.getByLabelText('Custom next');
    const todayButton = screen.getByLabelText('Custom today');
    const viewSelect = container.querySelector('.custom-view-select');

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
    expect(todayButton).toBeDisabled();
    expect(viewSelect).toBeInTheDocument();
  });

  it('accepts and forwards stylesApiProps', () => {
    const stylesApiProps = {
      classNames: { headerControl: 'custom-control' },
    };

    render(<ScheduleHeaderBase {...defaultProps} stylesApiProps={stylesApiProps} />);

    const previousButton = screen.getByLabelText('Previous');
    expect(previousButton).toHaveClass('custom-control');
  });

  it('handles monthYearSelect without months (year view)', () => {
    const { container } = render(
      <ScheduleHeaderBase
        {...defaultProps}
        view="year"
        control={{
          monthYearSelect: {
            withMonths: false,
            yearValue: 2024,
            monthValue: 0,
            onYearChange: () => {},
          },
        }}
      />
    );

    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectTarget')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectControl[data-type="month"]')
    ).not.toBeInTheDocument();
  });
});
