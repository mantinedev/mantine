import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';

export function resolveNow(getCurrentTime: (() => AnyDateValue) | undefined) {
  return getCurrentTime ? dayjs(getCurrentTime()) : dayjs();
}
