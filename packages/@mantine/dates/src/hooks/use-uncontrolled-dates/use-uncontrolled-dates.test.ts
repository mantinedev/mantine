import { renderHook } from '@testing-library/react';
import { useUncontrolledDates } from './use-uncontrolled-dates';

type HookConfig = Parameters<typeof useUncontrolledDates>[0];

const hookDefaults: Omit<HookConfig, 'type'> = {
  defaultValue: undefined!,
  value: undefined!,
  onChange: () => {},
};

const defaultTypeValue = new Date();
const rangeTypeValue = [new Date(), new Date(Date.now() + 86400000)];
const multipleTypeValue = [
  new Date(Date.now() - 86400000),
  new Date(),
  new Date(Date.now() + 86400000),
];

const setupHook = (config: Pick<HookConfig, 'type'> & Partial<HookConfig>) =>
  renderHook<any, HookConfig>((innerConfig) => useUncontrolledDates(innerConfig), {
    initialProps: {
      ...hookDefaults,
      ...config,
    },
  });

describe('use-uncontrolled-dates', () => {
  it('returns correct value for type `default` and uncontrolled use in case no defaultValue has been specified', () => {
    const hook = setupHook({
      type: 'default',
    });
    expect(hook.result.current[0]).toBe(null);
  });

  it('returns correct value for type `multiple` and uncontrolled use in case no defaultValue has been specified', () => {
    const hook = setupHook({
      type: 'multiple',
    });
    expect(hook.result.current[0]).toStrictEqual([]);
  });

  it('returns correct value for type `range` and uncontrolled use in case no defaultValue has been specified', () => {
    const hook = setupHook({
      type: 'range',
    });
    expect(hook.result.current[0]).toStrictEqual([null, null]);
  });

  it('returns defaultValue for type `default` and uncontrolled use', () => {
    const hook = setupHook({
      type: 'default',
      defaultValue: defaultTypeValue,
    });
    expect(hook.result.current[0]).toBe(defaultTypeValue);
  });

  it('returns defaultValue for type `multiple` and uncontrolled use', () => {
    const hook = setupHook({
      type: 'multiple',
      defaultValue: multipleTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(multipleTypeValue);
  });

  it('returns defaultValue for type `range` and uncontrolled use', () => {
    const hook = setupHook({
      type: 'range',
      defaultValue: rangeTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(rangeTypeValue);
  });

  it('returns value for type `default` and controlled use', () => {
    const hook = setupHook({
      type: 'default',
      value: defaultTypeValue,
    });
    expect(hook.result.current[0]).toBe(defaultTypeValue);
  });

  it('returns value for type `multiple` and controlled use', () => {
    const hook = setupHook({
      type: 'multiple',
      value: multipleTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(multipleTypeValue);
  });

  it('returns value for type `range` and controlled use', () => {
    const hook = setupHook({
      type: 'range',
      value: rangeTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(rangeTypeValue);
  });

  it('allows changing the type in controlled use', () => {
    const hook = setupHook({
      type: 'default',
      value: defaultTypeValue,
    });

    hook.rerender({
      ...hookDefaults,
      type: 'multiple',
      value: multipleTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(multipleTypeValue);
  });

  it('resets the value when changing the type in uncontrolled use', () => {
    const hook = setupHook({
      type: 'default',
      defaultValue: defaultTypeValue,
    });

    hook.rerender({
      ...hookDefaults,
      type: 'multiple',
      defaultValue: multipleTypeValue,
    });

    expect(hook.result.current[0]).toStrictEqual(multipleTypeValue);

    hook.rerender({
      ...hookDefaults,
      type: 'default',
    });
    expect(hook.result.current[0]).toStrictEqual(null);

    hook.rerender({
      ...hookDefaults,
      type: 'range',
      defaultValue: rangeTypeValue,
    });
    expect(hook.result.current[0]).toStrictEqual(rangeTypeValue);

    hook.rerender({
      ...hookDefaults,
      type: 'default',
    });
    expect(hook.result.current[0]).toStrictEqual(null);
  });
});
