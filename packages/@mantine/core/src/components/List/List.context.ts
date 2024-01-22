import { createSafeContext, GetStylesApi } from '../../core';
import type { ListFactory } from './List';

interface ListContextValue {
  getStyles: GetStylesApi<ListFactory>;
  center: boolean | undefined;
  icon: React.ReactNode | undefined;
}

export const [ListProvider, useListContext] = createSafeContext<ListContextValue>(
  'List component was not found in tree'
);
