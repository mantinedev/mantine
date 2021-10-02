import React from 'react';
import { Link } from 'gatsby';
import useStyles from './GatsbyLink.styles';

export default function GatsbyLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { classes } = useStyles();
  return <Link className={classes.link} {...props} />;
}
