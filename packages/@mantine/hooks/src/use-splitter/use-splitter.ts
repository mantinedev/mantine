/* eslint-disable @typescript-eslint/no-deprecated */
import { useCallback, useRef, useState } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';

export interface UseSplitterPanel {
  /** Initial size as percentage (0-100). All panels must sum to 100. */
  defaultSize: number;
  /** Minimum size percentage, `0` by default */
  min?: number;
  /** Maximum size percentage, `100` by default */
  max?: number;
  /** Whether this panel can be collapsed, `false` by default */
  collapsible?: boolean;
  /** Size below which the panel snaps to collapsed (percentage), defaults to `min` */
  collapseThreshold?: number;
}

export interface UseSplitterRedistributeInput {
  /** Current sizes before applying delta */
  sizes: number[];
  /** Panel configurations */
  panels: UseSplitterPanel[];
  /** Index of the handle being dragged */
  handleIndex: number;
  /** Requested size change in percentage (positive = grow before-panel) */
  delta: number;
}

export type UseSplitterRedistributeFn = (input: UseSplitterRedistributeInput) => number[];

export interface UseSplitterOptions {
  /** Panel configuration array (minimum 2 panels) */
  panels: UseSplitterPanel[];
  /** Layout direction, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';
  /** Controlled sizes (percentages summing to 100) */
  sizes?: number[];
  /** Called during resize with updated sizes */
  onSizeChange?: (sizes: number[]) => void;
  /** Called when drag starts */
  onResizeStart?: (handleIndex: number) => void;
  /** Called when drag ends */
  onResizeEnd?: (handleIndex: number, sizes: number[]) => void;
  /** Called when a panel collapses or expands */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;
  /** How to borrow space from non-adjacent panels when the immediate neighbor is at its min/max.
   * `'nearest'` takes from the nearest panel in the drag direction first.
   * `'equal'` distributes equally among all panels in the drag direction.
   * A function receives sizes, panels, handleIndex and delta, and returns new sizes.
   * When not set, only the two adjacent panels are affected. */
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn;
  /** Keyboard step size in percentage, `1` by default */
  step?: number;
  /** Shift+arrow step size in percentage, `10` by default */
  shiftStep?: number;
  /** Text direction for keyboard nav, `'ltr'` by default */
  dir?: 'ltr' | 'rtl';
  /** Enable/disable the hook, `true` by default */
  enabled?: boolean;
}

export interface UseSplitterReturnValue<T extends HTMLElement = any> {
  /** Ref callback for the container element */
  ref: React.RefCallback<T | null>;
  /** Current panel sizes as percentages */
  sizes: number[];
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
    'data-active': boolean | undefined;
    'data-orientation': 'horizontal' | 'vertical';
  };
  /** Programmatically set sizes */
  setSizes: (sizes: number[]) => void;
  /** Collapse a panel */
  collapse: (panelIndex: number) => void;
  /** Expand a collapsed panel */
  expand: (panelIndex: number) => void;
  /** Toggle collapse of a panel */
  toggleCollapse: (panelIndex: number) => void;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getMin(panel: UseSplitterPanel): number {
  return panel.min ?? 0;
}

function getMax(panel: UseSplitterPanel): number {
  return panel.max ?? 100;
}

function getCollapseThreshold(panel: UseSplitterPanel): number {
  return panel.collapseThreshold ?? getMin(panel);
}

interface SplitterInternalState {
  isDragging: boolean;
  handleIndex: number;
  startPointer: number;
  containerSize: number;
  startSizes: number[];
  preCollapseSizes: number[];
}

function createInitialInternalState(): SplitterInternalState {
  return {
    isDragging: false,
    handleIndex: -1,
    startPointer: 0,
    containerSize: 0,
    startSizes: [],
    preCollapseSizes: [],
  };
}

