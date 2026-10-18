/* oxlint-disable no-console */
import { format } from 'node:util';
import '@testing-library/jest-dom';

if (typeof window !== 'undefined') {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  window.HTMLElement.prototype.scrollIntoView = () => {};

  // jsdom does not implement media playback and logs an error without these stubs.
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.HTMLMediaElement.prototype.pause = () => {};
  window.HTMLMediaElement.prototype.load = () => {};

  const matchesWidthQuery = (query: string) => {
    const match = query.match(/\((min|max)-width:\s*([\d.]+)(px|em|rem)\)/);
    if (!match) {
      return false;
    }
    const value = parseFloat(match[2]) * (match[3] === 'px' ? 1 : 16);
    return match[1] === 'min' ? window.innerWidth >= value : window.innerWidth <= value;
  };

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: matchesWidthQuery(query),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.ResizeObserver = ResizeObserver;

  if (!document.fonts) {
    Object.defineProperty(document, 'fonts', {
      writable: true,
      value: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    });
  }

  class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.IntersectionObserver = IntersectionObserver as any;
}

const unexpectedConsoleCalls: string[] = [];

function recordConsoleCall(level: string, data: unknown[]) {
  let testName = '';
  try {
    testName = expect.getState().currentTestName || '';
  } catch {
    testName = '';
  }
  const origin = testName ? ` (emitted while running "${testName}")` : '';
  unexpectedConsoleCalls.push(`console.${level}${origin}: ${format(...data)}`);
}

function failOnUnexpectedConsoleCalls() {
  if (unexpectedConsoleCalls.length === 0) {
    return;
  }

  const calls = unexpectedConsoleCalls.splice(0);
  throw new Error(
    `Test emitted ${calls.length} unexpected console call(s):\n\n${calls.join('\n\n')}`
  );
}

function isIgnoredConsoleCall(data: unknown[], fragment: string) {
  return typeof data[0]?.toString === 'function' && data[0].toString().includes(fragment);
}

const originalConsoleError = console.error;
console.error = (...data) => {
  if (isIgnoredConsoleCall(data, 'Error: Could not parse CSS stylesheet')) {
    return;
  }
  recordConsoleCall('error', data);
  originalConsoleError(...data);
};

// recharts ResponsiveContainer measures its parent with ResizeObserver, which is stubbed in jsdom,
// so every chart test logs a zero size warning.
const originalConsoleWarn = console.warn;
console.warn = (...data) => {
  if (isIgnoredConsoleCall(data, 'of chart should be greater than 0')) {
    return;
  }
  recordConsoleCall('warn', data);
  originalConsoleWarn(...data);
};

// Any console.error/console.warn emitted during a test fails it. Fix the cause (state updates
// outside act(), invalid props, React warnings) instead of mocking the console. A warning that
// fires between tests is reported on the next test or, after the last test, on the suite.
afterEach(failOnUnexpectedConsoleCalls);
afterAll(failOnUnexpectedConsoleCalls);
