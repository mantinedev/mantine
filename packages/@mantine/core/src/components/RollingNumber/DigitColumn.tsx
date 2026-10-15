import { useState } from 'react';
import { useStyles } from '../../core';
import type { RollingNumberFactory } from './RollingNumber';

const STRIP_CELLS = Array.from({ length: 20 }, (_, index) => String(index % 10));

interface DigitColumnProps {
  digit: string;
  getStyles: ReturnType<typeof useStyles<RollingNumberFactory>>;
  previousDigit: string | null;
  empty?: boolean;
  valueDirection: 'up' | 'down';
}

export function DigitColumn({
  digit,
  getStyles,
  previousDigit,
  empty,
  valueDirection,
}: DigitColumnProps) {
  const digitIndex = parseInt(digit, 10);
  const previousDigitIndex = previousDigit !== null ? parseInt(previousDigit, 10) : digitIndex;

  const steps =
    valueDirection === 'up'
      ? (digitIndex - previousDigitIndex + 10) % 10
      : -((previousDigitIndex - digitIndex + 10) % 10);

  const startIndex = previousDigitIndex + steps < 0 ? previousDigitIndex + 10 : previousDigitIndex;
  const [roll, setRoll] = useState({ digit, startIndex, endIndex: startIndex + steps });

  const nextRoll =
    steps !== 0
      ? { digit, startIndex, endIndex: startIndex + steps }
      : roll.digit === digit
        ? roll
        : { digit, startIndex: digitIndex, endIndex: digitIndex };

  if (
    nextRoll.digit !== roll.digit ||
    nextRoll.startIndex !== roll.startIndex ||
    nextRoll.endIndex !== roll.endIndex
  ) {
    setRoll(nextRoll);
  }

  const rollSteps = nextRoll.endIndex - nextRoll.startIndex;
  const rollDirection = rollSteps > 0 ? 'up' : rollSteps < 0 ? 'down' : undefined;

  const digitStyles = getStyles('digit');
  const columnStyles = getStyles('digitColumn');

  return (
    <span {...digitStyles} data-empty={empty || undefined} data-reduce-motion aria-hidden="true">
      <span
        key={digit}
        {...columnStyles}
        style={{
          ...columnStyles.style,
          top: `${-digitIndex}em`,
          ['--rn-roll-from' as any]: `translateY(${digitIndex - nextRoll.startIndex}em)`,
          ['--rn-roll-to' as any]: `translateY(${digitIndex - nextRoll.endIndex}em)`,
        }}
        data-direction={rollDirection}
        data-reduce-motion
      >
        {STRIP_CELLS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </span>
    </span>
  );
}
