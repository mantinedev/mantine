import React from 'react';
import { Box } from '@mantine/core';

interface HeaderLinkProps {
  link: string;
  children: React.ReactNode;
}

export function HeaderLink({ link, children }: HeaderLinkProps) {
  return (
    <Box
      component="a"
      href={link}
      sx={(theme) => ({
        lineHeight: 1,
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        padding: '12px 15px',
        borderRadius: theme.radius.md,
        fontSize: theme.fontSizes.sm,
        letterSpacing: 0.2,

        '&:hover': {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </Box>
  );
}
