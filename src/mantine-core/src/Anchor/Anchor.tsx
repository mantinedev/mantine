import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import Text from '../Text/Text';
import useStyles from './Anchor.styles';

interface AnchorProps
  extends Omit<React.ComponentProps<typeof Text>, 'symbol'>,
    React.ComponentProps<'a'> {}

const Anchor = forwardRef(
  (
    { className, children, themeOverride, ...others }: AnchorProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });

    return (
      <Text<'a'> component="a" className={cx(classes.anchor, className)} ref={ref} {...others}>
        {children}
      </Text>
    );
  }
);

Anchor.displayName = '@mantine/core/Anchor';

export default Anchor;
