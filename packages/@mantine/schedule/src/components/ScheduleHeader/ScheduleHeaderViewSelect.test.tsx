import { render, screen, tests } from '@mantine-tests/core';
import {
  ScheduleHeaderViewSelect,
  ScheduleHeaderViewSelectProps,
  ScheduleHeaderViewSelectStylesNames,
} from './ScheduleHeaderViewSelect';

const defaultProps: ScheduleHeaderViewSelectProps = {
  views: ['day', 'week', 'month', 'year'],
  value: 'month',
  onChange: () => {},
};

describe('@mantine/schedule/ScheduleHeaderViewSelect', () => {
  tests.itSupportsSystemProps<ScheduleHeaderViewSelectProps, ScheduleHeaderViewSelectStylesNames>({
    component: ScheduleHeaderViewSelect,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/ScheduleHeaderViewSelect',
    stylesApiSelectors: ['headerViewSelect'],
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(
      <ScheduleHeaderViewSelect {...defaultProps} __staticSelector="Test" />
    );
    expect(container.querySelector('.mantine-Test-headerViewSelect')).toBeInTheDocument();
  });

  it('renders given views controls', () => {
    const allViews = ['day', 'week', 'month', 'year'] as const;
    const partialViews = ['day', 'month'] as const;

    const { rerender } = render(<ScheduleHeaderViewSelect {...defaultProps} views={allViews} />);
    expect(screen.getAllByRole('button', { name: /Switch to/ })).toHaveLength(allViews.length);
    allViews.forEach((view) => {
      expect(screen.getByRole('button', { name: `Switch to ${view} view` })).toBeInTheDocument();
    });

    rerender(<ScheduleHeaderViewSelect {...defaultProps} views={partialViews} />);
    expect(screen.getAllByRole('button', { name: /Switch to/ })).toHaveLength(partialViews.length);
    partialViews.forEach((view) => {
      expect(screen.getByRole('button', { name: `Switch to ${view} view` })).toBeInTheDocument();
    });
  });

  it('highlights the selected view control', () => {
    render(
      <ScheduleHeaderViewSelect {...defaultProps} views={['day', 'week', 'month']} value="week" />
    );
    const weekControl = screen.getByRole('button', { name: 'Switch to week view' });
    expect(weekControl).toHaveAttribute('data-active');
  });

  it('calls onChange when a view control is clicked', () => {
    const spy = jest.fn();
    render(
      <ScheduleHeaderViewSelect
        {...defaultProps}
        views={['day', 'week', 'month']}
        value="day"
        onChange={spy}
      />
    );

    const weekControl = screen.getByRole('button', { name: 'Switch to week view' });
    weekControl.click();
    expect(spy).toHaveBeenCalledWith('week');
  });
});
