import { useCallback, useMemo, useRef, useState } from 'react';
import { getDefaultZIndex } from '../utils';
import { OverlayStackContextValue, OverlayStackRect } from './OverlayStack.context';

export type OverlayStackKind = 'modal' | 'drawer';

interface OverlayEntry {
  id: string;
  kind: OverlayStackKind;
  zIndex: number | string;
  closing: boolean;
}

export interface OverlayRegistry {
  entries: OverlayEntry[];
  rects: Record<string, OverlayStackRect>;
  dragProgress: number;
  addOverlay: (kind: OverlayStackKind, id: string, zIndex: number | string) => void;
  markClosing: (kind: OverlayStackKind, id: string) => void;
  removeOverlay: (kind: OverlayStackKind, id: string) => void;
  registerCloseHandler: (kind: OverlayStackKind, id: string, handler: () => void) => () => void;
  close: (kind: OverlayStackKind, id: string) => void;
  setDragProgress: (progress: number) => void;
  reportTopRect: (kind: OverlayStackKind, id: string, rect: OverlayStackRect) => void;
  handledEscapeEvents: WeakSet<KeyboardEvent>;
}

function getOverlayKey(kind: OverlayStackKind, id: string) {
  return `${kind}:${id}`;
}

const matches = (entry: OverlayEntry, kind: OverlayStackKind, id: string) =>
  entry.kind === kind && entry.id === id;

export function useOverlayRegistry(): OverlayRegistry {
  const [entries, setEntries] = useState<OverlayEntry[]>([]);
  const [rects, setRects] = useState<Record<string, OverlayStackRect>>({});
  const [dragProgress, setDragProgress] = useState(0);
  const closeHandlers = useRef(new Map<string, () => void>());
  const [handledEscapeEvents] = useState(() => new WeakSet<KeyboardEvent>());

  const addOverlay = useCallback((kind: OverlayStackKind, id: string, zIndex: number | string) => {
    setEntries((current) => {
      const existing = current.find((entry) => matches(entry, kind, id));

      if (!existing) {
        return [...current, { id, kind, zIndex, closing: false }];
      }

      if (!existing.closing && existing.zIndex === zIndex) {
        return current;
      }

      return current.map((entry) =>
        matches(entry, kind, id) ? { ...entry, zIndex, closing: false } : entry
      );
    });
    setDragProgress(0);
  }, []);

  const markClosing = useCallback((kind: OverlayStackKind, id: string) => {
    setEntries((current) =>
      current.some((entry) => matches(entry, kind, id) && !entry.closing)
        ? current.map((entry) => (matches(entry, kind, id) ? { ...entry, closing: true } : entry))
        : current
    );
  }, []);

  const removeOverlay = useCallback((kind: OverlayStackKind, id: string) => {
    setEntries((current) =>
      current.some((entry) => matches(entry, kind, id))
        ? current.filter((entry) => !matches(entry, kind, id))
        : current
    );
    setRects((current) => {
      const key = getOverlayKey(kind, id);
      if (!(key in current)) {
        return current;
      }
      const { [key]: _removed, ...rest } = current;
      return rest;
    });
    setDragProgress(0);
  }, []);

  const registerCloseHandler = useCallback(
    (kind: OverlayStackKind, id: string, handler: () => void) => {
      const key = getOverlayKey(kind, id);
      closeHandlers.current.set(key, handler);
      return () => {
        if (closeHandlers.current.get(key) === handler) {
          closeHandlers.current.delete(key);
        }
      };
    },
    []
  );

  const close = useCallback((kind: OverlayStackKind, id: string) => {
    closeHandlers.current.get(getOverlayKey(kind, id))?.();
  }, []);

  const reportTopRect = useCallback(
    (kind: OverlayStackKind, id: string, rect: OverlayStackRect) => {
      setRects((current) => {
        const key = getOverlayKey(kind, id);
        const previous = current[key];
        return previous && previous.width === rect.width && previous.height === rect.height
          ? current
          : { ...current, [key]: rect };
      });
    },
    []
  );

  return useMemo(
    () => ({
      entries,
      rects,
      dragProgress,
      addOverlay,
      markClosing,
      removeOverlay,
      registerCloseHandler,
      close,
      setDragProgress,
      reportTopRect,
      handledEscapeEvents,
    }),
    [
      entries,
      rects,
      dragProgress,
      addOverlay,
      markClosing,
      removeOverlay,
      registerCloseHandler,
      close,
      reportTopRect,
      handledEscapeEvents,
    ]
  );
}

export interface UseOverlayStackValueOptions {
  maxDepth: number;
  withStackTransform: boolean;
  shared: boolean;
}

