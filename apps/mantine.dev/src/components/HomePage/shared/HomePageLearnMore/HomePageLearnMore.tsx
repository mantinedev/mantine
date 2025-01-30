import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Anchor, AnchorProps, ElementProps } from '@mantine/core';
import classes from './HomePageLearnMore.module.css';

interface HomePageLearnMoreProps extends AnchorProps, ElementProps<'a', 'color'> {
  href: string;
}

export function HomePageLearnMore({
  className,
  children,
  href = '/',
  ...others
}: HomePageLearnMoreProps) {
  return (
    <Anchor component={Link} href={href} className={cx(classes.root, className)} {...others}>
      <span className={classes.inner}>
        {children}
        <IconArrowUpRight size={16} />
      </span>
    </Anchor>
  );
}
