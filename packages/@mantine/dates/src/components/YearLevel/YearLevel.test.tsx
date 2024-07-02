import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { YearLevel, YearLevelProps, YearLevelStylesNames } from './YearLevel';

const defaultProps: YearLevelProps = {
  year: new Date(2022, 3, 11),
  levelControlAriaLabel: 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

function expectLabel(label: string) {
  expect(screen.getByLabelText('level-control')).toHaveTextContent(label);
}

describe('@mantine/dates/YearLevel', () => {
  tests.itSupportsSystemProps<YearLevelProps, YearLevelStylesNames>({
    component: YearLevel,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/YearLevel',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'calendarHeaderLevel',
      'monthsList',
      'monthsListCell',
      'monthsListControl',
      'monthsListRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsGetControlRef({
    component: YearLevel,
    props: defaultProps,
    numberOfControls: 12,
  });
  datesTests.itSupportsHeaderProps({ component: YearLevel, props: defaultProps });
  datesTests.itSupportsWithNextPrevious({ component: YearLevel, props: defaultProps });
  datesTests.itSupportsMonthsListProps({ component: YearLevel, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: YearLevel, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: YearLevel, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: YearLevel, props: defaultProps });

  it('renders correct CalendarHeader label', () => {
    render(<YearLevel {...defaultProps} />);
    expectLabel('2022');
  });

  it('supports changing year label format', () => {
    render(<YearLevel {...defaultProps} yearLabelFormat="MM/YY" />);
    expectLabel('04/22');
  });

  it('supports changing year label with callback', () => {
    render(
      <YearLevel
        {...defaultProps}
        yearLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );

    expectLabel('3/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<YearLevel {...defaultProps} />);
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-YearLevel-monthsListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-YearLevel-calendarHeaderLevel'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearLevel {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-Calendar-monthsListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-Calendar-calendarHeaderLevel'
    );
  });

  it('disables next control if maxDate is before end of month', () => {
    render(<YearLevel {...defaultProps} maxDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('disables previous control if minDate is after start of month', () => {
    render(<YearLevel {...defaultProps} minDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('prev')).toBeDisabled();
  });
});
