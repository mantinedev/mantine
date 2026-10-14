import { CodeHighlightDefaultLanguage } from '@mantine/code-highlight';
import { AltLayout } from './AltLayout/AltLayout';
import AltLayoutCode from './AltLayout/code.json';
import { AsideDetails } from './AsideDetails/AsideDetails';
import AsideDetailsCode from './AsideDetails/code.json';
import { BasicAppShell } from './BasicAppShell/BasicAppShell';
import BasicAppShellCode from './BasicAppShell/code.json';
import { ChatLayout } from './ChatLayout/ChatLayout';
import ChatLayoutCode from './ChatLayout/code.json';
import CollapseDesktopCode from './CollapseDesktop/code.json';
import { CollapseDesktop } from './CollapseDesktop/CollapseDesktop';
import DisabledCode from './Disabled/code.json';
import { Disabled } from './Disabled/Disabled';
import FullLayoutCode from './FullLayout/code.json';
import { FullLayout } from './FullLayout/FullLayout';
import HeadroomCode from './Headroom/code.json';
import { Headroom } from './Headroom/Headroom';
import MiniNavbarCode from './MiniNavbar/code.json';
import { MiniNavbar } from './MiniNavbar/MiniNavbar';
import MobileNavbarCode from './MobileNavbar/code.json';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import MobileTabBarCode from './MobileTabBar/code.json';
import { MobileTabBar } from './MobileTabBar/MobileTabBar';
import NavbarSectionCode from './NavbarSection/code.json';
import { NavbarSection } from './NavbarSection/NavbarSection';
import NestedAppShellCode from './NestedAppShell/code.json';
import { NestedAppShell } from './NestedAppShell/NestedAppShell';
import NoTransitionsCode from './NoTransitions/code.json';
import { NoTransitions } from './NoTransitions/NoTransitions';
import PersistedResizeCode from './PersistedResize/code.json';
import { PersistedResize } from './PersistedResize/PersistedResize';
import ResizableAltLayoutCode from './ResizableAltLayout/code.json';
import { ResizableAltLayout } from './ResizableAltLayout/ResizableAltLayout';
import ResizableAppShellCode from './ResizableAppShell/code.json';
import { ResizableAppShell } from './ResizableAppShell/ResizableAppShell';
import ResponsiveSizesCode from './ResponsiveSizes/code.json';
import { ResponsiveSizes } from './ResponsiveSizes/ResponsiveSizes';
import StaticModeCode from './StaticMode/code.json';
import { StaticMode } from './StaticMode/StaticMode';

interface AppShellExampleComponent {
  component: () => React.JSX.Element;
  code: {
    fileName: string;
    language: CodeHighlightDefaultLanguage;
    code: string;
  }[];
}

export const APP_SHELL_EXAMPLES_COMPONENTS = {
  BasicAppShell: {
    component: BasicAppShell,
    code: BasicAppShellCode as AppShellExampleComponent['code'],
  },
  ResponsiveSizes: {
    component: ResponsiveSizes,
    code: ResponsiveSizesCode as AppShellExampleComponent['code'],
  },
  MobileNavbar: {
    component: MobileNavbar,
    code: MobileNavbarCode as AppShellExampleComponent['code'],
  },
  FullLayout: {
    component: FullLayout,
    code: FullLayoutCode as AppShellExampleComponent['code'],
  },
  AltLayout: {
    component: AltLayout,
    code: AltLayoutCode as AppShellExampleComponent['code'],
  },
  CollapseDesktop: {
    component: CollapseDesktop,
    code: CollapseDesktopCode as AppShellExampleComponent['code'],
  },
  NoTransitions: {
    component: NoTransitions,
    code: NoTransitionsCode as AppShellExampleComponent['code'],
  },
  Disabled: {
    component: Disabled,
    code: DisabledCode as AppShellExampleComponent['code'],
  },
  Headroom: {
    component: Headroom,
    code: HeadroomCode as AppShellExampleComponent['code'],
  },
  NavbarSection: {
    component: NavbarSection,
    code: NavbarSectionCode as AppShellExampleComponent['code'],
  },
  StaticMode: {
    component: StaticMode,
    code: StaticModeCode as AppShellExampleComponent['code'],
  },
  NestedAppShell: {
    component: NestedAppShell,
    code: NestedAppShellCode as AppShellExampleComponent['code'],
  },
  ResizableAppShell: {
    component: ResizableAppShell,
    code: ResizableAppShellCode as AppShellExampleComponent['code'],
  },
  ResizableAltLayout: {
    component: ResizableAltLayout,
    code: ResizableAltLayoutCode as AppShellExampleComponent['code'],
  },
  AsideDetails: {
    component: AsideDetails,
    code: AsideDetailsCode as AppShellExampleComponent['code'],
  },
  MiniNavbar: {
    component: MiniNavbar,
    code: MiniNavbarCode as AppShellExampleComponent['code'],
  },
  MobileTabBar: {
    component: MobileTabBar,
    code: MobileTabBarCode as AppShellExampleComponent['code'],
  },
  ChatLayout: {
    component: ChatLayout,
    code: ChatLayoutCode as AppShellExampleComponent['code'],
  },
  PersistedResize: {
    component: PersistedResize,
    code: PersistedResizeCode as AppShellExampleComponent['code'],
  },
} satisfies Record<string, AppShellExampleComponent>;

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
