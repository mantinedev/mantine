import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import Text from '../Text/Text';
import useStyles from './Anchor.styles';

type HTMLAnchorProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'size' | 'color'>;

interface AnchorProps extends React.ComponentProps<typeof Text>, HTMLAnchorProps {}

const Anchor = forwardRef(
  (
    { className, children, themeOverride, ...others }: AnchorProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });

    return (
      <Text<HTMLAnchorProps>
        component="a"
        className={cx(classes.anchor, className)}
        ref={ref}
        {...others}
      >
        {children}
      </Text>
    );
  }
);

Anchor.displayName = '@mantine/core/Anchor';

export default Anchor;
