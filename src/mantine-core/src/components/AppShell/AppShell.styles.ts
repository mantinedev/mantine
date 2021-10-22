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
  navbarWidth: string;
}

function getPositionStyles(props: AppShellStyles, theme: MantineTheme): CSSObject {
  const padding = getSizeValue({ size: props.padding, sizes: theme.spacing });

  if (!props.fixed) {
    return { padding };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(${props.headerHeight} + ${padding}px)`,
    paddingLeft: `calc(${props.navbarWidth} + ${padding}px)`,
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
    background: 'red',
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
