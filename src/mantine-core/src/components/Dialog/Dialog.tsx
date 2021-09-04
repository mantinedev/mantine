import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../theme';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Affix } from '../Affix/Affix';
import { Paper, PaperProps } from '../Paper/Paper';
import useStyles from './Dialog.styles';

export type DialogStylesNames = keyof ReturnType<typeof useStyles>;

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
}

export function MantineDialog({
  withCloseButton,
  onClose,
  position,
  shadow = 'md',
  padding = 'md',
  zIndex,
  children,
  themeOverride,
  className,
  style,
  classNames,
  styles,
  ...others
}: DialogProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'dialog');
  const _styles = mergeStyles(classes, styles);

  return (
    <Paper
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      shadow={shadow}
      padding={padding}
      themeOverride={themeOverride}
      {...others}
    >
      {withCloseButton && (
        <CloseButton
          onClick={onClose}
          themeOverride={themeOverride}
          className={classes.closeButton}
          style={_styles.closeButton}
        />
      )}
      {children}
    </Paper>
  );
}

export function Dialog(props: DialogProps) {
  const theme = useMantineTheme(props.themeOverride);
  return (
    <Affix
      zIndex={props.zIndex}
      position={props.position || { bottom: theme.spacing.xl, right: theme.spacing.xl }}
    >
      <MantineDialog {...props} />
    </Affix>
  );
}
