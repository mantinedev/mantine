import { createStyles, getThemeColor } from '@mantine/styles';

export default createStyles((theme) => {
  const border = `1px solid ${theme.colors.gray[3]}`;

  return {
    flex: {
      display: 'flex',
    },
    list: {
      position: 'relative',
      minWidth: 350,
      border,
      borderRadius: theme.radius.sm,
      marginRight: theme.spacing.xl,
    },
    action: {
      width: '100%',
      minHeight: 40,

      borderBottom: border,
      '&:first-child': {
        borderRight: border,
      },
    },
    item: {
      padding: `0 ${theme.spacing.sm}px`,
      userSelect: 'none',
    },
    selectedItem: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : getThemeColor({ theme, color: theme.primaryColor, shade: 0 }),
    },
    disabled: {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 4],
    },
  };
});
