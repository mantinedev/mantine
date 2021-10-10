import { createStyles, getSizeValue, MantineSize } from '@mantine/styles';

interface AutocompleteStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: AutocompleteStyles) => {
  const spacing = getSizeValue({ size, sizes: theme.spacing });

  return {
    wrapper: {
      position: 'relative',
    },

    item: {
      textAlign: 'left',
      width: '100%',
      padding: `${spacing / 1.5}px ${spacing}`,
      fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },

    hovered: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },

    nothingFound: {
      boxSizing: 'border-box',
      color: theme.colors.gray[6],
      paddingTop: spacing / 2,
      paddingBottom: spacing / 2,
      textAlign: 'center',
    },
  };
});
