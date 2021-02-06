import React, { forwardRef } from 'react';
import cx from 'clsx';
import Text from '../Text/Text';
import useStyles from './Anchor.styles';

type HTMLAnchorProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>;

interface AnchorProps extends React.ComponentProps<typeof Text>, HTMLAnchorProps {}

const Anchor = forwardRef(
  ({ className, children, ...others }: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const classes = useStyles();
    return (
      <Text<HTMLAnchorProps>
        component="a"
        className={cx(classes.anchor, className)}
        ref={ref}
        theme="primary"
        {...others}
      >
        {children}
      </Text>
    );
  }
);

Anchor.displayName = '@mantine/core/Anchor';

export default Anchor;
