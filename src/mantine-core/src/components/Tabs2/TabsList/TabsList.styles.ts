import { createStyles } from '@mantine/core';
import { TabsOrientation } from '../Tabs.types';

interface TabsListStylesParams {
  orientation: TabsOrientation;
  grow: boolean;
}

export default createStyles((theme, { orientation, grow }: TabsListStylesParams) => {
  const vertical = orientation === 'vertical';

  return {
    tabsList: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',

      [vertical ? 'borderRight' : 'borderBottom']: `2px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,

      '& [role="tab"]': {
        flex: grow ? 1 : undefined,
      },
    },
  };
});
