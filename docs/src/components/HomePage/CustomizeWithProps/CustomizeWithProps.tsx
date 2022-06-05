import React from 'react';
import { Space, Box } from '@mantine/core';
import { Demo, TimelineDemos } from '@mantine/demos';
import { PageSection } from '../PageSection/PageSection';

export function CustomizeWithProps() {
  return (
    <PageSection
      title="Customize components"
      description="Every Mantine component supports visual customizations with props – you can quickly prototype and experiment by just modifying component props:"
      white
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.darken(theme.colors.blue[7], 0.25)
            : theme.colors.blue[6],
        backgroundImage: `linear-gradient(52deg, ${theme.colors.blue[7]} 3%, ${
          theme.colors.cyan[theme.colorScheme === 'dark' ? 6 : 5]
        } 97%)`,
      })}
    >
      <Space h="xl" />
      <Box
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          borderRadius: theme.radius.md,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Demo data={TimelineDemos.configurator} />
      </Box>
    </PageSection>
  );
}
