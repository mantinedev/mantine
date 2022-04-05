import { createStyles } from '@mantine/core';
import { TabsOrientation } from '../Tabs.types';

interface TabsListStylesParams {
  orientation: TabsOrientation;
}

export default createStyles((theme, { orientation }: TabsListStylesParams) => ({
  tabsList: {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    borderBottom: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
