import { useStyles } from '../../core';
import type { RollingNumberFactory } from './RollingNumber';

const STRIP_CELLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'];

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

  const wrapsForward =
    valueDirection === 'up' &&
    previousDigit !== null &&
    digitIndex < previousDigitIndex &&
    digitIndex <= 1;

  const animateToIndex = wrapsForward ? digitIndex + 10 : digitIndex;
  const direction = digitIndex >= previousDigitIndex ? 'up' : 'down';

  const digitStyles = getStyles('digit');
  const columnStyles = getStyles('digitColumn');

  return (
    <span {...digitStyles} data-empty={empty || undefined} aria-hidden="true">
      <span
        key={digit}
        {...columnStyles}
        style={{
          ...columnStyles.style,
          transform: `translateY(${-digitIndex}em)`,
          ['--rn-roll-from' as any]: `translateY(${-previousDigitIndex}em)`,
          ['--rn-roll-to' as any]: `translateY(${-animateToIndex}em)`,
        }}
        data-direction={direction}
      >
        {STRIP_CELLS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </span>
    </span>
  );
}
