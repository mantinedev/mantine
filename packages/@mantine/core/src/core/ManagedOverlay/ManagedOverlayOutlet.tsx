import { use, useEffect, useId } from 'react';
import { useProviderOutletStore } from '../MantineProvider/ProviderOutlets';
import { useProps } from '../MantineProvider/use-props/use-props';
import { OverlayStackContextType } from '../OverlayStack';
import {
  createManagedOverlayStore,
  ManagedOverlayStore,
  useActiveExplicitManagedOverlayOutlet,
  useManagedOverlayEntry,
  useManagedOverlayIds,
} from './managed-overlay.store';
import { ManagedOverlayStacks } from './ManagedOverlayStacks';

export interface ManagedOverlayOutletConfig {
  /** Key of the store in the provider scope, `modal` or `drawer` */
  storeKey: string;

  /** Theme component name, `Modal` or `Drawer` */
  name: string;

  /** Overlay component, `Modal` or `Drawer`. Defined as a getter so the component is not read before its module is initialized */
  readonly component: React.ComponentType<any>;

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
  const { keepMounted } = useProps(config.name, null, { ...entry?.props, ...entry?.overrides });

  if (!entry) {
    return null;
  }

  const { component: Component } = config;

  return (
    <ManagedOverlayStackGate
      context={config.stackContext}
      id={entry.id}
      keepInStack={entry.opened || !!keepMounted}
    >
      <Component
        {...entry.props}
        {...entry.overrides}
        id={entry.id}
        stackId={entry.id}
        opened={entry.opened}
        onClose={entry.onClose}
      />
    </ManagedOverlayStackGate>
  );
}

interface ManagedOverlayStackGateProps {
  context: OverlayStackContextType;
  id: string;
  keepInStack: boolean;
  children: React.ReactNode;
}

function ManagedOverlayStackGate({
  context: Context,
  id,
  keepInStack,
  children,
}: ManagedOverlayStackGateProps) {
  const stack = use(Context);
  const inStack = keepInStack || !!stack?.isRegistered(id);
  return <Context value={inStack ? stack : null}>{children}</Context>;
}

interface ManagedOverlaysProps extends ConfigProps {
  store: ManagedOverlayStore<any>;
  withStacks?: boolean;
}

function ManagedOverlays({ config, store, withStacks }: ManagedOverlaysProps) {
  const ids = useManagedOverlayIds(store);

  if (ids.length === 0) {
    return null;
  }

  const overlays = ids.map((id) => (
    <ManagedOverlay key={id} config={config} store={store} id={id} />
  ));

  return withStacks ? <ManagedOverlayStacks>{overlays}</ManagedOverlayStacks> : overlays;
}

export function ManagedOverlayAutoOutlet({ config }: ConfigProps) {
  const store = useManagedOverlayOutletStore(config);
  const activeExplicitOutlet = useActiveExplicitManagedOverlayOutlet(store);
  return activeExplicitOutlet === null ? <ManagedOverlays config={config} store={store} /> : null;
}

ManagedOverlayAutoOutlet.displayName = '@mantine/core/ManagedOverlayAutoOutlet';

export function ManagedOverlayOutlet({ config }: ConfigProps) {
  const store = useManagedOverlayOutletStore(config);
  const outletId = useId();
  const activeExplicitOutlet = useActiveExplicitManagedOverlayOutlet(store);
  useEffect(() => store.registerExplicitOutlet(outletId), [store, outletId]);
  return activeExplicitOutlet === outletId ? (
    <ManagedOverlays config={config} store={store} withStacks />
  ) : null;
}

ManagedOverlayOutlet.displayName = '@mantine/core/ManagedOverlayOutlet';
