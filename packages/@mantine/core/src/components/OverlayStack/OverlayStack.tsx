import { useCallback, useRef, useState } from 'react';
import { getDefaultZIndex } from '../../core';
import { OverlayStackContext } from './OverlayStack.context';

export interface OverlayStackProviderProps {
  maxDepth?: number;

  /** If set, stacked items are offset and scaled to reveal the items behind the top one @default true */
  withStackTransform?: boolean;

  children: React.ReactNode;
}

export function OverlayStackProvider({
  maxDepth = 5,
  withStackTransform = true,
  children,
}: OverlayStackProviderProps) {
  const [stack, setStack] = useState<string[]>([]);
  const [closing, setClosing] = useState<string[]>([]);
  const [maxZIndex, setMaxZIndex] = useState<number | string>(getDefaultZIndex('modal'));
  const [dragProgress, setDragProgress] = useState(0);
  const [topRect, setTopRect] = useState<{ width: number; height: number } | null>(null);

  const addOverlay = useCallback((id: string, zIndex: number | string) => {
    setStack((current) => [...new Set([...current, id])]);
    setClosing((current) => current.filter((closingId) => closingId !== id));
    setMaxZIndex((current) =>
      typeof zIndex === 'number' && typeof current === 'number'
        ? Math.max(current, zIndex)
        : current
    );
    setDragProgress(0);
  }, []);

  const markClosing = useCallback((id: string) => {
    setClosing((current) => [...new Set([...current, id])]);
  }, []);

  const removeOverlay = useCallback((id: string) => {
    setStack((current) => current.filter((currentId) => currentId !== id));
    setClosing((current) => current.filter((closingId) => closingId !== id));
    setDragProgress(0);
  }, []);

  const openStack = stack.filter((id) => !closing.includes(id));
  const currentId = openStack[openStack.length - 1];
  const currentIdRef = useRef(currentId);
  currentIdRef.current = currentId;

  const getZIndex = (id: string) => `calc(${maxZIndex} + ${stack.indexOf(id)} + 1)`;
  const getDepth = (id: string) => {
    const source = closing.includes(id) ? stack : openStack;
    const index = source.indexOf(id);
    return index === -1 ? 0 : source.length - 1 - index;
  };
  const isVisible = (id: string) => getDepth(id) <= maxDepth;

  const reportDrag = useCallback(
    (id: string, progress: number) => {
      if (id === currentId) {
        setDragProgress(progress);
      }
    },
    [currentId]
  );

  const reportTopRect = useCallback((id: string, rect: { width: number; height: number }) => {
    if (id === currentIdRef.current) {
      setTopRect((current) =>
        current && current.width === rect.width && current.height === rect.height ? current : rect
      );
    }
  }, []);

  return (
    <OverlayStackContext
      value={{
        stack,
        maxDepth,
        addOverlay,
        markClosing,
        removeOverlay,
        getZIndex,
        getDepth,
        isVisible,
        maxZIndex,
        currentId,
        reportDrag,
        dragProgress,
        withStackTransform,
        topRect,
        reportTopRect,
      }}
    >
      {children}
    </OverlayStackContext>
  );
}
