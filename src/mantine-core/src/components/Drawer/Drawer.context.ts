import { createSafeContext, GetStylesApi, MantineRadius } from '../../core';
import type { DrawerRootFactory } from './DrawerRoot';

export type ScrollAreaComponent = React.FC<any>;

interface DrawerContext {
  scrollAreaComponent: ScrollAreaComponent | undefined;
  getStyles: GetStylesApi<DrawerRootFactory>;
  radius: MantineRadius | undefined;
}

export const [DrawerProvider, useDrawerContext] = createSafeContext<DrawerContext>(
  'Drawer component was not found in tree'
);
