import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './ElementsGroup.styles.less';

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  position?: 'right' | 'center' | 'left';
  children: React.ReactNode;
}

export default function ElementsGroup({
  className,
  position = 'left',
  children,
  ...others
}: ElementsGroupProps) {
  return (
    <div className={cx(classes.elementsGroup, classes[position], className)} {...others}>
      {children}
    </div>
  );
}
