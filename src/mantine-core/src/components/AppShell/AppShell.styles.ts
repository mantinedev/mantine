import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  MantineTheme,
  CSSObject,
} from '@mantine/styles';

interface AppShellStyles {
  padding: MantineNumberSize;
  fixed: boolean;
  headerHeight: string;
  navbarBreakpoints: [number, { width: string | number }][];
  navbarWidth: string;
}

function getPositionStyles(props: AppShellStyles, theme: MantineTheme): CSSObject {
  const padding = getSizeValue({ size: props.padding, sizes: theme.spacing });

  if (!props.fixed) {
    return { padding };
  }

  const queries = props.navbarBreakpoints.reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (max-width: ${breakpoint}px)`] = {
      paddingLeft: `calc(${breakpointSize.width}px + ${padding}px)`,
    };

    return acc;
  }, {});

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
