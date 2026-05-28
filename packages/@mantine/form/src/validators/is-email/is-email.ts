import { matches } from '../matches/matches';
import type { SyncReactNode } from '../types';

export function isEmail(error?: SyncReactNode) {
  return matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}
