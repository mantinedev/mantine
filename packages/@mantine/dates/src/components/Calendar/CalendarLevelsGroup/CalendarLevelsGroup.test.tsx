import { screen } from '@mantine-tests/core';
import { CalendarLevelSharedProps } from '../CalendarLevel/CalendarLevel';
import { renderInCalendar } from '../test-helpers';
import { CalendarLevelsGroup } from './CalendarLevelsGroup';

const noop = () => {};

const levelProps: CalendarLevelSharedProps = {
  level: 'year',
  yearBody: 'months',
  nextDisabled: false,
  previousDisabled: false,
  onNext: noop,
  onPrevious: noop,
  onLevelClick: noop,
  hasNextLevel: true,
  levelControlAriaLabel: (date) => `level-${date}`,
  nextLabel: 'next',
  previousLabel: 'prev',
  nextIcon: undefined,
  previousIcon: undefined,
  headerControlsOrder: ['previous', 'level', 'next'],
  withNativeLevelSelect: undefined,
  yearsSelectRange: undefined,
  fullWidth: undefined,
  withCellSpacing: true,
  static: false,
  monthLabelFormat: 'MMMM YYYY',
  yearLabelFormat: 'YYYY',
  decadeLabelFormat: 'YYYY',
  monthsListFormat: 'MMM',
  quartersListFormat: '[Q]Q',
  yearsListFormat: 'YYYY',
  getMonthControlProps: undefined,
  getQuarterControlProps: undefined,
  getYearControlProps: undefined,
  monthSettings: {},
};

describe('@mantine/dates/CalendarLevelsGroup', () => {
  it('renders numberOfColumns columns with previous control on the first and next on the last', () => {
    const { container } = renderInCalendar(
      <CalendarLevelsGroup {...levelProps} date="2022-04-11" numberOfColumns={3} />,
      { level: 'year' }
    );

    const columns = container.querySelectorAll('[data-year-level]');
    expect(columns).toHaveLength(3);
    expect(container.querySelector('.mantine-Calendar-levelsGroup')).toBeInTheDocument();
    expect(columns[0].querySelectorAll('button[data-direction="previous"]')).toHaveLength(1);
    expect(columns[0].querySelectorAll('button[data-direction="next"]')).toHaveLength(0);
    expect(columns[1].querySelectorAll('button[data-direction]')).toHaveLength(0);
    expect(columns[2].querySelectorAll('button[data-direction="previous"]')).toHaveLength(0);
    expect(columns[2].querySelectorAll('button[data-direction="next"]')).toHaveLength(1);
  });

  it('resolves levelControlAriaLabel function per column', () => {
    renderInCalendar(
      <CalendarLevelsGroup {...levelProps} date="2022-04-11" numberOfColumns={2} />,
      { level: 'year' }
    );
    expect(screen.getByLabelText('level-2022-04-11').textContent).toBe('2022');
    expect(screen.getByLabelText('level-2023-04-11').textContent).toBe('2023');
  });

  it('supports levelControlAriaLabel as a string', () => {
    renderInCalendar(
      <CalendarLevelsGroup
        {...levelProps}
        date="2022-04-11"
        numberOfColumns={2}
        levelControlAriaLabel="static-label"
      />,
      { level: 'year' }
    );
    expect(screen.getAllByLabelText('static-label')).toHaveLength(2);
  });

  it('applies nextDisabled and previousDisabled to header controls', () => {
    renderInCalendar(
      <CalendarLevelsGroup
        {...levelProps}
        date="2022-04-11"
        numberOfColumns={1}
        nextDisabled
        previousDisabled
      />,
      { level: 'year' }
    );
    expect(screen.getByLabelText('next')).toHaveAttribute('data-disabled');
    expect(screen.getByLabelText('prev')).toHaveAttribute('data-disabled');
  });

  it('renders month level with Month body', () => {
    const { container } = renderInCalendar(
      <CalendarLevelsGroup {...levelProps} level="month" date="2022-04-11" numberOfColumns={1} />
    );
    expect(container.querySelector('[data-month-level]')).toBeInTheDocument();
    expect(screen.getByLabelText('level-2022-04-11').textContent).toBe('April 2022');
    expect(container.querySelector('.mantine-Calendar-month')).toBeInTheDocument();
  });

  it('renders quarters body at year level when yearBody is quarters', () => {
    const { container } = renderInCalendar(
      <CalendarLevelsGroup
        {...levelProps}
        yearBody="quarters"
        date="2022-04-11"
        numberOfColumns={1}
      />,
      { level: 'year' }
    );
    expect(container.querySelector('[data-quarter-level]')).toBeInTheDocument();
    expect(container.querySelectorAll('table button')).toHaveLength(4);
  });

  it('renders decade level with static level control and decade label', () => {
    const { container } = renderInCalendar(
      <CalendarLevelsGroup {...levelProps} level="decade" date="2022-04-11" numberOfColumns={2} />,
      { level: 'decade' }
    );
    expect(container.querySelectorAll('[data-decade-level]')).toHaveLength(2);
    expect(container.querySelectorAll('table button')).toHaveLength(20);
    const levels = container.querySelectorAll('[data-level-control]');
    expect(levels[0].textContent).toBe('2020 – 2029');
    expect(levels[1].textContent).toBe('2030 – 2039');
    expect(levels[0]).toHaveAttribute('data-static');
  });
});
