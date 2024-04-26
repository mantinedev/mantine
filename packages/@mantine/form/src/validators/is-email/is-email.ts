import { matches } from '../matches/matches';

export function isEmail(error?: React.ReactNode) {
  return matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}
