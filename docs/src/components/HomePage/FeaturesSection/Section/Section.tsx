import React from 'react';
import { Title, Text } from '@mantine/core';
import useStyles from './Section.styles';

interface SectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.meta}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.description}>{description}</Text>
      </div>

      <div className={classes.body}>{children}</div>
    </div>
  );
}
