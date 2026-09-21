import { useState } from 'react';
import { Group, NumberInput, Select, TextInput } from '@mantine/core';
import {
  createOperatorFilterFn,
  DataGrid,
  numberOperators,
  OperatorFilterValue,
  stringOperators,
  useDataGrid,
} from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { Group, NumberInput, Select, TextInput } from '@mantine/core';
import {
  createOperatorFilterFn,
  DataGrid,
  numberOperators,
  OperatorFilterValue,
  stringOperators,
  useDataGrid,
} from '@mantine/data-grid';
import { employees } from './data';

const stringOperatorOptions = stringOperators.map(({ value, label }) => ({ value, label }));
const numberOperatorOptions = numberOperators.map(({ value, label }) => ({ value, label }));

function Demo() {
  const [nameOperator, setNameOperator] = useState('contains');
  const [salaryOperator, setSalaryOperator] = useState('gte');

  const store = useDataGrid({
    data: employees,
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        filterFn: createOperatorFilterFn(stringOperators),
      },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        filterFn: createOperatorFilterFn(numberOperators),
        meta: { align: 'end' },
      },
    ],
  });

  const nameValue = (store.getColumnFilterValue('firstName') as OperatorFilterValue | undefined)
    ?.value;
  const salaryValue = (store.getColumnFilterValue('salary') as OperatorFilterValue | undefined)
    ?.value;
  const nameValueless = stringOperators.find((op) => op.value === nameOperator)?.valueless;

  const setNameFilter = (operator: string, value: unknown) => {
    const valueless = stringOperators.find((op) => op.value === operator)?.valueless;
    store.setColumnFilter('firstName', valueless || value ? { operator, value } : undefined);
  };

  const setSalaryFilter = (operator: string, value: unknown) => {
    store.setColumnFilter('salary', value === '' ? undefined : { operator, value });
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Group gap={4} wrap="nowrap">
          <Select
            size={store.controlSize}
            w={130}
            allowDeselect={false}
            data={stringOperatorOptions}
            value={nameOperator}
            onChange={(operator) => {
              if (operator) {
                setNameOperator(operator);
                setNameFilter(operator, nameValue);
              }
            }}
          />
          <TextInput
            size={store.controlSize}
            placeholder="First name"
            disabled={nameValueless}
            value={typeof nameValue === 'string' ? nameValue : ''}
            onChange={(event) => setNameFilter(nameOperator, event.currentTarget.value)}
          />
        </Group>
        <Group gap={4} wrap="nowrap">
          <Select
            size={store.controlSize}
            w={72}
            allowDeselect={false}
            data={numberOperatorOptions}
            value={salaryOperator}
            onChange={(operator) => {
              if (operator) {
                setSalaryOperator(operator);
                setSalaryFilter(operator, salaryValue ?? '');
              }
            }}
          />
          <NumberInput
            size={store.controlSize}
            placeholder="Salary"
            prefix="$"
            thousandSeparator
            value={typeof salaryValue === 'number' ? salaryValue : ''}
            onChange={(value) => setSalaryFilter(salaryOperator, value)}
          />
        </Group>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}
`;

const stringOperatorOptions = stringOperators.map(({ value, label }) => ({ value, label }));
const numberOperatorOptions = numberOperators.map(({ value, label }) => ({ value, label }));

function Demo() {
  const [nameOperator, setNameOperator] = useState('contains');
  const [salaryOperator, setSalaryOperator] = useState('gte');

  const store = useDataGrid({
    data: employees,
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        filterFn: createOperatorFilterFn(stringOperators),
      },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        filterFn: createOperatorFilterFn(numberOperators),
        meta: { align: 'end' },
      },
    ],
  });

  const nameValue = (store.getColumnFilterValue('firstName') as OperatorFilterValue | undefined)
    ?.value;
  const salaryValue = (store.getColumnFilterValue('salary') as OperatorFilterValue | undefined)
    ?.value;
  const nameValueless = stringOperators.find((op) => op.value === nameOperator)?.valueless;

  const setNameFilter = (operator: string, value: unknown) => {
    const valueless = stringOperators.find((op) => op.value === operator)?.valueless;
    store.setColumnFilter('firstName', valueless || value ? { operator, value } : undefined);
  };

  const setSalaryFilter = (operator: string, value: unknown) => {
    store.setColumnFilter('salary', value === '' ? undefined : { operator, value });
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Group gap={4} wrap="nowrap">
          <Select
            size={store.controlSize}
            w={130}
            allowDeselect={false}
            data={stringOperatorOptions}
            value={nameOperator}
            onChange={(operator) => {
              if (operator) {
                setNameOperator(operator);
                setNameFilter(operator, nameValue);
              }
            }}
          />
          <TextInput
            size={store.controlSize}
            placeholder="First name"
            disabled={nameValueless}
            value={typeof nameValue === 'string' ? nameValue : ''}
            onChange={(event) => setNameFilter(nameOperator, event.currentTarget.value)}
          />
        </Group>
        <Group gap={4} wrap="nowrap">
          <Select
            size={store.controlSize}
            w={72}
            allowDeselect={false}
            data={numberOperatorOptions}
            value={salaryOperator}
            onChange={(operator) => {
              if (operator) {
                setSalaryOperator(operator);
                setSalaryFilter(operator, salaryValue ?? '');
              }
            }}
          />
          <NumberInput
            size={store.controlSize}
            placeholder="Salary"
            prefix="$"
            thousandSeparator
            value={typeof salaryValue === 'number' ? salaryValue : ''}
            onChange={(value) => setSalaryFilter(salaryOperator, value)}
          />
        </Group>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}

export const operatorFilters: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
