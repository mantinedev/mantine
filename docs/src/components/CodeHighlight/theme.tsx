import { PrismTheme } from 'prism-react-renderer';
import { DEFAULT_THEME } from '@mantine/theme';

export const theme: PrismTheme = {
  plain: {
    color: DEFAULT_THEME.colors.gray[4],
    backgroundColor: DEFAULT_THEME.colors.gray[9],
  },

  styles: [
    {
      types: ['comment'],
      style: {
        color: DEFAULT_THEME.colors.gray[6],
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: DEFAULT_THEME.colors.teal[4],
      },
    },
    {
      types: ['number'],
      style: {
        color: DEFAULT_THEME.colors.blue[4],
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: DEFAULT_THEME.colors.orange[5],
      },
    },
    {
      types: ['punctuation', 'selector'],
      style: {
        color: DEFAULT_THEME.colors.gray[5],
      },
    },
    {
      types: ['variable'],
      style: {
        color: DEFAULT_THEME.colors.gray[5],
      },
    },
    {
      types: ['class-name', 'attr-name'],
      style: {
        color: DEFAULT_THEME.colors.yellow[5],
      },
    },
    {
      types: ['tag', 'deleted'],
      style: {
        color: DEFAULT_THEME.colors.red[6],
      },
    },
    {
      types: ['operator'],
      style: {
        color: DEFAULT_THEME.colors.gray[5],
      },
    },
    {
      types: ['boolean'],
      style: {
        color: DEFAULT_THEME.colors.red[6],
      },
    },
    {
      types: ['keyword'],
      style: {
        color: DEFAULT_THEME.colors.indigo[3],
      },
    },
    {
      types: ['doctype'],
      style: {
        color: DEFAULT_THEME.colors.gray[5],
      },
    },
    {
      types: ['url'],
      style: {
        color: DEFAULT_THEME.colors.gray[5],
      },
    },
  ],
};
