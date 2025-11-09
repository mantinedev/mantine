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
  AppShellResponsiveSize,
} from './AppShell.types';
import { AppShellAside } from './AppShellAside/AppShellAside';
import { AppShellFooter } from './AppShellFooter/AppShellFooter';
import { AppShellHeader } from './AppShellHeader/AppShellHeader';
import { AppShellMain } from './AppShellMain/AppShellMain';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
import { AppShellSection } from './AppShellSection/AppShellSection';
import { useResizing } from './use-resizing/use-resizing';
import classes from './AppShell.module.css';

export type AppShellStylesNames =
  | 'root'
  | 'navbar'
  | 'main'
  | 'header'
  | 'footer'
  | 'aside'
  | 'section';

export type AppShellCssVariables = {
  root: '--app-shell-transition-duration' | '--app-shell-transition-timing-function';
};

export interface AppShellProps
  extends BoxProps,
    StylesApiProps<AppShellFactory>,
    ElementProps<'div'> {
  /** If set, the associated components have a border @default `true` */
  withBorder?: boolean;

  /** Padding of the main section. Important: use `padding` prop instead of `p`. @default `0` */
  padding?: MantineSpacing | AppShellResponsiveSize;

  /** `Navbar` configuration, controls width, breakpoints and collapsed state. Required if you use `Navbar` component. */
  navbar?: AppShellNavbarConfiguration;

  /** `Aside` configuration, controls width, breakpoints and collapsed state. Required if you use `Aside` component. */
  aside?: AppShellAsideConfiguration;

  /** `Header` configuration, controls height, offset and collapsed state. Required if you use `Header` component. */
  header?: AppShellHeaderConfiguration;

  /** `Footer` configuration, controls height, offset and collapsed state. Required if you use `Footer` component. */
  footer?: AppShellFooterConfiguration;

  /** Duration of all transitions in ms @default `200` */
  transitionDuration?: number;

  /** Timing function of all transitions @default `ease` */
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];

  /** `z-index` of all associated elements @default `100` */
  zIndex?: string | number;

  /** Determines how `Navbar`/`Aside` are arranged relative to `Header`/`Footer` */
  layout?: 'default' | 'alt';

  /** If set, `Navbar`, `Aside`, `Header` and `Footer` components are hidden */
  disabled?: boolean;

  /** If set, `Header` and `Footer` components include styles to offset scrollbars. Based on `react-remove-scroll`. @default `true` */
  offsetScrollbars?: boolean;
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
} satisfies Partial<AppShellProps>;

const varsResolver = createVarsResolver<AppShellFactory>(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--app-shell-transition-duration': `${transitionDuration}ms`,
      '--app-shell-transition-timing-function': transitionTimingFunction,
    },
  })
);

export const AppShell = factory<AppShellFactory>((_props, ref) => {
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
    mod,
    attributes,
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

  const resizing = useResizing({ disabled, transitionDuration });

  return (
    <AppShellProvider value={{ getStyles, withBorder, zIndex, disabled, offsetScrollbars }}>
      <AppShellMediaStyles
        navbar={navbar}
        header={header}
        aside={aside}
        footer={footer}
        padding={padding}
      />
      <Box
        ref={ref}
        {...getStyles('root')}
        mod={[{ resizing, layout, disabled }, mod]}
        {...others}
      />
    </AppShellProvider>
  );
});

AppShell.classes = classes;
AppShell.displayName = '@mantine/core/AppShell';
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;
