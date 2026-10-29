'use client';

import Link from 'next/link';
import { Anchor, Container, Stack, Text, Title } from '@mantine/core';

const links = [
  { href: '/getting-started', label: 'Getting started' },
  { href: '/skills/mantine-form', label: 'mantine-form examples' },
  { href: '/skills/mantine-combobox', label: 'mantine-combobox examples' },
  { href: '/skills/mantine-schedule', label: 'mantine-schedule examples' },
  { href: '/skills/mantine-ui', label: 'mantine-ui examples' },
];

export default function HomePage() {
  return (
    <Container size="md" py="xl">
      <Title c="var(--mantine-color-bright)">Mantine for AI agents</Title>
      <Text mt="md">
        Skills, MCP server and examples for building Mantine applications with AI agents.
      </Text>

      <Stack gap="xs" mt="xl">
        {links.map((link) => (
          <Anchor key={link.href} component={Link} href={link.href}>
            {link.label}
          </Anchor>
        ))}
      </Stack>
    </Container>
  );
}
