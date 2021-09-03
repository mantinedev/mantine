import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { Text } from '../../Text/Text';
import useStyles from './TimelineItem.styles';

export type TimelineItemStylesNames = keyof ReturnType<typeof useStyles>;

export interface TimelineItemProps
  extends DefaultProps<TimelineItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: React.ReactNode;
  bullet?: React.ReactNode;
  bulletSize?: number;
  children?: React.ReactNode;
  active?: boolean;
  lineActive?: boolean;
  color?: string;
  align?: 'right' | 'left';
  lineVariant?: 'solid' | 'dashed' | 'dotted';
  lineWidth?: number;
}

export function TimelineItem({
  className,
  themeOverride,
  bullet,
  title,
  bulletSize = 20,
  lineWidth = 4,
  active,
  lineActive,
  classNames,
  styles,
  children,
  color,
  align,
  lineVariant = 'solid',
  ...others
}: TimelineItemProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles(
    { theme, bulletSize, color, align, lineVariant, lineWidth },
    classNames,
    'timeline'
  );
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(
        classes.item,
        { [classes.itemLineActive]: lineActive, [classes.itemActive]: active },
        className
      )}
      {...others}
    >
      <div
        className={cx(classes.itemBullet, { [classes.itemBulletWithChild]: bullet })}
        style={_styles.itemBullet}
      >
        {bullet}
      </div>

      <div className={classes.itemBody} style={_styles.itemBody}>
        {title && (
          <Text className={classes.itemTitle} style={_styles.itemTitle}>
            {title}
          </Text>
        )}

        <div className={classes.itemContent} style={_styles.itemContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

TimelineItem.displayName = '@mantine/core/TimelineItem';
