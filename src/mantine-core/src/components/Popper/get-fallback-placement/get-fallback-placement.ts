import { parsePopperPosition } from '../parse-popper-position/parse-popper-position';

const oppositePositions = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};

const oppositePlacements = {
  start: 'end',
  end: 'start',
};

export const getFallbackPlacement = (initialPosition: string): string[] => {
  const { placement, position } = parsePopperPosition(initialPosition);

  return [position, oppositePositions[position]].reduce(
    (acc, pos) =>
      placement === 'center'
        ? [...acc, pos]
        : [...acc, `${pos}-${placement}`, `${pos}-${oppositePlacements[placement]}`],
    []
  );
};
