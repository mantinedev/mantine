// Generated examples come from the Mantine Vite template, where tests import the test API from
// `vite-plus/test` (vitest). The site runs them with jest: this module maps that API to jest.
export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  test,
} from '@jest/globals';

type FakeTimersOptions = {
  toFake?: string[];
  now?: number | Date;
};

const ALL_TIMER_APIS = [
  'Date',
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

type TimerApi = (typeof ALL_TIMER_APIS)[number];

export const vi = {
  fn: jest.fn,
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
    jest.useFakeTimers({ doNotFake: doNotFake as TimerApi[] | undefined, now: options.now });
    return vi;
  },
};
