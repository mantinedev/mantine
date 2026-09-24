import { render, screen, userEvent } from '@mantine-tests/core';
import { CalendarContextOverrides, renderInCalendar } from '../Calendar/test-helpers';
import { DatesDropdownProvider } from '../PickerInputBase/DatesDropdown.context';
import { Month, MonthProps } from './Month';

const defaultProps = {
  month: '2022-04-11',
  withWeekNumbers: true,
};

const weekControls = (container: HTMLElement) =>
  container.querySelectorAll<HTMLButtonElement>('[data-week-control]');

const renderWithWeekControls = (
  props: Partial<MonthProps> = {},
  overrides: CalendarContextOverrides = {}
) =>
  renderInCalendar(<Month {...defaultProps} {...props} />, {
    ...overrides,
    weekControls: { enabled: true, ...overrides.weekControls },
  });

describe('@mantine/dates/Month week controls', () => {
  it('renders week numbers as text by default', () => {
    const { container } = render(<Month {...defaultProps} />);
    expect(weekControls(container)).toHaveLength(0);
    expect(container.querySelectorAll('.mantine-Month-weekNumber')).toHaveLength(5);
    expect(container.querySelector('table')).not.toHaveAttribute('data-week-mode');
  });

  it('renders week numbers as buttons and removes days from tab order when week controls are enabled', () => {
    const { container } = renderWithWeekControls();
    const controls = weekControls(container);
    expect(container.querySelector('table')).toHaveAttribute('data-week-mode');
    expect(controls).toHaveLength(5);
    expect(controls[0]).toHaveClass('mantine-Month-weekControl');
    expect(controls[0].textContent).toBe('13');
    expect(controls[0]).toHaveAttribute('tabindex', '0');
    expect(controls[1]).toHaveAttribute('tabindex', '-1');
    container
      .querySelectorAll('table button:not([data-week-control])')
      .forEach((day) => expect(day).toHaveAttribute('tabindex', '-1'));
  });

  it('forwards getWeekControlProps and marks selected week', async () => {
    const onClick = jest.fn();
    const { container } = renderWithWeekControls(
      {},
      {
        weekControls: {
          enabled: true,
          getWeekControlProps: (weekStart) => ({
            selected: weekStart === '2022-04-11',
            'aria-label': `week ${weekStart}`,
            onClick,
          }),
        },
      }
    );
    const controls = weekControls(container);
    expect(controls[2]).toHaveAttribute('data-selected');
    expect(controls[2]).toHaveAttribute('tabindex', '0');
    expect(controls[0]).toHaveAttribute('tabindex', '-1');
    expect(screen.getByLabelText('week 2022-04-11')).toBe(controls[2]);
    await userEvent.click(controls[2]);
    expect(onClick).toHaveBeenCalled();
  });

  it('disables week control when every day of the week is disabled', () => {
    const { container } = renderWithWeekControls({ minDate: '2022-04-05', maxDate: '2022-04-20' });
    const controls = weekControls(container);
    expect(controls[0]).toBeDisabled();
    expect(controls[1]).not.toBeDisabled();
    expect(controls[1]).toHaveAttribute('tabindex', '0');
    expect(controls[4]).toBeDisabled();
  });

  it('calls navigation.getWeekControlRef and navigation.onWeekControlKeyDown', async () => {
    const refSpy = jest.fn();
    const keySpy = jest.fn();
    const { container } = renderWithWeekControls(
      {},
      {
        navigation: {
          getWeekControlRef: refSpy,
          onWeekControlKeyDown: (_event, payload) => keySpy(payload),
        },
      }
    );
    expect(refSpy).toHaveBeenCalledTimes(5);
    expect(refSpy).toHaveBeenCalledWith(0, 0, expect.any(HTMLButtonElement));
    await userEvent.type(weekControls(container)[1], '{ArrowDown}');
    expect(keySpy).toHaveBeenCalledWith({ rowIndex: 1, date: '2022-04-04' });
  });

  it('does not put week control in tab order when dropdown context has preventFocus', () => {
    const { container } = renderInCalendar(
      <DatesDropdownProvider value={{ preventFocus: true, stopPropagation: false }}>
        <Month {...defaultProps} />
      </DatesDropdownProvider>,
      { weekControls: { enabled: true } }
    );
    weekControls(container).forEach((control) => expect(control).toHaveAttribute('tabindex', '-1'));
  });
});
