import React from 'react';
import { Space, Box } from '@mantine/core';
import { Demo, TimelineDemos } from '@mantine/demos';
import { PageSection } from '../PageSection/PageSection';

export function CustomizeWithProps() {
  return (
    <PageSection
      title="Customize components"
      description="Every Mantine component supports visual customizations with props – you can quickly prototype and experiment by just modifying component props:"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
    >
      <Box
        mt="xl"
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          borderRadius: theme.radius.md,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Demo data={TimelineDemos.configurator} />
      </Box>
      <Space h={60} />
    </PageSection>
  );
}
