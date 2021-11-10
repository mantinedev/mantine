import { createStyles, MantineNumberSize, MantineTheme, CSSObject } from '@mantine/styles';

interface AppShellStyles {
  padding: MantineNumberSize;
  fixed: boolean;
  headerHeight: string;
  navbarBreakpoints: [number, { width: string | number }][];
  navbarWidth: string;
  navbarOffsetBreakpoint: MantineNumberSize;
}

function getPositionStyles(props: AppShellStyles, theme: MantineTheme): CSSObject {
  const padding = theme.fn.size({ size: props.padding, sizes: theme.spacing });
  const offset = props.navbarOffsetBreakpoint
    ? theme.fn.size({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  if (!props.fixed) {
    return { padding };
  }

  const queries = props.navbarBreakpoints.reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (max-width: ${breakpoint}px)`] = {
      paddingLeft: `calc(${breakpointSize}px + ${padding}px)`,
    };

    return acc;
  }, {});

  if (offset) {
    queries[`@media (max-width: ${offset}px)`] = {
      paddingLeft: padding,
    };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(${props.headerHeight} + ${padding}px)`,
    paddingLeft: `calc(${props.navbarWidth} + ${padding}px)`,
    ...queries,
  };
}

export default createStyles((theme, props: AppShellStyles) => ({
  root: {
    boxSizing: 'border-box',
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
  },

  main: {
    flex: 1,
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
