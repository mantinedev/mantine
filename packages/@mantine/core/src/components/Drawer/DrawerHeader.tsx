import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseHeader, ModalBaseHeaderProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerHeaderStylesNames = 'header';

export interface DrawerHeaderProps
  extends ModalBaseHeaderProps,
    CompoundStylesApiProps<DrawerHeaderFactory> {}

export type DrawerHeaderFactory = Factory<{
  props: DrawerHeaderProps;
  ref: HTMLElement;
  stylesNames: DrawerHeaderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerHeaderProps> = {};

export const DrawerHeader = factory<DrawerHeaderFactory>((_props, ref) => {
  const props = useProps('DrawerHeader', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseHeader
      ref={ref}
      {...ctx.getStyles('header', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerHeader.classes = classes;
DrawerHeader.displayName = '@mantine/core/DrawerHeader';
