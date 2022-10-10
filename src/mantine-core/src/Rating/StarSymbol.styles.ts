import { createStyles } from '@mantine/styles';

export default createStyles((theme) => {
  const emptyColor = theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[8];
  const fullColor = theme.fn.variant({ variant: 'filled', color: 'yellow' }).background;

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
