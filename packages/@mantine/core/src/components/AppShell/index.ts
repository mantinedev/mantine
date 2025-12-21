import type {
  AppShellCssVariables,
  AppShellFactory,
  AppShellProps,
  AppShellStylesNames,
} from './AppShell';
import type { AppShellContextValue } from './AppShell.context';
import type {
  AppShellAsideConfiguration,
  AppShellCompoundProps,
  AppShellFooterConfiguration,
  AppShellHeaderConfiguration,
  AppShellNavbarConfiguration,
  AppShellResponsiveSize,
} from './AppShell.types';
import type { AppShellAsideProps } from './AppShellAside/AppShellAside';
import type { AppShellFooterProps } from './AppShellFooter/AppShellFooter';
import type { AppShellHeaderProps } from './AppShellHeader/AppShellHeader';
import type { AppShellMainProps } from './AppShellMain/AppShellMain';
import type { AppShellNavbarProps } from './AppShellNavbar/AppShellNavbar';
import type { AppShellSectionProps } from './AppShellSection/AppShellSection';

export { AppShell } from './AppShell';
export { AppShellAside } from './AppShellAside/AppShellAside';
export { AppShellFooter } from './AppShellFooter/AppShellFooter';
export { AppShellHeader } from './AppShellHeader/AppShellHeader';
export { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
export { AppShellSection } from './AppShellSection/AppShellSection';
export { AppShellMain } from './AppShellMain/AppShellMain';
export { useAppShellContext } from './AppShell.context';

export type {
  AppShellProps,
  AppShellStylesNames,
  AppShellCssVariables,
  AppShellFactory,
  AppShellContextValue,
  AppShellCompoundProps,
  AppShellAsideConfiguration,
  AppShellFooterConfiguration,
  AppShellHeaderConfiguration,
  AppShellNavbarConfiguration,
  AppShellResponsiveSize,
  AppShellAsideProps,
  AppShellFooterProps,
  AppShellHeaderProps,
  AppShellMainProps,
  AppShellNavbarProps,
  AppShellSectionProps,
};

export namespace AppShell {
  export type Props = AppShellProps;
  export type StylesNames = AppShellStylesNames;
  export type CssVariables = AppShellCssVariables;
  export type Factory = AppShellFactory;

  export namespace Section {
    export type Props = AppShellSectionProps;
  }

  export namespace Header {
    export type Props = AppShellHeaderProps;
  }

  export namespace Footer {
    export type Props = AppShellFooterProps;
  }

  export namespace Navbar {
    export type Props = AppShellNavbarProps;
  }

  export namespace Aside {
    export type Props = AppShellAsideProps;
  }

  export namespace Main {
    export type Props = AppShellMainProps;
  }
}
