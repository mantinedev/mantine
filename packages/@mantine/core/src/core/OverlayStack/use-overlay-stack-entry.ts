import { use, useCallback, useEffect, useId } from 'react';
import { getDefaultZIndex } from '../utils';
import { OverlayStackContextType, OverlayStackRect } from './OverlayStack.context';

export interface UseOverlayStackEntryInput {
  stackId: string | undefined;
  opened: boolean;
  onClose: () => void;
  zIndex: string | number | undefined;
  closeOnEscape: boolean | undefined;
  withOverlay: boolean | undefined;
  onExitTransitionEnd: (() => void) | undefined;
}

export interface OverlayStackEntryContentProps {
  __depth?: number;
  __visible?: boolean;
  __dragProgress?: number;
  __topRect?: OverlayStackRect | null;
  __reportTopRect?: (rect: OverlayStackRect) => void;
  __stackActive?: boolean;
  __instant?: boolean;
}

export interface UseOverlayStackEntryReturn {
  hasSameKindSiblings: boolean;
  rootProps: {
    zIndex: string | number | undefined;
    closeOnEscape: boolean | undefined;
    onExitTransitionEnd: () => void;
    __stackActive?: boolean;
    __handledEscapeEvents?: WeakSet<KeyboardEvent>;
  };
  overlayProps: {
    visible: boolean;
    transitionProps?: { duration: number };
  };
  contentProps: OverlayStackEntryContentProps;
  reportDrag: ((progress: number) => void) | undefined;
}

export function useOverlayStackEntry(
  context: OverlayStackContextType,
  {
    stackId,
    opened,
    onClose,
    zIndex,
    closeOnEscape,
    withOverlay,
    onExitTransitionEnd,
  }: UseOverlayStackEntryInput
): UseOverlayStackEntryReturn {
  const ctx = use(context);
  const autoStackId = useId();
  const id = stackId || autoStackId;

  const addOverlay = ctx?.addOverlay;
  const markClosing = ctx?.markClosing;
  const removeOverlay = ctx?.removeOverlay;
  const registerCloseHandler = ctx?.registerCloseHandler;
  const reportTopRect = ctx?.reportTopRect;
  const reportDragProgress = ctx?.reportDrag;

  useEffect(() => {
    if (opened) {
      addOverlay?.(id, zIndex || getDefaultZIndex('modal'));
    } else {
      markClosing?.(id);
    }
  }, [opened, id, zIndex, addOverlay, markClosing]);

  useEffect(() => {
    if (!removeOverlay) {
      return undefined;
    }

    return () => removeOverlay(id);
  }, [removeOverlay, id]);

  useEffect(() => {
    if (!registerCloseHandler) {
      return undefined;
    }

    return registerCloseHandler(id, onClose);
  }, [registerCloseHandler, id, onClose]);

  const handleReportTopRect = useCallback(
    (rect: OverlayStackRect) => reportTopRect?.(id, rect),
    [reportTopRect, id]
  );

  const reportDrag = useCallback(
    (progress: number) => reportDragProgress?.(id, progress),
    [reportDragProgress, id]
  );

  const handleExitTransitionEnd = useCallback(() => {
    removeOverlay?.(id);
    onExitTransitionEnd?.();
  }, [removeOverlay, id, onExitTransitionEnd]);

  if (!ctx) {
    return {
      hasSameKindSiblings: false,
      rootProps: { zIndex, closeOnEscape, onExitTransitionEnd: handleExitTransitionEnd },
      overlayProps: { visible: withOverlay !== false && opened },
      contentProps: {},
      reportDrag: undefined,
    };
  }

  const active = ctx.isActive(id);
  const depth = ctx.getDepth(id);
  const hasAnyOtherEntry = ctx.hasAnyOtherEntry(id);

  return {
    hasSameKindSiblings: ctx.hasSameKindSiblings(id),
    rootProps: {
      zIndex: ctx.getZIndex(id),
      closeOnEscape: active && closeOnEscape,
      onExitTransitionEnd: handleExitTransitionEnd,
      __stackActive: active,
      __handledEscapeEvents: ctx.handledEscapeEvents,
    },
    overlayProps: {
      visible: withOverlay !== false && (hasAnyOtherEntry ? active : opened),
      transitionProps: hasAnyOtherEntry ? { duration: 0 } : undefined,
    },
    contentProps: {
      ...(ctx.withStackTransform && {
        __depth: depth,
        __dragProgress: ctx.dragProgress,
        __topRect: ctx.topRect,
        __reportTopRect: handleReportTopRect,
      }),
      __visible: ctx.isVisible(id),
      __stackActive: active,
      __instant: !opened && depth > 0,
    },
    reportDrag,
  };
}
