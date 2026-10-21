# Setup

## Render helper

```tsx
// test-utils/render.tsx
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/theme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }) => (
      <MantineProvider theme={theme} env="test">
        {children}
      </MantineProvider>
    ),
  });
}

// test-utils/index.ts
import userEvent from '@testing-library/user-event';
export * from '@testing-library/react';
export { render } from './render';
export { userEvent };
```

`env="test"` turns off transitions and portals' delays, so overlays appear synchronously. Import
`render` from the helper everywhere, never from `@testing-library/react` directly.

## jsdom stubs

jsdom lacks APIs Mantine components use. Put these in the test setup file (`vitest.setup.mjs`
or `jest.setup.ts`):

```ts
import '@testing-library/jest-dom/vitest'; // or '@testing-library/jest-dom' with jest

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
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
    value: { addEventListener: () => {}, removeEventListener: () => {} },
    configurable: true,
  });
}
```

- `matchMedia` returning `matches: false` means every responsive component takes its `base`
  branch: picker inputs open a drawer, `hiddenFrom`/`visibleFrom` hide the desktop variant.
  Mock it per test (`vi.spyOn(window, 'matchMedia')` returning `matches: true` for
  `min-width` queries) when the desktop behavior is under test.
- `document.fonts` is needed by `Textarea autosize`; keep the stub `configurable` so a test can
  override it.
- Never put these stubs inside a test file: they belong to the setup file, once.

## Runners

- vitest: `environment: 'jsdom'`, `globals: true`, `setupFiles`, `include: ['src/**/*.test.tsx']`.
- jest: `testEnvironment: 'jest-environment-jsdom'`, `setupFilesAfterEnv`, CSS modules mapped
  to `identity-obj-proxy`, and `React` on `globalThis` when the transform uses the classic JSX
  runtime.
- Tests must pass with `--run`/`--ci` in both; do not rely on watch mode or on test order.
