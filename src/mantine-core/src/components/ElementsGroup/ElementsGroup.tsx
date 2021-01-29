import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './ElementsGroup.styles.less';

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  position?: 'right' | 'center' | 'left';
  noWrap?: boolean;
}

export default function ElementsGroup({
  className,
  position = 'left',
  children,
  noWrap = false,
  ...others
}: ElementsGroupProps) {
  return (
    <div
      className={cx(
        classes.elementsGroup,
        classes[position],
        { [classes.noWrap]: noWrap },
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
}

ElementsGroup.displayName = '@mantine/core/ElementsGroup';
