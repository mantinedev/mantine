import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DecadeLevel, DecadeLevelProps, DecadeLevelStylesNames } from './DecadeLevel';

const defaultProps: DecadeLevelProps = {
  decade: new Date(2022, 3, 11),
  levelControlAriaLabel: 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

function expectLabel(label: string) {
  expect(screen.getByLabelText('level-control')).toHaveTextContent(label);
}

describe('@mantine/dates/DecadeLevel', () => {
  tests.itSupportsSystemProps<DecadeLevelProps, DecadeLevelStylesNames>({
    component: DecadeLevel,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/DecadeLevel',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'yearsList',
      'yearsListCell',
      'yearsListControl',
      'yearsListRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsGetControlRef({
    component: DecadeLevel,
    props: defaultProps,
    numberOfControls: 10,
  });
  datesTests.itSupportsWithNextPrevious({ component: DecadeLevel, props: defaultProps });
  datesTests.itSupportsYearsListProps({ component: DecadeLevel, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: DecadeLevel, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: DecadeLevel, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: DecadeLevel, props: defaultProps });

  it('renders correct CalendarHeader label', () => {
    render(<DecadeLevel {...defaultProps} />);
    expectLabel('2020 – 2029');
  });

  it('supports changing decade label format', () => {
    render(<DecadeLevel {...defaultProps} decadeLabelFormat="MM/YY" />);
    expectLabel('01/20 – 01/29');
  });

  it('supports changing decade label with callback', () => {
    render(
      <DecadeLevel
        {...defaultProps}
        decadeLabelFormat={(startOfDecade, endOfDecade) =>
          `${startOfDecade.getMonth()}/${startOfDecade.getFullYear()} – ${endOfDecade.getMonth()}/${endOfDecade.getFullYear()}`
        }
      />
    );

    expectLabel('0/2020 – 0/2029');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<DecadeLevel {...defaultProps} />);
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-DecadeLevel-yearsListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-DecadeLevel-calendarHeaderLevel'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<DecadeLevel {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table td button')).toHaveClass(
      'mantine-Calendar-yearsListControl'
    );
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-Calendar-calendarHeaderLevel'
    );
  });

  it('disables next control if maxDate is before end of month', () => {
    render(<DecadeLevel {...defaultProps} maxDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('disables previous control if minDate is after start of month', () => {
    render(<DecadeLevel {...defaultProps} minDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('prev')).toBeDisabled();
  });
});
