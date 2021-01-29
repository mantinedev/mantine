import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Hr.styles.less';

interface HrProps extends DefaultProps, React.HTMLProps<HTMLHRElement> {
  type?: 'solid' | 'dashed' | 'dotted';
}

export default function Hr({ className, type = 'dashed', style, ...others }: HrProps) {
  return (
    <hr
      className={cx(classes.hr, className)}
      style={{ ...style, borderTopStyle: type }}
      {...others}
    />
  );
}

Hr.displayName = '@mantine/core/Hr';
