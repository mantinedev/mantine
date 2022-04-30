import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  Selectors,
  useMantineDefaultProps,
} from '@mantine/styles';
import { filterChildrenByType } from '../../../utils';
import { Avatar } from '../Avatar';
import { Box } from '../../Box';
import { Center } from '../../Center';
import useStyles from './AvatarsGroup.styles';

export type AvatarsGroupStylesNames = Selectors<typeof useStyles>;

export interface AvatarsGroupProps
  extends DefaultProps<AvatarsGroupStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Avatar /> components only */
  children?: React.ReactNode;

  /** Child <Avatar /> components width and height */
  size?: MantineNumberSize;

  /** Child <Avatar /> radius */
  radius?: MantineNumberSize;

  /** Maximum amount of <Avatar /> components rendered, everything after limit is truncated */
  limit?: number;

  /** Spacing between avatars */
  spacing?: MantineNumberSize;

  /** Total number of child <Avatar />, overrides the truncated amount */
  total?: number;
}

const defaultProps: Partial<AvatarsGroupProps> = {
  size: 'md',
  radius: 'xl',
  limit: 2,
  spacing: 'lg',
};

export const AvatarsGroup = forwardRef<HTMLDivElement, AvatarsGroupProps>(
  (props: AvatarsGroupProps, ref) => {
    const {
      className,
      children,
      size = 'md',
      radius = 'xl',
      limit = 2,
      classNames,
      styles,
      spacing = 'lg',
      total,
      ...others
    } = useMantineDefaultProps('AvatarsGroup', defaultProps, props);
    const { classes, cx } = useStyles({ spacing }, { classNames, styles, name: 'AvatarsGroup' });

    const avatars = filterChildrenByType(children, Avatar).map((child, index) =>
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
      <Box className={cx(className, classes.root)} ref={ref} {...others}>
        {avatars.slice(0, avatars.length - extraAvatars)}
        {truncatedAvatars ? (
          <Avatar
            size={size}
            radius={radius}
            className={classes.child}
            style={{ zIndex: limit + 1 }}
          >
            <Center className={classes.truncated}>+{truncatedAvatars}</Center>
          </Avatar>
        ) : null}
      </Box>
    );
  }
);

AvatarsGroup.displayName = '@mantine/core/AvatarsGroup';
