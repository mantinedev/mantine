import { render, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { renderInCalendar } from '../Calendar/test-helpers';
import { Month, MonthProps, MonthStylesNames } from './Month';

const defaultProps: MonthProps = {
  month: '2022-04-02',
};

describe('@mantine/dates/Month', () => {
  tests.itSupportsSystemProps<MonthProps, MonthStylesNames>({
    component: Month,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/dates/Month',
    stylesApiSelectors: ['month'],
  });

  datesTests.itSupportsMonthProps({ component: Month, props: defaultProps });

  it('calls onDayClick from calendar context with event and date', async () => {
    const spy = jest.fn();
    const { container } = renderInCalendar(<Month {...defaultProps} />, {
      onDayClick: (event, date) => spy(event.type, date),
    });

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith('click', '2022-03-28');
  });

  it('calls onDayMouseEnter from calendar context with event and date', async () => {
    const spy = jest.fn();
    const { container } = renderInCalendar(<Month {...defaultProps} />, {
      onDayMouseEnter: (_event, date) => spy(date),
    });

    await userEvent.hover(container.querySelectorAll('table button')[5]);
    expect(spy).toHaveBeenCalledWith('2022-04-02');
  });

  it('calls navigation.onDayKeyDown from calendar context', async () => {
    const spy = jest.fn();
    const { container } = renderInCalendar(<Month {...defaultProps} />, {
      navigation: { onDayKeyDown: (_event, payload) => spy(payload) },
    });

    await userEvent.type(container.querySelector('table button')!, '{ArrowDown}');
    expect(spy).toHaveBeenCalledWith({ rowIndex: 0, cellIndex: 0, date: '2022-03-28' });
  });

  it('registers every rendered day with navigation.getDayRef', () => {
    const daysRefs: Record<string, HTMLButtonElement> = {};
    renderInCalendar(<Month {...defaultProps} />, {
      navigation: {
        getDayRef: (levelIndex, rowIndex, cellIndex, node) => {
          daysRefs[`${levelIndex}.${rowIndex}.${cellIndex}`] = node;
        },
      },
    });

    expect(Object.keys(daysRefs)).toHaveLength(35);
    expect(daysRefs['0.0.0']).toBeInstanceOf(HTMLButtonElement);
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} />);
    expect(container.querySelector('table')).toHaveClass('mantine-Month-month');
    expect(container.querySelector('thead tr')).toHaveClass('mantine-Month-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('mantine-Month-day');
  });

  it('supports __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table')).toHaveClass('mantine-Calendar-month');
    expect(container.querySelector('thead tr')).toHaveClass('mantine-Calendar-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('mantine-Calendar-day');
  });

  it('supports static prop', () => {
    const { container, rerender } = render(<Month {...defaultProps} />);
    expect((container.querySelector('td')!.firstChild as HTMLElement).tagName).toBe('BUTTON');

    rerender(<Month {...defaultProps} static />);
    expect((container.querySelector('td')!.firstChild as HTMLElement).tagName).toBe('DIV');
  });
});