function checkCollapse(
  sizes: number[],
  panels: UseSplitterPanel[],
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
  panels: UseSplitterPanel[],
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
  panels: UseSplitterPanel[],
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
  panels: UseSplitterPanel[],
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
  panels: UseSplitterPanel[],
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
    enabled = true,
  } = options;

  const defaultSizes = panels.map((p) => p.defaultSize);

  const [currentSizes, setCurrentSizes] = useUncontrolled({
    value: controlledSizes,
    defaultValue: defaultSizes,
    finalValue: defaultSizes,
    onChange: onSizeChange,
  });

  const [activeHandle, setActiveHandle] = useState(-1);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const internalStateRef = useRef<SplitterInternalState>(createInitialInternalState());
  const containerRef = useRef<T | null>(null);
  const documentControllerRef = useRef<AbortController | null>(null);
  const frameRef = useRef(0);
  const currentSizesRef = useRef(currentSizes);
  currentSizesRef.current = currentSizes;

  const preCollapseSizesRef = useRef<number[]>(defaultSizes);

  const collapsed = currentSizes.map((size) => size === 0);

  const updateSizes = useCallback(
    (newSizes: number[]) => {
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
      const sizes = currentSizesRef.current;
      if (sizes[panelIndex] === 0) {
        return;
      }

      preCollapseSizesRef.current = [...sizes];
      const newSizes = [...sizes];
      const freedSize = newSizes[panelIndex];
      newSizes[panelIndex] = 0;

      const neighbor = panelIndex === 0 ? 1 : panelIndex - 1;
      newSizes[neighbor] += freedSize;

      updateSizes(newSizes);
      onCollapseChange?.(panelIndex, true);
    },
    [panels, updateSizes, onCollapseChange]
  );

  const expandPanel = useCallback(
    (panelIndex: number) => {
      if (!panels[panelIndex]?.collapsible) {
        return;
      }
      const sizes = currentSizesRef.current;
      if (sizes[panelIndex] !== 0) {
        return;
      }

      const preCollapse = preCollapseSizesRef.current;
      const restoreSize = preCollapse[panelIndex] || panels[panelIndex].defaultSize;
      const newSizes = [...sizes];

      const neighbor = panelIndex === 0 ? 1 : panelIndex - 1;
      const available = newSizes[neighbor] - getMin(panels[neighbor]);
      const actualRestore = Math.min(restoreSize, available);

      newSizes[panelIndex] = actualRestore;
      newSizes[neighbor] -= actualRestore;

      updateSizes(newSizes);
      onCollapseChange?.(panelIndex, false);
    },
    [panels, updateSizes, onCollapseChange]
  );

  const toggleCollapsePanel = useCallback(
    (panelIndex: number) => {
      if (currentSizesRef.current[panelIndex] === 0) {
        expandPanel(panelIndex);
      } else {
        collapsePanel(panelIndex);
      }
    },
    [collapsePanel, expandPanel]
  );

  const containerRefCallback: React.RefCallback<T | null> = useCallback((node) => {
    containerRef.current = node;
  }, []);

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

          const rect = container.getBoundingClientRect();
          const isHorizontal = (optionsRef.current.orientation ?? 'horizontal') === 'horizontal';
          const containerSize = isHorizontal ? rect.width : rect.height;
          const pointerPos = isHorizontal ? event.clientX : event.clientY;

          const s = internalStateRef.current;
          s.isDragging = true;
          s.handleIndex = handleIndex;
          s.startPointer = pointerPos;
          s.containerSize = containerSize;
          s.startSizes = [...currentSizesRef.current];
          s.preCollapseSizes = [...preCollapseSizesRef.current];

          setActiveHandle(handleIndex);
          document.body.style.userSelect = 'none';
          document.body.style.webkitUserSelect = 'none';
          document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';

          optionsRef.current.onResizeStart?.(handleIndex);

          documentControllerRef.current?.abort();
          documentControllerRef.current = new AbortController();
          const sig = documentControllerRef.current.signal;

          document.addEventListener('pointermove', onPointerMove, { signal: sig });
          document.addEventListener('pointerup', onPointerUp, { signal: sig });
          document.addEventListener('pointercancel', onPointerUp, { signal: sig });
        };

        const flushResize = (pointerEvent: PointerEvent) => {
          const s = internalStateRef.current;
          const isHorizontal = (optionsRef.current.orientation ?? 'horizontal') === 'horizontal';
          const isRtl = isHorizontal && optionsRef.current.dir === 'rtl';
          const pointerPos = isHorizontal ? pointerEvent.clientX : pointerEvent.clientY;
          const pixelDelta = pointerPos - s.startPointer;
          const percentDelta = ((isRtl ? -pixelDelta : pixelDelta) / s.containerSize) * 100;

          const opts = optionsRef.current;
          const newSizes = applyConstraints(
            s.startSizes,
            opts.panels,
            s.handleIndex,
            percentDelta,
            opts.redistribute
          );

          const prevSizes = currentSizesRef.current;
          const beforeWasCollapsed = prevSizes[s.handleIndex] === 0;
          const afterWasCollapsed = prevSizes[s.handleIndex + 1] === 0;
          const beforeNowCollapsed = newSizes[s.handleIndex] === 0;
          const afterNowCollapsed = newSizes[s.handleIndex + 1] === 0;

          if (!beforeWasCollapsed && beforeNowCollapsed) {
            preCollapseSizesRef.current = [...s.startSizes];
            opts.onCollapseChange?.(s.handleIndex, true);
          } else if (beforeWasCollapsed && !beforeNowCollapsed) {
            opts.onCollapseChange?.(s.handleIndex, false);
          }

          if (!afterWasCollapsed && afterNowCollapsed) {
            preCollapseSizesRef.current = [...s.startSizes];
            opts.onCollapseChange?.(s.handleIndex + 1, true);
          } else if (afterWasCollapsed && !afterNowCollapsed) {
            opts.onCollapseChange?.(s.handleIndex + 1, false);
          }

          currentSizesRef.current = newSizes;
          setCurrentSizes(newSizes);
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
      const beforeSize = currentSizes[index] ?? 0;
      const beforePanel = panels[index];
      const afterPanel = panels[index + 1];

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

          let delta = 0;
          const currentStep = event.shiftKey ? shiftStep : step;

          switch (event.key) {
            case 'ArrowLeft': {
              if (isHorizontal) {
                delta = isRtl ? currentStep : -currentStep;
              }
              break;
            }
            case 'ArrowRight': {
              if (isHorizontal) {
                delta = isRtl ? -currentStep : currentStep;
              }
              break;
            }
            case 'ArrowUp': {
              if (!isHorizontal) {
                delta = -currentStep;
              }
              break;
            }
            case 'ArrowDown': {
              if (!isHorizontal) {
                delta = currentStep;
              }
              break;
            }
            case 'Home': {
              delta = -(currentSizes[index] - getMin(beforePanel));
              break;
            }
            case 'End': {
              delta = getMax(beforePanel) - currentSizes[index];
              break;
            }
            case 'Enter': {
              const beforeCollapsible = beforePanel?.collapsible;
              const afterCollapsible = afterPanel?.collapsible;

              if (beforeCollapsible && currentSizes[index] <= currentSizes[index + 1]) {
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
            const newSizes = applyConstraints(currentSizes, panels, index, delta, redistribute);
            const beforeWas = currentSizes[index] === 0;
            const afterWas = currentSizes[index + 1] === 0;
            const beforeNow = newSizes[index] === 0;
            const afterNow = newSizes[index + 1] === 0;

            if (!beforeWas && beforeNow) {
              preCollapseSizesRef.current = [...currentSizes];
              onCollapseChange?.(index, true);
            } else if (beforeWas && !beforeNow) {
              onCollapseChange?.(index, false);
            }

            if (!afterWas && afterNow) {
              preCollapseSizesRef.current = [...currentSizes];
              onCollapseChange?.(index + 1, true);
            } else if (afterWas && !afterNow) {
              onCollapseChange?.(index + 1, false);
            }

            updateSizes(newSizes);
          }
        },
        'data-active': activeHandle === index || undefined,
        'data-orientation': orient,
      };
    },
    [
      orientation,
      currentSizes,
      panels,
      enabled,
      dir,
      step,
      shiftStep,
      activeHandle,
      redistribute,
      getHandleRefCallback,
      toggleCollapsePanel,
      updateSizes,
      onCollapseChange,
    ]
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
  };
}

export namespace useSplitter {
  export type Panel = UseSplitterPanel;
  export type Options = UseSplitterOptions;
  export type RedistributeInput = UseSplitterRedistributeInput;
  export type RedistributeFn = UseSplitterRedistributeFn;
  export type ReturnValue<T extends HTMLElement = any> = UseSplitterReturnValue<T>;
}
