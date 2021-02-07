import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/theme';
import useStyles from './DropdownBody.styles';

interface DropdownBodyProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  children: React.ReactNode;
  noPadding?: boolean;
}

const DropdownBody = forwardRef(
  (
    { className, children, noPadding = false, ...others }: DropdownBodyProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const classes = useStyles();

    return (
      <div
        className={cx(classes.dropdownBody, { [classes.withPadding]: !noPadding }, className)}
        ref={ref}
        {...others}
      >
        {children}
      </div>
    );
  }
);

DropdownBody.displayName = '@mantine/core/DropdownBody';

export default DropdownBody;
