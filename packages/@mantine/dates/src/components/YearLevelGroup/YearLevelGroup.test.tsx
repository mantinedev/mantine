import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { YearLevelGroup, YearLevelGroupProps, YearLevelGroupStylesNames } from './YearLevelGroup';

const defaultProps: YearLevelGroupProps = {
  year: new Date(2022, 3, 11),
  levelControlAriaLabel: () => 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

describe('@mantine/dates/YearLevelGroup', () => {
  tests.itSupportsSystemProps<YearLevelGroupProps, YearLevelGroupStylesNames>({
    component: YearLevelGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/YearLevelGroup',
    stylesApiSelectors: [
      'levelsGroup',
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'monthsList',
      'monthsListCell',
      'monthsListControl',
      'monthsListRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsMonthsListProps({ component: YearLevelGroup, props: defaultProps });
  datesTests.itSupportsHeaderProps({ component: YearLevelGroup, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: YearLevelGroup, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: YearLevelGroup, props: defaultProps });
  datesTests.itHandlesControlsKeyboardEvents({
    component: YearLevelGroup,
    props: defaultProps,
    listSelector: '.mantine-YearLevelGroup-monthsList',
  });

  it('renders correct number of columns based on numberOfColumns prop', () => {
    const { rerender } = render(<YearLevelGroup {...defaultProps} numberOfColumns={1} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(1);

    rerender(<YearLevelGroup {...defaultProps} numberOfColumns={2} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(2);

    rerender(<YearLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(3);
  });

  it('renders correct years group based on year prop', () => {
    render(<YearLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control').map((node) => node.textContent)).toStrictEqual(
      ['2022', '2023', '2024']
    );
  });

  it('supports levelControlAriaLabel as string', () => {
    render(<YearLevelGroup {...defaultProps} levelControlAriaLabel="test-label" />);
    expect(screen.getByText('2022')).toHaveAttribute('aria-label', 'test-label');
  });

  it('supports levelControlAriaLabel as function', () => {
    render(
      <YearLevelGroup
        {...defaultProps}
        levelControlAriaLabel={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );
    expect(screen.getByText('2022')).toHaveAttribute('aria-label', '3/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<YearLevelGroup {...defaultProps} />);
    expect(container.querySelector('table button')).toHaveClass(
      'mantine-YearLevelGroup-monthsListControl'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearLevelGroup {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table button')).toHaveClass(
      'mantine-Calendar-monthsListControl'
    );
  });
});
