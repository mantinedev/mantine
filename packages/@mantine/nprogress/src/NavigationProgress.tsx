import { useEffect } from 'react';
import {
  ElementProps,
  getDefaultZIndex,
  MantineColor,
  OptionalPortal,
  PortalProps,
  Progress,
} from '@mantine/core';
import {
  NprogressStore,
  nprogressStore,
  resetNavigationProgressAction,
  useNprogress,
} from './nprogress.store';
import classes from './NavigationProgress.module.css';

export interface NavigationProgressProps extends ElementProps<'div'> {
  /** Component store, controls state */
  store?: NprogressStore;

  /** Initial progress value, `0` by default */
  initialProgress?: number;

  /** Key of `theme.colors` of any other valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls height of the progress bar */
  size?: number;

  /** Step interval in ms, `500` by default */
  stepInterval?: number;

  /** Determines whether the progress bar should be rendered within `Portal`, `true` by default */
  withinPortal?: boolean;

  /** Props to pass down to the `Portal` when `withinPortal` is `true` */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Progressbar z-index, `9999` by default */
  zIndex?: React.CSSProperties['zIndex'];
}

export function NavigationProgress({
  initialProgress = 0,
  color,
  size = 3,
  stepInterval = 500,
  withinPortal = true,
  portalProps,
  zIndex = getDefaultZIndex('max'),
  store = nprogressStore,
  ...others
}: NavigationProgressProps) {
  store.initialize({
    mounted: false,
    progress: initialProgress,
    interval: -1,
    step: 1,
    stepInterval,
    timeouts: [],
  });

  const state = useNprogress(store);

  useEffect(() => () => resetNavigationProgressAction(store), [store]);

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      <Progress
        radius={0}
        value={state.progress}
        size={size}
        color={color}
        classNames={classes}
        data-mounted={state.mounted || undefined}
        __vars={{ '--nprogress-z-index': zIndex?.toString() }}
        {...others}
      />
    </OptionalPortal>
  );
}

NavigationProgress.displayName = '@mantine/nprogress/NavigationProgress';
