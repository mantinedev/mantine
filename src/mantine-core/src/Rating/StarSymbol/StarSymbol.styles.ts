import { createStyles, MantineSize } from '@mantine/styles';

export interface StarSymbolProps {
  size?: MantineSize;
  type?: 'empty' | 'full';
}

export default createStyles<'empty' | 'full'>((theme) => {
  const emptyColor = theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[8];
  const fullColor = theme.colorScheme === 'light' ? theme.colors.yellow[4] : theme.colors.yellow[6];
  return {
    empty: {
      stroke: emptyColor,
      fill: emptyColor,
    },
    full: {
      stroke: fullColor,
      fill: fullColor,
    },
  };
});
