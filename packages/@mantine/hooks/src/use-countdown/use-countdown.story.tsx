import { useState } from 'react';
import { useCountdown } from './use-countdown';

export default { title: 'useCountdown' };

export function Duration() {
  const { count, running, start, stop, reset } = useCountdown({
    countStart: 10_000,
    interval: 1000,
  });

  return (
    <div style={{ padding: 40 }}>
      <p>Remaining: {Math.ceil(count / 1000)}s</p>
      <button type="button" onClick={start}>
        Start
      </button>
      <button type="button" onClick={stop}>
        Stop
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <p>Running: {running ? 'yes' : 'no'}</p>
    </div>
  );
}

export function SubSecond() {
  const { formatted } = useCountdown({ countStart: 5000, interval: 30, autoStart: true });

  return (
    <div style={{ padding: 40, fontVariantNumeric: 'tabular-nums' }}>
      {formatted.seconds}.{formatted.milliseconds.toString().padStart(3, '0')}
    </div>
  );
}

export function TargetDate() {
  const [targetDate] = useState(() => new Date(Date.now() + 60 * 1000));
  const { formatted, running } = useCountdown({ targetDate, interval: 1000 });

  return (
    <div style={{ padding: 40, fontVariantNumeric: 'tabular-nums' }}>
      <p>
        {formatted.minutes.toString().padStart(2, '0')}:
        {formatted.seconds.toString().padStart(2, '0')}
      </p>
      <p>Running: {running ? 'yes' : 'no'}</p>
    </div>
  );
}
