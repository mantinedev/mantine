import { use, useEffect } from 'react';
import { useProviderOutletStore } from '../MantineProvider/ProviderOutlets';
import { OverlayStackContextType } from '../OverlayStack';
import {
  createManagedOverlayStore,
  ManagedOverlayStore,
  useExplicitManagedOverlayOutlets,
  useManagedOverlayEntry,
  useManagedOverlayIds,
} from './managed-overlay.store';

export interface ManagedOverlayOutletConfig {
  /** Key of the store in the provider scope, `modal` or `drawer` */
  storeKey: string;

  /** Overlay component, `Modal` or `Drawer`. Defined as a getter so the component is not read before its module is initialized */
  readonly component: React.ComponentType<any>;

  /** Stack component used when no stack context is found in the tree, `Modal.Stack` or `Drawer.Stack`. Defined as a getter for the same reason as `component` */
  readonly stack: React.ComponentType<{ children: React.ReactNode }>;

  /** Stack context, `ModalStackContext` or `DrawerStackContext` */
  stackContext: OverlayStackContextType;
}

interface ConfigProps {
  config: ManagedOverlayOutletConfig;
}

export function useManagedOverlayOutletStore<Props extends Record<string, any>>(
  config: ManagedOverlayOutletConfig
) {
  return useProviderOutletStore<ManagedOverlayStore<Props>>(
    config.storeKey,
    createManagedOverlayStore
  );
}

function ManagedOverlay({
  config,
  store,
  id,
}: ConfigProps & { store: ManagedOverlayStore<any>; id: string }) {
  const entry = useManagedOverlayEntry(store, id);

  if (!entry) {
    return null;
  }

  const { component: Component } = config;

  return (
    <Component
      {...entry.props}
      {...entry.overrides}
      id={entry.id}
      stackId={entry.id}
      opened={entry.opened}
      onClose={entry.onClose}
    />
  );
}

function ManagedOverlays({ config, store }: ConfigProps & { store: ManagedOverlayStore<any> }) {
  const ids = useManagedOverlayIds(store);
  const stackCtx = use(config.stackContext);

  if (ids.length === 0) {
    return null;
  }

  const overlays = ids.map((id) => (
    <ManagedOverlay key={id} config={config} store={store} id={id} />
  ));

  if (stackCtx) {
    return overlays;
  }

  const { stack: Stack } = config;
  return <Stack>{overlays}</Stack>;
}

export function ManagedOverlayAutoOutlet({ config }: ConfigProps) {
  const store = useManagedOverlayOutletStore(config);
  const explicitOutlets = useExplicitManagedOverlayOutlets(store);
  return explicitOutlets > 0 ? null : <ManagedOverlays config={config} store={store} />;
}

ManagedOverlayAutoOutlet.displayName = '@mantine/core/ManagedOverlayAutoOutlet';

export function ManagedOverlayOutlet({ config }: ConfigProps) {
  const store = useManagedOverlayOutletStore(config);
  useEffect(() => store.registerExplicitOutlet(), [store]);
  return <ManagedOverlays config={config} store={store} />;
}

ManagedOverlayOutlet.displayName = '@mantine/core/ManagedOverlayOutlet';
