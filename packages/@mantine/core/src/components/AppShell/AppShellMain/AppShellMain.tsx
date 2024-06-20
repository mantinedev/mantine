import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useAppShellContext } from '../AppShell.context';
import classes from '../AppShell.module.css';

export type AppShellMainStylesNames = 'main';

export interface AppShellMainProps
  extends BoxProps,
    CompoundStylesApiProps<AppShellMainFactory>,
    ElementProps<'main'> {}

export type AppShellMainFactory = Factory<{
  props: AppShellMainProps;
  ref: HTMLElement;
  stylesNames: AppShellMainStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AppShellMainProps> = {};

export const AppShellMain = factory<AppShellMainFactory>((_props, ref) => {
  const props = useProps('AppShellMain', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useAppShellContext();

  return (
    <Box
      component="main"
      ref={ref}
      {...ctx.getStyles('main', { className, style, classNames, styles })}
      {...others}
    />
  );
});

AppShellMain.classes = classes;
AppShellMain.displayName = '@mantine/core/AppShellMain';
