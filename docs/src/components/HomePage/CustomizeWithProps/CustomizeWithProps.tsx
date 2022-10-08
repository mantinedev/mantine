import React from 'react';
import { Space, Box, useMantineTheme } from '@mantine/core';
import { TimelineDemos } from '@mantine/demos';
import { Demo } from '@mantine/ds';
import { PageSection } from '../PageSection/PageSection';

export function CustomizeWithProps() {
  const theme = useMantineTheme();
  return (
    <PageSection
      title="Customize components"
      description="Every Mantine component supports visual customizations with props – you can quickly prototype and experiment by just modifying component props:"
      sx={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }}
    >
      <Box
        mt="xl"
        sx={{
          boxShadow: theme.shadows.md,
          borderRadius: theme.radius.md,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        }}
      >
        <Demo
          data={TimelineDemos.configurator}
          configuratorProps={{
            radius: 'md',
            previewBackground: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          }}
        />
      </Box>
      <Space h={60} />
    </PageSection>
  );
}