export function useOverlayStackValue(
  registry: OverlayRegistry,
  kind: OverlayStackKind,
  { maxDepth, withStackTransform, shared }: UseOverlayStackValueOptions
): OverlayStackContextValue {
  const {
    entries,
    rects,
    dragProgress,
    addOverlay: registryAddOverlay,
    markClosing: registryMarkClosing,
    removeOverlay: registryRemoveOverlay,
    registerCloseHandler: registryRegisterCloseHandler,
    close: registryClose,
    setDragProgress,
    reportTopRect: registryReportTopRect,
    handledEscapeEvents,
  } = registry;

  const kindEntries = useMemo(
    () => entries.filter((entry) => entry.kind === kind),
    [entries, kind]
  );
  const openStack = useMemo(
    () => kindEntries.filter((entry) => !entry.closing).map((entry) => entry.id),
    [kindEntries]
  );
  const currentId: string | undefined = openStack[openStack.length - 1];

  const addOverlay = useCallback(
    (id: string, zIndex: number | string) => registryAddOverlay(kind, id, zIndex),
    [registryAddOverlay, kind]
  );
  const markClosing = useCallback(
    (id: string) => registryMarkClosing(kind, id),
    [registryMarkClosing, kind]
  );
  const removeOverlay = useCallback(
    (id: string) => registryRemoveOverlay(kind, id),
    [registryRemoveOverlay, kind]
  );
  const registerCloseHandler = useCallback(
    (id: string, handler: () => void) => registryRegisterCloseHandler(kind, id, handler),
    [registryRegisterCloseHandler, kind]
  );
  const close = useCallback((id: string) => registryClose(kind, id), [registryClose, kind]);
  const reportTopRect = useCallback(
    (id: string, rect: OverlayStackRect) => registryReportTopRect(kind, id, rect),
    [registryReportTopRect, kind]
  );

  const closeAll = useCallback(() => {
    [...openStack].reverse().forEach(close);
  }, [openStack, close]);

  const reportDrag = useCallback(
    (id: string, progress: number) => {
      if (id === currentId) {
        setDragProgress(progress);
      }
    },
    [currentId, setDragProgress]
  );

  return useMemo(() => {
    const openEntries = entries.filter((entry) => !entry.closing);
    const topEntry = openEntries[openEntries.length - 1];
    const kindIds = kindEntries.map((entry) => entry.id);

    const baseZIndex = entries.reduce<number | string>(
      (max, entry) =>
        typeof entry.zIndex === 'number' && typeof max === 'number'
          ? Math.max(max, entry.zIndex)
          : max,
      getDefaultZIndex('modal')
    );

    const getDepth = (id: string) => {
      const entry = kindEntries.find((item) => item.id === id);
      const source = entry?.closing ? kindIds : openStack;
      const index = source.indexOf(id);
      return index === -1 ? 0 : source.length - 1 - index;
    };

    const getZIndex = (id: string) => {
      const index = entries.findIndex((entry) => matches(entry, kind, id));
      return `calc(${baseZIndex} + ${index === -1 ? entries.length : index} + 1)`;
    };

    return {
      openStack,
      addOverlay,
      markClosing,
      removeOverlay,
      registerCloseHandler,
      close,
      closeAll,
      getZIndex,
      getDepth,
      isVisible: (id: string) =>
        withStackTransform ? getDepth(id) <= maxDepth : getDepth(id) === 0,
      isActive: (id: string) => !!topEntry && matches(topEntry, kind, id),
      hasAnyOtherEntry: (id: string) => entries.some((entry) => !matches(entry, kind, id)),
      hasSameKindSiblings: (id: string) => kindEntries.some((entry) => entry.id !== id),
      currentId,
      shared,
      reportDrag,
      dragProgress,
      withStackTransform,
      topRect: currentId === undefined ? null : rects[getOverlayKey(kind, currentId)] || null,
      reportTopRect,
      handledEscapeEvents,
    };
  }, [
    entries,
    kindEntries,
    openStack,
    currentId,
    rects,
    dragProgress,
    maxDepth,
    withStackTransform,
    shared,
    kind,
    addOverlay,
    markClosing,
    removeOverlay,
    registerCloseHandler,
    close,
    closeAll,
    reportDrag,
    reportTopRect,
    handledEscapeEvents,
  ]);
}

export function useScopedOverlayStackValue(
  parent: OverlayStackContextValue | null,
  scope: string
): OverlayStackContextValue | null {
  const parentAddOverlay = parent?.addOverlay;
  const parentMarkClosing = parent?.markClosing;
  const parentRemoveOverlay = parent?.removeOverlay;
  const parentRegisterCloseHandler = parent?.registerCloseHandler;
  const parentReportTopRect = parent?.reportTopRect;

  const toId = useCallback((id: string) => `${scope}/${id}`, [scope]);

  const callbacks = useMemo(
    () => ({
      addOverlay: (id: string, zIndex: number | string) => parentAddOverlay?.(toId(id), zIndex),
      markClosing: (id: string) => parentMarkClosing?.(toId(id)),
      removeOverlay: (id: string) => parentRemoveOverlay?.(toId(id)),
      registerCloseHandler: (id: string, handler: () => void) =>
        parentRegisterCloseHandler?.(toId(id), handler) ?? (() => {}),
      reportTopRect: (id: string, rect: OverlayStackRect) => parentReportTopRect?.(toId(id), rect),
    }),
    [
      toId,
      parentAddOverlay,
      parentMarkClosing,
      parentRemoveOverlay,
      parentRegisterCloseHandler,
      parentReportTopRect,
    ]
  );

  return useMemo(() => {
    if (!parent) {
      return null;
    }

    const prefix = toId('');
    const openStack = parent.openStack
      .filter((id) => id.startsWith(prefix))
      .map((id) => id.slice(prefix.length));
    const close = (id: string) => parent.close(toId(id));

    return {
      ...parent,
      ...callbacks,
      openStack,
      currentId: openStack[openStack.length - 1],
      close,
      closeAll: () => [...openStack].reverse().forEach(close),
      getZIndex: (id) => parent.getZIndex(toId(id)),
      getDepth: (id) => parent.getDepth(toId(id)),
      isVisible: (id) => parent.isVisible(toId(id)),
      isActive: (id) => parent.isActive(toId(id)),
      hasAnyOtherEntry: (id) => parent.hasAnyOtherEntry(toId(id)),
      hasSameKindSiblings: (id) => parent.hasSameKindSiblings(toId(id)),
      reportDrag: (id, progress) => parent.reportDrag(toId(id), progress),
    };
  }, [parent, toId, callbacks]);
}
