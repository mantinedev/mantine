import { useRef } from 'react';
import { useId, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AppShellProvider } from './AppShell.context';
import {
  AppShellAsideConfiguration,
  AppShellFooterConfiguration,
  AppShellHeaderConfiguration,
  AppShellNavbarConfiguration,
  AppShellResizeController,
  AppShellResponsiveSize,
} from './AppShell.types';
import { AppShellAside, type AppShellAsideProps } from './AppShellAside/AppShellAside';
import { AppShellFooter, type AppShellFooterProps } from './AppShellFooter/AppShellFooter';
import { AppShellHeader, type AppShellHeaderProps } from './AppShellHeader/AppShellHeader';
import { AppShellMain, type AppShellMainProps } from './AppShellMain/AppShellMain';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles';
import { escapeCssId } from './AppShellMediaStyles/escape-css-id/escape-css-id';
import { AppShellNavbar, type AppShellNavbarProps } from './AppShellNavbar/AppShellNavbar';
import { AppShellSection, type AppShellSectionProps } from './AppShellSection/AppShellSection';
import { RESIZE_SECTION_NAMES } from './use-app-shell-resize/resize-section-config';
import { useResizing } from './use-resizing/use-resizing';
import classes from './AppShell.module.css';
export type AppShellStylesNames =
  | 'root'
  | 'navbar'
  | 'main'
  | 'header'
  | 'footer'
  | 'aside'
  | 'section'
  | 'resizeHandle';

export type AppShellCssVariables = {
  root:
    | '--app-shell-transition-duration'
    | '--app-shell-transition-timing-function'
    | '--app-shell-resize-handle-size';
};

export interface AppShellProps
  extends BoxProps, StylesApiProps<AppShellFactory>, ElementProps<'div'> {
  /** If set, the associated components have a border @default true */
  withBorder?: boolean;

  /** Padding of the main section. Important: use `padding` prop instead of `p`. @default 0 */
  padding?: MantineSpacing | AppShellResponsiveSize;

  /** `Navbar` configuration, controls width, breakpoints and collapsed state. Required if you use `Navbar` component. */
  navbar?: AppShellNavbarConfiguration;

  /** `Aside` configuration, controls width, breakpoints and collapsed state. Required if you use `Aside` component. */
  aside?: AppShellAsideConfiguration;

  /** `Header` configuration, controls height, offset and collapsed state. Required if you use `Header` component. */
  header?: AppShellHeaderConfiguration;

  /** `Footer` configuration, controls height, offset and collapsed state. Required if you use `Footer` component. */
  footer?: AppShellFooterConfiguration;

  /** Duration of all transitions in ms @default 200 */
  transitionDuration?: number;

  /** Timing function of all transitions @default ease */
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];

  /** `z-index` of all associated elements @default 100 */
  zIndex?: string | number;

  /** Determines how `Navbar`/`Aside` are arranged relative to `Header`/`Footer` */
  layout?: 'default' | 'alt';

  /** If set, `Navbar`, `Aside`, `Header` and `Footer` components are hidden */
  disabled?: boolean;

  /** If set, `Header` and `Footer` components include styles to offset scrollbars. Based on `react-remove-scroll`. @default true */
  offsetScrollbars?: boolean;

  /** Determines positioning mode of all sections @default 'fixed' */
  mode?: 'fixed' | 'static';

  /** `useAppShellResize` hook instance, enables resizing of the sections configured in the hook */
  resize?: AppShellResizeController;
}

export type AppShellFactory = Factory<{
  props: AppShellProps;
  ref: HTMLDivElement;
  stylesNames: AppShellStylesNames;
  vars: AppShellCssVariables;
  staticComponents: {
    Navbar: typeof AppShellNavbar;
    Header: typeof AppShellHeader;
    Main: typeof AppShellMain;
    Aside: typeof AppShellAside;
    Footer: typeof AppShellFooter;
    Section: typeof AppShellSection;
  };
}>;

const defaultProps = {
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  zIndex: getDefaultZIndex('app'),
  mode: 'fixed',
} satisfies Partial<AppShellProps>;

const varsResolver = createVarsResolver<AppShellFactory>(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--app-shell-transition-duration': `${transitionDuration}ms`,
      '--app-shell-transition-timing-function': transitionTimingFunction,
      '--app-shell-resize-handle-size': undefined,
    },
  })
);

export const AppShell = factory<AppShellFactory>((_props) => {
  const props = useProps('AppShell', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer,
    offsetScrollbars = true,
    mode,
    mod,
    attributes,
    id,
    resize,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<AppShellFactory>({
    name: 'AppShell',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const resizeKey = resize
    ? RESIZE_SECTION_NAMES.map((section) => resize.sizes[section]).join('|')
    : undefined;
  const resizing = useResizing({ disabled, transitionDuration, resizeKey });
  const _id = useId(id);
  const rootRef = useRef<HTMLDivElement>(null);

  const resizeVariables = resize
    ? {
        sizes: resize.sizes,
        enabled: {
          navbar: resize.navbar.enabled,
          aside: resize.aside.enabled,
          header: resize.header.enabled,
          footer: resize.footer.enabled,
        },
      }
    : undefined;

  const resizeOffsets = {
    navbar: true,
    aside: true,
    header: mode === 'static' ? true : (header?.offset ?? true),
    footer: mode === 'static' ? true : (footer?.offset ?? true),
  };

  return (
    <AppShellProvider
      value={{
        getStyles,
        withBorder,
        zIndex,
        disabled,
        offsetScrollbars,
        mode,
        resize,
        rootRef,
        resizeOffsets,
      }}
    >
      <AppShellMediaStyles
        navbar={navbar}
        header={header}
        aside={aside}
        footer={footer}
        padding={padding}
        mode={mode}
        resize={resizeVariables}
        selector={resize || mode === 'static' ? `#${escapeCssId(_id)}` : undefined}
      />
      <Box
        {...getStyles('root')}
        id={_id}
        ref={useMergedRef(ref, rootRef)}
        mod={[{ resizing: resizing || resize?.activeSection != null, layout, disabled, mode }, mod]}
        {...others}
      />
    </AppShellProvider>
  );
});

AppShell.classes = classes;
AppShell.varsResolver = varsResolver;
AppShell.displayName = '@mantine/core/AppShell';
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;

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
