import { createStyles, MantineTheme, CSSObject } from '@mantine/styles';
import { AccordionStylesParams, AccordionChevronPosition } from '../Accordion.types';

export interface AccordionControlStylesParams extends AccordionStylesParams {
  chevronPosition: AccordionChevronPosition;
  transitionDuration: number;
  chevronSize: number;
}

function getVariantStyles(theme: MantineTheme, { variant }: AccordionStylesParams): CSSObject {
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
    { transitionDuration, chevronPosition, chevronSize, ...params }: AccordionControlStylesParams
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
      width: chevronSize,
      minWidth: chevronSize,

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
    },

    itemTitle: {
      margin: 0,
      padding: 0,
    },

    control: {
      ...theme.fn.focusStyles(),
      ...theme.fn.fontStyles(),
      ...getVariantStyles(theme, params),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: chevronPosition === 'right' ? 'row-reverse' : 'row',
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: chevronPosition === 'right' ? `calc(${theme.spacing.sm}px + 4px)` : null,
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
