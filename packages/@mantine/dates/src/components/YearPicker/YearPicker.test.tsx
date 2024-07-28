import dayjs from 'dayjs';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DatesProvider } from '../DatesProvider';
import { YearPicker, YearPickerProps, YearPickerStylesNames } from './YearPicker';

const defaultProps = {};

describe('@mantine/dates/YearPicker', () => {
  tests.itSupportsSystemProps<YearPickerProps, YearPickerStylesNames>({
    component: YearPicker,
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

  datesTests.itSupportsYearsListProps({ component: YearPicker, props: defaultProps });
  datesTests.itHandlesControlsKeyboardEvents({
    component: YearPicker,
    props: defaultProps,
    listSelector: '.mantine-YearPicker-yearsList',
  });

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<YearPicker {...defaultProps} date={new Date(2022, 3, 11)} />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2020');
  });

  it('can be uncontrolled (type="default") with timezone (UTC)', async () => {
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <YearPicker {...defaultProps} date={new Date(2019, 11, 31, 23)} />
      </DatesProvider>
    );
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2020');
  });

  it('can be uncontrolled (type="default") with timezone (America/Los_Angeles)', async () => {
    const { container } = render(
      <DatesProvider settings={{ timezone: 'America/Los_Angeles' }}>
        <YearPicker {...defaultProps} date={new Date(2020, 11, 31, 23)} />
      </DatesProvider>
    );
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2020');
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

    expect(container.querySelector('[data-selected]')!.textContent).toBe('2023');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));
  });

  it('can be controlled (type="default") with timezone (UTC)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <YearPicker
          {...defaultProps}
          date={new Date(2019, 11, 31, 23)}
          value={new Date(2022, 11, 31, 23)}
          onChange={spy}
        />
      </DatesProvider>
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('2023');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(new Date(2019, 11, 31, 19));
  });

  it('can be controlled (type="default") with timezone (America/Los_Angeles)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: 'America/Los_Angeles' }}>
        <YearPicker
          {...defaultProps}
          date={new Date(2020, 10, 31, 23)}
          value={new Date(2022, 11, 31, 23)}
          onChange={spy}
        />
      </DatesProvider>
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('2022');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1, 3));
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <YearPicker {...defaultProps} type="multiple" date={new Date(2022, 3, 11)} />
    );
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

  it('can be uncontrolled (type="multiple") with timezone (UTC)', async () => {
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <YearPicker {...defaultProps} type="multiple" date={new Date(2022, 3, 11)} />
      </DatesProvider>
    );
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

  it('can be uncontrolled (type="multiple") with timezone (America/Los_Angeles)', async () => {
    const { container } = render(
      <DatesProvider settings={{ timezone: 'America/Los_Angeles' }}>
        <YearPicker {...defaultProps} type="multiple" date={new Date(2022, 3, 11)} />
      </DatesProvider>
    );
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
      <YearPicker
        {...defaultProps}
        type="multiple"
        date={new Date(2022, 3, 11)}
        value={[new Date(2023, 3, 11)]}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith([new Date(2023, 3, 11), new Date(2020, 0, 1)]);
  });

  it('can be controlled (type="multiple") with timezone (UTC)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <YearPicker
          {...defaultProps}
          type="multiple"
          date={new Date(2022, 3, 11)}
          value={[new Date(2023, 3, 11)]}
          onChange={spy}
        />
      </DatesProvider>
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith([new Date(2023, 3, 11), new Date(2019, 11, 31, 19)]);
  });

  it('can be controlled (type="multiple") with timezone (America/Los_Angeles)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: 'America/Los_Angeles' }}>
        <YearPicker
          {...defaultProps}
          type="multiple"
          date={new Date(2022, 3, 11)}
          value={[new Date(2023, 3, 11)]}
          onChange={spy}
        />
      </DatesProvider>
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith([new Date(2023, 3, 11), new Date(2020, 0, 1, 3)]);
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
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenLastCalledWith([new Date(2020, 0, 1), null]);
  });

  it('supports onClick handler from getYearControlProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <YearPicker {...defaultProps} getYearControlProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalled();
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
    expect(container.querySelector('.mantine-YearPicker-yearsList')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearPicker {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('.mantine-Calendar-yearsList')).toBeInTheDocument();
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
