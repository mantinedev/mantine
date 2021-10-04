import { parsePopperPosition } from './parse-popper-position';

describe('@mantine/core/Popper/parsePopperPosition', () => {
  it('returns default position if argument is null or undefined', () => {
    expect(parsePopperPosition(null)).toEqual({ position: 'top', placement: 'center' });
    expect(parsePopperPosition(undefined)).toEqual({ position: 'top', placement: 'center' });
  });

  it('returns correct position for end and start placement', () => {
    expect(parsePopperPosition('left-start')).toEqual({ position: 'left', placement: 'start' });
    expect(parsePopperPosition('bottom-end')).toEqual({ position: 'bottom', placement: 'end' });
  });

  it('returns correct position for center placement', () => {
    expect(parsePopperPosition('right')).toEqual({ position: 'right', placement: 'center' });
    expect(parsePopperPosition('top')).toEqual({ position: 'top', placement: 'center' });
  });
});
