import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { QuartersList, QuartersListProps, QuartersListStylesNames } from './QuartersList';

const defaultProps: QuartersListProps = {
  year: '2022-04-11',
};

describe('@mantine/dates/QuartersList', () => {
  tests.itSupportsSystemProps<QuartersListProps, QuartersListStylesNames>({
    component: QuartersList,
    props: defaultProps,
    displayName: '@mantine/dates/QuartersList',
    stylesApiSelectors: [
      'quartersList',
      'quartersListCell',
      'quartersListControl',
      'quartersListRow',
    ],
  });

  datesTests.itSupportsGetControlRef({
    component: QuartersList,
    props: defaultProps,
    numberOfControls: 4,
  });
  datesTests.itSupportsQuartersListProps({ component: QuartersList, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: QuartersList, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: QuartersList, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: QuartersList, props: defaultProps });

  it('renders a single row with 4 quarters', () => {
    const { container } = render(<QuartersList {...defaultProps} />);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(1);
    expect(rows[0].querySelectorAll('button')).toHaveLength(4);
  });

  it('passes quarter start dates to __onControlClick', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuartersList {...defaultProps} __onControlClick={(_event, date) => spy(date)} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith('2022-07-01');
  });

  it('has correct default __staticSelector', () => {
    render(<QuartersList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('mantine-QuartersList-quartersList');
    expect(screen.getAllByRole('button')[0]).toHaveClass(
      'mantine-QuartersList-quartersListControl'
    );
  });

  it('supports custom __staticSelector', () => {
    render(<QuartersList {...defaultProps} __staticSelector="QuarterPicker" />);
    expect(screen.getByRole('table')).toHaveClass('mantine-QuarterPicker-quartersList');
    expect(screen.getAllByRole('button')[0]).toHaveClass(
      'mantine-QuarterPicker-quartersListControl'
    );
  });
});
