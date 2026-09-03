import { useState } from 'react';
import { Column } from '@tanstack/react-table';
import { Group, Select, TextInput } from '@mantine/core';
import type { DataGridFeatures } from '../table-features';
import type { FilterOperator } from './filter-operators';

export interface OperatorFilterProps {
  column: Column<DataGridFeatures, any, unknown>;
  operators: FilterOperator[];
}

export interface OperatorFilterValue {
  operator: string;
  value: string;
}

const UNARY_OPERATORS = new Set(['isEmpty', 'isNotEmpty', 'isTrue', 'isFalse']);

export function OperatorFilter({ column, operators }: OperatorFilterProps) {
  const filterValue = column.getFilterValue() as OperatorFilterValue | undefined;
  const [selectedOperator, setSelectedOperator] = useState(
    filterValue?.operator ?? operators[0]?.value ?? ''
  );

  const isUnary = UNARY_OPERATORS.has(selectedOperator);

  const handleOperatorChange = (value: string | null) => {
    if (!value) {
      return;
    }
    setSelectedOperator(value);
    column.setFilterValue({
      operator: value,
      value: UNARY_OPERATORS.has(value) ? '' : (filterValue?.value ?? ''),
    });
  };

  const handleValueChange = (value: string) => {
    column.setFilterValue({ operator: selectedOperator, value });
  };

  const operatorData = operators.map((op) => ({ value: op.value, label: op.label }));

  return (
    <Group gap={4} wrap="nowrap">
      <Select
        size="xs"
        data={operatorData}
        value={selectedOperator}
        onChange={handleOperatorChange}
        w={isUnary ? '100%' : 90}
        comboboxProps={{ withinPortal: false }}
      />
      {!isUnary && (
        <TextInput
          size="xs"
          value={filterValue?.value ?? ''}
          onChange={(e) => handleValueChange(e.currentTarget.value)}
          placeholder={`Filter ${column.id}...`}
          style={{ flex: 1 }}
        />
      )}
    </Group>
  );
}

OperatorFilter.displayName = '@mantine/data-grid/OperatorFilter';
