import { render, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { MonthPicker, MonthPickerProps, MonthPickerStylesNames } from './MonthPicker';

const defaultProps = {
  defaultDate: '2022-04-11',
};

describe('@mantine/dates/MonthPicker', () => {
  tests.itSupportsSystemProps<MonthPickerProps, MonthPickerStylesNames>({
    component: MonthPicker,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/MonthPicker',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'monthsList',
      'monthsListCell',
      'monthsListControl',
      'monthsListRow',
    ],
    providerStylesApi: false,
  });

  datesTests.itSupportsYearsListProps({
    component: MonthPicker,
    props: { ...defaultProps, defaultLevel: 'decade' },
  });

  datesTests.itSupportsMonthsListProps({
    component: MonthPicker,
    props: defaultProps,
  });

  datesTests.itHandlesControlsKeyboardEvents({
    component: MonthPicker,
    props: defaultProps,
    listSelector: '.mantine-MonthPicker-monthsList',
  });

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<MonthPicker {...defaultProps} date="2022-04-11" />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('Jan');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker {...defaultProps} date="2022-04-11" value="2022-04-11" onChange={spy} />
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('Apr');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith('2022-01-01');
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <MonthPicker {...defaultProps} type="multiple" date="2022-04-11" />
    );
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('Jan');

    await userEvent.click(container.querySelectorAll('table button')[1]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(
      Array.from(container.querySelectorAll('[data-selected]')).map((node) => node.textContent)
    ).toStrictEqual(['Jan', 'Feb']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker
        {...defaultProps}
        type="multiple"
        date="2022-04-11"
        value={['2022-04-11']}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(['2022-04-11', '2022-01-01']);
  });

  it('can be uncontrolled (type="range")', async () => {
    const { container } = render(<MonthPicker {...defaultProps} type="range" />);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);

    await userEvent.click(container.querySelectorAll('table button')[5]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('Jun');

    await userEvent.click(container.querySelectorAll('table button')[9]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('Jun');
    expect(container.querySelectorAll('[data-selected]')[1].textContent).toBe('Oct');
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(3);
  });

  it('can be controlled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker {...defaultProps} type="range" value={[null, null]} onChange={spy} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenLastCalledWith(['2022-01-01', null]);
  });

  it('supports onClick handler from getMonthControlProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker {...defaultProps} getMonthControlProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalled();
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-01', '2022-03-01']);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthPicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-03-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<MonthPicker {...defaultProps} />);
    expect(container.querySelector('.mantine-MonthPicker-monthsList')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<MonthPicker {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('.mantine-Calendar-monthsList')).toBeInTheDocument();
  });
});
