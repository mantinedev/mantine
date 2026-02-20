import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import {
  ModalBaseContent,
  ModalBaseContentProps,
  NativeScrollArea,
  useModalBaseStackContext,
} from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerContentStylesNames = 'content' | 'inner';

export interface DrawerContentProps
  extends ModalBaseContentProps,
    CompoundStylesApiProps<DrawerContentFactory> {}

export type DrawerContentFactory = Factory<{
  props: DrawerContentProps;
  ref: HTMLDivElement;
  stylesNames: DrawerContentStylesNames;
  compound: true;
}>;

export const DrawerContent = factory<DrawerContentFactory>((_props, ref) => {
  const props = useProps('DrawerContent', null, _props);
  const { classNames, className, style, styles, vars, children, radius, ...others } = props;

  const ctx = useDrawerContext();
  const drawerStackCtx = useModalBaseStackContext();
  const Scroll: React.FC<any> = ctx.scrollAreaComponent || NativeScrollArea;

  const __hidden =
    ctx && ctx.opened && drawerStackCtx ? ctx.stackId !== drawerStackCtx.currentId : false;

  return (
    <ModalBaseContent
      {...ctx.getStyles('content', { className, style, styles, classNames })}
      innerProps={ctx.getStyles('inner', { className, style, styles, classNames })}
      ref={ref}
      data-hidden={__hidden || undefined}
      {...others}
    >
      <Scroll style={{ height: 'calc(100vh - var(--drawer-offset) * 2)' }}>{children}</Scroll>
    </ModalBaseContent>
  );
});

DrawerContent.classes = classes;
DrawerContent.displayName = '@mantine/core/DrawerContent';
