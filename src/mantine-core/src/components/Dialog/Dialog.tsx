import React from 'react';
import { mergeStyles, useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/tss';
import { Transition, MantineTransition } from '../Transition/Transition';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Affix } from '../Affix/Affix';
import { Paper, PaperProps } from '../Paper/Paper';
import useStyles from './Dialog.styles';

export type DialogStylesNames = keyof ReturnType<typeof useStyles>['classes'];

export interface DialogProps
  extends DefaultProps<DialogStylesNames>,
    Omit<PaperProps<'div', HTMLDivElement>, 'classNames' | 'styles'> {
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
  zIndex?: number;

  /** Opened state */
  opened: boolean;

  /** Appear/disappear transition */
  transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Predefined dialog width or number to set width in px */
  size?: MantineNumberSize;
}

export function MantineDialog({
  withCloseButton,
  onClose,
  position,
  shadow = 'md',
  padding = 'md',
  zIndex,
  children,
  className,
  style,
  classNames,
  styles,
  opened,
  withBorder = true,
  size = 'md',
  transition = 'pop-top-right',
  transitionDuration = 200,
  transitionTimingFunction,
  ...others
}: DialogProps) {
  const { classes, cx } = useStyles({ size }, classNames, 'dialog');
  const _styles = mergeStyles(classes, styles);

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
          style={{ ...style, ..._styles.root, ...transitionStyles }}
          shadow={shadow}
          padding={padding}
          withBorder={withBorder}
          {...others}
        >
          {withCloseButton && (
            <CloseButton
              onClick={onClose}
              className={classes.closeButton}
              style={_styles.closeButton}
            />
          )}
          {children}
        </Paper>
      )}
    </Transition>
  );
}

export function Dialog(props: DialogProps) {
  const theme = useMantineTheme();

  return (
    <Affix
      zIndex={props.zIndex}
      position={props.position || { bottom: theme.spacing.xl, right: theme.spacing.xl }}
    >
      <MantineDialog {...props} />
    </Affix>
  );
}

Dialog.displayName = '@mantine/core/Dialog';
