import { matches } from '../matches/matches';
import { SyncReactNode } from '../types';

export const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function isEmail(error?: SyncReactNode) {
  return matches(emailRegexp, error);
}
