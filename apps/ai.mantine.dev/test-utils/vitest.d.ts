import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// `@testing-library/jest-dom/vitest` augments `Assertion<T>` with a single type parameter,
// which no longer matches vitest 5 (`Assertion<R, T>`), so the augmentation is silently dropped.
// Augmenting `Matchers` instead applies the matchers to both `expect(...)` and `expect.<asymmetric>`.
declare module 'vitest' {
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown>
    extends TestingLibraryMatchers<any, R> {}
}
