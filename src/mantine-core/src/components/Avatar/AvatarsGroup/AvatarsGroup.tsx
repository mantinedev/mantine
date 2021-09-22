import React from 'react';
import { Avatar } from '@mantine/core';
import { DefaultProps, MantineNumberSize, mergeStyles, ClassNames } from '@mantine/styles';
import { Center } from '../../Center';
import useStyles from './AvatarsGroup.styles';

export type AvatarsGroupStylesNames = ClassNames<typeof useStyles>;

export interface AvatarsGroupProps
  extends DefaultProps<AvatarsGroupStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Avatar /> components only */
  children?: React.ReactNode;

  /** Child Avatars width and height */
  size?: MantineNumberSize;

  /** Child Avatars radius */
  radius?: MantineNumberSize;

  /** Maximum amount of Avatar components rendered, everything after limit is truncated */
  limit?: number;

  /** Spacing between avatars */
  spacing?: MantineNumberSize;
}

export function AvatarsGroup({
  className,
  style,
  children,
  size = 'md',
  radius = 'xl',
  limit = 2,
  classNames,
  styles,
  spacing = 'lg',
  ...others
}: AvatarsGroupProps) {
  const { classes, cx } = useStyles({ spacing }, classNames, 'avatars-group');
  const _styles = mergeStyles(classes, styles);

  const avatars = React.Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === Avatar)
    .map((child: React.ReactElement, index) => {
      const childStyle = {
        ...child.props.style,
        zIndex: index + 1,
      };
      return React.cloneElement(child, {
        size,
        radius,
        key: index,
        className: cx(classes.child, child.props.className),
        style: { ...childStyle, ..._styles.child },
      });
    });

  const clampedMax = limit < 2 ? 2 : limit;
  const extraAvatars = avatars.length > clampedMax ? avatars.length - clampedMax : 0;

  return (
    <div className={cx(className, classes.root)} style={{ ...style, ..._styles.root }} {...others}>
      {avatars.slice(0, avatars.length - extraAvatars)}
      {extraAvatars ? (
        <Avatar
          size={size}
          radius={radius}
          className={classes.child}
          style={{ ..._styles.child, zIndex: limit + 1 }}
        >
          <Center className={classes.truncated} style={_styles.truncated}>
            +{extraAvatars}
          </Center>
        </Avatar>
      ) : null}
    </div>
  );
}

AvatarsGroup.displayName = '@mantine/core/AvatarsGroup';
