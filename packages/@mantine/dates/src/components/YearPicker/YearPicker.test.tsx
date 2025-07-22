import dayjs from 'dayjs';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { YearPicker, YearPickerProps, YearPickerStylesNames } from './YearPicker';

describe('@mantine/dates/YearPicker', () => {
  tests.itSupportsSystemProps<YearPickerProps, YearPickerStylesNames>({
    component: YearPicker,
    props: {},
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/YearPicker',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'yearsList',
      'yearsListCell',
      'yearsListControl',
      'yearsListRow',
    ],
    providerStylesApi: false,
  });

  datesTests.itSupportsYearsListProps({ component: YearPicker, props: {} });
  datesTests.itHandlesControlsKeyboardEvents({
    component: YearPicker,
    props: {},
    listSelector: '.mantine-YearPicker-yearsList',
  });

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<YearPicker date="2022-04-11" />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2020');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker date="2022-04-11" value="2023-04-11" onChange={spy} />
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('2023');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith('2020-01-01');
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(<YearPicker type="multiple" date="2022-04-11" />);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2020');

    await userEvent.click(container.querySelectorAll('table button')[1]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(
      Array.from(container.querySelectorAll('[data-selected]')).map((node) => node.textContent)
    ).toStrictEqual(['2020', '2021']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker type="multiple" date="2022-04-11" value={['2023-04-11']} onChange={spy} />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(['2023-04-11', '2020-01-01']);
  });

  it('can be uncontrolled (type="range")', async () => {
    const { container } = render(<YearPicker type="range" />);
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
    const { container } = render(<YearPicker type="range" value={[null, null]} onChange={spy} />);
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenLastCalledWith(['2020-01-01', null]);
  });

  it('supports onClick handler from getYearControlProps', async () => {
    const spy = jest.fn();
    const { container } = render(<YearPicker getYearControlProps={() => ({ onClick: spy })} />);
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalled();
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(<YearPicker type="range" allowSingleDateInRange onChange={spy} />);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-01-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-01-01', '2022-01-01']);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-01-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<YearPicker />);
    expect(container.querySelector('.mantine-YearPicker-yearsList')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearPicker __staticSelector="Calendar" />);
    expect(container.querySelector('.mantine-Calendar-yearsList')).toBeInTheDocument();
  });

  const ariaLabels = {
    previousDecade: 'Previous decade',
    nextDecade: 'Next decade',
  };

  it('only adds selected year of decade to tab order', async () => {
    render(
      <YearPicker
        date="2010-01-01"
        getYearControlProps={(date) => ({
          selected: dayjs('2013-01-01').isSame(date, 'year'),
        })}
        ariaLabels={ariaLabels}
      />
    );
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.previousDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: '2013' })).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds current year of decade to tab order', async () => {
    render(<YearPicker date={dayjs().format('YYYY-MM-DD')} ariaLabels={ariaLabels} />);
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.previousDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: dayjs().year().toString() })).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds first non-disabled year of decade to tab order', async () => {
    render(
      <YearPicker
        date="2010-01-01"
        minDate="2014-01-01"
        getYearControlProps={(date) => ({
          disabled: dayjs('2014-01-01').isSame(date, 'year'),
        })}
        ariaLabels={ariaLabels}
      />
    );
    await userEvent.tab();
    expect(screen.getByRole('button', { name: ariaLabels.nextDecade })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: '2015' })).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });
});
