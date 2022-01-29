import React from 'react';
import { Drawer, DrawerProps } from '../Drawer';

export function Wrapper(props: Partial<DrawerProps>) {
  return (
    <Drawer {...props} opened title="Drawer" padding="xl" onClose={() => {}}>
      Drawer
    </Drawer>
  );
}
