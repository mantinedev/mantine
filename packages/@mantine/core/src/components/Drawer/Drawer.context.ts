import { createSafeContext, GetStylesApi, MantineRadius } from '../../core';
import type { DrawerRootFactory } from './DrawerRoot';

export type ScrollAreaComponent = React.FC<any>;

export interface DrawerContextValue {
  scrollAreaComponent: ScrollAreaComponent | undefined;
  autoSize: boolean;
  getStyles: GetStylesApi<DrawerRootFactory>;
  radius: MantineRadius | undefined;
  stickyHeader: boolean | undefined;
  stickyFooter: boolean | undefined;
  position: 'top' | 'bottom' | 'left' | 'right' | undefined;
  withSwipe: boolean | undefined;
  withHandle: boolean | undefined;
  swipeThreshold: number | undefined;
  snapPoints: (number | string)[] | undefined;
  activeSnapPoint: number | string | undefined;
  defaultActiveSnapPoint: number | string | undefined;
  onSnapPointChange: ((point: number | string) => void) | undefined;
}

export const [DrawerProvider, useDrawerContext] = createSafeContext<DrawerContextValue>(
  'Drawer component was not found in tree'
);
