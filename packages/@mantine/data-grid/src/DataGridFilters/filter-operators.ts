import {
  constructFilterFn,
  filterFn_empty,
  filterFn_endsWith,
  filterFn_equalsString,
  filterFn_greaterThan,
  filterFn_greaterThanOrEqualTo,
  filterFn_includesString,
  filterFn_lessThan,
  filterFn_lessThanOrEqualTo,
  filterFn_notEmpty,
  filterFn_startsWith,
  filterFn_weakEquals,
  type FilterFn,
} from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

export interface FilterOperator {
  label: string;
  value: string;
  filterFn: FilterFn<DataGridFeatures, any>;
  /** When true the operator matches on the cell alone and ignores its input value */
  valueless?: boolean;
}

const filterFn_notWeakEquals = constructFilterFn({
  ...filterFn_weakEquals,
  filter: (dataValue, filterValue, row, columnId, addMeta) =>
    !filterFn_weakEquals.filter(dataValue, filterValue, row, columnId, addMeta),
});

const filterFn_isTrue = constructFilterFn({ filter: (dataValue) => dataValue === true });
const filterFn_isFalse = constructFilterFn({ filter: (dataValue) => dataValue === false });

export const stringOperators: FilterOperator[] = [
  { label: 'Contains', value: 'contains', filterFn: filterFn_includesString },
  { label: 'Equals', value: 'equals', filterFn: filterFn_equalsString },
  { label: 'Starts with', value: 'startsWith', filterFn: filterFn_startsWith },
  { label: 'Ends with', value: 'endsWith', filterFn: filterFn_endsWith },
  { label: 'Is empty', value: 'isEmpty', filterFn: filterFn_empty, valueless: true },
  { label: 'Is not empty', value: 'isNotEmpty', filterFn: filterFn_notEmpty, valueless: true },
];

export const numberOperators: FilterOperator[] = [
  { label: '=', value: 'eq', filterFn: filterFn_weakEquals },
  { label: '≠', value: 'neq', filterFn: filterFn_notWeakEquals },
  { label: '>', value: 'gt', filterFn: filterFn_greaterThan },
  { label: '<', value: 'lt', filterFn: filterFn_lessThan },
  { label: '≥', value: 'gte', filterFn: filterFn_greaterThanOrEqualTo },
  { label: '≤', value: 'lte', filterFn: filterFn_lessThanOrEqualTo },
];

export const booleanOperators: FilterOperator[] = [
  { label: 'Is true', value: 'isTrue', filterFn: filterFn_isTrue, valueless: true },
  { label: 'Is false', value: 'isFalse', filterFn: filterFn_isFalse, valueless: true },
];

export function createOperatorFilterFn(
  operators: FilterOperator[]
): FilterFn<DataGridFeatures, any> {
  const operatorMap = new Map(operators.map((op) => [op.value, op]));

  return constructFilterFn({
    filter: (_dataValue, filterValue, row, columnId, addMeta) => {
      if (!filterValue || typeof filterValue !== 'object') {
        return true;
      }

      const { operator, value } = filterValue as { operator: string; value: unknown };
      const op = operatorMap.get(operator);

      if (!op) {
        return true;
      }

      if (!op.valueless && (value === '' || value == null)) {
        return true;
      }

      const resolved = op.filterFn.resolveFilterValue?.(value) ?? value;
      return op.filterFn(row, columnId, resolved, addMeta);
    },
  });
}
