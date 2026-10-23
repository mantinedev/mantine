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

jsdom lacks APIs Mantine components use. Put these in the test setup file (`jest.setup.ts`, or
`vitest.setup.mjs` with `vi.fn` and `@testing-library/jest-dom/vitest`):

```ts
import '@testing-library/jest-dom';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
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
    value: { addEventListener: () => {}, removeEventListener: () => {} },
    configurable: true,
  });
}
```

- `matchMedia` returning `matches: false` means every responsive component takes its `base`
  branch: picker inputs open a drawer, `hiddenFrom`/`visibleFrom` hide the desktop variant.
  Mock it per test (`jest.spyOn(window, 'matchMedia')` returning `matches: true` for
  `min-width` queries) when the desktop behavior is under test.
- `document.fonts` is needed by `Textarea autosize`; keep the stub `configurable` so a test can
  override it.
- `RichTextEditor` (tiptap/ProseMirror) measures the selection with layout APIs jsdom lacks; add
  `document.elementFromPoint = () => null`, `Range.prototype.getClientRects = () => []`,
  `Range.prototype.getBoundingClientRect = () => emptyRect` and
  `Element.prototype.getClientRects = () => []` when the component renders an editor.
- `URL.createObjectURL` / `revokeObjectURL` are stubbed when a component previews files
  (Node's implementation rejects jsdom `File` objects).
- `structuredClone` does not exist in jest's jsdom environment (it does in vitest). Code that
  clones fixtures with it fails silently inside a promise and the component never finishes
  loading: add `globalThis.structuredClone ??= (value) => JSON.parse(JSON.stringify(value))` to
  the jest setup, or clone with the spread operator in the component.
- Never put these stubs inside a test file: they belong to the setup file, once.

## Runners

Use the runner the project already has; look at `package.json` scripts and the config file, not
at the version string of a dependency.

- jest: `testEnvironment: 'jest-environment-jsdom'`, `setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']`,
  `@swc/jest` (or `babel-jest`) as the transform so `jest.mock` calls are hoisted above the imports,
  `moduleNameMapper` for the path aliases and `'\\.(css)$': 'identity-obj-proxy'` for CSS modules.
  With the automatic JSX runtime (`jsc.transform.react.runtime: 'automatic'`) no `React` global is
  needed.
- vitest: `environment: 'jsdom'`, `globals: true`, `setupFiles`, `include: ['src/**/*.test.tsx']`.

Equivalents, jest → vitest: `jest.fn` → `vi.fn`; `jest.spyOn` → `vi.spyOn`; `jest.mock(path,
factory)` → `vi.mock(path, factory)` with shared mocks declared in `vi.hoisted`;
`jest.useFakeTimers({ now, advanceTimers: true })` → `vi.useFakeTimers({ toFake: ['Date'] })` +
`vi.setSystemTime(now)`; `jest.advanceTimersByTimeAsync` → `vi.advanceTimersByTimeAsync`;
`jest.useRealTimers` → `vi.useRealTimers`; `jest.restoreAllMocks` → `vi.restoreAllMocks`.
- Tests must pass with `--run`/`--ci` in both; do not rely on watch mode or on test order.
