import { createStyles, MantineTheme } from '@mantine/styles';

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

const verticalPlacement = (
  arrowSize: number,
  distance: number,
  classes: PlacementClasses,
  theme: MantineTheme
) => ({
  [`&.${classes.center}`]: {
    left: `calc(50% - ${arrowSize}px)`,
  },

  [`&.${classes.end}`]: {
    right: theme.dir === 'ltr' ? arrowSize * distance : undefined,
    left: theme.dir === 'rtl' ? arrowSize * distance : undefined,
  },

  [`&.${classes.start}`]: {
    left: theme.dir === 'ltr' ? arrowSize * distance : undefined,
    right: theme.dir === 'rtl' ? arrowSize * distance : undefined,
  },
});

export default createStyles((theme, { arrowSize, arrowDistance }: PopperStyles, getRef) => {
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
      right: theme.dir === 'ltr' ? -arrowSize : 'unset',
      left: theme.dir === 'rtl' ? -arrowSize : 'unset',
      borderLeft: theme.dir === 'ltr' ? 0 : undefined,
      borderRight: theme.dir === 'rtl' ? 0 : undefined,
      borderBottom: 0,
    },

    right: {
      ...horizontalPlacement(arrowSize, arrowDistance, placementClasses),
      left: theme.dir === 'ltr' ? -arrowSize : 'unset',
      right: theme.dir === 'rtl' ? -arrowSize : 'unset',
      borderRight: theme.dir === 'ltr' ? 0 : undefined,
      borderLeft: theme.dir === 'rtl' ? 0 : undefined,
      borderTop: 0,
    },

    top: {
      ...verticalPlacement(arrowSize, arrowDistance, placementClasses, theme),
      bottom: -arrowSize,
      borderLeft: theme.dir === 'ltr' ? 0 : undefined,
      borderRight: theme.dir === 'rtl' ? 0 : undefined,
      borderTop: 0,
    },

    bottom: {
      ...verticalPlacement(arrowSize, arrowDistance, placementClasses, theme),
      top: -arrowSize,
      borderRight: theme.dir === 'ltr' ? 0 : undefined,
      borderLeft: theme.dir === 'rtl' ? 0 : undefined,
      borderBottom: 0,
    },
  };
});
