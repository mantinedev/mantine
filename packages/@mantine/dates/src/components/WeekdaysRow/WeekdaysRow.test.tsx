import { patchConsoleError, render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { WeekdaysRow, WeekdaysRowProps, WeekdaysRowStylesNames } from './WeekdaysRow';

const defaultProps: WeekdaysRowProps = {};

function Wrapper(props: Partial<WeekdaysRowProps>) {
  return (
    <table>
      <thead>
        <WeekdaysRow {...defaultProps} {...props} />
      </thead>
    </table>
  );
}

describe('@mantine/dates/WeekdaysRow', () => {
  beforeAll(patchConsoleError);
  afterAll(patchConsoleError.release);

  tests.itSupportsSystemProps<WeekdaysRowProps, WeekdaysRowStylesNames>({
    component: WeekdaysRow,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/dates/WeekdaysRow',
    stylesApiSelectors: ['weekdaysRow', 'weekday'],
  });

  datesTests.itSupportsWeekdaysProps({ component: WeekdaysRow, props: defaultProps });

  it('supports changing cell component', () => {
    render(<Wrapper cellComponent="td" />);
    expect(screen.queryAllByRole('cell')).toHaveLength(7);
    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
  });

  it('supports __staticSelector', () => {
    render(<Wrapper __staticSelector="Month" />);
    expect(screen.getByRole('row')).toHaveClass('mantine-Month-weekdaysRow ');
  });

  it('sets scope="col" on th cells', () => {
    const { rerender } = render(<Wrapper withWeekNumbers />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(8);
    headers.forEach((header) => expect(header).toHaveAttribute('scope', 'col'));

    rerender(<Wrapper cellComponent="td" withWeekNumbers />);
    screen.getAllByRole('cell').forEach((cell) => expect(cell).not.toHaveAttribute('scope'));
  });

  it('renders week number header cell when withWeekNumbers is set', () => {
    const { rerender } = render(<Wrapper />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(7);
    expect(screen.queryByText('#')).not.toBeInTheDocument();

    rerender(<Wrapper withWeekNumbers />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(8);
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('#');
  });
});
