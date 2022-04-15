import { createStyles, CSSObject, MantineTheme } from '@mantine/styles';
import { AccordionStylesParams } from '../Accordion.types';

function getVariantStyles(theme: MantineTheme, { variant }: AccordionStylesParams): CSSObject {
  const borderColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];
  const filledColor = theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];

  if (variant === 'default') {
    return {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      borderBottom: `1px solid ${borderColor}`,
    };
  }

  if (variant === 'contained') {
    return {
      border: `1px solid ${borderColor}`,
      transition: 'background-color 150ms ease',

      '&[data-active]': {
        backgroundColor: filledColor,
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
        backgroundColor: filledColor,
      },
    };
  }

  if (variant === 'separated') {
    return {
      borderRadius: theme.radius.sm,
      backgroundColor: filledColor,
      border: '1px solid transparent',
      transition: 'background-color 150ms ease',

      '& + &': {
        marginTop: theme.spacing.md,
      },

      '&[data-active]': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        borderColor,
      },
    };
  }

  return {};
}

export default createStyles((theme, params: AccordionStylesParams) => ({
  item: {
    overflow: 'hidden',
    ...getVariantStyles(theme, params),
  },
}));
