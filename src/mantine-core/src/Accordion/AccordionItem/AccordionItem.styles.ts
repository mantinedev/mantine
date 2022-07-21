import { createStyles, CSSObject, MantineTheme } from '@mantine/styles';
import { AccordionStylesParams } from '../Accordion.types';

function getVariantStyles(
  theme: MantineTheme,
  { variant, radius }: AccordionStylesParams
): CSSObject {
  const borderColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];
  const filledColor = theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];
  const borderRadius = theme.fn.radius(radius);

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
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,

        '& > [data-accordion-control]': {
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
        },
      },

      '&:last-of-type': {
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,

        '& > [data-accordion-control]': {
          borderBottomRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
        },
      },

      '& + &': {
        borderTop: 0,
      },
    };
  }

  if (variant === 'filled') {
    return {
      borderRadius,

      '&[data-active]': {
        backgroundColor: filledColor,
      },
    };
  }

  if (variant === 'separated') {
    return {
      borderRadius,
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
  item: getVariantStyles(theme, params),
}));
