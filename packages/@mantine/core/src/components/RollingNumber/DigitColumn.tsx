import { useStyles } from '../../core';
import type { RollingNumberFactory } from './RollingNumber';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

interface DigitColumnProps {
  digit: string;
  getStyles: ReturnType<typeof useStyles<RollingNumberFactory>>;
  previousDigit: string | null;
  empty?: boolean;
}

export function DigitColumn({ digit, getStyles, previousDigit, empty }: DigitColumnProps) {
  const digitIndex = DIGITS.indexOf(digit);
  const prevIndex = previousDigit !== null ? DIGITS.indexOf(previousDigit) : -1;
  const direction = prevIndex === -1 || digitIndex >= prevIndex ? 'up' : 'down';
  const digitStyles = getStyles('digit');
  const columnStyles = getStyles('digitColumn');

  return (
    <span {...digitStyles} data-empty={empty || undefined} aria-hidden="true">
      <span
        {...columnStyles}
        style={{ ...columnStyles.style, transform: `translateY(${-digitIndex}em)` }}
        data-direction={direction}
      >
        {DIGITS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </span>
    </span>
  );
}
