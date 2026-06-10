/* eslint-disable @typescript-eslint/no-deprecated */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';

/** Pane size expressed in CSS units. A bare `number` or `%` string is a flexible size (shares
 * the leftover space), `px`/`rem` strings are fixed sizes that keep their pixel size when the
 * container is resized. */
export type SplitterPaneSize = number | `${number}%` | `${number}px` | `${number}rem`;

/** Keyboard step expressed in CSS units. A bare `number` or `%` string is a percentage of the
 * container, `px`/`rem` strings are resolved to pixels. */
export type SplitterStep = number | `${number}%` | `${number}px` | `${number}rem`;

export interface UseSplitterPanel {
  /** Initial size, a `number`/`%` is a flexible size, `px`/`rem` is a fixed size. A bare number is treated as a percentage. */
  defaultSize: SplitterPaneSize;
  /** Minimum size in the same units as `defaultSize`, `0` by default */
  min?: SplitterPaneSize;
  /** Maximum size in the same units as `defaultSize`, no limit by default */
  max?: SplitterPaneSize;
  /** Whether this panel can be collapsed, `false` by default */
  collapsible?: boolean;
  /** Size below which the panel snaps to collapsed, defaults to `min` */
  collapseThreshold?: SplitterPaneSize;
}

/** Panel configuration resolved to numeric units (percent or pixels) passed to redistribute functions */
export interface UseSplitterResolvedPanel {
  /** Resolved default size in the same units as redistribute sizes */
  defaultSize: number;
  /** Resolved minimum size */
  min?: number;
  /** Resolved maximum size */
  max?: number;
  /** Whether this panel can be collapsed */
  collapsible?: boolean;
  /** Resolved collapse threshold */
  collapseThreshold?: number;
}

export interface UseSplitterRedistributeInput {
  /** Current sizes before applying delta, in resolved units (percent or pixels) */
  sizes: number[];
  /** Resolved panel configurations, in the same units as `sizes` */
  panels: UseSplitterResolvedPanel[];
  /** Index of the handle being dragged */
  handleIndex: number;
  /** Requested size change in resolved units (positive = grow before-panel) */
  delta: number;
}

export type UseSplitterRedistributeFn = (input: UseSplitterRedistributeInput) => number[];

export interface UseSplitterOptions {
  /** Panel configuration array (minimum 2 panels) */
  panels: UseSplitterPanel[];
  /** Layout direction, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';
  /** Controlled sizes, each value keeps the unit it was declared in */
  sizes?: SplitterPaneSize[];
  /** Called during resize with updated sizes, each value keeps its declared unit */
  onSizeChange?: (sizes: SplitterPaneSize[]) => void;
  /** Called when drag starts */
  onResizeStart?: (handleIndex: number) => void;
  /** Called when drag ends */
  onResizeEnd?: (handleIndex: number, sizes: SplitterPaneSize[]) => void;
  /** Called when a panel collapses or expands */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;
  /** How to borrow space from non-adjacent panels when the immediate neighbor is at its min/max.
   * `'nearest'` takes from the nearest panel in the drag direction first.
   * `'equal'` distributes equally among all panels in the drag direction.
   * A function receives sizes, panels, handleIndex and delta, and returns new sizes.
   * When not set, only the two adjacent panels are affected. */
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn;
  /** Keyboard step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels, `1` by default */
  step?: SplitterStep;
  /** Shift+arrow step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels, `10` by default */
  shiftStep?: SplitterStep;
  /** Text direction for keyboard nav, `'ltr'` by default */
  dir?: 'ltr' | 'rtl';
  /** Restore the two panels adjacent to a handle to their default ratio (preserving their combined size) when the handle is double-clicked, `true` by default */
  resetOnDoubleClick?: boolean;
  /** Enable/disable the hook, `true` by default */
  enabled?: boolean;
}

