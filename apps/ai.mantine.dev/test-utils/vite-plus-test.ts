// Generated examples come from the Mantine Vite template, where tests import the test API from
// `vite-plus/test` (vitest). The site runs them with jest: this module maps that API to jest.
const jestGlobals = globalThis as unknown as {
  describe: jest.Describe;
  it: jest.It;
  test: jest.It;
  expect: jest.Expect;
  beforeAll: jest.Lifecycle;
  afterAll: jest.Lifecycle;
  beforeEach: jest.Lifecycle;
  afterEach: jest.Lifecycle;
};

export const { describe, it, test, expect, beforeAll, afterAll, beforeEach, afterEach } =
  jestGlobals;

type FakeTimersOptions = {
  toFake?: string[];
  now?: number | Date;
};

const ALL_TIMER_APIS = [
  'Date',
  'Intl',
  'hrtime',
  'nextTick',
  'performance',
  'queueMicrotask',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'requestIdleCallback',
  'cancelIdleCallback',
  'setImmediate',
  'clearImmediate',
  'setInterval',
  'clearInterval',
  'setTimeout',
  'clearTimeout',
] as const;

// Jest fakes Intl at runtime but its types do not list it yet
type DoNotFake = Extract<
  NonNullable<Parameters<typeof jest.useFakeTimers>[0]>,
  { doNotFake?: unknown }
>['doNotFake'];

export const vi = {
  fn<T extends (...args: any[]) => any = (...args: any[]) => any>(implementation?: T) {
    return jest.fn(implementation) as unknown as jest.Mock<ReturnType<T>, Parameters<T>>;
  },
  spyOn: jest.spyOn,
  mock: jest.mock,
  clearAllMocks: jest.clearAllMocks,
  resetAllMocks: jest.resetAllMocks,
  restoreAllMocks: jest.restoreAllMocks,
  useRealTimers: jest.useRealTimers,
  setSystemTime: jest.setSystemTime,
  advanceTimersByTime: jest.advanceTimersByTime,
  runAllTimers: jest.runAllTimers,
  useFakeTimers(options: FakeTimersOptions = {}) {
    const doNotFake = options.toFake
      ? ALL_TIMER_APIS.filter((api) => !options.toFake!.includes(api))
      : undefined;
    jest.useFakeTimers({ doNotFake: doNotFake as unknown as DoNotFake, now: options.now });
    return vi;
  },
};
