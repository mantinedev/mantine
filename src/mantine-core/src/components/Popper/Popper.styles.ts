import { createStyles } from '@mantine/styles';

interface PopperStyles {
  arrowSize: number;
  arrowDistance: number;
}

interface PlacementClasses {
  center: string;
  end: string;
  start: string;
}

const horizontalPlacement = (arrowSize: number, distance: number, classes: PlacementClasses) => ({
  [`&.${classes.center}`]: {
    top: `calc(50% - ${arrowSize}px)`,
  },

  [`&.${classes.end}`]: {
    bottom: arrowSize * distance,
  },

  [`&.${classes.start}`]: {
    top: arrowSize * distance,
  },
});

const verticalPlacement = (arrowSize: number, distance: number, classes: PlacementClasses) => ({
  [`&.${classes.center}`]: {
    left: `calc(50% - ${arrowSize}px)`,
  },

  [`&.${classes.end}`]: {
    right: arrowSize * distance,
  },

  [`&.${classes.start}`]: {
    left: arrowSize * distance,
  },
});

export default createStyles((_theme, { arrowSize, arrowDistance }: PopperStyles, getRef) => {
  const center = { ref: getRef('center') } as const;
  const start = { ref: getRef('start') } as const;
  const end = { ref: getRef('end') } as const;

  const placementClasses = {
    center: center.ref,
    start: start.ref,
    end: end.ref,
  };

  return {
    center,
    start,
    end,

    arrow: {
      width: arrowSize * 2,
      height: arrowSize * 2,
      position: 'absolute',
      transform: 'rotate(45deg)',
      border: '1px solid transparent',
      zIndex: 1,
    },

    left: {
      ...horizontalPlacement(arrowSize, arrowDistance, placementClasses),
      right: -arrowSize,
      borderLeft: 0,
      borderBottom: 0,
    },

    right: {
      ...horizontalPlacement(arrowSize, arrowDistance, placementClasses),
      left: -arrowSize,
      borderRight: 0,
      borderTop: 0,
    },

    top: {
      ...verticalPlacement(arrowSize, arrowDistance, placementClasses),
      bottom: -arrowSize,
      borderLeft: 0,
      borderTop: 0,
    },

    bottom: {
      ...verticalPlacement(arrowSize, arrowDistance, placementClasses),
      top: -arrowSize,
      borderRight: 0,
      borderBottom: 0,
    },
  };
});
