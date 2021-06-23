import React from 'react';
import { Link } from 'gatsby';
import { Title } from '@mantine/core';
import { NEXT_STEPS_DATA } from './data';
import useStyles from './NextSteps.styles';

export function NextSteps() {
  const classes = useStyles();
  const items = NEXT_STEPS_DATA.map((item) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const LinkComponent = item.type === 'gatsby' ? Link : (props: any) => <a {...props} />;
    const linkProps = item.type === 'gatsby' ? { to: item.link } : { href: item.link };

    return <LinkComponent {...linkProps}>Link</LinkComponent>;
  });
  return (
    <div className={classes.wrapper}>
      <Title>Next steps</Title>
      <div className={classes.links}>{items}</div>
    </div>
  );
}
