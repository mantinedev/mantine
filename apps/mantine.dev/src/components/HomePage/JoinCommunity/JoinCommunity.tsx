import { Space } from '@mantine/core';
import { SocialCards } from '../../SocialCards';
import { PageSection } from '../PageSection/PageSection';

export function JoinCommunity() {
  return (
    <PageSection title="Join the community" alt>
      <Space h="md" />
      <SocialCards />
      <Space h={120} />
    </PageSection>
  );
}
