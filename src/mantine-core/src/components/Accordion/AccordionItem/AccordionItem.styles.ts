import { createStyles, CSSObject, MantineTheme } from '@mantine/styles';
import { AccordionStylesParams } from '../Accordion.types';

function getVariantStyles(theme: MantineTheme, { variant }: AccordionStylesParams): CSSObject {
  if (variant === 'default') {
    return {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    };
  }

  if (variant === 'contained') {
    return {
      border: `1px solid ${theme.colors.gray[3]}`,
      transition: 'background-color 150ms ease',

      '&[data-active]': {
        backgroundColor: theme.colors.gray[0],
      },

      '&:first-of-type': {
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,
      },

      '&:last-of-type': {
        borderBottomRightRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      '& + &': {
        borderTop: 0,
      },
    };
  }

  if (variant === 'filled') {
    return {
      borderRadius: theme.radius.sm,

      '&[data-active]': {
        backgroundColor: theme.colors.gray[0],
      },
    };
  }

  if (variant === 'separated') {
    return {
      borderRadius: theme.radius.sm,
      backgroundColor: theme.colors.gray[0],
      border: '1px solid transparent',
      transition: 'background-color 150ms ease',

      '& + &': {
        marginTop: theme.spacing.md,
      },

      '&[data-active]': {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[3],
      },
    };
  }

  return {};
}

export default createStyles((theme, params: AccordionStylesParams) => ({
  item: getVariantStyles(theme, params),
}));
