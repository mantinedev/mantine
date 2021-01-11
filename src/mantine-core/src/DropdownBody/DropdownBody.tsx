import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './DropdownBody.styles.less';

interface DropdownBodyProps extends DefaultProps {
  children: React.ReactNode;
  elementRef?: React.RefObject<HTMLDivElement>;
  noPadding?: boolean;
}

export default function DropdownBody({
  className,
  children,
  noPadding = false,
  elementRef,
  ...others
}: DropdownBodyProps) {
  return (
    <div
      className={cx(classes.dropdownBody, { [classes.withPadding]: !noPadding }, className)}
      ref={elementRef}
      {...others}
    >
      {children}
    </div>
  );
}

DropdownBody.displayName = '@mantine/core/DropdownBody';
