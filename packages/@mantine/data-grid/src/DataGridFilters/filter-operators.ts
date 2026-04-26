import { FilterFn } from '@tanstack/react-table';

export interface FilterOperator {
  label: string;
  value: string;
  filterFn: FilterFn<any>;
}

function stringOp(
  label: string,
  value: string,
  compare: (cellStr: string, filterStr: string) => boolean
): FilterOperator {
  return {
    label,
    value,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) {
        return true;
      }
      return compare(
        String(row.getValue(columnId)).toLowerCase(),
        String(filterValue).toLowerCase()
      );
    },
  };
}

function numberOp(
  label: string,
  value: string,
  compare: (a: number, b: number) => boolean
): FilterOperator {
  return {
    label,
    value,
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return compare(Number(row.getValue(columnId)), Number(filterValue));
    },
  };
}

export const stringOperators: FilterOperator[] = [
  stringOp('Contains', 'contains', (a, b) => a.includes(b)),
  stringOp('Equals', 'equals', (a, b) => a === b),
  stringOp('Starts with', 'startsWith', (a, b) => a.startsWith(b)),
  stringOp('Ends with', 'endsWith', (a, b) => a.endsWith(b)),
  {
    label: 'Is empty',
    value: 'isEmpty',
    filterFn: (row, columnId) => {
      const val = row.getValue(columnId);
      return val == null || val === '';
    },
  },
  {
    label: 'Is not empty',
    value: 'isNotEmpty',
    filterFn: (row, columnId) => {
      const val = row.getValue(columnId);
      return val != null && val !== '';
    },
  },
];

export const numberOperators: FilterOperator[] = [
  numberOp('=', 'eq', (a, b) => a === b),
  numberOp('\u2260', 'neq', (a, b) => a !== b),
  numberOp('>', 'gt', (a, b) => a > b),
  numberOp('<', 'lt', (a, b) => a < b),
  numberOp('\u2265', 'gte', (a, b) => a >= b),
  numberOp('\u2264', 'lte', (a, b) => a <= b),
];

export const booleanOperators: FilterOperator[] = [
  {
    label: 'Is true',
    value: 'isTrue',
    filterFn: (row, columnId) => row.getValue(columnId) === true,
  },
  {
    label: 'Is false',
    value: 'isFalse',
    filterFn: (row, columnId) => row.getValue(columnId) === false,
  },
];

export function createOperatorFilterFn(operators: FilterOperator[]): FilterFn<any> {
  const operatorMap = new Map(operators.map((op) => [op.value, op.filterFn]));
  return (row, columnId, filterValue) => {
    if (!filterValue || typeof filterValue !== 'object') {
      return true;
    }
    const { operator, value } = filterValue as { operator: string; value: string };
    const fn = operatorMap.get(operator);
    if (!fn) {
      return true;
    }
    return fn(row, columnId, value, () => {});
  };
}
