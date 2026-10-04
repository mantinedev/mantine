import type { AppShellResizeSection } from '../AppShell.types';

export interface ResizeSectionConfig {
  /** Axis the pointer moves along to resize the section */
  axis: 'horizontal' | 'vertical';

  /** `aria-orientation` of the separator element */
  orientation: 'vertical' | 'horizontal';

  /** CSS variable that controls the section size */
  sizeVariable: string;

  /** CSS variable that controls the space reserved for the section */
  offsetVariable: string;

  /** CSS variable that controls the grid track size in `mode="static"` */
  gridWidthVariable?: string;

  /** CSS variable that controls whether the resize handle is displayed */
  handleDisplayVariable: string;

  /** CSS variable that exposes a safe-area inset baked into the section's measured size, if any */
  safeAreaVariable?: string;

  /** `1` when moving towards the end of the axis grows the section, `-1` otherwise */
  sign: 1 | -1;
}

export const RESIZE_SECTIONS: Record<AppShellResizeSection, ResizeSectionConfig> = {
  navbar: {
    axis: 'horizontal',
    orientation: 'vertical',
    sizeVariable: '--app-shell-navbar-width',
    offsetVariable: '--app-shell-navbar-offset',
    gridWidthVariable: '--app-shell-navbar-grid-width',
    handleDisplayVariable: '--app-shell-navbar-resize-handle-display',
    sign: 1,
  },
  aside: {
    axis: 'horizontal',
    orientation: 'vertical',
    sizeVariable: '--app-shell-aside-width',
    offsetVariable: '--app-shell-aside-offset',
    gridWidthVariable: '--app-shell-aside-grid-width',
    handleDisplayVariable: '--app-shell-aside-resize-handle-display',
    sign: -1,
  },
  header: {
    axis: 'vertical',
    orientation: 'horizontal',
    sizeVariable: '--app-shell-header-height',
    offsetVariable: '--app-shell-header-offset',
    handleDisplayVariable: '--app-shell-header-resize-handle-display',
    sign: 1,
  },
  footer: {
    axis: 'vertical',
    orientation: 'horizontal',
    sizeVariable: '--app-shell-footer-height',
    offsetVariable: '--app-shell-footer-offset',
    handleDisplayVariable: '--app-shell-footer-resize-handle-display',
    safeAreaVariable: '--app-shell-footer-safe-area',
    sign: -1,
  },
};

export const RESIZE_SECTION_NAMES = Object.keys(RESIZE_SECTIONS) as AppShellResizeSection[];

interface GetResizeDeltaInput {
  section: AppShellResizeSection;
  deltaX: number;
  deltaY: number;
  dir: 'ltr' | 'rtl';
}

export function getResizeDelta({ section, deltaX, deltaY, dir }: GetResizeDeltaInput) {
  const config = RESIZE_SECTIONS[section];

  if (config.axis === 'vertical') {
    return deltaY * config.sign;
  }

  return deltaX * config.sign * (dir === 'rtl' ? -1 : 1);
}
