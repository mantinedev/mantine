import 'dayjs/locale/ru';
import { userEvent } from '@mantine-tests/core';
import { renderInCalendar } from '../test-helpers';
import { ControlsList, ControlsListProps } from './ControlsList';

const defaultProps: ControlsListProps = {
  kind: 'months',
  period: '2022-04-11',
  format: 'MMM',
  getControlProps: undefined,
  withCellSpacing: true,
  fullWidth: undefined,
};

describe('@mantine/dates/ControlsList', () => {
  it('renders 12 month controls with months list selectors', () => {
    const { container } = renderInCalendar(<ControlsList {...defaultProps} />);
    expect(container.querySelectorAll('table button')).toHaveLength(12);
    expect(container.querySelector('table')).toHaveClass('mantine-Calendar-monthsList');
    expect(container.querySelector('tr')).toHaveClass('mantine-Calendar-monthsListRow');
    expect(container.querySelector('td')).toHaveClass('mantine-Calendar-monthsListCell');
    expect(container.querySelector('button')).toHaveClass('mantine-Calendar-monthsListControl');
    expect(container.querySelector('button')!.textContent).toBe('Jan');
  });

  it('renders 4 quarter controls with quarters list selectors', () => {
    const { container } = renderInCalendar(
      <ControlsList {...defaultProps} kind="quarters" format="[Q]Q" />
    );
    expect(container.querySelectorAll('table button')).toHaveLength(4);
    expect(container.querySelector('table')).toHaveClass('mantine-Calendar-quartersList');
    expect(container.querySelector('button')).toHaveClass('mantine-Calendar-quartersListControl');
    expect(container.querySelector('button')!.textContent).toBe('Q1');
  });

  it('renders 10 year controls with years list selectors', () => {
    const { container } = renderInCalendar(
      <ControlsList {...defaultProps} kind="years" format="YYYY" />
    );
    expect(container.querySelectorAll('table button')).toHaveLength(10);
    expect(container.querySelector('table')).toHaveClass('mantine-Calendar-yearsList');
    expect(container.querySelector('button')).toHaveClass('mantine-Calendar-yearsListControl');
    expect(container.querySelector('button')!.textContent).toBe('2020');
  });

  it('supports function format', () => {
    const { container } = renderInCalendar(
      <ControlsList {...defaultProps} format={(date) => `#${date}`} />
    );
    expect(container.querySelector('button')!.textContent).toBe('#2022-01-01');
  });

  it('formats labels with the context locale', () => {
    const { container } = renderInCalendar(<ControlsList {...defaultProps} />, { locale: 'ru' });
    expect(container.querySelector('button')!.textContent).toBe('янв.');
  });

  it('renders children from getControlProps instead of the formatted label', () => {
    const { container } = renderInCalendar(
      <ControlsList {...defaultProps} getControlProps={() => ({ children: 'custom' })} />
    );
    expect(container.querySelector('button')!.textContent).toBe('custom');
  });

  it('calls user onClick from getControlProps before the context handler', async () => {
    const calls: string[] = [];
    const { container } = renderInCalendar(
      <ControlsList
        {...defaultProps}
        getControlProps={() => ({ onClick: () => calls.push('user') })}
      />,
      { onControlClick: (_event, date) => calls.push(`context:${date}`) }
    );

    await userEvent.click(container.querySelectorAll('table button')[4]);
    expect(calls).toStrictEqual(['user', 'context:2022-05-01']);
  });

  it('calls context onControlMouseEnter with date', async () => {
    const spy = jest.fn();
    const { container } = renderInCalendar(<ControlsList {...defaultProps} kind="years" />, {
      onControlMouseEnter: (_event, date) => spy(date),
    });

    await userEvent.hover(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith('2022-01-01');
  });

  it('disables controls outside of minDate and maxDate from context', () => {
    const { container } = renderInCalendar(<ControlsList {...defaultProps} />, {
      minDate: '2022-03-01',
      maxDate: '2022-05-31',
    });
    const controls = container.querySelectorAll('table button');
    expect(controls[1]).toBeDisabled();
    expect(controls[2]).not.toBeDisabled();
    expect(controls[4]).not.toBeDisabled();
    expect(controls[5]).toBeDisabled();
  });

  it('registers every control with navigation.getControlRef', () => {
    const refs: Record<string, HTMLButtonElement> = {};
    renderInCalendar(<ControlsList {...defaultProps} kind="years" />, {
      navigation: {
        getControlRef: (levelIndex, rowIndex, cellIndex, node) => {
          refs[`${levelIndex}.${rowIndex}.${cellIndex}`] = node;
        },
      },
    });
    expect(Object.keys(refs)).toHaveLength(10);
    expect(refs['0.3.0']).toBeInstanceOf(HTMLButtonElement);
  });
});
