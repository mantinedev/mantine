import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Anchor.styles.less';

interface AnchorProps extends DefaultProps, React.HTMLProps<HTMLAnchorElement> {}

const Anchor = forwardRef(
  ({ className, children, ...others }: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => (
    <a className={cx(classes.anchor, className)} ref={ref} {...others}>
      {children}
    </a>
  )
);

Anchor.displayName = '@mantine/core/Anchor';

export default Anchor;
