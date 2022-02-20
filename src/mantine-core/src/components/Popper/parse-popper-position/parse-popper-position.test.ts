import { parsePopperPosition } from './parse-popper-position';

describe('@mantine/core/Popper/parsePopperPosition', () => {
  it('returns default position if argument is null or undefined', () => {
    expect(parsePopperPosition(null)).toStrictEqual({ position: 'top', placement: 'center' });
    expect(parsePopperPosition(undefined)).toStrictEqual({ position: 'top', placement: 'center' });
  });

  it('returns correct position for end and start placement', () => {
    expect(parsePopperPosition('left-start')).toStrictEqual({
      position: 'left',
      placement: 'start',
    });
    expect(parsePopperPosition('bottom-end')).toStrictEqual({
      position: 'bottom',
      placement: 'end',
    });
  });

  it('returns correct position for center placement', () => {
    expect(parsePopperPosition('right')).toStrictEqual({ position: 'right', placement: 'center' });
    expect(parsePopperPosition('top')).toStrictEqual({ position: 'top', placement: 'center' });
  });
});
