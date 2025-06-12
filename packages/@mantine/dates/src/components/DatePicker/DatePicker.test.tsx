import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DatePicker, DatePickerProps, DatePickerStylesNames } from './DatePicker';

const defaultProps = {
  defaultDate: '2022-04-11',
} satisfies Partial<DatePickerProps<'default' | 'multiple' | 'range'>>;

describe('@mantine/dates/DatePicker', () => {
  tests.itSupportsSystemProps<DatePickerProps, DatePickerStylesNames>({
    component: DatePicker,
    props: { ...defaultProps, presets: [{ label: 'Today', value: '2022-04-11' }] },
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/DatePicker',
    stylesApiSelectors: [
      'day',
      'month',
      'monthCell',
      'monthRow',
      'monthTbody',
      'monthThead',
      'weekday',
      'weekdaysRow',
      'presetsList',
      'presetButton',
      'datePickerRoot',
    ],
    providerStylesApi: false,
  });

  datesTests.itSupportsYearsListProps({
    component: DatePicker,
    props: { ...defaultProps, defaultLevel: 'decade' },
  });

  datesTests.itSupportsMonthsListProps({
    component: DatePicker,
    props: { ...defaultProps, level: 'year' },
  });

  datesTests.itHandlesMonthKeyboardEvents({
    component: DatePicker,
    props: defaultProps,
    name: 'DatePicker',
  });

  datesTests.itSupportsMonthProps({
    component: DatePicker,
    props: defaultProps,
  });

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<DatePicker {...defaultProps} date="2022-04-11" />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('28');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} date="2022-04-11" value="2022-04-11" onChange={spy} />
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('11');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith('2022-03-28');
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <DatePicker {...defaultProps} type="multiple" date="2022-04-11" />
    );
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('28');

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
        date="2022-04-11"
        value={['2022-04-11']}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(['2022-04-11', '2022-03-28']);
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
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenLastCalledWith(['2022-03-28', null]);
  });

  it('supports onClick handler from getDayProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} getDayProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalled();
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-30', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-30', '2022-03-30']);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-30', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('correctly handles presets', () => {
    const spy = jest.fn();
    render(
      <DatePicker
        {...defaultProps}
        onChange={spy}
        presets={[
          { label: 'Today', value: '2022-04-11' },
          { label: 'Tomorrow', value: '2022-04-12' },
        ]}
      />
    );

    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(screen.getByText('Tomorrow')).toBeInTheDocument();
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<DatePicker {...defaultProps} />);
    expect(container.querySelector('.mantine-DatePicker-month')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<DatePicker {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('.mantine-Calendar-month')).toBeInTheDocument();
  });
});
