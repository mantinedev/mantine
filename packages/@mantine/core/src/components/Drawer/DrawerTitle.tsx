import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseTitle, ModalBaseTitleProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerTitleStylesNames = 'title';

export interface DrawerTitleProps
  extends ModalBaseTitleProps,
    CompoundStylesApiProps<DrawerTitleFactory> {}

export type DrawerTitleFactory = Factory<{
  props: DrawerTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: DrawerTitleStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerTitleProps> = {};

export const DrawerTitle = factory<DrawerTitleFactory>((_props, ref) => {
  const props = useProps('DrawerTitle', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseTitle
      ref={ref}
      {...ctx.getStyles('title', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerTitle.classes = classes;
DrawerTitle.displayName = '@mantine/core/DrawerTitle';
