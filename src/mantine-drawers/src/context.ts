/* eslint-disable @typescript-eslint/ban-types */
import { createContext, ReactNode } from 'react';
import { DrawerProps } from '@mantine/core';

import type { ConfirmDrawerProps } from './ConfirmDrawer';

export type DrawerSettings = Partial<Omit<DrawerProps, 'opened'>> & {
  drawerId?: string;
};

export type ConfirmLabels = Record<'confirm' | 'cancel', ReactNode>;

export interface OpenConfirmDrawer extends DrawerSettings, ConfirmDrawerProps {}
export interface OpenContextDrawer<CustomProps extends Record<string, unknown> = {}>
  extends DrawerSettings {
  innerProps: CustomProps;
}

export interface ContextDrawerProps<T extends Record<string, unknown> = {}> {
  context: DrawersContextProps;
  innerProps: T;
  id: string;
}

export type DrawerState =
  | { id: string; props: DrawerSettings; type: 'content' }
  | { id: string; props: OpenConfirmDrawer; type: 'confirm' }
  | { id: string; props: OpenContextDrawer; type: 'context'; ctx: string };

export interface DrawersContextProps {
  drawers: DrawerState[];
  openDrawer: (props: DrawerSettings) => string;
  openConfirmDrawer: (props: OpenConfirmDrawer) => string;
  openContextDrawer: <CustomProps extends Record<string, unknown>>(
    drawer: string,
    props: OpenContextDrawer<CustomProps>
  ) => string;
  closeDrawer: (id: string | undefined, canceled?: boolean) => void;
  closeAll: () => void;
}

export const DrawersContext = createContext<DrawersContextProps | null>(null);
DrawersContext.displayName = '@mantine/drawers/DrawersContext';
