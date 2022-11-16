import { createUseExternalEvents } from '@mantine/utils';

import { DrawerSettings, OpenConfirmDrawer, OpenContextDrawer } from './context';

type DrawersEvents = {
  openDrawer(payload: DrawerSettings): void;
  closeDrawer(id: string): void;
  closeAllDrawers(): void;
  openConfirmDrawer(payload: OpenConfirmDrawer): void;
  openContextDrawer(payload: OpenContextDrawer & { drawer: string }): void;
};

export const [useDrawersEvents, createEvent] =
  createUseExternalEvents<DrawersEvents>('mantine-drawers');

export const openDrawer = createEvent('openDrawer');
export const closeDrawer = createEvent('closeDrawer');
export const closeAllDrawers = createEvent('closeAllDrawers');
export const openConfirmDrawer = createEvent('openConfirmDrawer');
export const openContextDrawer = createEvent('openContextDrawer');
