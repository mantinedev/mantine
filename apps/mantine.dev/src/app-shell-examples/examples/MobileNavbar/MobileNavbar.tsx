import { LightningIcon, PaletteIcon, PuzzlePieceIcon } from '@phosphor-icons/react';
import {
  AppShell,
  Burger,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Surface,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './MobileNavbar.module.css';

const links = ['Features', 'Pricing', 'Docs', 'Blog'];

const features = [
  {
    icon: LightningIcon,
    title: 'Fast to build',
    description: 'More than 120 components and 70 hooks to ship your product in days, not months.',
  },
  {
    icon: PaletteIcon,
    title: 'Fully themeable',
    description:
      'Colors, fonts, spacing and radius are defined once in the theme and used everywhere.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Works with your stack',
    description: 'Use it with Next.js, Vite, Remix or any other React framework.',
  },
];

export function MobileNavbar() {
  const [opened, { toggle }] = useDisclosure();

  const items = links.map((link) => (
    <UnstyledButton key={link} className={classes.control}>
      {link}
    </UnstyledButton>
  ));

  const featureCards = features.map((feature) => (
    <Surface key={feature.title} level={0} withBorder p="md">
      <feature.icon size={24} />
      <Text className={classes.featureTitle} mt="sm">
        {feature.title}
      </Text>
      <Text size="sm" mt={4}>
        {feature.description}
      </Text>
    </Surface>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding={{ base: 'md', sm: 'xl' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <MantineLogo size={28} />
          </Group>
          <Group gap={0} visibleFrom="sm">
            {items}
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <AppShell.Section grow>{items}</AppShell.Section>
        <AppShell.Section px="xs">
          <Stack gap="xs">
            <Button variant="default" fullWidth>
              Log in
            </Button>
            <Button fullWidth>Sign up</Button>
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Container size="sm" py="xl">
          <Stack gap="xl">
            <Stack gap="md">
              <Title order={1} c="var(--mantine-color-bright)">
                Build your next app with Mantine
              </Title>
              <Text>
                A React components library with everything you need to build a modern web
                application, from forms and tables to charts and date pickers.
              </Text>
              <Group>
                <Button>Get started</Button>
                <Button variant="default">View on GitHub</Button>
              </Group>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 3 }}>{featureCards}</SimpleGrid>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
