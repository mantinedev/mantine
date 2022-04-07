import { createStyles } from '@mantine/styles';
import { TabsStylesParams } from './Tabs.types';

export default createStyles((theme, { orientation }: TabsStylesParams) => ({
  root: {
    display: orientation === 'vertical' ? 'flex' : undefined,
  },
}));
