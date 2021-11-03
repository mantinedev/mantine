import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';

storiesOf('@mantine/core/Box', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          border: `1px solid ${theme.colors.gray[2]}`,
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
        })}
      >
        Just a box
      </Box>
    </div>
  ))
  .add('With custom component', () => (
    <div style={{ padding: 40 }}>
      <Box
        component="a"
        href="https://mantine.dev"
        target="_blank"
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          border: `1px solid ${theme.colors.gray[2]}`,
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
        })}
      >
        Just a box
      </Box>
    </div>
  ));
