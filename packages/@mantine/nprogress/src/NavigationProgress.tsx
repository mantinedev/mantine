import { useEffect } from 'react';
import {
  BasePortalProps,
  ElementProps,
  getDefaultZIndex,
  MantineColor,
  OptionalPortal,
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

  /** Initial progress value @default `0` */
  initialProgress?: number;

  /** Key of `theme.colors` of any other valid CSS color @default `theme.primaryColor` */
  color?: MantineColor;

  /** Controls height of the progress bar */
  size?: number;

  /** Step interval in ms @default `500` */
  stepInterval?: number;

  /** Determines whether the progress bar should be rendered within `Portal` @default `true` */
  withinPortal?: boolean;

  /** Props to pass down to the `Portal` when `withinPortal` is `true` */
  portalProps?: Omit<BasePortalProps, 'withinPortal'>;

  /** Progressbar z-index @default `9999` */
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
