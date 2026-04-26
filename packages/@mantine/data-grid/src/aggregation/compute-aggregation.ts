import { Column, Row } from '@tanstack/react-table';

type AggregationFnName = 'sum' | 'min' | 'max' | 'mean' | 'median' | 'count' | 'uniqueCount';

const builtInFns: Record<AggregationFnName, (values: unknown[]) => unknown> = {
  sum: (values) => {
    const nums = values.filter((v): v is number => typeof v === 'number');
    return nums.reduce((a, b) => a + b, 0);
  },
  min: (values) => {
    const nums = values.filter((v): v is number => typeof v === 'number');
    return nums.length > 0 ? Math.min(...nums) : undefined;
  },
  max: (values) => {
    const nums = values.filter((v): v is number => typeof v === 'number');
    return nums.length > 0 ? Math.max(...nums) : undefined;
  },
  mean: (values) => {
    const nums = values.filter((v): v is number => typeof v === 'number');
    return nums.length > 0 ? nums.reduce((a, b) => a + b, 0) / nums.length : undefined;
  },
  median: (values) => {
    const nums = values.filter((v): v is number => typeof v === 'number').sort((a, b) => a - b);
    if (nums.length === 0) {
      return undefined;
    }
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
  },
  count: (values) => values.length,
  uniqueCount: (values) => new Set(values).size,
};

export interface AggregationResult {
  get(columnId: string): { value: unknown; label?: string } | undefined;
  hasAny(): boolean;
}

export function computeAggregation(
  rows: Row<any>[],
  columns: Column<any, any>[]
): AggregationResult {
  const results = new Map<string, { value: unknown; label?: string }>();

  for (const column of columns) {
    const meta = column.columnDef.meta;
    const fnDef = meta?.aggregationFn;
    if (!fnDef) {
      continue;
    }

    const values = rows.map((row) => row.getValue(column.id));
    const fn = typeof fnDef === 'function' ? fnDef : builtInFns[fnDef];
    const value = fn(values);
    results.set(column.id, { value, label: meta?.aggregationLabel });
  }

  return {
    get: (columnId) => results.get(columnId),
    hasAny: () => results.size > 0,
  };
}
