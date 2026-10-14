import { APP_SHELL_EXAMPLES_COMPONENTS } from './examples';

export interface AppShellExample {
  /** Demo id, based on it component will render component on the page */
  id: keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;

  /** Name used in search */
  name: string;

  /** Short component description, used in search */
  description: string;

  /** Full component description, displayed on the page */
  fullDescription?: string;
}

export const APP_SHELL_EXAMPLES_DATA: AppShellExample[] = [
  {
    id: 'BasicAppShell',
    name: 'Basic app shell',
    description: 'App shell with Header and Navbar',
  },
  {
    id: 'ResponsiveSizes',
    name: 'Responsive width and height',
    description: 'App shell with responsive navbar width and header height',
  },
  {
    id: 'MobileNavbar',
    name: 'Mobile only navbar',
    description: 'Navbar visible only on mobile',
  },
  {
    id: 'MobileTabBar',
    name: 'Mobile tab bar',
    description: 'Footer tab bar on mobile, navbar on desktop',
  },
  {
    id: 'CollapseDesktop',
    name: 'Collapsible navbar',
    description: 'Collapsible navbar both on desktop and mobile',
  },
  {
    id: 'MiniNavbar',
    name: 'Mini navbar',
    description: 'Navbar collapses to an icon rail with tooltips',
  },
  {
    id: 'AsideDetails',
    name: 'Aside as details panel',
    description: 'Click an order to open it in a collapsible aside',
  },
  {
    id: 'FullLayout',
    name: 'AppShell with all elements',
    description: 'Navbar, header, aside and footer used together',
  },
  {
    id: 'AltLayout',
    name: 'Alt layout',
    description: 'Navbar and Aside are rendered on top of Header and Footer',
  },
  {
    id: 'NoTransitions',
    name: 'Without transitions',
    description: 'Disable all collapse/expand animations',
  },
  {
    id: 'Disabled',
    name: 'Disabled app shell',
    description: 'Focus mode switch hides all elements with disabled prop',
  },
  {
    id: 'Headroom',
    name: 'Usage with use-headroom',
    description: 'Hide header on scroll down and show on scroll up',
  },
  {
    id: 'NavbarSection',
    name: 'Navbar with sections',
    description: 'Scrollable projects list between pinned header and footer sections',
  },
  {
    id: 'ChatLayout',
    name: 'Chat layout',
    description: 'Messages scroll inside main, composer stays at the bottom',
  },
  {
    id: 'StaticMode',
    name: 'Static mode',
    description: 'AppShell rendered in normal document flow using CSS Grid',
  },
  {
    id: 'NestedAppShell',
    name: 'Nested AppShell',
    description: 'Static AppShell nested inside fixed AppShell',
  },
  {
    id: 'ResizableAppShell',
    name: 'Resizable sections',
    description: 'Navbar and header resized with the useAppShellResize hook',
  },
  {
    id: 'ResizableAltLayout',
    name: 'Resizable alt layout',
    description: 'Resizable navbar, aside and header in alt layout',
  },
  {
    id: 'PersistedResize',
    name: 'Drag-to-collapse and persisted sizes',
    description: 'Navbar collapses when dragged closed, sizes saved in local storage',
  },
];
