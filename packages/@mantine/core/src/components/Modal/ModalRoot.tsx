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
import { ModalProvider, ScrollAreaComponent } from './Modal.context';
import classes from './Modal.module.css';

export type ModalRootStylesNames = ModalBaseStylesNames;
export type ModalRootCssVariables = {
  root: '--modal-radius' | '--modal-size' | '--modal-y-offset' | '--modal-x-offset';
};

export interface ModalRootProps extends StylesApiProps<ModalRootFactory>, ModalBaseProps {
  __staticSelector?: string;

  /** Top/bottom modal offset, `5dvh` by default */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset, `5vw` by default */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Determines whether the modal should be centered vertically, `false` by default */
  centered?: boolean;

  /** Determines whether the modal should take the entire screen, `false` by default */
  fullScreen?: boolean;
}

export type ModalRootFactory = Factory<{
  props: ModalRootProps;
  ref: HTMLDivElement;
  stylesNames: ModalRootStylesNames;
  vars: ModalRootCssVariables;
  compound: true;
}>;

const defaultProps: Partial<ModalRootProps> = {
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
};

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
    ...others
  } = props;

  const getStyles = useStyles<ModalRootFactory>({
    name: __staticSelector!,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
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
        unstyled={unstyled}
        {...others}
      />
    </ModalProvider>
  );
});

ModalRoot.classes = classes;
ModalRoot.displayName = '@mantine/core/ModalRoot';
