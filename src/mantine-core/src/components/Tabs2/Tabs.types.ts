import { MantineColor } from '@mantine/styles';

export type TabsValue = string | null;
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = 'default' | 'outline' | 'pills';

export interface TabsStylesParams {
  orientation: TabsOrientation;
  color?: MantineColor;
  variant: TabsVariant;
}
