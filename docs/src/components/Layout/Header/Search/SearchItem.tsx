import React from 'react';
import { Text, Highlight } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import useStyles from './Search.styles';

interface SearchItemProps {
  slug: string;
  title: string;
  mantinePackage: string;
  group: string;
  query: string;
  elementRef?: any;
}

export default function SearchItem({
  slug,
  title,
  mantinePackage,
  group,
  query,
  elementRef,
  ...others
}: SearchItemProps) {
  const { classes } = useStyles();
  return (
    <button type="button" key={slug} tabIndex={-1} ref={elementRef} {...others}>
      <Highlight highlight={query}>{title}</Highlight>
      <Text color="gray" size="sm" className={classes.package}>
        {mantinePackage ? mantinePackage.replace('mantine-', '@mantine/') : upperFirst(group)}
      </Text>
    </button>
  );
}
