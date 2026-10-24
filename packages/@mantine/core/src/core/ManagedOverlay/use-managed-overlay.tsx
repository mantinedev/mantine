import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useIsomorphicEffect, useLatestRef } from '@mantine/hooks';
import {
  registerProviderOutlet,
  useProviderOutletsScope,
} from '../MantineProvider/ProviderOutlets';
import {
  ManagedOverlayAutoOutlet,
  ManagedOverlayOutletConfig,
  useManagedOverlayOutletStore,
} from './ManagedOverlayOutlet';

export interface ManagedOverlayBaseOptions {
  /** Overlay id, used as `id` and `stackId` of the rendered component, generated automatically if not set */
  id?: string;

  /** Initial opened state @default false */
  defaultOpened?: boolean;

  /** Called when the overlay is opened with `open()` or `toggle()` */
  onOpen?: () => void;

  /** Called when the overlay is closed with `close()`, `toggle()`, close button, overlay click, Escape key or swipe */
  onClose?: () => void;
}

export interface ManagedOverlayHandle<Props extends Record<string, any>> {
  /** Overlay id */
  id: string;

  /** Opened state */
  opened: boolean;

  /** Returns opened state, safe to call in effects and callbacks */
  isOpened: () => boolean;

  /** Opens the overlay, `overrides` are applied on top of hook options until the next `open` call */
  open: (overrides?: Partial<Props>) => void;

  /** Closes the overlay */
  close: () => void;

  /** Toggles opened state */
  toggle: () => void;
}

export function useManagedOverlay<Props extends Record<string, any>>(
  options: ManagedOverlayBaseOptions & Props,
  config: ManagedOverlayOutletConfig
): ManagedOverlayHandle<Props> {
  const generatedId = useId();
  const id = options.id || generatedId;
  const scope = useProviderOutletsScope();
  const store = useManagedOverlayOutletStore<Props>(config);
  const [opened, setOpened] = useState(options.defaultOpened || false);
  const [overrides, setOverrides] = useState<Partial<Props> | null>(null);
  const openedRef = useRef(opened);
  const openCountRef = useRef(0);
  const optionsRef = useLatestRef(options);
  const syncedRef = useRef<{ id: string; opened: boolean } | null>(null);
  openedRef.current = opened;

  const open = useCallback((openOverrides?: Partial<Props>) => {
    setOverrides(openOverrides || null);

    if (openedRef.current) {
      return;
    }

    openedRef.current = true;
    openCountRef.current += 1;
    setOpened(true);
    optionsRef.current.onOpen?.();
  }, []);

  const close = useCallback(() => {
    if (!openedRef.current) {
      return;
    }

    openedRef.current = false;
    setOpened(false);
    optionsRef.current.onClose?.();
  }, []);

  const toggle = useCallback(() => {
    openedRef.current ? close() : open();
  }, [open, close]);

  const isOpened = useCallback(() => openedRef.current, []);

  useIsomorphicEffect(() => {
    const { id: _id, defaultOpened, onOpen, onClose, ...props } = optionsRef.current;
    const synced = syncedRef.current;
    const shouldSync =
      opened ||
      !!(props.keepMounted || overrides?.keepMounted) ||
      !synced ||
      synced.id !== id ||
      synced.opened;

    if (shouldSync) {
      store.setEntry({
        id,
        opened,
        openCount: openCountRef.current,
        props: props as unknown as Props,
        overrides,
        onClose: close,
      });
      syncedRef.current = { id, opened };
    }
  });

  useEffect(() => {
    registerProviderOutlet(scope, config.storeKey, <ManagedOverlayAutoOutlet config={config} />);
    return () => {
      store.removeEntry(id);
      syncedRef.current = null;
    };
  }, [scope, store, config, id]);

  return useMemo(
    () => ({ id, opened, isOpened, open, close, toggle }),
    [id, opened, isOpened, open, close, toggle]
  );
}
