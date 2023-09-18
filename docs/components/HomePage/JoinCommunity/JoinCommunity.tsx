import { Space } from '@mantine/core';
import React from 'react';
import { SocialCards } from '../../SocialCards';
import { PageSection } from '../PageSection/PageSection';

export function JoinCommunity() {
  return (
    <PageSection title="Join the community">
      <Space h="md" />
      <SocialCards />
      <Space h={120} />
    </PageSection>
  );
}
