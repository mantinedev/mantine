import dayjs from 'dayjs';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Calendar, CalendarProps } from './Calendar';
import {
  useCalendar,
  type CalendarController,
  type CalendarControllerOptions,
} from './use-calendar/use-calendar';

const defaultProps: CalendarProps = {
  defaultDate: '2022-04-11',
  ariaLabels: {
    monthLevelControl: 'month-level',
    yearLevelControl: 'year-level',
    nextMonth: 'next-month',
    previousMonth: 'previous-month',
    nextYear: 'next-year',
    previousYear: 'previous-year',
    nextDecade: 'next-decade',
    previousDecade: 'previous-decade',
  },
};

function expectHeaderLevel(level: 'month' | 'year' | 'decade', label: string) {
  expect(screen.getByLabelText(`${level}-level`).textContent).toBe(label);
}

async function clickNext(level: 'month' | 'year' | 'decade') {
  await userEvent.click(screen.getByLabelText(`next-${level}`));
}

const controllerProps: CalendarProps = { ariaLabels: defaultProps.ariaLabels };

function ControllerCalendar({
  options,
  capture,
  ...others
}: {
  options?: CalendarControllerOptions;
  capture: (controller: CalendarController) => void;
} & CalendarProps) {
  const controller = useCalendar(options);
  capture(controller);

  return <Calendar {...controllerProps} controller={controller} {...others} />;
}

describe('@mantine/dates/Calendar/controller', () => {
  it('renders the state owned by the controller and ignores date, defaultDate and level props', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11', defaultLevel: 'year' }}
        capture={(c) => {
          controller = c;
        }}
        date="2010-01-01"
        defaultDate="2010-01-01"
        level="decade"
        defaultLevel="decade"
      />
    );

    expectHeaderLevel('year', '2022');
    expect(controller.date).toBe('2022-04-11');
    expect(controller.level).toBe('year');
  });

  it('updates the controller when the next month control is clicked', async () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
      />
    );

    await clickNext('month');
    expect(controller.date).toBe('2022-05-11');
    expectHeaderLevel('month', 'May 2022');
  });

  it('updates the rendered calendar when controller actions are called from outside', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
      />
    );

    act(() => controller.nextYear());
    expectHeaderLevel('month', 'April 2023');

    act(() => controller.setLevel('year'));
    expectHeaderLevel('year', '2023');

    act(() => controller.previous());
    expectHeaderLevel('year', '2022');
  });

  it('registers minLevel and maxLevel so that setLevel is clamped', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
        minLevel="month"
        maxLevel="year"
      />
    );

    act(() => controller.setLevel('decade'));
    expect(controller.level).toBe('year');
    expectHeaderLevel('year', '2022');
  });

  it('registers columnsToScroll so that stepping actions match the next control', async () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
        numberOfColumns={2}
      />
    );

    act(() => controller.nextMonth());
    expect(controller.date).toBe('2022-06-11');

    await clickNext('month');
    expect(controller.date).toBe('2022-08-11');
  });

  it('registers the fallback date the calendar displays when the controller date is null', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        capture={(c) => {
          controller = c;
        }}
      />
    );

    expect(controller.date).toBe(null);
    expect(controller.getDisplayedDate()).toBe(dayjs().format('YYYY-MM-DD'));
    expectHeaderLevel('month', dayjs().format('MMMM YYYY'));

    act(() => controller.nextMonth());
    expectHeaderLevel('month', dayjs().add(1, 'month').format('MMMM YYYY'));
  });

  it('supports setDate and setLevel from outside the component when a controller is provided', () => {
    let controller: CalendarController = null as any;

    function ExternalCalendar() {
      controller = useCalendar({ defaultDate: '2022-04-11' });

      return (
        <>
          <button
            type="button"
            onClick={() => {
              controller.setDate('2023-08-11');
              controller.setLevel('year');
            }}
          >
            set
          </button>
          <Calendar {...controllerProps} controller={controller} />
        </>
      );
    }

    render(<ExternalCalendar />);
    act(() => screen.getByText('set').click());

    expect(controller.date).toBe('2023-08-11');
    expect(controller.level).toBe('year');
    expectHeaderLevel('year', '2023');
  });

  it('restores focus after a level change triggered inside the component', async () => {
    render(<ControllerCalendar options={{ defaultDate: '2022-04-11' }} capture={() => {}} />);

    const monthLevel = screen.getByRole('button', {
      name: defaultProps.ariaLabels!.monthLevelControl,
    });
    monthLevel.focus();
    await userEvent.keyboard('{Enter}');

    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels!.yearLevelControl })
    ).toHaveFocus();
  });

  it('does not move focus when the level is changed from outside the component', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
      />
    );

    screen.getByRole('button', { name: defaultProps.ariaLabels!.monthLevelControl }).focus();

    act(() => controller.setLevel('year'));

    expectHeaderLevel('year', '2022');
    expect(document.body).toHaveFocus();
  });

  it('supports enhanced keyboard navigation when the state is owned by a controller', async () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerCalendar
        options={{ defaultDate: '2022-04-11' }}
        capture={(c) => {
          controller = c;
        }}
      />
    );

    screen.getByRole('button', { name: defaultProps.ariaLabels!.monthLevelControl }).focus();

    await userEvent.keyboard('{Control>}{ArrowDown}{/Control}');
    expect(controller.date).toBe('2023-04-11');
    expectHeaderLevel('month', 'April 2023');

    await userEvent.keyboard('y');
    expect(controller.level).toBe('year');
    expectHeaderLevel('year', '2023');
  });
});
