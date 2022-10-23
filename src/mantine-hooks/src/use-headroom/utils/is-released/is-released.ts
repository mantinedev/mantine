import { isFixed } from '../is-fixed/is-fixed';
import { isPinned } from '../is-pinned/is-pinned';

export const isReleased = (curr: number, prev: number, fixAt: number) =>
  !isPinned(curr, prev) && !isFixed(curr, fixAt);
