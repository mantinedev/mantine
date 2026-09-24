import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DatesProvider } from '../DatesProvider';
import { WeekPicker, WeekPickerProps, WeekPickerStylesNames } from './WeekPicker';

const defaultProps = {
  defaultDate: '2022-04-11',
} satisfies Partial<WeekPickerProps<'default' | 'multiple' | 'range'>>;

const days = (container: HTMLElement) =>
  container.querySelectorAll<HTMLButtonElement>('table button:not([data-week-control])');

const weekControls = (container: HTMLElement) =>
  container.querySelectorAll<HTMLButtonElement>('[data-week-control]');

const selectedTexts = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('[data-selected]:not([data-week-control])')).map(
    (node) => node.textContent
  );

describe('@mantine/dates/WeekPicker', () => {
  tests.itSupportsSystemProps<WeekPickerProps, WeekPickerStylesNames>({
    component: WeekPicker,
    props: { ...defaultProps, presets: [{ label: 'This week', value: '2022-04-11' }] },
    varsResolver: true,
    displayName: '@mantine/dates/WeekPicker',
    stylesApiSelectors: [
      'day',
      'month',
      'monthCell',
      'monthRow',
      'monthTbody',
      'monthThead',
      'weekday',
      'weekdaysRow',
      'weekNumber',
      'presetsList',
      'presetButton',
      'weekPickerRoot',
    ],
    providerStylesApi: false,
  });

  datesTests.itSupportsNativeLevelSelect({ component: WeekPicker, props: defaultProps });

  datesTests.itSupportsYearsListProps({
    component: WeekPicker,
    props: { ...defaultProps, defaultLevel: 'decade' },
  });

  datesTests.itSupportsMonthsListProps({
    component: WeekPicker,
    props: { ...defaultProps, level: 'year' },
  });

  it('always renders week controls, even when withWeekNumbers is set to false', () => {
    const { container } = render(
      <WeekPicker {...defaultProps} {...({ withWeekNumbers: false } as any)} />
    );
    expect(weekControls(container)).toHaveLength(5);
    expect(container.querySelectorAll('.mantine-WeekPicker-weekControl')).toHaveLength(5);
    expect(weekControls(container)[0].textContent).toBe('13');
  });

  it('removes days from the tab order', () => {
    const { container } = render(<WeekPicker {...defaultProps} value="2022-04-11" />);
    days(container).forEach((day) => expect(day).toHaveAttribute('tabindex', '-1'));
    expect(container.querySelectorAll('[data-autofocus]')).toHaveLength(1);
    expect(container.querySelector('[data-autofocus]')).toHaveAttribute('data-week-control');
  });

  it('keeps only the selected week control in the tab order', () => {
    const { container } = render(<WeekPicker {...defaultProps} value="2022-04-13" />);
    const controls = weekControls(container);
    expect(controls[2]).toHaveAttribute('tabindex', '0');
    expect(controls[2]).toHaveAttribute('data-selected');
    [0, 1, 3, 4].forEach((index) => expect(controls[index]).toHaveAttribute('tabindex', '-1'));
  });

  it('puts the first enabled week control in the tab order when nothing is selected', () => {
    const { container } = render(<WeekPicker {...defaultProps} minDate="2022-04-06" />);
    const controls = weekControls(container);
    expect(controls[0]).toBeDisabled();
    expect(controls[1]).toHaveAttribute('tabindex', '0');
    expect(controls[2]).toHaveAttribute('tabindex', '-1');
  });

  it('selects the week when its control is clicked or activated with keyboard', async () => {
    const spy = jest.fn();
    const { container } = render(<WeekPicker {...defaultProps} onChange={spy} />);
    await userEvent.click(weekControls(container)[1]);
    expect(spy).toHaveBeenLastCalledWith('2022-04-04');
    expect(selectedTexts(container)).toStrictEqual(['4', '5', '6', '7', '8', '9', '10']);

    weekControls(container)[3].focus();
    await userEvent.keyboard('{Enter}');
    expect(spy).toHaveBeenLastCalledWith('2022-04-18');
  });

  it('moves focus between week controls with ArrowDown and ArrowUp', async () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    const controls = weekControls(container);
    await userEvent.click(controls[0]);
    expect(controls[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(controls[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(controls[2]).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(controls[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(controls[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(controls[0]).toHaveFocus();
  });

  it('switches to the previous month with ArrowUp on the first week', async () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    await userEvent.click(weekControls(container)[0]);
    await userEvent.keyboard('{ArrowUp}');
    expect(container.querySelector('[data-level-control]')!.textContent).toBe('March 2022');
    expect(
      container.querySelector('[data-week-control][aria-label="21 March 2022 – 27 March 2022"]')
    ).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(
      container.querySelector('[data-week-control][aria-label="28 March 2022 – 3 April 2022"]')
    ).toHaveFocus();
  });

  it('switches to the next month with ArrowDown on the last week', async () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    const controls = weekControls(container);
    await userEvent.click(controls[controls.length - 1]);
    await userEvent.keyboard('{ArrowDown}');
    expect(container.querySelector('[data-level-control]')!.textContent).toBe('May 2022');
    expect(
      container.querySelector('[data-week-control][aria-label="2 May 2022 – 8 May 2022"]')
    ).toHaveFocus();
  });

  it('moves focus to the next month column with ArrowDown on the last week', async () => {
    const { container } = render(<WeekPicker {...defaultProps} numberOfColumns={2} />);
    const columns = container.querySelectorAll('table');
    const firstColumnControls = columns[0].querySelectorAll('[data-week-control]');
    const secondColumnControls = columns[1].querySelectorAll('[data-week-control]');
    await userEvent.click(firstColumnControls[firstColumnControls.length - 1]);
    await userEvent.keyboard('{ArrowDown}');
    expect(secondColumnControls[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(firstColumnControls[firstColumnControls.length - 1]).toHaveFocus();
  });

  it('skips disabled week controls during keyboard navigation', async () => {
    const { container } = render(
      <WeekPicker
        {...defaultProps}
        excludeDate={(date) => date >= '2022-04-04' && date <= '2022-04-10'}
      />
    );
    const controls = weekControls(container);
    expect(controls[1]).toBeDisabled();
    await userEvent.click(controls[0]);
    await userEvent.keyboard('{ArrowDown}');
    expect(controls[2]).toHaveFocus();
  });

  it('highlights the week when its control is hovered', async () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    await userEvent.hover(weekControls(container)[2]);
    expect(container.querySelectorAll('[data-week-hovered]')).toHaveLength(7);
    expect(days(container)[14]).toHaveAttribute('data-week-hovered');
  });

  it('sets default aria-label on week controls and supports getWeekControlProps', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(<WeekPicker {...defaultProps} />);
    expect(weekControls(container)[0]).toHaveAttribute(
      'aria-label',
      '28 March 2022 – 3 April 2022'
    );

    rerender(
      <WeekPicker
        {...defaultProps}
        getWeekControlProps={(weekStart) => ({
          'aria-label': `Week of ${weekStart}`,
          onClick: spy,
          'data-test': weekStart,
        })}
      />
    );
    expect(weekControls(container)[0]).toHaveAttribute('aria-label', 'Week of 2022-03-28');
    expect(weekControls(container)[0]).toHaveAttribute('data-test', '2022-03-28');
    await userEvent.click(weekControls(container)[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('supports month props that stay relevant for weeks', () => {
    const { container, rerender } = render(<WeekPicker {...defaultProps} hideWeekdays />);
    expect(container.querySelector('thead')).toBe(null);

    rerender(<WeekPicker {...defaultProps} excludeDate={(date) => date === '2022-04-12'} />);
    expect(days(container)[15]).toBeDisabled();

    rerender(<WeekPicker {...defaultProps} renderDay={(date) => `${date}!`} />);
    expect(days(container)[0].textContent).toBe('2022-03-28!');
  });

  it('selects the whole week when any day is clicked (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(<WeekPicker {...defaultProps} onChange={spy} />);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(0);

    await userEvent.click(days(container)[10]);
    expect(spy).toHaveBeenCalledWith('2022-04-04');
    expect(selectedTexts(container)).toStrictEqual(['4', '5', '6', '7', '8', '9', '10']);

    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-first-in-range]')).toHaveLength(0);
  });

  it('respects firstDayOfWeek prop', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} firstDayOfWeek={0} onChange={spy} />
    );
    await userEvent.click(days(container)[10]);
    expect(spy).toHaveBeenCalledWith('2022-04-03');
  });

  it('respects firstDayOfWeek from DatesProvider', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ firstDayOfWeek: 6 }}>
        <WeekPicker {...defaultProps} onChange={spy} />
      </DatesProvider>
    );
    await userEvent.click(days(container)[10]);
    expect(spy).toHaveBeenCalledWith('2022-04-02');
  });

  it('highlights the week of a controlled mid-week value', () => {
    const { container } = render(<WeekPicker {...defaultProps} value="2022-04-13" />);
    expect(selectedTexts(container)).toStrictEqual(['11', '12', '13', '14', '15', '16', '17']);
  });

  it('highlights outside dates that belong to a selected week', () => {
    const { container } = render(<WeekPicker {...defaultProps} value="2022-03-30" />);
    expect(selectedTexts(container)).toStrictEqual(['28', '29', '30', '31', '1', '2', '3']);
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} value="2022-04-11" onChange={spy} />
    );
    await userEvent.click(days(container)[0]);
    expect(spy).toHaveBeenCalledWith('2022-03-28');
  });

  it('supports allowDeselect', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} allowDeselect value="2022-04-11" onChange={spy} />
    );
    await userEvent.click(days(container)[16]);
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(<WeekPicker {...defaultProps} type="multiple" />);
    await userEvent.click(days(container)[0]);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(7);

    await userEvent.click(days(container)[15]);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(14);

    await userEvent.click(days(container)[3]);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(7);
    expect(selectedTexts(container)).toStrictEqual(['11', '12', '13', '14', '15', '16', '17']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} type="multiple" value={['2022-04-11']} onChange={spy} />
    );
    await userEvent.click(days(container)[0]);
    expect(spy).toHaveBeenCalledWith(['2022-04-11', '2022-03-28']);
  });

  it('can be uncontrolled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(<WeekPicker {...defaultProps} type="range" onChange={spy} />);

    await userEvent.click(days(container)[2]);
    expect(spy).toHaveBeenLastCalledWith(['2022-03-28', null]);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(7);

    await userEvent.hover(days(container)[9]);
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(14);

    await userEvent.click(days(container)[16]);
    expect(spy).toHaveBeenLastCalledWith(['2022-03-28', '2022-04-11']);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(14);
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(21);
    expect(container.querySelectorAll('[data-first-in-range]')).toHaveLength(7);
    expect(container.querySelectorAll('[data-last-in-range]')).toHaveLength(7);
    expect(days(container)[0]).toHaveAttribute('data-first-in-range');
    expect(days(container)[20]).toHaveAttribute('data-last-in-range');
  });

  it('can be controlled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} type="range" value={[null, null]} onChange={spy} />
    );
    await userEvent.click(days(container)[0]);
    expect(spy).toHaveBeenLastCalledWith(['2022-03-28', null]);
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(days(container)[8]);
    expect(spy).toHaveBeenCalledWith(['2022-04-04', null]);
    await userEvent.click(days(container)[12]);
    expect(spy).toHaveBeenCalledWith(['2022-04-04', '2022-04-04']);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(days(container)[8]);
    expect(spy).toHaveBeenCalledWith(['2022-04-04', null]);
    await userEvent.click(days(container)[12]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('marks the hovered week with data-week-hovered and clears it on mouse leave', async () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    const buttons = days(container);

    await userEvent.hover(buttons[10]);
    expect(container.querySelectorAll('[data-week-hovered]')).toHaveLength(7);
    expect(buttons[7]).toHaveAttribute('data-week-hovered');
    expect(buttons[13]).toHaveAttribute('data-week-hovered');
    expect(buttons[14]).not.toHaveAttribute('data-week-hovered');

    await userEvent.unhover(container.querySelector('[data-calendar]')!);
    expect(container.querySelectorAll('[data-week-hovered]')).toHaveLength(0);
  });

  it('supports onClick handler from getDayProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker {...defaultProps} getDayProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(days(container)[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('marks selected month and year on year/decade levels for a single value', () => {
    const { container, rerender } = render(
      <WeekPicker {...defaultProps} value="2022-04-11" level="year" />
    );
    expect(container.querySelector('[data-selected]:not([data-week-control])')!.textContent).toBe(
      'Apr'
    );

    rerender(<WeekPicker {...defaultProps} value="2022-04-11" level="decade" />);
    expect(container.querySelector('[data-selected]:not([data-week-control])')!.textContent).toBe(
      '2022'
    );
  });

  it('applies week row and day classes for row-level highlight styles', () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    expect(container.querySelector('tbody tr')).toHaveClass('weekRow');
    expect(days(container)[0]).toHaveClass('weekDay');
  });

  it('merges user classNames with week row and day classes', () => {
    const { container } = render(
      <WeekPicker {...defaultProps} classNames={{ monthRow: 'custom-row', day: 'custom-day' }} />
    );
    const row = container.querySelector('tbody tr');
    expect(row).toHaveClass('weekRow');
    expect(row).toHaveClass('custom-row');
    expect(days(container)[0]).toHaveClass('custom-day');
  });

  it('does not apply week row and day classes when unstyled', () => {
    const { container } = render(<WeekPicker {...defaultProps} unstyled />);
    expect(container.querySelector('tbody tr')).not.toHaveClass('weekRow');
    expect(days(container)[0]).not.toHaveClass('weekDay');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<WeekPicker {...defaultProps} />);
    expect(container.querySelector('.mantine-WeekPicker-month')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(
      <WeekPicker {...defaultProps} __staticSelector="WeekPickerInput" />
    );
    expect(container.querySelector('.mantine-WeekPickerInput-month')).toBeInTheDocument();
  });

  it('correctly handles presets', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker
        {...defaultProps}
        onChange={spy}
        presets={[
          { label: 'This week', value: '2022-04-11' },
          { label: 'Week of Jan 5', value: '2023-01-05' },
        ]}
      />
    );

    expect(screen.getByText('This week')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Week of Jan 5'));
    expect(spy).toHaveBeenCalledWith('2023-01-02');
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(7);
  });

  it('normalizes range presets to week starts', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPicker
        {...defaultProps}
        type="range"
        onChange={spy}
        presets={[{ label: 'Two weeks', value: ['2022-04-13', '2022-04-27'] }]}
      />
    );

    await userEvent.click(screen.getByText('Two weeks'));
    expect(spy).toHaveBeenCalledWith(['2022-04-11', '2022-04-25']);
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(21);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(14);
  });

  it('does not hang and renders no selection for an invalid/empty value', () => {
    const { container } = render(<WeekPicker defaultDate="2022-04-11" value="" />);
    expect(days(container)).toHaveLength(35);
    expect(container.querySelectorAll('[data-selected]:not([data-week-control])')).toHaveLength(0);
  }, 5000);
});
