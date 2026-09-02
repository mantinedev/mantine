import { useRef, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import { Box, rem, useDirection, useMantineTheme } from '../../../core';
import { useAppShellContext } from '../AppShell.context';
import type { AppShellResizeSection } from '../AppShell.types';
import { clampResizeSize, getCollapseState } from '../use-app-shell-resize/clamp-resize-size';
import { getResizeDelta, RESIZE_SECTIONS } from '../use-app-shell-resize/resize-section-config';
import { getSafeAreaInset } from '../use-app-shell-resize/safe-area-inset';

interface AppShellResizeHandleProps {
  section: AppShellResizeSection;
}

const LABELS: Record<AppShellResizeSection, string> = {
  navbar: 'Resize navbar',
  aside: 'Resize aside',
  header: 'Resize header',
  footer: 'Resize footer',
};

const KEYBOARD_STEP = 10;
const KEYBOARD_SHIFT_STEP = 50;

const KEY_DELTAS: Record<string, { deltaX: number; deltaY: number }> = {
  ArrowRight: { deltaX: 1, deltaY: 0 },
  ArrowLeft: { deltaX: -1, deltaY: 0 },
  ArrowDown: { deltaX: 0, deltaY: 1 },
  ArrowUp: { deltaX: 0, deltaY: -1 },
};

interface PreviousBodyStyles {
  userSelect: string;
  webkitUserSelect: string;
  cursor: string;
}

function restoreBodyStyleProperty(property: string, value: string) {
  if (value) {
    document.body.style.setProperty(property, value);
  } else {
    document.body.style.removeProperty(property);
  }
}

export function AppShellResizeHandle({ section }: AppShellResizeHandleProps) {
  const ctx = useAppShellContext();
  const controller = ctx.resize;

  const handleRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startSize: 0, startX: 0, startY: 0, size: 0, moved: false });
  const activePointerIdRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const previousBodyStylesRef = useRef<PreviousBodyStyles | null>(null);
  const { dir } = useDirection();
  const theme = useMantineTheme();

  const config = RESIZE_SECTIONS[section];
  const options = controller?.options[section] ?? {};

  const getViewportPx = () =>
    config.axis === 'horizontal' ? window.innerWidth : window.innerHeight;

  const [viewportPx, setViewportPx] = useState(() =>
    typeof window === 'undefined' ? 0 : getViewportPx()
  );
  const [measuredSize, setMeasuredSize] = useState<number | undefined>(undefined);

  const getViewportMax = () => getViewportPx() / theme.scale;

  const measureSectionSize = (sectionElement: HTMLElement) => {
    const rect = sectionElement.getBoundingClientRect();
    const rawSize = config.axis === 'horizontal' ? rect.width : rect.height;
    const safeAreaInset = getSafeAreaInset(sectionElement, config.safeAreaVariable);
    return (rawSize - safeAreaInset) / theme.scale;
  };

  const applyPreview = (size: number) => {
    const root = ctx.rootRef.current;
    if (!root) {
      return;
    }

    const value = rem(size);
    root.style.setProperty(config.sizeVariable, value);

    if (ctx.resizeOffsets[section]) {
      root.style.setProperty(config.offsetVariable, value);
    }

    if (ctx.mode === 'static' && config.gridWidthVariable) {
      root.style.setProperty(config.gridWidthVariable, value);
    }
  };

  const clearPreview = () => {
    const root = ctx.rootRef.current;
    if (!root) {
      return;
    }

    root.style.removeProperty(config.sizeVariable);
    root.style.removeProperty(config.offsetVariable);
    if (config.gridWidthVariable) {
      root.style.removeProperty(config.gridWidthVariable);
    }
  };

  const stopListeners = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    activePointerIdRef.current = null;

    const previousBodyStyles = previousBodyStylesRef.current;
    previousBodyStylesRef.current = null;
    if (previousBodyStyles) {
      restoreBodyStyleProperty('user-select', previousBodyStyles.userSelect);
      restoreBodyStyleProperty('-webkit-user-select', previousBodyStyles.webkitUserSelect);
      restoreBodyStyleProperty('cursor', previousBodyStyles.cursor);
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }

    dragRef.current.moved = true;

    const delta =
      getResizeDelta({
        section,
        deltaX: event.clientX - dragRef.current.startX,
        deltaY: event.clientY - dragRef.current.startY,
        dir,
      }) / theme.scale;

    const rawSize = dragRef.current.startSize + delta;
    const size = clampResizeSize({
      size: rawSize,
      min: options.min,
      max: options.max,
      viewportMax: getViewportMax(),
    });

    dragRef.current.size = size;
    applyPreview(size);
    handleRef.current?.setAttribute('aria-valuenow', String(Math.round(size)));
    controller?.previewResize(section, size);
    controller?.reportCollapse(section, getCollapseState(rawSize, options.collapseThreshold));
  };

  const onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }

    stopListeners();

    if (!dragRef.current.moved) {
      controller?.endResize(section, null);
      return;
    }

    controller?.endResize(section, dragRef.current.size);
  };

  const onPointerCancel = (event: PointerEvent) => {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }

    stopListeners();
    clearPreview();
    controller?.endResize(section, null);
  };

  const onDragKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }

    event.preventDefault();
    stopListeners();
    clearPreview();
    handleRef.current?.setAttribute('aria-valuenow', String(Math.round(dragRef.current.startSize)));
    controller?.endResize(section, null);
  };

  const getCurrentSize = () => {
    const size = controller?.[section].size;
    if (size !== undefined) {
      return size;
    }

    const sectionElement = handleRef.current?.parentElement;
    if (!sectionElement) {
      return 0;
    }

    return measureSectionSize(sectionElement);
  };

  const commitKeyboardSize = (size: number) => {
    controller?.endResize(
      section,
      clampResizeSize({
        size,
        min: options.min,
        max: options.max,
        viewportMax: getViewportMax(),
      })
    );
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? KEYBOARD_SHIFT_STEP : KEYBOARD_STEP;

    if (event.key === 'Home') {
      event.preventDefault();
      commitKeyboardSize(options.min ?? 0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      commitKeyboardSize(options.max ?? getViewportMax());
      return;
    }

    const keyDelta = KEY_DELTAS[event.key];
    if (!keyDelta) {
      return;
    }

    const direction = getResizeDelta({ section, ...keyDelta, dir });
    if (direction === 0) {
      return;
    }

    event.preventDefault();
    commitKeyboardSize(getCurrentSize() + direction * step);
  };

  const onDoubleClick = () => {
    clearPreview();
    controller?.[section].reset();
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    if (abortRef.current !== null) {
      return;
    }

    const sectionElement = handleRef.current?.parentElement;
    if (!sectionElement) {
      return;
    }

    const startSize = measureSectionSize(sectionElement);
    dragRef.current = {
      startSize,
      startX: event.clientX,
      startY: event.clientY,
      size: startSize,
      moved: false,
    };
    activePointerIdRef.current = event.pointerId;
    controller?.initCollapse(section, getCollapseState(startSize, options.collapseThreshold));

    const abortController = new AbortController();
    abortRef.current = abortController;
    const { signal } = abortController;

    previousBodyStylesRef.current = {
      userSelect: document.body.style.getPropertyValue('user-select'),
      webkitUserSelect: document.body.style.getPropertyValue('-webkit-user-select'),
      cursor: document.body.style.getPropertyValue('cursor'),
    };
    document.body.style.setProperty('user-select', 'none');
    document.body.style.setProperty('-webkit-user-select', 'none');
    document.body.style.setProperty(
      'cursor',
      config.axis === 'horizontal' ? 'col-resize' : 'row-resize'
    );
    controller?.startResize(section);

    document.addEventListener('pointermove', onPointerMove, { signal });
    document.addEventListener('pointerup', onPointerUp, { signal });
    document.addEventListener('pointercancel', onPointerCancel, { signal });
    document.addEventListener('keydown', onDragKeyDown, { signal });
  };

  useIsomorphicEffect(() => {
    if (controller && controller.activeSection !== section) {
      clearPreview();
    }
  }, [controller?.activeSection, controller?.[section].size]);

  useIsomorphicEffect(() => {
    setViewportPx(getViewportPx());

    const handleWindowResize = () => setViewportPx(getViewportPx());
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [config.axis]);

  useIsomorphicEffect(() => {
    if (controller?.[section].size === undefined) {
      setMeasuredSize(getCurrentSize());
    }
  }, [controller?.[section].size]);

  useIsomorphicEffect(
    () => () => {
      const wasDragging = abortRef.current !== null;
      stopListeners();
      clearPreview();

      if (wasDragging) {
        controller?.endResize(section, null);
      }
    },
    []
  );

  if (!controller?.[section].enabled) {
    return null;
  }

  const currentValue = controller[section].size ?? measuredSize;
  const viewportMax = viewportPx / theme.scale;
  const effectiveMax = Math.min(options.max ?? viewportMax, viewportMax);

  return (
    <Box
      ref={handleRef}
      role="separator"
      tabIndex={0}
      aria-label={LABELS[section]}
      aria-orientation={config.orientation}
      aria-valuemin={options.min ?? 0}
      aria-valuemax={Math.round(effectiveMax)}
      aria-valuenow={currentValue !== undefined ? Math.round(currentValue) : undefined}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      onDoubleClick={onDoubleClick}
      mod={{ section, orientation: config.orientation, active: controller[section].active }}
      {...ctx.getStyles('resizeHandle')}
    />
  );
}

AppShellResizeHandle.displayName = '@mantine/core/AppShellResizeHandle';
