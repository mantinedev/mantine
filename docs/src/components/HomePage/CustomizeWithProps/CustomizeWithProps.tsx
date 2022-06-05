import { Space } from '@mantine/core';
import React from 'react';
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
      <Space h="xl" />
      <Demo data={TimelineDemos.configurator} configuratorProps={{ includeCode: false }} />
    </PageSection>
  );
}
