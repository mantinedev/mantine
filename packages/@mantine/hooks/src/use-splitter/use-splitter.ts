import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';
import { useLatestRef } from '../utils';

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
  min: number;
  /** Resolved maximum size */
  max: number;
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
  /** Controlled sizes, each value keeps the unit it was declared in. Must have one value per panel. */
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
  /** Text direction for pointer drag and keyboard navigation, read from the container's computed `direction` by default */
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
  /** Whether sizes are tracked in pixels because any pane size, `min`, `max`, `step`, `shiftStep`
   * or `collapseThreshold` uses a fixed `px`/`rem` unit */
  pixelMode: boolean;
  /** Whether each panel is collapsed: `true` for a `collapsible` panel whose size is `0` */
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
  /** Returns flex styles for the pane at the given index, resolved from its current size and unit */
  getPaneStyle: (index: number) => React.CSSProperties;
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
const EPSILON = 1e-6;

function isFixedSize(size: SplitterPaneSize | undefined): boolean {
  return typeof size === 'string' && (PX_RE.test(size) || REM_RE.test(size));
}

function sizeMagnitude(size: SplitterPaneSize): number {
  return typeof size === 'number' ? size : parseFloat(size);
}

function isCollapsedPane(
  panel: { collapsible?: boolean } | undefined,
  size: SplitterPaneSize | undefined
): boolean {
  return !!panel?.collapsible && size != null && sizeMagnitude(size) === 0;
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

function getPaneFlexStyle(size: SplitterPaneSize, pixelMode: boolean): React.CSSProperties {
  const magnitude = sizeMagnitude(size);

  if (!pixelMode) {
    return { flexBasis: `${magnitude}%` };
  }

  if (isFixedSize(size)) {
    return { flexGrow: 0, flexShrink: 1, flexBasis: size as string };
  }

  return { flexGrow: magnitude, flexShrink: 1, flexBasis: 0 };
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

/** Down-scaling factor applied to fixed panes when their combined pixel size overflows the
 * container, so they shrink to fit (matching `resolveWorkingSizes`). Returns `1` when nothing
 * overflows or the layout is not in pixel mode. Encoders divide by this to invert the scaling and
 * persist the original absolute sizes instead of the shrunk-to-fit ones. */
function getFixedScale(
  sizes: SplitterPaneSize[],
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): number {
  if (!pixelMode) {
    return 1;
  }

  let fixedTotal = 0;
  sizes.forEach((size) => {
    if (isFixedSize(size)) {
      fixedTotal += resolveSize(size, true, containerPx, rootFontSize);
    }
  });

  return fixedTotal > containerPx && fixedTotal > 0 ? containerPx / fixedTotal : 1;
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
  const fixedScale = getFixedScale(sizes, pixelMode, containerPx, rootFontSize);

  return sizes.map((size) => {
    if (isFixedSize(size)) {
      return resolveSize(size, true, containerPx, rootFontSize) * fixedScale;
    }
    return flexibleWeight > 0 ? (sizeMagnitude(size) / flexibleWeight) * leftover : 0;
  });
}

interface SplitterResolution {
  pixelMode: boolean;
  containerPx: number;
  rootFontSize: number;
  raw: SplitterPaneSize[];
  working: number[];
  panels: UseSplitterResolvedPanel[];
  collapsed: boolean[];
}

function resolvePanel(
  panel: UseSplitterPanel,
  defaultSize: number,
  pixelMode: boolean,
  containerPx: number,
  rootFontSize: number
): UseSplitterResolvedPanel {
  return {
    defaultSize,
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

function createResolution(
  options: UseSplitterOptions,
  raw: SplitterPaneSize[],
  containerPx: number,
  rootFontSize: number
): SplitterResolution {
  const pixelMode = detectPixelMode(options);
  const defaults = resolveWorkingSizes(
    options.panels.map((panel) => panel.defaultSize),
    pixelMode,
    containerPx,
    rootFontSize
  );

  return {
    pixelMode,
    containerPx,
    rootFontSize,
    raw,
    working: resolveWorkingSizes(raw, pixelMode, containerPx, rootFontSize),
    panels: options.panels.map((panel, index) =>
      resolvePanel(panel, defaults[index], pixelMode, containerPx, rootFontSize)
    ),
    collapsed: options.panels.map((panel, index) => isCollapsedPane(panel, raw[index])),
  };
}

function encodeFixedSize(
  value: number,
  original: SplitterPaneSize,
  rootFontSize: number,
  fixedScale: number
): SplitterPaneSize {
  const absolute = fixedScale > 0 ? value / fixedScale : value;
  if (REM_RE.test(original as string)) {
    return `${rootFontSize > 0 ? absolute / rootFontSize : 0}rem`;
  }
  return `${absolute}px`;
}

function encodeFlexibleSize(
  value: number,
  original: SplitterPaneSize,
  pixelMode: boolean,
  containerPx: number
): SplitterPaneSize {
  const isPercentString = typeof original === 'string' && PERCENT_RE.test(original);

  if (pixelMode && containerPx <= 0) {
    return original;
  }

  const percent = pixelMode ? (value / containerPx) * 100 : value;
  return isPercentString ? `${percent}%` : percent;
}

/** Encodes working sizes back to raw sizes, keeping the unit each pane was declared in. Fixed panes
 * that did not change keep their raw value. Flexible panes share one weight scale (percent of the
 * container), so whenever any flexible pane changes, all flexible panes are re-encoded on that scale –
 * otherwise an untouched pane would keep a weight from another scale and move. When fixed panes
 * overflow the container they render down-scaled, so their working sizes are scaled back up to
 * absolute sizes. If the change instead clears the overflow, every pane is encoded from its current
 * working size so untouched panes do not jump back to their over-sized or stale values. */
function encodeWorkingSizes(next: number[], resolution: SplitterResolution): SplitterPaneSize[] {
  const { raw, working, pixelMode, containerPx, rootFontSize } = resolution;
  const fixedScale = getFixedScale(raw, pixelMode, containerPx, rootFontSize);
  const changed = (index: number) => Math.abs(next[index] - working[index]) > EPSILON;

  let fixedWorkingSum = 0;
  next.forEach((value, index) => {
    if (isFixedSize(raw[index])) {
      fixedWorkingSum += value;
    }
  });
  const overflowCleared = fixedScale < 1 && fixedWorkingSum < containerPx - EPSILON;
  const encodeScale = overflowCleared ? 1 : fixedScale;
  const flexibleChanged = next.some((_, index) => !isFixedSize(raw[index]) && changed(index));

  return next.map((value, index) => {
    if (isFixedSize(raw[index])) {
      return overflowCleared || changed(index)
        ? encodeFixedSize(value, raw[index], rootFontSize, encodeScale)
        : raw[index];
    }

    return overflowCleared || flexibleChanged
      ? encodeFlexibleSize(value, raw[index], pixelMode, containerPx)
      : raw[index];
  });
}

function zeroSize(original: SplitterPaneSize): SplitterPaneSize {
  return typeof original === 'number'
    ? 0
    : (original.replace(/^-?[\d.]+/, '0') as SplitterPaneSize);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function restoreBodyStyles() {
  document.body.style.userSelect = '';
  document.body.style.webkitUserSelect = '';
  document.body.style.cursor = '';
}

function getCollapseThreshold(panel: UseSplitterResolvedPanel): number {
  return panel.collapseThreshold ?? panel.min;
}

function getNeighborOrder(panelIndex: number, count: number): number[] {
  const order: number[] = [];
  for (let distance = 1; distance < count; distance += 1) {
    if (panelIndex - distance >= 0) {
      order.push(panelIndex - distance);
    }
    if (panelIndex + distance < count) {
      order.push(panelIndex + distance);
    }
  }
  return order;
}

function sizesEqual(a: SplitterPaneSize[], b: SplitterPaneSize[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function getAdjacentRequests(sizes: number[], handleIndex: number, delta: number) {
  return [
    { index: handleIndex, receiver: handleIndex + 1, requested: sizes[handleIndex] + delta },
    { index: handleIndex + 1, receiver: handleIndex, requested: sizes[handleIndex + 1] - delta },
  ];
}

function snapCollapse(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  delta: number
): number[] | null {
  for (const { index, receiver, requested } of getAdjacentRequests(sizes, handleIndex, delta)) {
    const panel = panels[index];
    if (
      panel.collapsible &&
      !collapsed[index] &&
      requested < sizes[index] &&
      requested < getCollapseThreshold(panel)
    ) {
      const result = [...sizes];
      const freed = result[index];
      result[index] = 0;
      const order = [
        receiver,
        ...getNeighborOrder(index, result.length).filter((other) => other !== receiver),
      ];
      if (moveSpace(result, panels, collapsed, order, freed, 'give') >= freed - EPSILON) {
        return result;
      }
    }
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
  const effectiveBeforeMax = Math.min(panels[beforeIdx].max, total - panels[afterIdx].min);
  const effectiveBeforeMin = Math.max(panels[beforeIdx].min, total - panels[afterIdx].max);
  const newBefore = clamp(result[beforeIdx] + delta, effectiveBeforeMin, effectiveBeforeMax);
  result[beforeIdx] = newBefore;
  result[afterIdx] = total - newBefore;
  return result;
}

function takeNearest(
  result: number[],
  panels: UseSplitterResolvedPanel[],
  donors: number[],
  wanted: number
): number {
  let taken = 0;
  for (const index of donors) {
    if (taken >= wanted) {
      break;
    }
    const take = Math.min(Math.max(0, result[index] - panels[index].min), wanted - taken);
    result[index] -= take;
    taken += take;
  }
  return taken;
}

function takeEqual(
  result: number[],
  panels: UseSplitterResolvedPanel[],
  donors: number[],
  wanted: number
): number {
  let active = donors.filter((index) => result[index] > panels[index].min);
  let remaining = wanted;

  while (remaining > 0.001 && active.length > 0) {
    const perDonor = remaining / active.length;
    const next: number[] = [];

    for (const index of active) {
      const canGive = result[index] - panels[index].min;
      const take = Math.min(canGive, perDonor);
      result[index] -= take;
      remaining -= take;
      if (canGive > perDonor + 0.001) {
        next.push(index);
      }
    }

    if (next.length === active.length) {
      break;
    }
    active = next;
  }

  return wanted - remaining;
}

function applyRedistribute(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  handleIndex: number,
  delta: number,
  strategy: 'nearest' | 'equal'
): number[] {
  const result = [...sizes];
  if (delta === 0) {
    return result;
  }

  const growIdx = delta > 0 ? handleIndex : handleIndex + 1;
  const donors: number[] = [];
  if (delta > 0) {
    for (let i = handleIndex + 1; i < result.length; i += 1) {
      donors.push(i);
    }
  } else {
    for (let i = handleIndex; i >= 0; i -= 1) {
      donors.push(i);
    }
  }

  const growPanel = panels[growIdx];
  const wanted = clamp(
    Math.abs(delta),
    growPanel.min - result[growIdx],
    growPanel.max - result[growIdx]
  );
  if (wanted <= 0) {
    return result;
  }

  const taken = (strategy === 'nearest' ? takeNearest : takeEqual)(result, panels, donors, wanted);
  if (result[growIdx] + taken < growPanel.min - EPSILON) {
    return [...sizes];
  }

  result[growIdx] += taken;
  return result;
}

function keepsAdjacentCollapsed(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  delta: number
): boolean {
  return getAdjacentRequests(sizes, handleIndex, delta).some(
    ({ index, requested }) =>
      collapsed[index] && (requested <= 0 || requested < getCollapseThreshold(panels[index]))
  );
}

function extendStepToOpenCollapsed(
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  delta: number
): number {
  const before = handleIndex;
  const after = handleIndex + 1;
  if (collapsed[before] && delta > 0) {
    return Math.max(delta, getCollapseThreshold(panels[before]));
  }
  if (collapsed[after] && delta < 0) {
    return Math.min(delta, -getCollapseThreshold(panels[after]));
  }
  return delta;
}

function moveHandleWithoutCollapse(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  delta: number,
  strategy: 'nearest' | 'equal' | undefined
): number[] {
  if (keepsAdjacentCollapsed(sizes, panels, collapsed, handleIndex, delta)) {
    return [...sizes];
  }

  const result = strategy
    ? applyRedistribute(sizes, panels, handleIndex, delta, strategy)
    : applyAdjacentOnly(sizes, panels, handleIndex, delta);

  const opens = [handleIndex, handleIndex + 1].filter(
    (index) => collapsed[index] && result[index] > 0
  );
  const breaksMin =
    opens.length > 0 &&
    result.some(
      (value, index) =>
        value < panels[index].min - EPSILON && (opens.includes(index) || value < sizes[index])
    );
  return breaksMin ? [...sizes] : result;
}

function applyConstraints(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  delta: number,
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn
): number[] {
  if (typeof redistribute === 'function') {
    return redistribute({ sizes: [...sizes], panels, handleIndex, delta });
  }

  if (keepsAdjacentCollapsed(sizes, panels, collapsed, handleIndex, delta)) {
    return [...sizes];
  }

  return (
    snapCollapse(sizes, panels, collapsed, handleIndex, delta) ??
    moveHandleWithoutCollapse(sizes, panels, collapsed, handleIndex, delta, redistribute)
  );
}

function moveHandleToEnd(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  direction: -1 | 1,
  strategy: 'nearest' | 'equal' | undefined
): number[] {
  const total = sizes.reduce((acc, value) => acc + value, 0);
  return moveHandleWithoutCollapse(
    sizes,
    panels,
    collapsed,
    handleIndex,
    direction * total,
    strategy
  );
}

function getHandleRange(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  handleIndex: number,
  redistribute: UseSplitterOptions['redistribute']
): { min: number; max: number } {
  const current = sizes[handleIndex] ?? 0;
  const before = panels[handleIndex];

  if (!before || !panels[handleIndex + 1]) {
    return { min: current, max: current };
  }

  if (typeof redistribute === 'function') {
    return { min: Math.min(before.min, current), max: Math.max(before.max, current) };
  }

  const min = moveHandleToEnd(sizes, panels, collapsed, handleIndex, -1, redistribute)[handleIndex];
  const max = moveHandleToEnd(sizes, panels, collapsed, handleIndex, 1, redistribute)[handleIndex];
  return { min: Math.min(min, current), max: Math.max(max, current) };
}

function moveSpace(
  result: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[],
  indices: number[],
  amount: number,
  direction: 'give' | 'take'
): number {
  let moved = 0;
  for (const index of indices) {
    if (moved >= amount - EPSILON) {
      break;
    }
    if (collapsed[index]) {
      continue;
    }
    const room =
      direction === 'give' ? panels[index].max - result[index] : result[index] - panels[index].min;
    const step = Math.min(Math.max(0, room), amount - moved);
    result[index] += direction === 'give' ? step : -step;
    moved += step;
  }
  return moved;
}

function fitToConstraints(
  sizes: number[],
  panels: UseSplitterResolvedPanel[],
  collapsed: boolean[]
): number[] {
  const result = [...sizes];
  let excess = 0;

  result.forEach((value, index) => {
    if (collapsed[index]) {
      return;
    }
    const clamped = clamp(value, panels[index].min, panels[index].max);
    excess += value - clamped;
    result[index] = clamped;
  });

  for (let pass = 0; pass < result.length && Math.abs(excess) > EPSILON; pass += 1) {
    const candidates = result
      .map((_, index) => index)
      .filter(
        (index) =>
          !collapsed[index] &&
          (excess > 0
            ? result[index] < panels[index].max - EPSILON
            : result[index] > panels[index].min + EPSILON)
      );
    if (candidates.length === 0) {
      break;
    }

    const share = excess / candidates.length;
    candidates.forEach((index) => {
      const next = clamp(result[index] + share, panels[index].min, panels[index].max);
      excess -= next - result[index];
      result[index] = next;
    });
  }

  return result;
}

interface CollapseRestore {
  raw: SplitterPaneSize[];
  receivers: number[];
}

interface SplitterInternalState {
  isDragging: boolean;
  moved: boolean;
  handleIndex: number;
  pointerId: number;
  isRtl: boolean;
  startPointer: number;
  resolution: SplitterResolution | null;
  lastSizes: SplitterPaneSize[] | null;
}

function createInitialInternalState(): SplitterInternalState {
  return {
    isDragging: false,
    moved: false,
    handleIndex: -1,
    pointerId: -1,
    isRtl: false,
    startPointer: 0,
    resolution: null,
    lastSizes: null,
  };
}

export function useSplitter<T extends HTMLElement = any>(
  options: UseSplitterOptions
): UseSplitterReturnValue<T> {
  const { panels, orientation = 'horizontal', sizes: controlledSizes, onSizeChange } = options;

  const pixelMode = detectPixelMode(options);

  const defaultSizes = panels.map((panel) => panel.defaultSize);

  const [storedSizes, setCurrentSizes, isControlled] = useUncontrolled<SplitterPaneSize[]>({
    value: controlledSizes,
    defaultValue: defaultSizes,
    finalValue: defaultSizes,
    onChange: onSizeChange,
  });

  const currentSizes =
    !isControlled && storedSizes.length !== panels.length ? defaultSizes : storedSizes;

  const [activeHandle, setActiveHandle] = useState(-1);
  const [containerPx, setContainerPx] = useState(0);

  const optionsRef = useLatestRef(options);

  const internalStateRef = useRef<SplitterInternalState>(createInitialInternalState());
  const containerNodeRef = useRef<T | null>(null);
  const containerPxRef = useRef(0);
  const rootFontSizeRef = useRef(16);
  const documentControllerRef = useRef<AbortController | null>(null);
  const frameRef = useRef(0);
  const currentSizesRef = useLatestRef(currentSizes);
  const renderedSizesRef = useLatestRef(currentSizes);
  const isControlledRef = useLatestRef(isControlled);
  const collapseRestoreRef = useRef<Map<number, CollapseRestore>>(new Map());
  const handleNodesRef = useRef<Map<number, HTMLElement>>(new Map());

  const collapsed = panels.map((panel, index) => isCollapsedPane(panel, currentSizes[index]));

  const measureContainer = useCallback(() => {
    const node = containerNodeRef.current;
    if (!node) {
      return 0;
    }
    const isHorizontal = (optionsRef.current.orientation ?? 'horizontal') === 'horizontal';
    const getSize = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return isHorizontal ? rect.width : rect.height;
    };

    let size = getSize(node);
    handleNodesRef.current.forEach((handle) => {
      const position = getComputedStyle(handle).position;
      if (position !== 'absolute' && position !== 'fixed') {
        size -= getSize(handle);
      }
    });
    return Math.max(0, size);
  }, []);

  const getDirection = useCallback((): 'ltr' | 'rtl' => {
    const { dir } = optionsRef.current;
    if (dir) {
      return dir;
    }
    const node = containerNodeRef.current;
    return node && getComputedStyle(node).direction === 'rtl' ? 'rtl' : 'ltr';
  }, []);

  const createCurrentResolution = useCallback((): SplitterResolution => {
    rootFontSizeRef.current = getRootFontSize();
    return createResolution(
      optionsRef.current,
      currentSizesRef.current,
      measureContainer() || containerPxRef.current,
      rootFontSizeRef.current
    );
  }, [measureContainer]);

  const updateSizes = useCallback(
    (newSizes: SplitterPaneSize[]) => {
      currentSizesRef.current = newSizes;
      if (isControlledRef.current) {
        queueMicrotask(() => {
          currentSizesRef.current = renderedSizesRef.current;
        });
      }
      setCurrentSizes(newSizes);
    },
    [setCurrentSizes]
  );

  const commitSizes = useCallback(
    (newSizes: SplitterPaneSize[]) => {
      if (!sizesEqual(newSizes, currentSizesRef.current)) {
        updateSizes(newSizes);
      }
    },
    [updateSizes]
  );

  useIsomorphicEffect(() => {
    collapseRestoreRef.current.clear();
  }, [panels.length]);

  const emitCollapseTransitions = useCallback(
    (
      resolution: SplitterResolution,
      next: number[],
      nextRaw: SplitterPaneSize[],
      prev: SplitterPaneSize[] = resolution.raw
    ) => {
      const onChange = optionsRef.current.onCollapseChange;
      const receivers = next
        .map((_, index) => index)
        .filter((index) => next[index] > resolution.working[index] + EPSILON);
      resolution.panels.forEach((panel, index) => {
        const wasCollapsed = isCollapsedPane(panel, prev[index]);
        const nowCollapsed = isCollapsedPane(panel, nextRaw[index]);
        if (!wasCollapsed && nowCollapsed) {
          const snapshot = resolution.collapsed[index] ? prev : resolution.raw;
          collapseRestoreRef.current.set(index, { raw: [...snapshot], receivers });
          onChange?.(index, true);
        } else if (wasCollapsed && !nowCollapsed) {
          collapseRestoreRef.current.delete(index);
          onChange?.(index, false);
        }
      });
    },
    []
  );

  const collapsePanel = useCallback(
    (panelIndex: number) => {
      if (!optionsRef.current.panels[panelIndex]?.collapsible) {
        return;
      }
      const resolution = createCurrentResolution();
      const { working } = resolution;
      if (resolution.collapsed[panelIndex]) {
        return;
      }

      const next = [...working];
      const freed = next[panelIndex];
      next[panelIndex] = 0;

      const moved = moveSpace(
        next,
        resolution.panels,
        resolution.collapsed,
        getNeighborOrder(panelIndex, next.length),
        freed,
        'give'
      );
      if (moved < freed - EPSILON) {
        return;
      }

      const nextRaw = encodeWorkingSizes(next, resolution);
      nextRaw[panelIndex] = zeroSize(resolution.raw[panelIndex]);
      emitCollapseTransitions(resolution, next, nextRaw);
      commitSizes(nextRaw);
    },
    [createCurrentResolution, emitCollapseTransitions, commitSizes]
  );

  const expandPanel = useCallback(
    (panelIndex: number) => {
      if (!optionsRef.current.panels[panelIndex]?.collapsible) {
        return;
      }
      const resolution = createCurrentResolution();
      if (!resolution.collapsed[panelIndex]) {
        return;
      }

      const panel = resolution.panels[panelIndex];
      const restore = collapseRestoreRef.current.get(panelIndex);
      const saved = restore
        ? resolveWorkingSizes(
            restore.raw,
            resolution.pixelMode,
            resolution.containerPx,
            resolution.rootFontSize
          )[panelIndex]
        : 0;
      const target = clamp(saved > 0 ? saved : panel.defaultSize, panel.min, panel.max);

      const donors = [
        ...new Set([
          ...(restore?.receivers ?? []),
          ...getNeighborOrder(panelIndex, resolution.working.length),
        ]),
      ];
      const next = [...resolution.working];
      const taken = moveSpace(
        next,
        resolution.panels,
        resolution.collapsed,
        donors,
        target,
        'take'
      );

      if (taken <= EPSILON || taken < panel.min - EPSILON) {
        return;
      }

      next[panelIndex] = taken;
      const nextRaw = encodeWorkingSizes(next, resolution);
      emitCollapseTransitions(resolution, next, nextRaw);
      commitSizes(nextRaw);
    },
    [createCurrentResolution, emitCollapseTransitions, commitSizes]
  );

  const toggleCollapsePanel = useCallback(
    (panelIndex: number) => {
      if (
        isCollapsedPane(optionsRef.current.panels[panelIndex], currentSizesRef.current[panelIndex])
      ) {
        expandPanel(panelIndex);
      } else {
        collapsePanel(panelIndex);
      }
    },
    [collapsePanel, expandPanel]
  );

  const reset = useCallback(
    (handleIndex: number) => {
      const resolution = createCurrentResolution();
      const { working, panels: resolvedPanels } = resolution;

      const beforeIdx = handleIndex;
      const afterIdx = handleIndex + 1;
      if (beforeIdx < 0 || afterIdx >= working.length) {
        return;
      }

      const total = working[beforeIdx] + working[afterIdx];
      const before = resolvedPanels[beforeIdx];
      const after = resolvedPanels[afterIdx];
      if (
        Math.max(before.min, total - after.max) >
        Math.min(before.max, total - after.min) + EPSILON
      ) {
        return;
      }

      const defBefore = resolvedPanels[beforeIdx].defaultSize;
      const defTotal = defBefore + resolvedPanels[afterIdx].defaultSize;
      const targetBefore = defTotal === 0 ? total / 2 : total * (defBefore / defTotal);

      const next = applyAdjacentOnly(
        working,
        resolvedPanels,
        beforeIdx,
        targetBefore - working[beforeIdx]
      );
      const nextRaw = encodeWorkingSizes(next, resolution);
      emitCollapseTransitions(resolution, next, nextRaw);
      commitSizes(nextRaw);
    },
    [createCurrentResolution, emitCollapseTransitions, commitSizes]
  );

  const containerRefCallback: React.RefCallback<T | null> = useCallback((node) => {
    containerNodeRef.current = node;
  }, []);

  useEffect(() => {
    if (!pixelMode || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const node = containerNodeRef.current;
    if (!node) {
      return undefined;
    }

    let frame = 0;
    const update = () => {
      const size = measureContainer();
      rootFontSizeRef.current = getRootFontSize();
      containerPxRef.current = size;
      setContainerPx((prev) => (prev !== size ? size : prev));

      if (size <= 0 || internalStateRef.current.isDragging) {
        return;
      }

      const resolution = createResolution(
        optionsRef.current,
        currentSizesRef.current,
        size,
        rootFontSizeRef.current
      );
      const next = fitToConstraints(resolution.working, resolution.panels, resolution.collapsed);
      if (next.some((value, index) => Math.abs(value - resolution.working[index]) > 0.01)) {
        commitSizes(encodeWorkingSizes(next, resolution));
      }
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
  }, [pixelMode, orientation, commitSizes]);

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
          handleNodesRef.current.delete(handleIndex);
          return;
        }

        handleNodesRef.current.set(handleIndex, node);
        const elementController = new AbortController();
        handleElementControllers.current.set(handleIndex, elementController);

        const onPointerDown = (event: PointerEvent) => {
          const opts = optionsRef.current;
          const s = internalStateRef.current;
          if (
            opts.enabled === false ||
            event.button !== 0 ||
            s.isDragging ||
            !containerNodeRef.current
          ) {
            return;
          }

          const isHorizontal = (opts.orientation ?? 'horizontal') === 'horizontal';

          s.isDragging = true;
          s.moved = false;
          s.handleIndex = handleIndex;
          s.pointerId = event.pointerId;
          s.isRtl = isHorizontal && getDirection() === 'rtl';
          s.startPointer = isHorizontal ? event.clientX : event.clientY;
          s.resolution = createCurrentResolution();
          s.lastSizes = null;

          setActiveHandle(handleIndex);
          document.body.style.userSelect = 'none';
          document.body.style.webkitUserSelect = 'none';
          document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';

          documentControllerRef.current?.abort();
          documentControllerRef.current = new AbortController();
          const sig = documentControllerRef.current.signal;

          document.addEventListener('pointermove', onPointerMove, { signal: sig });
          document.addEventListener('pointerup', onPointerUp, { signal: sig });
          document.addEventListener('pointercancel', onPointerCancel, { signal: sig });
          node.addEventListener('lostpointercapture', onPointerCancel, { signal: sig });

          node.setPointerCapture?.(event.pointerId);
        };

        const flushResize = (pointerEvent: PointerEvent) => {
          const s = internalStateRef.current;
          const resolution = s.resolution;
          if (!resolution || !resolution.containerPx) {
            return;
          }
          const opts = optionsRef.current;
          const isHorizontal = (opts.orientation ?? 'horizontal') === 'horizontal';
          const pointerPos = isHorizontal ? pointerEvent.clientX : pointerEvent.clientY;
          const pixelDelta = (s.isRtl ? -1 : 1) * (pointerPos - s.startPointer);
          const delta = resolution.pixelMode
            ? pixelDelta
            : (pixelDelta / resolution.containerPx) * 100;

          if (!s.moved) {
            if (delta === 0) {
              return;
            }
            s.moved = true;
            opts.onResizeStart?.(s.handleIndex);
          }

          const newSizes =
            delta === 0
              ? resolution.working
              : applyConstraints(
                  resolution.working,
                  resolution.panels,
                  resolution.collapsed,
                  s.handleIndex,
                  delta,
                  opts.redistribute
                );

          const nextRaw = encodeWorkingSizes(newSizes, resolution);
          emitCollapseTransitions(
            resolution,
            newSizes,
            nextRaw,
            s.lastSizes ?? currentSizesRef.current
          );
          s.lastSizes = nextRaw;
          commitSizes(nextRaw);
        };

        const isDragPointer = (event: PointerEvent) => {
          const s = internalStateRef.current;
          return s.isDragging && event.pointerId === s.pointerId;
        };

        const endDrag = (event: PointerEvent | null) => {
          const s = internalStateRef.current;
          cancelAnimationFrame(frameRef.current);
          if (event) {
            flushResize(event);
          }

          s.isDragging = false;
          s.resolution = null;
          const finishedHandle = s.handleIndex;
          const finishedSizes = s.lastSizes ?? currentSizesRef.current;
          s.handleIndex = -1;
          s.lastSizes = null;

          setActiveHandle(-1);
          restoreBodyStyles();

          documentControllerRef.current?.abort();
          documentControllerRef.current = null;

          if (s.moved) {
            optionsRef.current.onResizeEnd?.(finishedHandle, [...finishedSizes]);
          }
        };

        const onPointerMove = (event: PointerEvent) => {
          if (!isDragPointer(event)) {
            return;
          }

          cancelAnimationFrame(frameRef.current);
          frameRef.current = requestAnimationFrame(() => {
            flushResize(event);
          });
        };

        const onPointerUp = (event: PointerEvent) => {
          if (isDragPointer(event)) {
            endDrag(event);
          }
        };

        const onPointerCancel = (event: PointerEvent) => {
          if (isDragPointer(event)) {
            endDrag(null);
          }
        };

        node.addEventListener('pointerdown', onPointerDown, {
          signal: elementController.signal,
        });
      };

      handleRefCallbacks.current.set(handleIndex, callback);
      return callback;
    },
    [createCurrentResolution, getDirection, emitCollapseTransitions, commitSizes]
  );

  const renderResolution = createResolution(
    options,
    currentSizes,
    containerPx,
    rootFontSizeRef.current
  );

  const getHandleProps = useCallback(
    (input: { index: number }) => {
      const { index } = input;
      const beforeSize = renderResolution.working[index] ?? 0;
      const range = getHandleRange(
        renderResolution.working,
        renderResolution.panels,
        renderResolution.collapsed,
        index,
        options.redistribute
      );

      return {
        ref: getHandleRefCallback(index),
        role: 'separator' as const,
        'aria-orientation':
          orientation === 'horizontal' ? ('vertical' as const) : ('horizontal' as const),
        'aria-valuenow': Math.round(beforeSize),
        'aria-valuemin': Math.round(range.min),
        'aria-valuemax': Math.round(range.max),
        tabIndex: 0,
        onKeyDown: (event: React.KeyboardEvent) => {
          const opts = optionsRef.current;
          if (opts.enabled === false) {
            return;
          }

          const isHorizontal = (opts.orientation ?? 'horizontal') === 'horizontal';
          const isRtl = getDirection() === 'rtl';

          const resolution = createCurrentResolution();
          const { working, panels: resolvedPanels, collapsed: resolvedCollapsed } = resolution;
          const liveBeforePanel = resolvedPanels[index];
          const liveAfterPanel = resolvedPanels[index + 1];

          let delta = 0;
          const currentStep = resolveSize(
            event.shiftKey ? (opts.shiftStep ?? 10) : (opts.step ?? 1),
            resolution.pixelMode,
            resolution.containerPx,
            resolution.rootFontSize
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
            case 'Home':
            case 'End': {
              event.preventDefault();
              const isHome = event.key === 'Home';
              let newSizes: number[];
              if (typeof opts.redistribute === 'function') {
                const range = getHandleRange(
                  working,
                  resolvedPanels,
                  resolvedCollapsed,
                  index,
                  opts.redistribute
                );
                const endDelta = (isHome ? range.min : range.max) - working[index];
                if (endDelta === 0) {
                  return;
                }
                newSizes = applyConstraints(
                  working,
                  resolvedPanels,
                  resolvedCollapsed,
                  index,
                  endDelta,
                  opts.redistribute
                );
              } else {
                newSizes = moveHandleToEnd(
                  working,
                  resolvedPanels,
                  resolvedCollapsed,
                  index,
                  isHome ? -1 : 1,
                  opts.redistribute
                );
                if (
                  isHome ? newSizes[index] >= working[index] : newSizes[index] <= working[index]
                ) {
                  return;
                }
              }
              const nextRaw = encodeWorkingSizes(newSizes, resolution);
              emitCollapseTransitions(resolution, newSizes, nextRaw);
              commitSizes(nextRaw);
              return;
            }
            case 'Enter': {
              const beforeCollapsible = liveBeforePanel?.collapsible;
              const afterCollapsible = liveAfterPanel?.collapsible;

              if (beforeCollapsible && working[index] <= working[index + 1]) {
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
            const newSizes = applyConstraints(
              working,
              resolvedPanels,
              resolvedCollapsed,
              index,
              extendStepToOpenCollapsed(resolvedPanels, resolvedCollapsed, index, delta),
              opts.redistribute
            );
            const nextRaw = encodeWorkingSizes(newSizes, resolution);
            emitCollapseTransitions(resolution, newSizes, nextRaw);
            commitSizes(nextRaw);
          }
        },
        onDoubleClick: () => {
          const opts = optionsRef.current;
          if (opts.enabled === false || opts.resetOnDoubleClick === false) {
            return;
          }
          reset(index);
        },
        'data-active': activeHandle === index || undefined,
        'data-orientation': orientation,
      };
    },
    [
      orientation,
      renderResolution,
      activeHandle,
      options.redistribute,
      createCurrentResolution,
      getDirection,
      getHandleRefCallback,
      toggleCollapsePanel,
      emitCollapseTransitions,
      commitSizes,
      reset,
    ]
  );

  const getPaneStyle = useCallback(
    (index: number) => getPaneFlexStyle(currentSizes[index], pixelMode),
    [currentSizes, pixelMode]
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
        restoreBodyStyles();
      }
    },
    []
  );

  return {
    ref: containerRefCallback,
    sizes: currentSizes,
    pixelMode,
    collapsed,
    activeHandle,
    getHandleProps,
    getPaneStyle,
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
