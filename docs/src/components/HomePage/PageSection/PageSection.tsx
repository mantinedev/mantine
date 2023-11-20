import React from 'react';
import { Container, Text, BoxProps, ElementProps, Box } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import classes from './PageSection.module.css';

interface PageSectionProps extends BoxProps, ElementProps<'div'> {
  title: string;
  description?: string;
  children: React.ReactNode;
  alt?: boolean;
}

export function PageSection({ title, description, children, alt, ...others }: PageSectionProps) {
  return (
    <Box className={classes.wrapper} mod={{ alt }} {...others}>
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
