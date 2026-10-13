import { use } from 'react';
import { useOverlayStackContexts } from '../OverlayStack/OverlayStack';
import { DrawerStackContext, ModalStackContext } from '../OverlayStack/OverlayStack.context';

export function ManagedOverlayStacks({ children }: { children: React.ReactNode }) {
  const parentModalStack = use(ModalStackContext);
  const parentDrawerStack = use(DrawerStackContext);

  return (
    <>
      {useOverlayStackContexts({
        withModalStack: !parentModalStack,
        withDrawerStack: !parentDrawerStack,
        shared: false,
        children,
      })}
    </>
  );
}

ManagedOverlayStacks.displayName = '@mantine/core/ManagedOverlayStacks';
