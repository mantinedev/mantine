import { timeToSeconds } from '../utils/time-to-seconds/time-to-seconds';

export function isPresetDisabled(time: string, min: string | undefined, max: string | undefined) {
  const seconds = timeToSeconds(time);
  return (!!min && seconds < timeToSeconds(min)) || (!!max && seconds > timeToSeconds(max));
}
