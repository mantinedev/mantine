import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsYearsListProps, itHandlesControlsKeyboardEvents } from '../../tests';
import { YearPicker } from './YearPicker';

const defaultProps = {};

describe('@mantine/dates/YearPicker', () => {
  itSupportsYearsListProps(YearPicker, defaultProps);
  itHandlesControlsKeyboardEvents(
    YearPicker,
    'decade',
    '.mantine-YearPicker-yearsList',
    defaultProps
  );

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<YearPicker {...defaultProps} date={new Date(2022, 3, 11)} />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button'));
    expect(container.querySelector('[data-selected]').textContent).toBe('2020');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker
        {...defaultProps}
        date={new Date(2022, 3, 11)}
        value={new Date(2023, 3, 11)}
        onChange={spy}
      />
    );

    expect(container.querySelector('[data-selected]').textContent).toBe('2023');

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <YearPicker {...defaultProps} type="multiple" date={new Date(2022, 3, 11)} />
    );
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelector('[data-selected]').textContent).toBe('2020');

    await userEvent.click(container.querySelectorAll('table button')[1]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(
      Array.from(container.querySelectorAll('[data-selected]')).map((node) => node.textContent)
    ).toStrictEqual(['2020', '2021']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker
        {...defaultProps}
        type="multiple"
        date={new Date(2022, 3, 11)}
        value={[new Date(2023, 3, 11)]}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith([new Date(2023, 3, 11), new Date(2020, 0, 1)]);
  });

  it('can be uncontrolled (type="range")', async () => {
    const { container } = render(<YearPicker {...defaultProps} type="range" />);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);

    await userEvent.click(container.querySelectorAll('table button')[5]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('2025');

    await userEvent.click(container.querySelectorAll('table button')[9]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('2025');
    expect(container.querySelectorAll('[data-selected]')[1].textContent).toBe('2029');
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(3);
  });

  it('can be controlled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker {...defaultProps} type="range" value={[null, null]} onChange={spy} />
    );
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenLastCalledWith([new Date(2020, 0, 1), null]);
  });

  it('supports onClick handler from getYearControlProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker {...defaultProps} getYearControlProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalled();
  });

  it('supports allowDeselect', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(<YearPicker {...defaultProps} onChange={spy} />);

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));

    rerender(<YearPicker {...defaultProps} onChange={spy} allowDeselect />);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(null);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 0, 1), null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 0, 1), new Date(2022, 0, 1)]);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([new Date(2022, 0, 1), null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<YearPicker {...defaultProps} />);
    expect(container.firstChild).toHaveClass('mantine-YearPicker-calendar');
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearPicker {...defaultProps} __staticSelector="Calendar" />);
    expect(container.firstChild).toHaveClass('mantine-Calendar-calendar');
  });
});
