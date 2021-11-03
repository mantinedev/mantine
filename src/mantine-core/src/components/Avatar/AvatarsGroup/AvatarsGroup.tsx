import React from 'react';
import { DefaultProps, MantineNumberSize, ClassNames } from '@mantine/styles';
import { Avatar } from '../Avatar';
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

  /** Total number of Child Avatars, overrides the truncated length */
  total?: number;
}

export function AvatarsGroup({
  className,
  children,
  size = 'md',
  radius = 'xl',
  limit = 2,
  classNames,
  styles,
  spacing = 'lg',
  total,
  sx,
  ...others
}: AvatarsGroupProps) {
  const { classes, cx } = useStyles({ spacing }, { classNames, styles, sx, name: 'AvatarsGroup' });

  const avatars = React.Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === Avatar)
    .map((child: React.ReactElement, index) =>
      React.cloneElement(child, {
        size,
        radius,
        key: index,
        className: cx(classes.child, child.props.className),
        style: {
          ...child.props.style,
          zIndex: index + 1,
        },
      })
    );

  const clampedMax = limit < 2 ? 2 : limit;
  const extraAvatars = avatars.length > clampedMax ? avatars.length - clampedMax : 0;
  const truncatedAvatars = total ? total - Math.min(avatars.length, clampedMax) : extraAvatars;

  return (
    <div className={cx(className, classes.root)} {...others}>
      {avatars.slice(0, avatars.length - extraAvatars)}
      {truncatedAvatars ? (
        <Avatar size={size} radius={radius} className={classes.child} style={{ zIndex: limit + 1 }}>
          <Center className={classes.truncated}>+{truncatedAvatars}</Center>
        </Avatar>
      ) : null}
    </div>
  );
}

AvatarsGroup.displayName = '@mantine/core/AvatarsGroup';
