import React from 'react';
import { UnstyledButton, Text, Group } from '@mantine/core';
import { Link } from 'gatsby';
import { FRAMEWORKS_DATA } from './data';
import useStyles from './FrameworksControls.styles';

export function FrameworksControls() {
  const { classes } = useStyles();
  const controls = FRAMEWORKS_DATA.map((guide) => (
    <UnstyledButton component={Link} to={guide.link} className={classes.control} key={guide.id}>
      <guide.icon />
      <Text mt="md">{guide.title}</Text>
    </UnstyledButton>
  ));

  return <Group>{controls}</Group>;
}
