import { render, screen, tests } from '@mantine-tests/core';
import { ViewSelect, ViewSelectProps, ViewSelectStylesNames } from './ViewSelect';

const defaultProps: ViewSelectProps = {
  views: ['day', 'week', 'month', 'year'],
  value: 'month',
  onChange: () => {},
};

describe('@mantine/schedule/ViewSelect', () => {
  tests.itSupportsSystemProps<ViewSelectProps, ViewSelectStylesNames>({
    component: ViewSelect,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    displayName: '@mantine/schedule/ViewSelect',
    stylesApiSelectors: ['viewSelect'],
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<ViewSelect {...defaultProps} __staticSelector="Test" />);
    expect(container.querySelector('.mantine-Test-viewSelect')).toBeInTheDocument();
  });

  it('renders given views controls', () => {
    const allViews = ['day', 'week', 'month', 'year'] as const;
    const partialViews = ['day', 'month'] as const;

    const { rerender } = render(<ViewSelect {...defaultProps} views={allViews} />);
    expect(screen.getAllByRole('button', { name: /Switch to/ })).toHaveLength(allViews.length);
    allViews.forEach((view) => {
      expect(screen.getByRole('button', { name: `Switch to ${view} view` })).toBeInTheDocument();
    });

    rerender(<ViewSelect {...defaultProps} views={partialViews} />);
    expect(screen.getAllByRole('button', { name: /Switch to/ })).toHaveLength(partialViews.length);
    partialViews.forEach((view) => {
      expect(screen.getByRole('button', { name: `Switch to ${view} view` })).toBeInTheDocument();
    });
  });

  it('highlights the selected view control', () => {
    render(<ViewSelect {...defaultProps} views={['day', 'week', 'month']} value="week" />);
    const weekControl = screen.getByRole('button', { name: 'Switch to week view' });
    expect(weekControl).toHaveAttribute('data-active');
  });

  it('calls onChange when a view control is clicked', () => {
    const spy = jest.fn();
    render(
      <ViewSelect {...defaultProps} views={['day', 'week', 'month']} value="day" onChange={spy} />
    );

    const weekControl = screen.getByRole('button', { name: 'Switch to week view' });
    weekControl.click();
    expect(spy).toHaveBeenCalledWith('week');
  });
});
