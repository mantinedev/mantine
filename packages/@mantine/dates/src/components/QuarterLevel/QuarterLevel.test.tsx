import dayjs from 'dayjs';
import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { QuarterLevel, QuarterLevelProps, QuarterLevelStylesNames } from './QuarterLevel';

const defaultProps: QuarterLevelProps = {
  year: '2022-04-11',
  levelControlAriaLabel: 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

function expectLabel(label: string) {
  expect(screen.getByLabelText('level-control')).toHaveTextContent(label);
}

describe('@mantine/dates/QuarterLevel', () => {
  tests.itSupportsSystemProps<QuarterLevelProps, QuarterLevelStylesNames>({
    component: QuarterLevel,
    props: defaultProps,
    displayName: '@mantine/dates/QuarterLevel',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'quartersList',
      'quartersListCell',
      'quartersListControl',
      'quartersListRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsGetControlRef({
    component: QuarterLevel,
    props: defaultProps,
    numberOfControls: 4,
  });
  datesTests.itSupportsHeaderProps({ component: QuarterLevel, props: defaultProps });
  datesTests.itSupportsWithNextPrevious({ component: QuarterLevel, props: defaultProps });
  datesTests.itSupportsQuartersListProps({ component: QuarterLevel, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: QuarterLevel, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: QuarterLevel, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: QuarterLevel, props: defaultProps });

  it('renders correct CalendarHeader label', () => {
    render(<QuarterLevel {...defaultProps} />);
    expectLabel('2022');
  });

  it('supports changing year label format', () => {
    render(<QuarterLevel {...defaultProps} yearLabelFormat="MM/YY" />);
    expectLabel('04/22');
  });

  it('supports changing year label with callback', () => {
    render(
      <QuarterLevel
        {...defaultProps}
        yearLabelFormat={(date) => `${dayjs(date).format('MM/YYYY')}`}
      />
    );
    expectLabel('04/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<QuarterLevel {...defaultProps} />);
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-QuarterLevel-quartersListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-QuarterLevel-calendarHeaderLevel'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(
      <QuarterLevel {...defaultProps} __staticSelector="QuarterPicker" />
    );
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-QuarterPicker-quartersListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-QuarterPicker-calendarHeaderLevel'
    );
  });

  it('disables next control if maxDate is before end of year', () => {
    render(<QuarterLevel {...defaultProps} maxDate="2022-04-11" />);
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('disables previous control if minDate is after start of year', () => {
    render(<QuarterLevel {...defaultProps} minDate="2022-04-11" />);
    expect(screen.getByLabelText('prev')).toBeDisabled();
  });
});
