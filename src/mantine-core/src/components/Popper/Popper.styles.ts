import { createStyles } from '@mantine/tss';

interface PopperStyles {
  arrowSize: number;
}

interface PlacementClasses {
  center: string;
  end: string;
  start: string;
}

const horizontalPlacement = (arrowSize: number, classes: PlacementClasses) => ({
  [`&.${classes.center}`]: {
    top: `calc(50% - ${arrowSize}px)`,
  },

  [`&.${classes.end}`]: {
    bottom: arrowSize * 2,
  },

  [`&.${classes.start}`]: {
    top: arrowSize * 2,
  },
});

const verticalPlacement = (arrowSize: number, classes: PlacementClasses) => ({
  [`&.${classes.center}`]: {
    left: `calc(50% - ${arrowSize}px)`,
  },

  [`&.${classes.end}`]: {
    right: arrowSize * 2,
  },

  [`&.${classes.start}`]: {
    left: arrowSize * 2,
  },
});

export default createStyles((_theme, { arrowSize }: PopperStyles, getRef) => {
  const center = { ref: getRef() } as const;
  const start = { ref: getRef() } as const;
  const end = { ref: getRef() } as const;

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
      ...horizontalPlacement(arrowSize, placementClasses),
      right: -arrowSize,
      borderLeft: 0,
      borderBottom: 0,
    },

    right: {
      ...horizontalPlacement(arrowSize, placementClasses),
      left: -arrowSize,
      borderRight: 0,
      borderTop: 0,
    },

    top: {
      ...verticalPlacement(arrowSize, placementClasses),
      bottom: -arrowSize,
      borderLeft: 0,
      borderTop: 0,
    },

    bottom: {
      ...verticalPlacement(arrowSize, placementClasses),
      top: -arrowSize,
      borderRight: 0,
      borderBottom: 0,
    },
  };
});
