import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsMonthsListProps,
  itHandlesMonthKeyboardEvents,
  itSupportsMonthProps,
  itSupportsYearsListProps,
} from '../../tests';
import { DatePicker } from './DatePicker';

const defaultProps = {
  defaultDate: new Date(2022, 3, 11),
};

describe('@mantine/dates/DatePicker', () => {
  itSupportsYearsListProps(DatePicker, { ...defaultProps, defaultLevel: 'decade' });
  itSupportsMonthsListProps(DatePicker, { ...defaultProps, defaultLevel: 'year' });
  itHandlesMonthKeyboardEvents(DatePicker, defaultProps);
  itSupportsMonthProps(DatePicker, defaultProps);

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<DatePicker {...defaultProps} date={new Date(2022, 3, 11)} />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button'));
    expect(container.querySelector('[data-selected]').textContent).toBe('28');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker
        {...defaultProps}
        date={new Date(2022, 3, 11)}
        value={new Date(2022, 3, 11)}
        onChange={spy}
      />
    );

    expect(container.querySelector('[data-selected]').textContent).toBe('11');

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2022, 2, 28));
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <DatePicker {...defaultProps} type="multiple" date={new Date(2022, 3, 11)} />
    );
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelector('[data-selected]').textContent).toBe('28');

    await userEvent.click(container.querySelectorAll('table button')[1]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(
      Array.from(container.querySelectorAll('[data-selected]')).map((node) => node.textContent)
    ).toStrictEqual(['28', '29']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker
        {...defaultProps}
        type="multiple"
        date={new Date(2022, 3, 11)}
        value={[new Date(2022, 3, 11)]}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith([new Date(2022, 3, 11), new Date(2022, 2, 28)]);
  });

  it('can be uncontrolled (type="range")', async () => {
    const { container } = render(<DatePicker {...defaultProps} type="range" />);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);

    await userEvent.click(container.querySelectorAll('table button')[5]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('2');

    await userEvent.click(container.querySelectorAll('table button')[9]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('2');
    expect(container.querySelectorAll('[data-selected]')[1].textContent).toBe('6');
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(5);
  });

  it('can be controlled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} type="range" value={[null, null]} onChange={spy} />
    );
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenLastCalledWith([new Date(2022, 2, 28), null]);
  });

  it('supports onClick handler from getDayProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} getDayProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalled();
  });

  it('supports allowDeselect', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(<DatePicker {...defaultProps} onChange={spy} />);

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2022, 2, 28));
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2022, 2, 28));

    rerender(<DatePicker {...defaultProps} onChange={spy} allowDeselect />);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(null);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2022, 2, 28));
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 2, 30), null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 2, 30), new Date(2022, 2, 30)]);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 2, 30), null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<DatePicker {...defaultProps} />);
    expect(container.firstChild).toHaveClass('mantine-DatePicker-calendar');
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<DatePicker {...defaultProps} __staticSelector="Calendar" />);
    expect(container.firstChild).toHaveClass('mantine-Calendar-calendar');
  });
});