export interface UseSplitterReturnValue<T extends HTMLElement = any> {
  /** Ref callback for the container element */
  ref: React.RefCallback<T | null>;
  /** Current panel sizes, each value keeps the unit it was declared in */
  sizes: SplitterPaneSize[];
  /** Which panels are currently collapsed */
  collapsed: boolean[];
  /** Index of handle being dragged, or -1 */
  activeHandle: number;
  /** Get props to spread on each resize handle */
  getHandleProps: (input: { index: number }) => {
    ref: React.RefCallback<HTMLElement>;
    role: 'separator';
    'aria-orientation': 'horizontal' | 'vertical';
    'aria-valuenow': number;
    'aria-valuemin': number;
    'aria-valuemax': number;
    tabIndex: number;
    onKeyDown: React.KeyboardEventHandler;
    onDoubleClick: React.MouseEventHandler;
    'data-active': boolean | undefined;
    'data-orientation': 'horizontal' | 'vertical';
  };
  /** Programmatically set sizes, each value keeps its declared unit */
  setSizes: (sizes: SplitterPaneSize[]) => void;
  /** Collapse a panel */
  collapse: (panelIndex: number) => void;
  /** Expand a collapsed panel */
  expand: (panelIndex: number) => void;
  /** Toggle collapse of a panel */
  toggleCollapse: (panelIndex: number) => void;
  /** Reset the two panels adjacent to a handle to their default ratio, preserving
   * their combined size */
  reset: (handleIndex: number) => void;
}

const PX_RE = /^(-?[\d.]+)px$/;
const REM_RE = /^(-?[\d.]+)rem$/;
const PERCENT_RE = /^(-?[\d.]+)%$/;

function isFixedSize(size: SplitterPaneSize | undefined): boolean {
  return typeof size === 'string' && (PX_RE.test(size) || REM_RE.test(size));
}

function sizeMagnitude(size: SplitterPaneSize): number {
  return typeof size === 'number' ? size : parseFloat(size);
}

function detectPixelMode(options: UseSplitterOptions): boolean {
  return (
    options.panels.some(
      (panel) =>
        isFixedSize(panel.defaultSize) ||
        isFixedSize(panel.min) ||
        isFixedSize(panel.max) ||
        isFixedSize(panel.collapseThreshold)
    ) ||
    isFixedSize(options.step) ||
    isFixedSize(options.shiftStep) ||
    (options.sizes?.some(isFixedSize) ?? false)
  );
}

function getRootFontSize(): number {
  if (typeof window === 'undefined') {
    return 16;
  }
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return Number.isFinite(fontSize) && fontSize > 0 ? fontSize : 16;
}

function resolveSize(
  size: SplitterPaneSize,
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): number {
  if (!pixelMode) {
    return sizeMagnitude(size);
  }

  if (typeof size === 'number') {
    return (size / 100) * containerPx;
  }

  const percent = PERCENT_RE.exec(size);
  if (percent) {
    return (parseFloat(percent[1]) / 100) * containerPx;
  }

  const rem = REM_RE.exec(size);
  if (rem) {
    return parseFloat(rem[1]) * rootFontSize;
  }

  const px = PX_RE.exec(size);
  if (px) {
    return parseFloat(px[1]);
  }

  return 0;
}

/** Resolves all sizes to pixels at once. Fixed panes get their absolute pixel size, flexible panes
 * share the leftover space by their weight ratio – matching how the layout is rendered with
 * `flex-grow`, so drag math operates on the same pixel sizes the user sees. */
function resolveWorkingSizes(
  sizes: SplitterPaneSize[],
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): number[] {
  if (!pixelMode) {
    return sizes.map((size) => sizeMagnitude(size));
  }

  let fixedTotal = 0;
  let flexibleWeight = 0;
  sizes.forEach((size) => {
    if (isFixedSize(size)) {
      fixedTotal += resolveSize(size, true, containerPx, rootFontSize);
    } else {
      flexibleWeight += sizeMagnitude(size);
    }
  });

  const leftover = Math.max(0, containerPx - fixedTotal);
  const fixedScale = fixedTotal > containerPx && fixedTotal > 0 ? containerPx / fixedTotal : 1;

  return sizes.map((size) => {
    if (isFixedSize(size)) {
      return resolveSize(size, true, containerPx, rootFontSize) * fixedScale;
    }
    return flexibleWeight > 0 ? (sizeMagnitude(size) / flexibleWeight) * leftover : 0;
  });
}

function encodeSize(
  value: number,
  original: SplitterPaneSize,
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): SplitterPaneSize {
  if (!pixelMode) {
    return typeof original === 'string' && PERCENT_RE.test(original) ? `${value}%` : value;
  }

  if (typeof original === 'number') {
    return containerPx > 0 ? (value / containerPx) * 100 : original;
  }

  if (PERCENT_RE.test(original)) {
    return `${containerPx > 0 ? (value / containerPx) * 100 : parseFloat(original)}%`;
  }

  if (REM_RE.test(original)) {
    return `${rootFontSize > 0 ? value / rootFontSize : 0}rem`;
  }

  return `${value}px`;
}

