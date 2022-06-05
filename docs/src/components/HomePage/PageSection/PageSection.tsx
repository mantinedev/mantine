import React from 'react';
import { Container, Text, DefaultProps, Box } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './PageSection.styles';

interface PageSectionProps extends DefaultProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageSection({ title, description, children, ...others }: PageSectionProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper} {...others}>
      <Container size={1100}>
        <SectionTitle>{title}</SectionTitle>
        {description && (
          <Text className={classes.description} size="xl">
            {description}
          </Text>
        )}

        {children}
      </Container>
    </Box>
  );
}
