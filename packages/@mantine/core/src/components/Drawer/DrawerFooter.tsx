import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseFooter, ModalBaseFooterProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerFooterStylesNames = 'footer';

export interface DrawerFooterProps
  extends ModalBaseFooterProps,
    CompoundStylesApiProps<DrawerFooterFactory> {}

export type DrawerFooterFactory = Factory<{
  props: DrawerFooterProps;
  ref: HTMLElement;
  stylesNames: DrawerFooterStylesNames;
  compound: true;
}>;

export const DrawerFooter = factory<DrawerFooterFactory>((_props, ref) => {
  const props = useProps('DrawerFooter', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseFooter
      ref={ref}
      {...ctx.getStyles('footer', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerFooter.classes = classes;
DrawerFooter.displayName = '@mantine/core/DrawerFooter';
