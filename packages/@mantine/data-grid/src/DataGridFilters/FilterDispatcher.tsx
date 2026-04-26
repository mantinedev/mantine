import { Column } from '@tanstack/react-table';
import { BooleanFilter } from './BooleanFilter';
import { MultiSelectFilter } from './MultiSelectFilter';
import { NumberRangeFilter } from './NumberRangeFilter';
import { SelectFilter } from './SelectFilter';
import { TextFilter } from './TextFilter';

export interface FilterDispatcherProps {
  column: Column<any, unknown>;
}

export function FilterDispatcher({ column }: FilterDispatcherProps) {
  const filterVariant = column.columnDef.meta?.filterVariant;

  switch (filterVariant) {
    case 'select':
      return <SelectFilter column={column} />;
    case 'multiSelect':
      return <MultiSelectFilter column={column} />;
    case 'range':
      return <NumberRangeFilter column={column} />;
    case 'boolean':
      return <BooleanFilter column={column} />;
    case 'text':
    default:
      return <TextFilter column={column} />;
  }
}

FilterDispatcher.displayName = '@mantine/data-grid/FilterDispatcher';
