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
}

export function TimelineItem({
  className,
  themeOverride,
  bullet,
  title,
  bulletSize = 20,
  classNames,
  styles,
  children,
  ...others
}: TimelineItemProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, bulletSize }, classNames, 'timeline');
  const _styles = mergeStyles(classes, styles);

  return (
    <div className={cx(classes.item, className)} {...others}>
      {bullet ? (
        <div className={classes.itemCustomBullet} style={_styles.itemCustomBullet}>
          {bullet}
        </div>
      ) : (
        <div className={classes.itemBullet} style={_styles.itemBullet} />
      )}

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
