import { PrismTheme } from 'prism-react-renderer';
import { MantineTheme } from '@mantine/core';

export const dark = (theme: MantineTheme): PrismTheme => ({
  plain: {
    color: theme.colors.gray[4],
    backgroundColor: theme.colors.dark[8],
  },

  styles: [
    {
      types: ['comment'],
      style: {
        color: theme.colors.gray[6],
      },
    },
    {
      types: ['string', 'inserted', 'selector', 'atrule'],
      style: {
        color: theme.colors.teal[4],
      },
    },
    {
      types: ['number'],
      style: {
        color: theme.colors.blue[4],
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: theme.colors.orange[5],
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.colors.gray[5],
      },
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.gray[5],
      },
    },
    {
      types: ['class-name', 'attr-name'],
      style: {
        color: theme.colors.yellow[5],
      },
    },
    {
      types: ['tag', 'deleted'],
      style: {
        color: theme.colors.red[6],
      },
    },
    {
      types: ['operator'],
      style: {
        color: theme.colors.gray[5],
      },
    },
    {
      types: ['boolean'],
      style: {
        color: theme.colors.red[6],
      },
    },
    {
      types: ['keyword'],
      style: {
        color: theme.colors.indigo[3],
      },
    },
    {
      types: ['doctype'],
      style: {
        color: theme.colors.gray[5],
      },
    },
    {
      types: ['url'],
      style: {
        color: theme.colors.gray[5],
      },
    },
  ],
});

export const light = (theme: MantineTheme): PrismTheme => ({
  plain: {
    color: theme.colors.gray[9],
    backgroundColor: theme.fn.rgba(theme.colors.gray[0], 0.65),
  },

  styles: [
    {
      types: ['comment'],
      style: {
        color: theme.colors.gray[6],
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: theme.colors.indigo[9],
      },
    },
    {
      types: ['number'],
      style: {
        color: theme.colors.blue[7],
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'selector', 'atrule'],
      style: {
        color: theme.colors.lime[9],
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.colors.gray[7],
      },
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.violet[9],
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.colors.green[9],
      },
    },
    {
      types: ['class-name'],
      style: {
        color: theme.colors.red[9],
      },
    },
    {
      types: ['tag', 'deleted'],
      style: {
        color: theme.colors.violet[9],
      },
    },
    {
      types: ['operator'],
      style: {
        color: theme.colors.red[9],
      },
    },
    {
      types: ['boolean'],
      style: {
        color: theme.colors.red[9],
      },
    },
    {
      types: ['keyword'],
      style: {
        color: theme.colors.red[9],
      },
    },
    {
      types: ['doctype'],
      style: {
        color: theme.colors.gray[7],
      },
    },
    {
      types: ['url'],
      style: {
        color: theme.colors.gray[7],
      },
    },
  ],
});

export const getPrismTheme = (theme: MantineTheme, colorScheme: 'light' | 'dark') =>
  colorScheme === 'dark' ? dark(theme) : light(theme);
