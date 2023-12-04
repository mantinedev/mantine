import { ShikiLanguage } from '@mantinex/shiki';
import { BasicAppShell } from './BasicAppShell/BasicAppShell';
import { ResponsiveSizes } from './ResponsiveSizes/ResponsiveSizes';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import { FullLayout } from './FullLayout/FullLayout';
import { AltLayout } from './AltLayout/AltLayout';
import { CollapseDesktop } from './CollapseDesktop/CollapseDesktop';
import { NoTransitions } from './NoTransitions/NoTransitions';
import { Disabled } from './Disabled/Disabled';
import { Headroom } from './Headroom/Headroom';
import { NavbarSection } from './NavbarSection/NavbarSection';

import BasicAppShellCode from './BasicAppShell/code.json';
import ResponsiveSizesCode from './ResponsiveSizes/code.json';
import MobileNavbarCode from './MobileNavbar/code.json';
import FullLayoutCode from './FullLayout/code.json';
import AltLayoutCode from './AltLayout/code.json';
import CollapseDesktopCode from './CollapseDesktop/code.json';
import NoTransitionsCode from './NoTransitions/code.json';
import DisabledCode from './Disabled/code.json';
import HeadroomCode from './Headroom/code.json';
import NavbarSectionCode from './NavbarSection/code.json';

interface AppShellExampleComponent {
  component: () => JSX.Element;
  code: {
    fileName: string;
    language: ShikiLanguage;
    code: string;
  }[];
}

export const APP_SHELL_EXAMPLES_COMPONENTS: Record<string, AppShellExampleComponent> = {
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
};

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
