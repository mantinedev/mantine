import { createAmPmHandler } from './create-amPm-handler';

describe('@mantine/dates/create-amPm-handler', () => {
  it('does not call onChange if value is the wrong input', () => {
    const ref = { current: { focus: jest.fn(), select: jest.fn() } };
    const spy = jest.fn();
    const handler = createAmPmHandler({
      onChange: spy,
      nextRef: ref as any,
    });

    handler('te', true);

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('calls onChange when value is right', () => {
    const ref = { current: { focus: jest.fn(), select: jest.fn() } };
    const spy = jest.fn();
    const handler = createAmPmHandler({
      onChange: spy,
      nextRef: ref as any,
    });

    handler('AM', true);

    expect(spy).toHaveBeenCalledWith('am');
    expect(ref.current.focus).toHaveBeenCalledTimes(1);
    expect(ref.current.select).toHaveBeenCalledTimes(1);
  });
});
