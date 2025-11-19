import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates-utils';
import { render, screen, tests } from '@mantine-tests/core';
import { DayView, DayViewProps, DayViewStylesNames } from './DayView';

const defaultProps: DayViewProps = {
  day: '2025-11-03',
};

describe('@mantine/schedule/DayView', () => {
  tests.itSupportsSystemProps<DayViewProps, DayViewStylesNames>({
    component: DayView,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/DayView',
    stylesApiSelectors: ['dayView'],
  });

  it('renders day view for the given date', () => {
    const { container } = render(<DayView {...defaultProps} />);
    expect(screen.getByText('November 3, 2025')).toBeInTheDocument();
    // 97 slots: 96 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(97);
  });

  it('supports custom intervalMinutes', () => {
    const { container } = render(<DayView {...defaultProps} intervalMinutes={60} />);
    // 25 slots: 24 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(25);
  });

  it('supports custom startTime and endTime', () => {
    const { container } = render(
      <DayView {...defaultProps} startTime="08:00:00" endTime="12:00:00" intervalMinutes={60} />
    );
    // 5 slots: 4 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(5);
  });

  it('supports locale (prop)', () => {
    render(<DayView {...defaultProps} locale="ru" />);
    expect(screen.getByText('ноябрь 3, 2025')).toBeInTheDocument();
  });

  it('supports locale (DatesProvider)', () => {
    render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <DayView {...defaultProps} />
      </DatesProvider>
    );

    expect(screen.getByText('ноябрь 3, 2025')).toBeInTheDocument();
  });

  it('renders all-day slot based on withAllDaySlot prop', () => {
    const { container, rerender } = render(<DayView {...defaultProps} withAllDaySlot />);
    expect(
      container.querySelector('.mantine-DayView-dayViewSlot[data-all-day]')
    ).toBeInTheDocument();

    rerender(<DayView {...defaultProps} withAllDaySlot={false} />);
    expect(
      container.querySelector('.mantine-DayView-dayViewSlot[data-all-day]')
    ).not.toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (dayjs string)', () => {
    render(<DayView {...defaultProps} slotLabelFormat="h:mm A" />);
    expect(screen.getByText('1:00 AM')).toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (function)', () => {
    render(<DayView {...defaultProps} slotLabelFormat={(date) => `Time: ${date}`} />);
    expect(screen.getByText('Time: 2025-11-03 01:00:00')).toBeInTheDocument();
  });

  it('supports custom headerFormat (dayjs string)', () => {
    render(<DayView {...defaultProps} headerFormat="DD/MM/YYYY" />);
    expect(screen.getByText('03/11/2025')).toBeInTheDocument();
  });

  it('supports custom headerFormat (function)', () => {
    render(<DayView {...defaultProps} headerFormat={(date) => `Date: ${date}`} />);
    expect(screen.getByText('Date: 2025-11-03')).toBeInTheDocument();
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<DayView {...defaultProps} __staticSelector="TestDayView" />);
    expect(container.querySelector('.mantine-TestDayView-dayView')).toBeInTheDocument();
  });
});
