import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/core';

interface FullScreenDropzoneStyles {
  offset: MantineNumberSize;
}

export default createStyles((theme, { offset }: FullScreenDropzoneStyles) => {
  const spacing = getSizeValue({ size: offset, sizes: theme.spacing });

  return {
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      padding: spacing,
    },

    dropzone: {
      height: `calc(100vh - ${spacing * 2}px)`,
    },
  };
});
