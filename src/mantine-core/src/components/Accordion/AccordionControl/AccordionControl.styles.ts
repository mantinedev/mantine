import { createMemoStyles, MantineTheme } from '../../../theme';

interface AccordionControlStyles {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createMemoStyles({
  label: {
    color: 'inherit',
    fontWeight: 500,
  },

  item: ({ theme }: AccordionControlStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '&:last-of-type': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  }),

  icon: ({ transitionDuration }: AccordionControlStyles) => ({
    transition: `transform ${transitionDuration}ms ease`,
  }),

  itemOpened: {
    '& $icon': {
      transform: 'rotate(180deg)',
    },
  },

  control: ({ theme }: AccordionControlStyles) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    textAlign: 'left',
    color: 'inherit',
  }),

  content: ({ transitionDuration }: AccordionControlStyles) => ({
    transition: `height ${transitionDuration}ms ease`,
    overflow: 'hidden',
  }),

  contentInner: ({ theme, transitionDuration }: AccordionControlStyles) => ({
    paddingTop: 0,
    padding: theme.spacing.md,
    transition: `opacity ${transitionDuration}ms ease`,
  }),
});
