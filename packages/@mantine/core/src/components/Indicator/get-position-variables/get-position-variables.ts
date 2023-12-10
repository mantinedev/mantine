import { rem } from '../../../core';
import type { IndicatorPositionVariables } from '../Indicator';
import type { IndicatorPosition } from '../Indicator.types';

export function getPositionVariables(_position: IndicatorPosition = 'top-end', offset = 0) {
  const variables: Record<IndicatorPositionVariables, string | undefined> = {
    '--indicator-top': undefined,
    '--indicator-bottom': undefined,
    '--indicator-left': undefined,
    '--indicator-right': undefined,
    '--indicator-translate-x': undefined,
    '--indicator-translate-y': undefined,
  };

  const _offset = rem(offset);
  const [position, placement] = _position.split('-');

  if (position === 'top') {
    variables['--indicator-top'] = _offset;
    variables['--indicator-translate-y'] = '-50%';
  }

  if (position === 'middle') {
    variables['--indicator-top'] = '50%';
    variables['--indicator-translate-y'] = '-50%';
  }

  if (position === 'bottom') {
    variables['--indicator-bottom'] = _offset;
    variables['--indicator-translate-y'] = '50%';
  }

  if (placement === 'start') {
    variables['--indicator-left'] = _offset;
    variables['--indicator-translate-x'] = '-50%';
  }

  if (placement === 'center') {
    variables['--indicator-left'] = '50%';
    variables['--indicator-translate-x'] = '-50%';
  }

  if (placement === 'end') {
    variables['--indicator-right'] = _offset;
    variables['--indicator-translate-x'] = '50%';
  }

  return variables;
}
