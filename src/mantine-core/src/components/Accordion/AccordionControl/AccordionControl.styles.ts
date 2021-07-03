import { createMemoStyles, MantineTheme } from '../../../theme';

interface AccordionControlStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  control: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  content: ({ theme }: AccordionControlStyles) => ({
    backgroundColor: theme.white,
    transition: 'height 200ms ease',
    overflow: 'hidden',
  }),

  contentInner: ({ theme }: AccordionControlStyles) => ({
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  }),
});
