import { createStyles, MantineSize } from '@mantine/core';

interface CalendarHeaderStyles {
  size: MantineSize;
}

export const sizes = {
  xs: 32,
  sm: 40,
  md: 44,
  lg: 50,
  xl: 54,
};

export default createStyles((theme, { size }: CalendarHeaderStyles) => ({
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    align: 'center',
    marginBottom: theme.fn.size({ size, sizes: theme.spacing }),
  },

  calendarHeaderControl: {
    width: theme.fn.size({ size, sizes }),
    height: theme.fn.size({ size, sizes }),

    '&:disabled': {
      opacity: 0,
      cursor: 'default',
    },
  },

  calendarHeaderLevel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.fn.size({ size, sizes }),
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: `0 ${theme.fn.size({ size, sizes: theme.spacing })}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    flex: 1,
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    }),

    '&:disabled': theme.fn.hover({
      backgroundColor: 'transparent',
      cursor: 'default',
    }),
  },

  calendarHeaderLevelIcon: {
    marginLeft: 4,
  },
}));
