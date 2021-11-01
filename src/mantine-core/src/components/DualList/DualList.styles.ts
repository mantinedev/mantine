import { createStyles } from '@mantine/styles';

export default createStyles((theme, _params, getRef) => {
  const border = `1px solid ${theme.colors.gray[3]}`;

  return {
    container: {
      display: 'flex',
      padding: 24,
    },
    list: {
      position: 'relative',
      border,
      borderRadius: theme.radius.sm,
      minWidth: 350,
      marginRight: 32,
    },
    actions: {
      display: 'flex',
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '100%',
      minHeight: 40,

      borderBottom: border,

      cursor: 'pointer',

      '&:first-child': {
        borderRight: border,
      },
    },
    items: {
      width: '100%',
    },
    item: {
      padding: '0 10px',
      userSelect: 'none',
    },
    selectedItem: {
      backgroundColor: theme.colors.gray[1],
    },
  };
});
