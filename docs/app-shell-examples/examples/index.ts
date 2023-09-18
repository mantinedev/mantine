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
    language: string;
    code: string;
  }[];
}

export const APP_SHELL_EXAMPLES_COMPONENTS = {
  BasicAppShell: {
    component: BasicAppShell,
    code: BasicAppShellCode,
  },
  ResponsiveSizes: {
    component: ResponsiveSizes,
    code: ResponsiveSizesCode,
  },
  MobileNavbar: {
    component: MobileNavbar,
    code: MobileNavbarCode,
  },
  FullLayout: {
    component: FullLayout,
    code: FullLayoutCode,
  },
  AltLayout: {
    component: AltLayout,
    code: AltLayoutCode,
  },
  CollapseDesktop: {
    component: CollapseDesktop,
    code: CollapseDesktopCode,
  },
  NoTransitions: {
    component: NoTransitions,
    code: NoTransitionsCode,
  },
  Disabled: {
    component: Disabled,
    code: DisabledCode,
  },
  Headroom: {
    component: Headroom,
    code: HeadroomCode,
  },
  NavbarSection: {
    component: NavbarSection,
    code: NavbarSectionCode,
  },
} satisfies Record<string, AppShellExampleComponent>;

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
