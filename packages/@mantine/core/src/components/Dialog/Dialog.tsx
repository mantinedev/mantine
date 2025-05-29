import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Affix, AffixBaseProps } from '../Affix';
import { CloseButton } from '../CloseButton';
import { Paper, PaperBaseProps } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import classes from './Dialog.module.css';

export type DialogStylesNames = 'root' | 'closeButton';
export type DialogCssVariables = {
  root: '--dialog-size';
};

export interface DialogProps
  extends BoxProps,
    AffixBaseProps,
    PaperBaseProps,
    StylesApiProps<DialogFactory>,
    ElementProps<'div'> {
  /** If set, dialog is not unmounted from the DOM when hidden, `display: none` styles are applied instead */
  keepMounted?: boolean;

  /** If set, the close button is displayed @default `true` */
  withCloseButton?: boolean;

  /** Called when the close button is clicked */
  onClose?: () => void;

  /** Dialog content */
  children?: React.ReactNode;

  /** Opened state */
  opened: boolean;

  /** Props passed down to the underlying `Transition` component @default `{ transition: 'pop-top-right', duration: 200 }` */
  transitionProps?: TransitionOverride;

  /** Controls `width` of the dialog @default `'md'` */
  size?: MantineSize | (string & {}) | number;
}

export type DialogFactory = Factory<{
  props: DialogProps;
  ref: HTMLDivElement;
  stylesNames: DialogStylesNames;
  vars: DialogCssVariables;
}>;

const defaultProps = {
  shadow: 'md',
  p: 'md',
  withBorder: false,
  transitionProps: { transition: 'pop-top-right', duration: 200 },
  position: {
    bottom: 30,
    right: 30,
  },
} satisfies Partial<DialogProps>;

const varsResolver = createVarsResolver<DialogFactory>((_, { size }) => ({
  root: {
    '--dialog-size': getSize(size, 'dialog-size'),
  },
}));

export const Dialog = factory<DialogFactory>((_props, ref) => {
  const props = useProps('Dialog', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    zIndex,
    position,
    keepMounted,
    opened,
    transitionProps,
    withCloseButton,
    withinPortal,
    children,
    onClose,
    portalProps,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<DialogFactory>({
    name: 'Dialog',
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
    <Affix
      zIndex={zIndex}
      position={position}
      ref={ref}
      withinPortal={withinPortal}
      portalProps={portalProps}
      unstyled={unstyled}
    >
      <Transition keepMounted={keepMounted} mounted={opened} {...transitionProps}>
        {(transitionStyles) => (
          <Paper
            unstyled={unstyled}
            {...getStyles('root', { style: transitionStyles })}
            {...others}
          >
            {withCloseButton && (
              <CloseButton onClick={onClose} unstyled={unstyled} {...getStyles('closeButton')} />
            )}
            {children}
          </Paper>
        )}
      </Transition>
    </Affix>
  );
});

Dialog.classes = classes;
Dialog.displayName = '@mantine/core/Dialog';
