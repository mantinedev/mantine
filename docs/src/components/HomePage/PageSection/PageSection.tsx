import React from 'react';
import { Container, Text } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './PageSection.styles';

interface PageSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PageSection({ title, description, children }: PageSectionProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>{title}</SectionTitle>
        <Text className={classes.description} size="xl">
          {description}
        </Text>

        {children}
      </Container>
    </div>
  );
}
