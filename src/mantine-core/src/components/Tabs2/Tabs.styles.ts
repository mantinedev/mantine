import { createStyles } from '@mantine/styles';
import { TabsOrientation } from './Tabs.types';

interface TabsStylesParams {
  orientation: TabsOrientation;
}

export default createStyles((theme, { orientation }: TabsStylesParams) => ({
  root: {
    display: orientation === 'vertical' ? 'flex' : undefined,
  },
}));
