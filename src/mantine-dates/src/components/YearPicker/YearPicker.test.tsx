import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import dayjs from 'dayjs';
import { itSupportsYearsListProps, itHandlesControlsKeyboardEvents } from '../../tests';
import { YearPicker } from './YearPicker';

const defaultProps = {};

describe('@mantine/dates/YearPicker', () => {
  itSupportsSystemProps({
    component: YearPicker,
    props: defaultProps,
    refType: HTMLDivElement,
    providerName: 'YearPicker',
    displayName: '@mantine/dates/YearPicker',
  });

  itSupportsProviderVariant(YearPicker, defaultProps, 'YearPicker', 'calendar');
  itSupportsProviderSize(YearPicker, defaultProps, 'YearPicker', 'calendar');
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

  const ariaLabels = {
    previousDecade: 'Previous decade',
    nextDecade: 'Next decade',
  };

  it('only adds selected year of decade to tab order', async () => {
    render(
      <YearPicker
        {...defaultProps}
        date={new Date(2010, 0)}
        getYearControlProps={(date) => ({
          selected: dayjs(new Date(2013, 0)).isSame(date, 'year'),
        })}
        ariaLabels={ariaLabels}
      />
    );
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.previousDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: new Date(2013, 0).getFullYear().toString() })
    ).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds current year of decade to tab order', async () => {
    render(<YearPicker {...defaultProps} date={new Date()} ariaLabels={ariaLabels} />);
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.previousDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: new Date().getFullYear().toString() })).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds first non-disabled year of decade to tab order', async () => {
    render(
      <YearPicker
        {...defaultProps}
        date={new Date(2010, 0)}
        minDate={new Date(2014, 0)}
        getYearControlProps={(date) => ({
          disabled: dayjs(new Date(2014, 0)).isSame(date, 'year'),
        })}
        ariaLabels={ariaLabels}
      />
    );
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: new Date(2015, 0).getFullYear().toString() })
    ).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });
});
