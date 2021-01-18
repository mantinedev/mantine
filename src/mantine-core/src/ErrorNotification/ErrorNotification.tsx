import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import Text from '../Text/Text';
import classes from './ErrorNotification.styles.less';

interface ErrorNotificationProps extends DefaultProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  error?: Error;
}

export default function ErrorNotification({
  className,
  title,
  description,
  error,
  ...others
}: ErrorNotificationProps) {
  return (
    <div className={cx(classes.errorNotification, className)} {...others}>
      {title && (
        <Text bold className={classes.title} size="sm">
          {title}
        </Text>
      )}

      <div className={classes.body}>
        {description && (
          <Text className={classes.description} size="sm">
            {description}
          </Text>
        )}

        {error instanceof Error && (
          <Text className={classes.error} theme="danger" size="sm">
            {error.message}
          </Text>
        )}
      </div>
    </div>
  );
}

ErrorNotification.displayName = '@mantine/core/ErrorNotification';
