import { createStyles } from '@mantine/styles';
import { AccordionStylesParams } from '../Accordion.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default createStyles((theme, _params: AccordionStylesParams) => ({
  panel: {
    ...theme.fn.fontStyles(),
    wordBreak: 'break-word',
    lineHeight: theme.lineHeight,
  },

  content: {
    padding: theme.spacing.md,
    paddingTop: `calc(${theme.spacing.xs} / 2)`,
  },
}));
