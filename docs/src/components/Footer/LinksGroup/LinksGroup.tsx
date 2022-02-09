import React from 'react';
import { Link } from 'gatsby';
import { Text } from '@mantine/core';
import useStyles from './LinksGroup.styles';

export interface LinksGroupProps {
  title: string;
  data: {
    type: 'link' | 'gatsby';
    link: string;
    label: string;
  }[];
}

export function LinksGroup({ data, title }: LinksGroupProps) {
  const { classes } = useStyles();
  const links = data.map((link, index) => {
    const props = link.type === 'gatsby' ? { to: link.link } : { href: link.link };
    return (
      <Text<any>
        className={classes.link}
        component={link.type === 'gatsby' ? Link : 'a'}
        {...props}
        key={index}
      >
        {link.label}
      </Text>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {links}
    </div>
  );
}