function resolvePanel(
  panel: UseSplitterPanel,
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): UseSplitterResolvedPanel {
  return {
    defaultSize: resolveSize(panel.defaultSize, pixelMode, containerPx, rootFontSize),
    min: panel.min != null ? resolveSize(panel.min, pixelMode, containerPx, rootFontSize) : 0,
    max:
      panel.max != null
        ? resolveSize(panel.max, pixelMode, containerPx, rootFontSize)
        : pixelMode
          ? containerPx
          : 100,
    collapseThreshold:
      panel.collapseThreshold != null
        ? resolveSize(panel.collapseThreshold, pixelMode, containerPx, rootFontSize)
        : undefined,
    collapsible: panel.collapsible,
  };
}

function resolveStep(
  step: SplitterStep,
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): number {
  return resolveSize(step, pixelMode, containerPx, rootFontSize);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getMin(panel: UseSplitterResolvedPanel): number {
  return panel.min ?? 0;
}

function getMax(panel: UseSplitterResolvedPanel): number {
  return panel.max ?? Infinity;
}

function getCollapseThreshold(panel: UseSplitterResolvedPanel): number {
  return panel.collapseThreshold ?? getMin(panel);
}

interface SplitterInternalState {
  isDragging: boolean;
  handleIndex: number;
  startPointer: number;
  containerSize: number;
  rootFontSize: number;
  pixelMode: boolean;
  startSizes: number[];
  startRaw: SplitterPaneSize[];
  preCollapseSizes: SplitterPaneSize[];
}

function createInitialInternalState(): SplitterInternalState {
  return {
    isDragging: false,
    handleIndex: -1,
    startPointer: 0,
    containerSize: 0,
    rootFontSize: 16,
    pixelMode: false,
    startSizes: [],
    startRaw: [],
    preCollapseSizes: [],
  };
}

function checkCollapse(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number
): number[] | null {
  const beforeIdx = handleIndex;
  const afterIdx = handleIndex + 1;
  const beforePanel = panels[beforeIdx];
  const afterPanel = panels[afterIdx];

  const rawBefore = sizes[beforeIdx] + delta;
  const rawAfter = sizes[afterIdx] - delta;

  if (
    beforePanel.collapsible &&
    rawBefore < getCollapseThreshold(beforePanel) &&
    rawBefore < sizes[beforeIdx]
  ) {
    const result = [...sizes];
    result[afterIdx] += result[beforeIdx];
    result[beforeIdx] = 0;
    return result;
  }

  if (
    afterPanel.collapsible &&
    rawAfter < getCollapseThreshold(afterPanel) &&
    rawAfter < sizes[afterIdx]
  ) {
    const result = [...sizes];
    result[beforeIdx] += result[afterIdx];
    result[afterIdx] = 0;
    return result;
  }

  return null;
}

function applyAdjacentOnly(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number
): number[] {
  const result = [...sizes];
  const beforeIdx = handleIndex;
  const afterIdx = handleIndex + 1;

  const total = result[beforeIdx] + result[afterIdx];
  const effectiveBeforeMax = Math.min(getMax(panels[beforeIdx]), total - getMin(panels[afterIdx]));
  const effectiveBeforeMin = Math.max(getMin(panels[beforeIdx]), total - getMax(panels[afterIdx]));
  const newBefore = clamp(result[beforeIdx] + delta, effectiveBeforeMin, effectiveBeforeMax);
  result[beforeIdx] = newBefore;
  result[afterIdx] = total - newBefore;
  return result;
}

function redistributeNearest(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number
): number[] {
  const result = [...sizes];

  if (delta > 0) {
    const growIdx = handleIndex;
    const maxGrow = getMax(panels[growIdx]) - result[growIdx];
    const wantedGrow = Math.min(delta, maxGrow);

    let taken = 0;
    for (let i = handleIndex + 1; i < result.length && taken < wantedGrow; i += 1) {
      const canGive = result[i] - getMin(panels[i]);
      const take = Math.min(canGive, wantedGrow - taken);
      result[i] -= take;
      taken += take;
    }

    result[growIdx] += taken;
  } else if (delta < 0) {
    const growIdx = handleIndex + 1;
    const maxGrow = getMax(panels[growIdx]) - result[growIdx];
    const wantedGrow = Math.min(Math.abs(delta), maxGrow);

    let taken = 0;
    for (let i = handleIndex; i >= 0 && taken < wantedGrow; i -= 1) {
      const canGive = result[i] - getMin(panels[i]);
      const take = Math.min(canGive, wantedGrow - taken);
      result[i] -= take;
      taken += take;
    }

    result[growIdx] += taken;
  }

  return result;
}

function redistributeEqual(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number
): number[] {
  const result = [...sizes];

  if (delta > 0) {
    const growIdx = handleIndex;
    const maxGrow = getMax(panels[growIdx]) - result[growIdx];
    const wantedGrow = Math.min(delta, maxGrow);

    const donors: number[] = [];
    for (let i = handleIndex + 1; i < result.length; i += 1) {
      if (result[i] > getMin(panels[i])) {
        donors.push(i);
      }
    }

    let remaining = wantedGrow;
    while (remaining > 0.001 && donors.length > 0) {
      const perDonor = remaining / donors.length;
      const exhausted: number[] = [];

      for (let d = 0; d < donors.length; d += 1) {
        const idx = donors[d];
        const canGive = result[idx] - getMin(panels[idx]);
        const take = Math.min(canGive, perDonor);
        result[idx] -= take;
        remaining -= take;
        if (canGive <= perDonor + 0.001) {
          exhausted.push(d);
        }
      }

      for (let i = exhausted.length - 1; i >= 0; i -= 1) {
        donors.splice(exhausted[i], 1);
      }

      if (exhausted.length === 0) {
        break;
      }
    }

    result[growIdx] += wantedGrow - remaining;
  } else if (delta < 0) {
    const growIdx = handleIndex + 1;
    const maxGrow = getMax(panels[growIdx]) - result[growIdx];
    const wantedGrow = Math.min(Math.abs(delta), maxGrow);

    const donors: number[] = [];
    for (let i = handleIndex; i >= 0; i -= 1) {
      if (result[i] > getMin(panels[i])) {
        donors.push(i);
      }
    }

    let remaining = wantedGrow;
    while (remaining > 0.001 && donors.length > 0) {
      const perDonor = remaining / donors.length;
      const exhausted: number[] = [];

      for (let d = 0; d < donors.length; d += 1) {
        const idx = donors[d];
        const canGive = result[idx] - getMin(panels[idx]);
        const take = Math.min(canGive, perDonor);
        result[idx] -= take;
        remaining -= take;
        if (canGive <= perDonor + 0.001) {
          exhausted.push(d);
        }
      }

      for (let i = exhausted.length - 1; i >= 0; i -= 1) {
        donors.splice(exhausted[i], 1);
      }

      if (exhausted.length === 0) {
        break;
      }
    }

    result[growIdx] += wantedGrow - remaining;
  }

  return result;
}

function applyConstraints(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number,
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn
): number[] {
  if (typeof redistribute === 'function') {
    return redistribute({ sizes: [...sizes], panels, handleIndex, delta });
  }

  if (redistribute === 'nearest' || redistribute === 'equal') {
    const strategy = redistribute === 'nearest' ? redistributeNearest : redistributeEqual;
    const result = strategy(sizes, panels, handleIndex, delta);

    const beforeIdx = handleIndex;
    const afterIdx = handleIndex + 1;
    const beforePanel = panels[beforeIdx];
    const afterPanel = panels[afterIdx];

    if (
      beforePanel.collapsible &&
      result[beforeIdx] < getCollapseThreshold(beforePanel) &&
      result[beforeIdx] < sizes[beforeIdx]
    ) {
      const freed = result[beforeIdx];
      result[afterIdx] += freed;
      result[beforeIdx] = 0;
    } else if (
      afterPanel.collapsible &&
      result[afterIdx] < getCollapseThreshold(afterPanel) &&
      result[afterIdx] < sizes[afterIdx]
    ) {
      const freed = result[afterIdx];
      result[beforeIdx] += freed;
      result[afterIdx] = 0;
    }

    return result;
  }

  const collapsed = checkCollapse(sizes, panels, handleIndex, delta);
  if (collapsed) {
    return collapsed;
  }

  return applyAdjacentOnly(sizes, panels, handleIndex, delta);
}

export function useSplitter<T extends HTMLElement = any>(
  options: UseSplitterOptions
): UseSplitterReturnValue<T> {
  const {
    panels,
    orientation = 'horizontal',
    sizes: controlledSizes,
    onSizeChange,
    onCollapseChange,
    redistribute,
    step = 1,
    shiftStep = 10,
    dir = 'ltr',
    resetOnDoubleClick = true,
    enabled = true,
  } = options;

  const pixelMode = detectPixelMode(options);

  const defaultSizes = panels.map((panel) => panel.defaultSize);

  const [currentSizes, setCurrentSizes] = useUncontrolled<SplitterPaneSize[]>({
    value: controlledSizes,
    defaultValue: defaultSizes,
    finalValue: defaultSizes,
    onChange: onSizeChange,
  });

  const [activeHandle, setActiveHandle] = useState(-1);
  const [containerSize, setContainerSize] = useState(0);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const internalStateRef = useRef<SplitterInternalState>(createInitialInternalState());
  const containerRef = useRef<T | null>(null);
  const containerSizeRef = useRef(0);
  const rootFontSizeRef = useRef(16);
  const documentControllerRef = useRef<AbortController | null>(null);
  const frameRef = useRef(0);
  const currentSizesRef = useRef(currentSizes);
  currentSizesRef.current = currentSizes;

  const preCollapseSizesRef = useRef<SplitterPaneSize[]>(defaultSizes);

  const collapsed = currentSizes.map((size) => sizeMagnitude(size) === 0);

  const measureContainer = useCallback(() => {
    const node = containerRef.current;
    if (!node) {
      return 0;
    }
    const rect = node.getBoundingClientRect();
    return (optionsRef.current.orientation ?? 'horizontal') === 'horizontal'
      ? rect.width
      : rect.height;
  }, []);

  const updateSizes = useCallback(
    (newSizes: SplitterPaneSize[]) => {
      currentSizesRef.current = newSizes;
      setCurrentSizes(newSizes);
    },
    [setCurrentSizes]
  );

  const collapsePanel = useCallback(
    (panelIndex: number) => {
      if (!panels[panelIndex]?.collapsible) {
        return;
      }
      const raw = currentSizesRef.current;
      if (sizeMagnitude(raw[panelIndex]) === 0) {
        return;
      }

      const container = pixelMode ? containerSizeRef.current || measureContainer() : 0;
      const rootFontSize = rootFontSizeRef.current;
      const working = resolveWorkingSizes(raw, pixelMode, container, rootFontSize);

      preCollapseSizesRef.current = [...raw];
      const freedSize = working[panelIndex];
      working[panelIndex] = 0;

      const neighbor = panelIndex === 0 ? 1 : panelIndex - 1;
      working[neighbor] += freedSize;

      updateSizes(
        working.map((value, i) => encodeSize(value, raw[i], pixelMode, container, rootFontSize))
      );
      onCollapseChange?.(panelIndex, true);
    },
    [panels, pixelMode, measureContainer, updateSizes, onCollapseChange]
  );

  const expandPanel = useCallback(
    (panelIndex: number) => {
      if (!panels[panelIndex]?.collapsible) {
        return;
      }
      const raw = currentSizesRef.current;
      if (sizeMagnitude(raw[panelIndex]) !== 0) {
        return;
      }

      const container = pixelMode ? containerSizeRef.current || measureContainer() : 0;
      const rootFontSize = rootFontSizeRef.current;
      const working = resolveWorkingSizes(raw, pixelMode, container, rootFontSize);

      const preCollapse = preCollapseSizesRef.current;
      const restoreSource =
        preCollapse[panelIndex] != null && sizeMagnitude(preCollapse[panelIndex]) !== 0
          ? preCollapse[panelIndex]
          : panels[panelIndex].defaultSize;
      const restoreSize = resolveSize(restoreSource, pixelMode, container, rootFontSize);

      const neighbor = panelIndex === 0 ? 1 : panelIndex - 1;
      const neighborMin =
        panels[neighbor].min != null
          ? resolveSize(panels[neighbor].min!, pixelMode, container, rootFontSize)
          : 0;
      const available = Math.max(0, working[neighbor] - neighborMin);
      const actualRestore = Math.min(restoreSize, available);

      if (actualRestore <= 0) {
        return;
      }

      working[panelIndex] = actualRestore;
      working[neighbor] -= actualRestore;

      updateSizes(
        working.map((value, i) => encodeSize(value, raw[i], pixelMode, container, rootFontSize))
      );
      onCollapseChange?.(panelIndex, false);
    },
    [panels, pixelMode, measureContainer, updateSizes, onCollapseChange]
  );

  const toggleCollapsePanel = useCallback(
    (panelIndex: number) => {
      if (sizeMagnitude(currentSizesRef.current[panelIndex]) === 0) {
        expandPanel(panelIndex);
      } else {
        collapsePanel(panelIndex);
      }
    },
    [collapsePanel, expandPanel]
  );

  const emitCollapseTransitions = useCallback(
    (prev: number[], next: number[], indices: number[], preCollapseSnapshot: number[]) => {
      const onChange = optionsRef.current.onCollapseChange;
      for (const idx of indices) {
        const wasCollapsed = prev[idx] === 0;
        const nowCollapsed = next[idx] === 0;
        if (!wasCollapsed && nowCollapsed) {
          preCollapseSizesRef.current = [...preCollapseSnapshot];
          onChange?.(idx, true);
        } else if (wasCollapsed && !nowCollapsed) {
          onChange?.(idx, false);
        }
      }
    },
    []
  );

  const reset = useCallback(
    (handleIndex: number) => {
      const prev = currentSizesRef.current;
      const currentPanels = optionsRef.current.panels;

      const beforeIdx = handleIndex;
      const afterIdx = handleIndex + 1;
      if (beforeIdx < 0 || afterIdx >= prev.length) {
        return;
      }

      const total = prev[beforeIdx] + prev[afterIdx];
      const defBefore = currentPanels[beforeIdx].defaultSize;
      const defAfter = currentPanels[afterIdx].defaultSize;
      const defTotal = defBefore + defAfter;
      const targetBefore = defTotal === 0 ? total / 2 : total * (defBefore / defTotal);

      const next = applyAdjacentOnly(
        prev,
        currentPanels,
        beforeIdx,
        targetBefore - prev[beforeIdx]
      );
      emitCollapseTransitions(prev, next, [beforeIdx, afterIdx], prev);
      updateSizes(next);
    },
    [emitCollapseTransitions, updateSizes]
  );

  const containerRefCallback: React.RefCallback<T | null> = useCallback((node) => {
    containerRef.current = node;
  }, []);

  useEffect(() => {
    if (!pixelMode || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const size =
        (optionsRef.current.orientation ?? 'horizontal') === 'horizontal'
          ? rect.width
          : rect.height;
      rootFontSizeRef.current = getRootFontSize();
      containerSizeRef.current = size;
      setContainerSize((prev) => (prev !== size ? size : prev));
    };

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    });

    observer.observe(node);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pixelMode, orientation]);

  const handleRefCallbacks = useRef<Map<number, (node: HTMLElement | null) => void>>(new Map());
  const handleElementControllers = useRef<Map<number, AbortController>>(new Map());

  const getHandleRefCallback = useCallback(
    (handleIndex: number): React.RefCallback<HTMLElement> => {
      if (handleRefCallbacks.current.has(handleIndex)) {
        return handleRefCallbacks.current.get(handleIndex)!;
      }

      const callback = (node: HTMLElement | null) => {
        const existingController = handleElementControllers.current.get(handleIndex);
        if (existingController) {
          existingController.abort();
          handleElementControllers.current.delete(handleIndex);
        }

        if (!node) {
          return;
        }

        const elementController = new AbortController();
        handleElementControllers.current.set(handleIndex, elementController);

        const onPointerDown = (event: PointerEvent) => {
          if (optionsRef.current.enabled === false) {
            return;
          }
          if (event.button !== 0) {
            return;
          }

          const container = containerRef.current;
          if (!container) {
            return;
          }

          const opts = optionsRef.current;
          const isHorizontal = (opts.orientation ?? 'horizontal') === 'horizontal';
          const rect = container.getBoundingClientRect();
          const containerSizePx = isHorizontal ? rect.width : rect.height;
          const pointerPos = isHorizontal ? event.clientX : event.clientY;
          const isPixelMode = detectPixelMode(opts);
          const rootFontSize = getRootFontSize();

          const s = internalStateRef.current;
          s.isDragging = true;
          s.handleIndex = handleIndex;
          s.startPointer = pointerPos;
          s.containerSize = containerSizePx;
          s.rootFontSize = rootFontSize;
          s.pixelMode = isPixelMode;
          s.startRaw = [...currentSizesRef.current];
          s.startSizes = resolveWorkingSizes(
            s.startRaw,
            isPixelMode,
            containerSizePx,
            rootFontSize
          );
          s.preCollapseSizes = [...preCollapseSizesRef.current];

          setActiveHandle(handleIndex);
          document.body.style.userSelect = 'none';
          document.body.style.webkitUserSelect = 'none';
          document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';

          opts.onResizeStart?.(handleIndex);

          documentControllerRef.current?.abort();
          documentControllerRef.current = new AbortController();
          const sig = documentControllerRef.current.signal;

          document.addEventListener('pointermove', onPointerMove, { signal: sig });
          document.addEventListener('pointerup', onPointerUp, { signal: sig });
          document.addEventListener('pointercancel', onPointerUp, { signal: sig });
        };

        const flushResize = (pointerEvent: PointerEvent) => {
          const s = internalStateRef.current;
          if (!s.containerSize) {
            return;
          }
          const opts = optionsRef.current;
          const isHorizontal = (opts.orientation ?? 'horizontal') === 'horizontal';
          const isRtl = isHorizontal && opts.dir === 'rtl';
          const pointerPos = isHorizontal ? pointerEvent.clientX : pointerEvent.clientY;
          const pixelDelta = (isRtl ? -1 : 1) * (pointerPos - s.startPointer);
          const delta = s.pixelMode ? pixelDelta : (pixelDelta / s.containerSize) * 100;

          const resolvedPanels = opts.panels.map((panel) =>
            resolvePanel(panel, s.pixelMode, s.containerSize, s.rootFontSize)
          );

          const newSizes = applyConstraints(
            s.startSizes,
            resolvedPanels,
            s.handleIndex,
            delta,
            opts.redistribute
          );

          const prevSizes = currentSizesRef.current;
          emitCollapseTransitions(
            prevSizes,
            newSizes,
            [s.handleIndex, s.handleIndex + 1],
            s.startSizes
          );

          const encoded = newSizes.map((value, i) =>
            Math.abs(value - s.startSizes[i]) > 1e-6
              ? encodeSize(value, s.startRaw[i], s.pixelMode, s.containerSize, s.rootFontSize)
              : s.startRaw[i]
          );
          currentSizesRef.current = encoded;
          setCurrentSizes(encoded);
        };

        const onPointerMove = (event: PointerEvent) => {
          const s = internalStateRef.current;
          if (!s.isDragging) {
            return;
          }

          cancelAnimationFrame(frameRef.current);
          frameRef.current = requestAnimationFrame(() => {
            flushResize(event);
          });
        };

        const onPointerUp = (event: PointerEvent) => {
          const s = internalStateRef.current;
          if (!s.isDragging) {
            return;
          }

          cancelAnimationFrame(frameRef.current);
          flushResize(event);

          s.isDragging = false;
          const finishedHandle = s.handleIndex;
          s.handleIndex = -1;

          setActiveHandle(-1);
          document.body.style.userSelect = '';
          document.body.style.webkitUserSelect = '';
          document.body.style.cursor = '';

          documentControllerRef.current?.abort();
          documentControllerRef.current = null;

          optionsRef.current.onResizeEnd?.(finishedHandle, [...currentSizesRef.current]);
        };

        node.addEventListener('pointerdown', onPointerDown, {
          signal: elementController.signal,
        });
      };

      handleRefCallbacks.current.set(handleIndex, callback);
      return callback;
    },
    [setCurrentSizes]
  );

  const getHandleProps = useCallback(
    (input: { index: number }) => {
      const { index } = input;
      const orient = orientation;
      const rootFontSize = rootFontSizeRef.current;
      const working = resolveWorkingSizes(currentSizes, pixelMode, containerSize, rootFontSize);
      const resolvedPanels = panels.map((panel) =>
        resolvePanel(panel, pixelMode, containerSize, rootFontSize)
      );
      const beforeSize = working[index] ?? 0;
      const beforePanel = resolvedPanels[index];

      return {
        ref: getHandleRefCallback(index),
        role: 'separator' as const,
        'aria-orientation': orient,
        'aria-valuenow': Math.round(beforeSize),
        'aria-valuemin': Math.round(getMin(beforePanel)),
        'aria-valuemax': Math.round(getMax(beforePanel)),
        tabIndex: 0,
        onKeyDown: (event: React.KeyboardEvent) => {
          if (!enabled) {
            return;
          }

          const isHorizontal = orient === 'horizontal';
          const isRtl = dir === 'rtl';

          const container = pixelMode ? containerSizeRef.current || measureContainer() : 0;
          const liveRootFontSize = rootFontSizeRef.current;
          const liveWorking = resolveWorkingSizes(
            currentSizes,
            pixelMode,
            container,
            liveRootFontSize
          );
          const livePanels = panels.map((panel) =>
            resolvePanel(panel, pixelMode, container, liveRootFontSize)
          );
          const liveBeforePanel = livePanels[index];
          const liveAfterPanel = livePanels[index + 1];

          let delta = 0;
          const currentStep = resolveStep(
            event.shiftKey ? shiftStep : step,
            pixelMode,
            container,
            liveRootFontSize
          );

          switch (event.key) {
            case 'ArrowLeft': {
              if (!isHorizontal) {
                return;
              }
              delta = isRtl ? currentStep : -currentStep;
              break;
            }
            case 'ArrowRight': {
              if (!isHorizontal) {
                return;
              }
              delta = isRtl ? -currentStep : currentStep;
              break;
            }
            case 'ArrowUp': {
              if (isHorizontal) {
                return;
              }
              delta = -currentStep;
              break;
            }
            case 'ArrowDown': {
              if (isHorizontal) {
                return;
              }
              delta = currentStep;
              break;
            }
            case 'Home': {
              delta = -(liveWorking[index] - getMin(liveBeforePanel));
              break;
            }
            case 'End': {
              delta = getMax(liveBeforePanel) - liveWorking[index];
              break;
            }
            case 'Enter': {
              const beforeCollapsible = liveBeforePanel?.collapsible;
              const afterCollapsible = liveAfterPanel?.collapsible;

              if (beforeCollapsible && liveWorking[index] <= liveWorking[index + 1]) {
                toggleCollapsePanel(index);
                event.preventDefault();
                return;
              }
              if (afterCollapsible) {
                toggleCollapsePanel(index + 1);
                event.preventDefault();
                return;
              }
              if (beforeCollapsible) {
                toggleCollapsePanel(index);
                event.preventDefault();
                return;
              }
              return;
            }
            default:
              return;
          }

          event.preventDefault();

          if (delta !== 0) {
            const newSizes = applyConstraints(liveWorking, livePanels, index, delta, redistribute);
            emitCollapseTransitions(currentSizes, newSizes, [index, index + 1], currentSizes);
            updateSizes(
              newSizes.map((value, i) =>
                Math.abs(value - liveWorking[i]) > 1e-6
                  ? encodeSize(value, currentSizes[i], pixelMode, container, liveRootFontSize)
                  : currentSizes[i]
              )
            );
          }
        },
        onDoubleClick: () => {
          if (!enabled || !resetOnDoubleClick) {
            return;
          }
          reset(index);
        },
        'data-active': activeHandle === index || undefined,
        'data-orientation': orient,
      };
    },
    [
      orientation,
      currentSizes,
      panels,
      pixelMode,
      containerSize,
      enabled,
      dir,
      step,
      shiftStep,
      resetOnDoubleClick,
      activeHandle,
      redistribute,
      measureContainer,
      getHandleRefCallback,
      toggleCollapsePanel,
      updateSizes,
      emitCollapseTransitions,
      reset,
    ]
  );

  useEffect(
    () => () => {
      documentControllerRef.current?.abort();
      documentControllerRef.current = null;
      handleElementControllers.current.forEach((controller) => controller.abort());
      handleElementControllers.current.clear();
      cancelAnimationFrame(frameRef.current);

      if (internalStateRef.current.isDragging) {
        internalStateRef.current.isDragging = false;
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        document.body.style.cursor = '';
      }
    },
    []
  );

  return {
    ref: containerRefCallback,
    sizes: currentSizes,
    collapsed,
    activeHandle,
    getHandleProps,
    setSizes: updateSizes,
    collapse: collapsePanel,
    expand: expandPanel,
    toggleCollapse: toggleCollapsePanel,
    reset,
  };
}

export namespace useSplitter {
  export type Panel = UseSplitterPanel;
  export type Options = UseSplitterOptions;
  export type RedistributeInput = UseSplitterRedistributeInput;
  export type RedistributeFn = UseSplitterRedistributeFn;
  export type ResolvedPanel = UseSplitterResolvedPanel;
  export type ReturnValue<T extends HTMLElement = any> = UseSplitterReturnValue<T>;
  export type PaneSize = SplitterPaneSize;
  export type Step = SplitterStep;
}
