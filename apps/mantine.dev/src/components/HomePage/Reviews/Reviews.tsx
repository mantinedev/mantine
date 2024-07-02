import { IconExternalLink } from '@tabler/icons-react';
import { Button, Group, SimpleGrid, Space } from '@mantine/core';
import { PageSection } from '../PageSection/PageSection';
import { Review } from './Review/Review';
import { reviews } from './reviews-data';

export function Reviews() {
  const items = reviews.map((data, index) => <Review key={index} data={data} />);
  return (
    <PageSection title="What people say" alt>
      <Space h="xl" />
      <SimpleGrid cols={{ md: 2 }} spacing="lg">
        {items}
      </SimpleGrid>

      <Group justify="center" mt="xl">
        <Button
          radius="md"
          component="a"
          size="lg"
          href="https://github.com/orgs/mantinedev/discussions/categories/kind-words"
          rightSection={<IconExternalLink size={18} />}
          target="_blank"
          style={{ background: 'var(--docs-home-page-gradient)' }}
          bd="none"
        >
          View more user feedback
        </Button>
      </Group>
    </PageSection>
  );
}
