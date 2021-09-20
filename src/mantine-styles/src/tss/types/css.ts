import type { CSSInterpolation } from './css-object';

export interface CSS {
  (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
  (...args: CSSInterpolation[]): string;
}
