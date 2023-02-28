import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  Selectors,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Transition, MantineTransition } from '../Transition';
import { CloseButton } from '../CloseButton';
import { Affix } from '../Affix';
import { Paper, PaperProps } from '../Paper';
import useStyles, { DialogStylesParams } from './Dialog.styles';

export type DialogStylesNames = Selectors<typeof useStyles>;

export interface DialogProps
  extends DefaultProps<DialogStylesNames, DialogStylesParams>,
    Omit<PaperProps, 'classNames' | 'styles'> {
  /** Display close button at the top right corner */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Dialog position (fixed in viewport) */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };

  /** Dialog content */
  children?: React.ReactNode;

  /** Dialog container z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Opened state */
  opened: boolean;

  /** Appear/disappear transition */
  transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Predefined dialog width or number to set width in px */
  size?: string | number;
}

const defaultProps: Partial<DialogProps> = {
  shadow: 'md',
  p: 'md',
  withBorder: true,
  size: 'md',
  transition: 'pop-top-right',
  transitionDuration: 200,
};

export function DialogBody(props: DialogProps) {
  const {
    withCloseButton,
    onClose,
    position,
    shadow,
    children,
    className,
    style,
    classNames,
    styles,
    opened,
    withBorder,
    size,
    transition,
    transitionDuration,
    transitionTimingFunction,
    unstyled,
    ...others
  } = useComponentDefaultProps('Dialog', defaultProps, props);

  const { classes, cx } = useStyles({ size }, { classNames, styles, unstyled, name: 'Dialog' });

  return (
    <Transition
      mounted={opened}
      transition={transition}
      duration={transitionDuration}
      timingFunction={transitionTimingFunction}
    >
      {(transitionStyles) => (
        <Paper
          className={cx(classes.root, className)}
          style={{ ...style, ...transitionStyles }}
          shadow={shadow}
          withBorder={withBorder}
          unstyled={unstyled}
          {...others}
        >
          {withCloseButton && <CloseButton onClick={onClose} className={classes.closeButton} />}
          {children}
        </Paper>
      )}
    </Transition>
  );
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ zIndex = getDefaultZIndex('modal'), ...props }: DialogProps, ref) => {
    const theme = useMantineTheme();

    return (
      <Affix
        zIndex={zIndex}
        position={props.position || { bottom: theme.spacing.xl, right: theme.spacing.xl }}
        ref={ref}
      >
        <DialogBody {...props} />
      </Affix>
    );
  }
);

Dialog.displayName = '@mantine/core/Dialog';
