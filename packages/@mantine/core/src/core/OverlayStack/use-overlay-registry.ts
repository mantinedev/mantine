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

export function getOverlayKey(kind: OverlayStackKind, id: string) {
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
  const stack = useMemo(() => kindEntries.map((entry) => entry.id), [kindEntries]);
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
    const activeId: string | undefined = topEntry?.kind === kind ? topEntry.id : undefined;

    const maxZIndex = entries.reduce<number | string>(
      (max, entry) =>
        typeof entry.zIndex === 'number' && typeof max === 'number'
          ? Math.max(max, entry.zIndex)
          : max,
      getDefaultZIndex('modal')
    );

    const getDepth = (id: string) => {
      const entry = kindEntries.find((item) => item.id === id);
      const source = entry?.closing ? stack : openStack;
      const index = source.indexOf(id);
      return index === -1 ? 0 : source.length - 1 - index;
    };

    return {
      stack,
      openStack,
      maxDepth,
      addOverlay,
      markClosing,
      removeOverlay,
      registerCloseHandler,
      close,
      closeAll,
      getZIndex: (id: string) =>
        `calc(${maxZIndex} + ${entries.findIndex((entry) => matches(entry, kind, id))} + 1)`,
      getDepth,
      isVisible: (id: string) => getDepth(id) <= maxDepth,
      maxZIndex,
      currentId,
      activeId,
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
    stack,
    openStack,
    currentId,
    rects,
    dragProgress,
    maxDepth,
    withStackTransform,
    shared,
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
