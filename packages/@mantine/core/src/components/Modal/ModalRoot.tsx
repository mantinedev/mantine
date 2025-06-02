import {
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getRadius,
  getSize,
  MantineRadius,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { ModalBase, ModalBaseProps, ModalBaseStylesNames } from '../ModalBase';
import { ScrollArea } from '../ScrollArea';
import { ModalProvider, ScrollAreaComponent } from './Modal.context';
import classes from './Modal.module.css';

export type ModalRootStylesNames = ModalBaseStylesNames;
export type ModalRootCssVariables = {
  root: '--modal-radius' | '--modal-size' | '--modal-y-offset' | '--modal-x-offset';
};

export interface ModalRootProps extends StylesApiProps<ModalRootFactory>, ModalBaseProps {
  __staticSelector?: string;

  /** Top/bottom modal offset @default `5dvh` */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset @default `5vw` */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component @default `'div'` */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, the modal is centered vertically @default `false` */
  centered?: boolean;

  /** If set, the modal takes the entire screen @default `false` */
  fullScreen?: boolean;
}

export type ModalRootFactory = Factory<{
  props: ModalRootProps;
  ref: HTMLDivElement;
  stylesNames: ModalRootStylesNames;
  vars: ModalRootCssVariables;
  compound: true;
}>;

const defaultProps = {
  __staticSelector: 'Modal',
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  transitionProps: { duration: 200, transition: 'fade-down' },
  yOffset: '5dvh',
} satisfies Partial<ModalRootProps>;

const varsResolver = createVarsResolver<ModalRootFactory>(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      '--modal-radius': radius === undefined ? undefined : getRadius(radius),
      '--modal-size': getSize(size, 'modal-size'),
      '--modal-y-offset': rem(yOffset),
      '--modal-x-offset': rem(xOffset),
    },
  })
);

export const ModalRoot = factory<ModalRootFactory>((_props, ref) => {
  const props = useProps('ModalRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ModalRootFactory>({
    name: __staticSelector,
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

  return (
    <ModalProvider value={{ yOffset, scrollAreaComponent, getStyles, fullScreen }}>
      <ModalBase
        ref={ref}
        {...getStyles('root')}
        data-full-screen={fullScreen || undefined}
        data-centered={centered || undefined}
        data-offset-scrollbars={scrollAreaComponent === ScrollArea.Autosize || undefined}
        unstyled={unstyled}
        {...others}
      />
    </ModalProvider>
  );
});

ModalRoot.classes = classes;
ModalRoot.displayName = '@mantine/core/ModalRoot';
