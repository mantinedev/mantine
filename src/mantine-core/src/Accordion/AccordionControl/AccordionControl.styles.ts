import { createStyles, MantineTheme, CSSObject, rem } from '@mantine/styles';
import { AccordionStylesParams, AccordionChevronPosition } from '../Accordion.types';

export interface AccordionControlStylesParams extends AccordionStylesParams {
  chevronPosition: AccordionChevronPosition;
  transitionDuration: number;
  chevronSize: number | string;
}

function getVariantStyles(theme: MantineTheme, variant: string): CSSObject {
  if (variant === 'default' || variant === 'contained') {
    return theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    });
  }

  return {};
}

export default createStyles(
  (
    theme,
    { transitionDuration, chevronPosition, chevronSize }: AccordionControlStylesParams,
    { variant }
  ) => ({
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: chevronPosition === 'left' ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === 'left' ? theme.spacing.lg : 0,
    },

    chevron: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: chevronPosition === 'right' ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === 'right' ? theme.spacing.lg : 0,
      width: rem(chevronSize),
      minWidth: rem(chevronSize),

      '&[data-rotate]': {
        transform: 'rotate(180deg)',
      },
    },

    label: {
      color: 'inherit',
      fontWeight: 400,
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    itemTitle: {
      margin: 0,
      padding: 0,
    },

    control: {
      ...theme.fn.focusStyles(),
      ...theme.fn.fontStyles(),
      ...getVariantStyles(theme, variant),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: chevronPosition === 'right' ? 'row-reverse' : 'row',
      paddingRight: theme.spacing.md,
      paddingLeft:
        chevronPosition === 'right' ? `calc(${theme.spacing.md} + ${rem(4)})` : theme.spacing.xs,
      textAlign: 'left',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',
        ...theme.fn.hover({ backgroundColor: 'transparent' }),
      },
    },
  })
);
