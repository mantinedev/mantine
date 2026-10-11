import {
  BoxProps,
  createVarsResolver,
  DataAttributes,
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
import { __CloseButtonProps, CloseButton } from '../CloseButton';
import { Paper, PaperBaseProps } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import classes from './Dialog.module.css';

export type DialogStylesNames = 'root' | 'closeButton';
export type DialogCssVariables = {
  root: '--dialog-size';
};

export interface DialogProps
  extends
    BoxProps,
    AffixBaseProps,
    PaperBaseProps,
    StylesApiProps<DialogFactory>,
    ElementProps<'div'> {
  /** If set, the dialog is not unmounted from the DOM when hidden, it is hidden with the `keepMountedMode` of `transitionProps` (React `Activity` by default) @default false */
  keepMounted?: boolean;

  /** If set, displays the close button @default false @category appearance */
  withCloseButton?: boolean;

  /** Props passed down to the close button, use to set `aria-label`, `icon` or `size` */
  closeButtonProps?: __CloseButtonProps & BoxProps & ElementProps<'button'> & DataAttributes;

  /** Called on close button click @category state */
  onClose?: () => void;

  /** Dialog content @category appearance */
  children?: React.ReactNode;

  /** Opened state @category state */
  opened: boolean;

  /** Props passed down to the underlying `Transition` component @default { transition: 'pop-top-right', duration: 200 } @category appearance */
  transitionProps?: TransitionOverride;

  /** Controls `width` of the dialog @default 'md' @category appearance */
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
  withBorder: true,
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

export const Dialog = factory<DialogFactory>((_props) => {
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
    closeButtonProps,
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
              <CloseButton
                {...closeButtonProps}
                unstyled={unstyled}
                {...getStyles('closeButton', {
                  className: closeButtonProps?.className,
                  style: closeButtonProps?.style,
                })}
                onClick={(event) => {
                  closeButtonProps?.onClick?.(event);
                  onClose?.();
                }}
              />
            )}
            {children}
          </Paper>
        )}
      </Transition>
    </Affix>
  );
});

Dialog.classes = classes;
Dialog.varsResolver = varsResolver;
Dialog.displayName = '@mantine/core/Dialog';

export namespace Dialog {
  export type Props = DialogProps;
  export type StylesNames = DialogStylesNames;
  export type CssVariables = DialogCssVariables;
  export type Factory = DialogFactory;
}
