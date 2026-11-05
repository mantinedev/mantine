import type { MantineBreakpoint } from '../../core';

// Shared props of for Navbar, Aside, Header and Footer components
export interface AppShellCompoundProps {
  /** If set, component haves a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean | undefined;

  /** Sets `z-index`. Inherited from the `AppShell` by default. */
  zIndex?: React.CSSProperties['zIndex'];
}

export type AppShellSize = number | (string & {});

export interface AppShellResponsiveSize {
  base?: AppShellSize | undefined;
  xs?: AppShellSize | undefined;
  sm?: AppShellSize | undefined;
  md?: AppShellSize | undefined;
  lg?: AppShellSize | undefined;
  xl?: AppShellSize | undefined;
  [key: string]: AppShellSize | undefined;
}

export type AppShellMode = 'fixed' | 'static';

export interface AppShellNavbarConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: MantineBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean | undefined; mobile?: boolean | undefined } | undefined;
}

export interface AppShellAsideConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: MantineBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean | undefined; mobile?: boolean | undefined } | undefined;
}

export interface AppShellHeaderConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean | undefined;
  offset?: boolean | undefined;
}

export interface AppShellFooterConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean | undefined;
  offset?: boolean | undefined;
}

export type AppShellResizeSection = 'navbar' | 'aside' | 'header' | 'footer';

export type AppShellResizeSizes = Partial<Record<AppShellResizeSection, number | undefined>>;

export interface AppShellResizeSectionOptions {
  /** Minimum size, in the same units as the section `width`/`height` configuration @default 0 */
  min?: number | undefined;

  /** Maximum size, in the same units as the section `width`/`height` configuration @default viewport size */
  max?: number | undefined;

  /** Size below which `onCollapseChange` reports the section as collapsed */
  collapseThreshold?: number | undefined;

  /** `aria-label` of the resize handle @default 'Resize navbar' | 'Resize aside' | 'Resize header' | 'Resize footer' */
  label?: string | undefined;
}

export interface AppShellResizeSectionController {
  /** `true` when the section was configured as resizable */
  enabled: boolean;

  /** Current size override, `undefined` when the section has not been resized */
  size: number | undefined;

  /** `true` while the section is being resized */
  active: boolean;

  /** Sets the section size, does not call `onResize`/`onResizeEnd` */
  setSize: (size: number) => void;

  /** Clears the size override, the section returns to the size defined in its configuration */
  reset: () => void;
}

export interface AppShellResizeController {
  /** `AppShell.Navbar` resize controller */
  navbar: AppShellResizeSectionController;

  /** `AppShell.Aside` resize controller */
  aside: AppShellResizeSectionController;

  /** `AppShell.Header` resize controller */
  header: AppShellResizeSectionController;

  /** `AppShell.Footer` resize controller */
  footer: AppShellResizeSectionController;

  /** Current size overrides of all sections */
  sizes: AppShellResizeSizes;

  /** Clears size overrides of all sections */
  resetAll: () => void;

  /** Resolved options of all sections, used by the `AppShell` component */
  options: Partial<Record<AppShellResizeSection, AppShellResizeSectionOptions>>;

  /** Section that is being resized, used by the `AppShell` component */
  activeSection: AppShellResizeSection | null;

  /** Marks the section as active, used by the `AppShell` component */
  startResize: (section: AppShellResizeSection) => void;

  /** Reports an in-progress size, used by the `AppShell` component */
  previewResize: (section: AppShellResizeSection, size: number) => void;

  /** Commits a size, `null` cancels the resize, used by the `AppShell` component */
  endResize: (section: AppShellResizeSection, size: number | null) => void;

  /** Seeds the collapse state at drag start without calling `onCollapseChange`, used by the `AppShell` component */
  initCollapse: (section: AppShellResizeSection, collapsed: boolean) => void;

  /** Reports a collapse threshold crossing, used by the `AppShell` component */
  reportCollapse: (section: AppShellResizeSection, collapsed: boolean) => void;
}

export interface UseAppShellResizeInput {
  /** `AppShell.Navbar` resize options, the section is resizable when set */
  navbar?: AppShellResizeSectionOptions | undefined;

  /** `AppShell.Aside` resize options, the section is resizable when set */
  aside?: AppShellResizeSectionOptions | undefined;

  /** `AppShell.Header` resize options, the section is resizable when set */
  header?: AppShellResizeSectionOptions | undefined;

  /** `AppShell.Footer` resize options, the section is resizable when set */
  footer?: AppShellResizeSectionOptions | undefined;

  /** Sizes applied to sections that have not been resized yet, usually restored from storage */
  initialSizes?: AppShellResizeSizes | undefined;

  /** Called on every pointer move during a resize */
  onResize?: ((sizes: AppShellResizeSizes) => void) | undefined;

  /** Called when a resize is committed */
  onResizeEnd?: ((sizes: AppShellResizeSizes) => void) | undefined;

  /** Called when a section is dragged across its `collapseThreshold` */
  onCollapseChange?: ((section: AppShellResizeSection, collapsed: boolean) => void) | undefined;
}
