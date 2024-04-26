import { AppShell, Group, rem, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?';

export function Headroom() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {Array(40)
          .fill(0)
          .map((_, index) => (
            <Text size="lg" key={index} my="md" maw={600} mx="auto">
              {lorem}
            </Text>
          ))}
      </AppShell.Main>
    </AppShell>
  );
}
