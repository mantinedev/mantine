import { DataList } from '@mantine/core';
import { FIELDS, getOptionLabel } from './constants';
import { formatDate } from './describe';
import type { FieldKey, FieldType, SampleIssue } from './types';

type Formatter = (value: SampleIssue[FieldKey], field: FieldKey) => string;

const FORMATTERS: Record<FieldType, Formatter> = {
  text: (value) => String(value || 'Empty'),
  number: (value) => String(value),
  date: (value) => (value ? formatDate(String(value)) : 'Not set'),
  option: (value, field) => {
    const values = Array.isArray(value) ? value : [value as string | null];
    const labels = values
      .filter((item): item is string => item !== null)
      .map((item) => getOptionLabel(FIELDS[field].options ?? [], item));
    return labels.length > 0 ? labels.join(', ') : 'None';
  },
  boolean: (value) => (value ? 'Yes' : 'No'),
};

export function SampleIssueValues({ issue }: { issue: SampleIssue }) {
  const fields = Object.keys(FIELDS) as FieldKey[];

  return (
    <DataList aria-label="Sample issue" labelWidth={110}>
      {fields.map((field) => (
        <DataList.Item key={field}>
          <DataList.ItemLabel>{FIELDS[field].label}</DataList.ItemLabel>
          <DataList.ItemValue>
            {FORMATTERS[FIELDS[field].type](issue[field], field)}
          </DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
