import { createMemoStyles } from '../../theme';

interface PopperStyles {
  arrowSize: number;
}

const horizontalPlacement = (arrowSize: number) => ({
  '&$center': {
    top: `calc(50% - ${arrowSize}px)`,
  },

  '&$end': {
    bottom: arrowSize * 2,
  },

  '&$start': {
    top: arrowSize * 2,
  },
});

const verticalPlacement = (arrowSize: number) => ({
  '&$center': {
    left: `calc(50% - ${arrowSize}px)`,
  },

  '&$end': {
    right: arrowSize * 2,
  },

  '&$start': {
    left: arrowSize * 2,
  },
});

export default createMemoStyles({
  center: {},
  start: {},
  end: {},

  arrow: ({ arrowSize }: PopperStyles) => ({
    width: arrowSize * 2,
    height: arrowSize * 2,
    position: 'absolute',
    transform: 'rotate(45deg)',
    border: '1px solid transparent',
    zIndex: 1,
  }),

  left: ({ arrowSize }: PopperStyles) => ({
    ...horizontalPlacement(arrowSize),
    right: -arrowSize,
    borderLeft: 0,
    borderBottom: 0,
  }),

  right: ({ arrowSize }: PopperStyles) => ({
    ...horizontalPlacement(arrowSize),
    left: -arrowSize,
    borderRight: 0,
    borderTop: 0,
  }),

  top: ({ arrowSize }: PopperStyles) => ({
    ...verticalPlacement(arrowSize),
    bottom: -arrowSize,
    borderLeft: 0,
    borderTop: 0,
  }),

  bottom: ({ arrowSize }: PopperStyles) => ({
    ...verticalPlacement(arrowSize),
    top: -arrowSize,
    borderRight: 0,
    borderBottom: 0,
  }),
});
