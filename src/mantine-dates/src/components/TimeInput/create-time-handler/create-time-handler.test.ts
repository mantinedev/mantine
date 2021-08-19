import { createTimeHandler } from './create-time-handler';

describe('@mantine/dates/create-time-handler', () => {
  it('does not call onChange if value is parsed to NaN', () => {
    const ref = { current: { focus: jest.fn(), select: jest.fn() } };
    const spy = jest.fn();
    const handler = createTimeHandler({
      onChange: spy,
      min: 0,
      max: 23,
      maxValue: 2,
      nextRef: ref as any,
    });

    handler('test', true);

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('calls onChange with padded value when value is more than maxValue', () => {
    const ref = { current: { focus: jest.fn(), select: jest.fn() } };
    const spy = jest.fn();
    const handler = createTimeHandler({
      onChange: spy,
      min: 0,
      max: 23,
      maxValue: 2,
      nextRef: ref as any,
    });

    handler('6', true);

    expect(spy).toHaveBeenCalledWith('06');
    expect(ref.current.focus).toHaveBeenCalledTimes(1);
    expect(ref.current.select).toHaveBeenCalledTimes(1);
  });

  it('calls onChange with value when value is less than maxValue', () => {
    const ref = { current: { focus: jest.fn(), select: jest.fn() } };
    const spy = jest.fn();
    const handler = createTimeHandler({
      onChange: spy,
      min: 0,
      max: 59,
      maxValue: 5,
      nextRef: ref as any,
    });

    handler('4', true);

    expect(spy).toHaveBeenCalledWith('4');
    expect(ref.current.focus).toHaveBeenCalledTimes(0);
    expect(ref.current.select).toHaveBeenCalledTimes(0);
  });
});
