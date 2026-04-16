import { Column } from '@tanstack/react-table';
import { TextInput } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';

export interface TextFilterProps {
  column: Column<any, unknown>;
}

export function TextFilter({ column }: TextFilterProps) {
  const ctx = useDataGridContext();

  return (
    <TextInput
      size="xs"
      value={(column.getFilterValue() as string) ?? ''}
      onChange={(event) => column.setFilterValue(event.currentTarget.value)}
      placeholder={`${ctx.localization.filterPlaceholder.replace('...', '')} ${column.id}...`}
      aria-label={`${ctx.localization.filterPlaceholder.replace('...', '')} ${column.id}`}
    />
  );
}

TextFilter.displayName = '@mantine/data-grid/TextFilter';
