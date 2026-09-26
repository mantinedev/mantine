import { createSafeContext, GetStylesApi } from '../../core';
import { FloatingPosition } from '../../utils/Floating';
import type { MenubarFactory } from './Menubar';
import { MenubarController } from './use-menubar/use-menubar';

export interface MenubarContextValue {
  getStyles: GetStylesApi<MenubarFactory>;

  /** Controller that owns the open and active menu state of the menubar */
  controller: MenubarController;

  /** Schedules a delayed close, used by hover trigger when the pointer leaves the bar */
  scheduleClose: () => void;

  /** Cancels a pending delayed close */
  cancelClose: () => void;

  /** Returns the previously opened menu index, used to skip transitions when switching menus */
  getPreviousOpenIndex: () => number | null;

  trigger: 'click' | 'hover';
  position: FloatingPosition;
  unstyled: boolean | undefined;
}

export const [MenubarContextProvider, useMenubarContext] = createSafeContext<MenubarContextValue>(
  'Menubar component was not found in the tree'
);

export interface MenubarMenuContextValue {
  id: string;
  index: number;
  opened: boolean;
}

export const [MenubarMenuContextProvider, useMenubarMenuContext] =
  createSafeContext<MenubarMenuContextValue>('Menubar.Menu component was not found in the tree');
