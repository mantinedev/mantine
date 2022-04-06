import { createStyles } from '@mantine/styles';
import { TabsOrientation } from '../Tabs.types';

interface TabsPanelStylesParams {
  orientation: TabsOrientation;
}

export default createStyles((_theme, { orientation }: TabsPanelStylesParams) => ({
  panel: {
    flex: orientation === 'vertical' ? 1 : undefined,
  },
}));
