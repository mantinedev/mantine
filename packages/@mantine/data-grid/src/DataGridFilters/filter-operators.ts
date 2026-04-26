import { FilterFn } from '@tanstack/react-table';

export interface FilterOperator {
  label: string;
  value: string;
  filterFn: FilterFn<any>;
}

export const stringOperators: FilterOperator[] = [
  {
    label: 'Contains',
    value: 'contains',
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) {
        return true;
      }
      return String(row.getValue(columnId))
        .toLowerCase()
        .includes(String(filterValue).toLowerCase());
    },
  },
  {
    label: 'Equals',
    value: 'equals',
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) {
        return true;
      }
      return String(row.getValue(columnId)).toLowerCase() === String(filterValue).toLowerCase();
    },
  },
  {
    label: 'Starts with',
    value: 'startsWith',
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) {
        return true;
      }
      return String(row.getValue(columnId))
        .toLowerCase()
        .startsWith(String(filterValue).toLowerCase());
    },
  },
  {
    label: 'Ends with',
    value: 'endsWith',
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) {
        return true;
      }
      return String(row.getValue(columnId))
        .toLowerCase()
        .endsWith(String(filterValue).toLowerCase());
    },
  },
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
  {
    label: '=',
    value: 'eq',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) === Number(filterValue);
    },
  },
  {
    label: '\u2260',
    value: 'neq',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) !== Number(filterValue);
    },
  },
  {
    label: '>',
    value: 'gt',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) > Number(filterValue);
    },
  },
  {
    label: '<',
    value: 'lt',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) < Number(filterValue);
    },
  },
  {
    label: '\u2265',
    value: 'gte',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) >= Number(filterValue);
    },
  },
  {
    label: '\u2264',
    value: 'lte',
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === '' || filterValue == null) {
        return true;
      }
      return Number(row.getValue(columnId)) <= Number(filterValue);
    },
  },
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
