import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  skills: string[];
}

const data: Employee[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    department: 'Engineering',
    skills: ['React', 'TypeScript'],
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    department: 'Marketing',
    skills: ['SEO', 'Analytics'],
  },
  {
    id: '3',
    firstName: 'Carol',
    lastName: 'Williams',
    department: 'Engineering',
    skills: ['Python', 'React'],
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Brown',
    department: 'Sales',
    skills: ['Negotiation', 'CRM'],
  },
  {
    id: '5',
    firstName: 'Eva',
    lastName: 'Davis',
    department: 'Engineering',
    skills: ['TypeScript', 'Node.js'],
  },
  {
    id: '6',
    firstName: 'Frank',
    lastName: 'Miller',
    department: 'HR',
    skills: ['Recruiting', 'Analytics'],
  },
  {
    id: '7',
    firstName: 'Grace',
    lastName: 'Wilson',
    department: 'Engineering',
    skills: ['React', 'Node.js'],
  },
  {
    id: '8',
    firstName: 'Henry',
    lastName: 'Taylor',
    department: 'Marketing',
    skills: ['SEO', 'CRM'],
  },
];

const dataCode = `
export const data = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', department: 'Engineering', skills: ['React', 'TypeScript'] },
  { id: '2', firstName: 'Bob', lastName: 'Smith', department: 'Marketing', skills: ['SEO', 'Analytics'] },
  { id: '3', firstName: 'Carol', lastName: 'Williams', department: 'Engineering', skills: ['Python', 'React'] },
  { id: '4', firstName: 'David', lastName: 'Brown', department: 'Sales', skills: ['Negotiation', 'CRM'] },
  { id: '5', firstName: 'Eva', lastName: 'Davis', department: 'Engineering', skills: ['TypeScript', 'Node.js'] },
  { id: '6', firstName: 'Frank', lastName: 'Miller', department: 'HR', skills: ['Recruiting', 'Analytics'] },
  { id: '7', firstName: 'Grace', lastName: 'Wilson', department: 'Engineering', skills: ['React', 'Node.js'] },
  { id: '8', firstName: 'Henry', lastName: 'Taylor', department: 'Marketing', skills: ['SEO', 'CRM'] },
];
`;

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { data } from './data';

function Demo() {
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'skills',
        header: 'Skills',
        cell: ({ getValue }) => (getValue() as string[]).join(', '),
        meta: { filterVariant: 'multiSelect' },
      },
    ],
    withFiltering: true,
    withFaceting: true,
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'skills',
        header: 'Skills',
        cell: ({ getValue }) => (getValue() as string[]).join(', '),
        meta: { filterVariant: 'multiSelect' },
      },
    ],
    withFiltering: true,
    withFaceting: true,
  });

  return <DataGrid store={store} />;
}

export const multiSelectFilter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
