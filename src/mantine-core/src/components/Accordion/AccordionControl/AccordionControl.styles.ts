import { createStyles } from '@mantine/tss';
import { getFocusStyles, getFontStyles } from '@mantine/theme';

interface AccordionControlStyles {
  transitionDuration: number;
}

export default createStyles((theme, { transitionDuration }: AccordionControlStyles, getRef) => {
  const icon = {
    ref: getRef(),
    transition: `transform ${transitionDuration}ms ease`,
  } as const;

  return {
    icon,

    label: {
      color: 'inherit',
      fontWeight: 500,
    },

    item: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

      '&:last-of-type': {
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      },
    },

    itemOpened: {
      [`& .${icon.ref}`]: {
        transform: 'rotate(180deg)',
      },
    },

    control: {
      ...getFocusStyles(theme),
      ...getFontStyles(theme),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing.md,
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
      textAlign: 'left',
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },

    content: {
      transition: `height ${transitionDuration}ms ease`,
      overflow: 'hidden',
    },

    contentInner: {
      paddingTop: 0,
      padding: theme.spacing.md,
      transition: `opacity ${transitionDuration}ms ease`,
    },
  };
});
