import { getDayProps } from './get-day-props';

const defaultProps = {
  date: new Date(2021, 11, 9),
  month: new Date(2021, 11, 1),
  hasValue: false,
  value: null,
  minDate: null,
  maxDate: null,
  excludeDate: () => false,
  disableOutsideEvents: false,
  range: [null, null] as [Date, Date],
  weekendDays: [0, 6],
};

const defaultResult = {
  disabled: false,
  firstInRange: false,
  inRange: false,
  lastInRange: false,
  outside: false,
  selected: false,
  selectedInRange: false,
  weekend: false,
};

describe('@mantine/dates/Day/get-day-props', () => {
  it('detects selected date', () => {
    expect(
      getDayProps({
        ...defaultProps,
        hasValue: true,
        date: new Date(2021, 11, 8),
        value: new Date(2021, 11, 8),
      })
    ).toStrictEqual({
      ...defaultResult,
      selected: true,
    });

    expect(
      getDayProps({
        ...defaultProps,
        hasValue: true,
        date: new Date(2021, 11, 8),
        value: new Date(2021, 12, 8),
      })
    ).toStrictEqual({
      ...defaultResult,
      selected: false,
    });
  });

  it('detects outside date', () => {
    expect(
      getDayProps({ ...defaultProps, date: new Date(2021, 11, 9), month: new Date(2021, 11, 1) })
    ).toStrictEqual({
      ...defaultResult,
      outside: false,
    });

    expect(
      getDayProps({ ...defaultProps, date: new Date(2021, 10, 9), month: new Date(2021, 11, 1) })
    ).toStrictEqual({
      ...defaultResult,
      outside: true,
    });
  });

  it('detects disabled date', () => {
    const disabledResults = { ...defaultResult, disabled: true };
    expect(getDayProps({ ...defaultProps, minDate: new Date(2040, 1, 1) })).toStrictEqual(
      disabledResults
    );
    expect(getDayProps({ ...defaultProps, maxDate: new Date(2000, 1, 1) })).toStrictEqual(
      disabledResults
    );
    expect(getDayProps({ ...defaultProps, excludeDate: () => true })).toStrictEqual(
      disabledResults
    );
    expect(
      getDayProps({
        ...defaultProps,
        disableOutsideEvents: true,
        date: new Date(2021, 10, 9),
        month: new Date(2021, 11, 1),
      })
    ).toStrictEqual({ ...disabledResults, outside: true });
  });

  it('returns correct range properties', () => {
    const range: [Date, Date] = [new Date(2021, 0, 1), new Date(2021, 0, 15)];
    const rangeResults = { ...defaultResult, inRange: true };
    expect(
      getDayProps({
        ...defaultProps,
        range,
        date: new Date(2021, 0, 5),
        month: new Date(2021, 0, 1),
      })
    ).toStrictEqual(rangeResults);

    expect(
      getDayProps({
        ...defaultProps,
        range,
        date: new Date(2021, 0, 1),
        month: new Date(2021, 0, 1),
      })
    ).toStrictEqual({ ...rangeResults, firstInRange: true, selectedInRange: true });

    expect(
      getDayProps({
        ...defaultProps,
        range,
        date: new Date(2021, 0, 15),
        month: new Date(2021, 0, 1),
      })
    ).toStrictEqual({ ...rangeResults, lastInRange: true, selectedInRange: true });
  });

  it('detects weekend', () => {
    expect(getDayProps({ ...defaultProps, date: new Date(2021, 11, 11) })).toStrictEqual({
      ...defaultResult,
      weekend: true,
    });
    expect(getDayProps({ ...defaultProps, date: new Date(2021, 11, 12) })).toStrictEqual({
      ...defaultResult,
      weekend: true,
    });
    expect(getDayProps({ ...defaultProps, date: new Date(2021, 11, 8) })).toStrictEqual({
      ...defaultResult,
      weekend: false,
    });
  });
});
