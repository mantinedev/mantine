import { IconArrowUpRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Anchor, AnchorProps, ElementProps } from '@mantine/core';
import classes from './HomePageLearnMore.module.css';

interface HomePageLearnMoreProps extends AnchorProps, ElementProps<'a', 'color'> {}

export function HomePageLearnMore({ className, children, ...others }: HomePageLearnMoreProps) {
  return (
    <Anchor className={cx(classes.root, className)} {...others}>
      <span className={classes.inner}>
        {children}
        <IconArrowUpRight size={16} />
      </span>
    </Anchor>
  );
}
