import { DirectionProvider } from '@mantine/core';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import {
  MonthLevelGroup,
  MonthLevelGroupProps,
  MonthLevelGroupStylesNames,
} from './MonthLevelGroup';

const defaultProps: MonthLevelGroupProps = {
  month: '2022-04-11',
  levelControlAriaLabel: () => 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

describe('@mantine/dates/MonthLevelGroup', () => {
  tests.itSupportsSystemProps<MonthLevelGroupProps, MonthLevelGroupStylesNames>({
    component: MonthLevelGroup,
    props: defaultProps,
    displayName: '@mantine/dates/MonthLevelGroup',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'day',
      'levelsGroup',
      'month',
      'monthCell',
      'monthRow',
      'monthTbody',
      'monthThead',
      'weekday',
      'weekdaysRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsMonthProps({ component: MonthLevelGroup, props: defaultProps });
  datesTests.itSupportsHeaderProps({ component: MonthLevelGroup, props: defaultProps });
  datesTests.itSupportsOnDayClick({ component: MonthLevelGroup, props: defaultProps });
  datesTests.itHandlesMonthKeyboardEvents({
    component: MonthLevelGroup,
    props: defaultProps,
    name: 'MonthLevelGroup',
  });

  it('renders correct number of months based on numberOfColumns prop', () => {
    const { rerender } = render(<MonthLevelGroup {...defaultProps} numberOfColumns={1} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(1);

    rerender(<MonthLevelGroup {...defaultProps} numberOfColumns={2} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(2);

    rerender(<MonthLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(3);
  });

  it('renders correct months group based on month prop', () => {
    render(<MonthLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control').map((node) => node.textContent)).toStrictEqual(
      ['April 2022', 'May 2022', 'June 2022']
    );
  });

  it('supports levelControlAriaLabel as string', () => {
    render(<MonthLevelGroup {...defaultProps} levelControlAriaLabel="test-label" />);
    expect(screen.getByText('April 2022')).toHaveAttribute('aria-label', 'test-label');
  });

  it('supports levelControlAriaLabel as function', () => {
    render(
      <MonthLevelGroup
        {...defaultProps}
        levelControlAriaLabel={(date) =>
          `${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
        }
      />
    );
    expect(screen.getByText('April 2022')).toHaveAttribute('aria-label', '3/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<MonthLevelGroup {...defaultProps} />);
    expect(container.querySelector('table button')).toHaveClass('mantine-MonthLevelGroup-day');
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<MonthLevelGroup {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table button')).toHaveClass('mantine-Calendar-day');
  });

  it('moves focus with ArrowLeft and ArrowRight in ltr direction', async () => {
    render(<MonthLevelGroup {...defaultProps} />);
    screen.getByLabelText('11 April 2022').focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByLabelText('12 April 2022')).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByLabelText('11 April 2022')).toHaveFocus();
  });

  it('mirrors ArrowLeft and ArrowRight in rtl direction', async () => {
    render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <MonthLevelGroup {...defaultProps} />
      </DirectionProvider>
    );
    screen.getByLabelText('11 April 2022').focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByLabelText('10 April 2022')).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    expect(screen.getByLabelText('12 April 2022')).toHaveFocus();
  });
});
