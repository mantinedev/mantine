import React from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';
import classes from './LinksGroup.module.css';

export interface LinksGroupProps {
  title: string;
  data: {
    type: 'link' | 'next';
    link: string;
    label: string;
  }[];
}

export function LinksGroup({ data, title }: LinksGroupProps) {
  const links = data.map((link, index) => (
    <Text
      className={classes.link}
      component={link.type === 'next' ? (Link as unknown as 'a') : 'a'}
      href={link.link}
      key={index}
    >
      {link.label}
    </Text>
  ));

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {links}
    </div>
  );
}
