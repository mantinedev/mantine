import React from 'react';
import { Search } from 'tabler-icons-react';
import { UnstyledButton, UnstyledButtonProps, Text, Group } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { useSpotlight } from '@mantine/spotlight';

export function SearchControl(props: UnstyledButtonProps) {
  const os = useOs();
  const spotlight = useSpotlight();

  return (
    <UnstyledButton
      {...props}
      pl="sm"
      pr={5}
      onClick={spotlight.openSpotlight}
      sx={(theme) => ({
        height: 34,
        borderRadius: theme.radius.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
        }`,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.dark[5], 0.85)
              : theme.fn.rgba(theme.colors.gray[0], 0.35),
        },

        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
      })}
    >
      <Group spacing="xs">
        <Search size={14} />
        <Text size="sm" color="dimmed" pr={80}>
          Search
        </Text>
        <Text
          weight={700}
          sx={(theme) => ({
            fontSize: 11,
            lineHeight: 1,
            padding: '4px 7px',
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            border: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
            }`,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
        >
          {os === 'undetermined' || os === 'macos' ? '⌘' : 'Ctrl'} + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}
