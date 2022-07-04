import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, MantineShadow, Selectors } from '@mantine/styles';
import { Text } from '../../Text/Text';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import useStyles from './PopoverBody.styles';

export type PopoverBodyStylesNames = Selectors<typeof useStyles>;

export interface PopoverBodyProps
  extends DefaultProps<PopoverBodyStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  shadow: MantineShadow;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
  withCloseButton: boolean;
  titleId: string;
  bodyId: string;
  onClose(): void;
  closeButtonLabel: string;
  width?: number | string;
  title?: React.ReactNode;
}

export const PopoverBody = forwardRef<HTMLDivElement, PopoverBodyProps>(
  (
    {
      classNames,
      styles,
      shadow,
      spacing,
      radius,
      withCloseButton,
      title,
      titleId,
      bodyId,
      onClose,
      closeButtonLabel,
      children,
      width,
      ...others
    }: PopoverBodyProps,
    ref
  ) => {
    const { classes } = useStyles(
      { shadow, radius, spacing, width },
      { classNames, styles, name: 'Popover' }
    );

    return (
      <div
        role="dialog"
        tabIndex={-1}
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className={classes.wrapper}
        ref={ref}
        {...others}
      >
        <div className={classes.popover}>
          <div className={classes.body}>
            {!!title && (
              <div className={classes.header}>
                <Text size="sm" id={titleId} className={classes.title}>
                  {title}
                </Text>
              </div>
            )}

            {withCloseButton && (
              <CloseButton
                size="sm"
                onClick={onClose}
                aria-label={closeButtonLabel}
                className={classes.close}
              />
            )}

            <div className={classes.inner} id={bodyId}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PopoverBody.displayName = '@mantine/core/PopoverBody';
