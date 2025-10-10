import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  polymorphicFactory,
  PolymorphicFactory,
  useProps,
} from '../../../core';
import { useAppShellContext } from '../AppShell.context';
import classes from '../AppShell.module.css';

export type AppShellSectionStylesNames = 'section';

export interface AppShellSectionProps
  extends BoxProps,
    CompoundStylesApiProps<AppShellSectionFactory> {
  /** If set, the section expands to take all available space */
  grow?: boolean;
}

export type AppShellSectionFactory = PolymorphicFactory<{
  props: AppShellSectionProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: AppShellSectionStylesNames;
  compound: true;
}>;

export const AppShellSection = polymorphicFactory<AppShellSectionFactory>((_props) => {
  const { classNames, className, style, styles, vars, grow, mod, ...others } = useProps(
    'AppShellSection',
    null,
    _props
  );

  const ctx = useAppShellContext();

  return (
    <Box
      mod={[{ grow }, mod]}
      {...ctx.getStyles('section', { className, style, classNames, styles })}
      {...others}
    />
  );
});

AppShellSection.classes = classes;
AppShellSection.displayName = '@mantine/core/AppShellSection';
