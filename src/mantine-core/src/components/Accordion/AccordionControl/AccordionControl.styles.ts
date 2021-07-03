import { createMemoStyles, MantineTheme } from '../../../theme';

interface AccordionControlStyles {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createMemoStyles({
  label: {},

  item: ({ theme }: AccordionControlStyles) => ({
    borderTop: `1px solid ${theme.colors.gray[2]}`,
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
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    textAlign: 'left',
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
