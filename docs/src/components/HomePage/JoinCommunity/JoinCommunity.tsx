import { Space } from '@mantine/core';
import React from 'react';
import { Community } from '../../Community/Community';
import { PageSection } from '../PageSection/PageSection';

export function JoinCommunity() {
  return (
    <PageSection
      title="Join the community"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Space h="md" />
      <Community />
      <Space h={120} />
    </PageSection>
  );
}
