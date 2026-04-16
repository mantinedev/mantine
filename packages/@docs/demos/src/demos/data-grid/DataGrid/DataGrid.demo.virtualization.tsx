import { useMemo } from 'react';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useMemo } from 'react';
import { DataGrid } from '@mantine/data-grid';

interface VirtualRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function Demo() {
  const data = useMemo<VirtualRow[]>(
    () =>
      Array.from({ length: 100000 }, (_, i) => ({
        id: String(i + 1),
        name: \`Employee \${i + 1}\`,
        email: \`employee\${i + 1}@example.com\`,
        department: departments[i % departments.length],
        salary: 50000 + Math.floor(Math.random() * 80000),
      })),
    []
  );

  return (
    <DataGrid
      data={data}
      withVirtualization
      height={500}
      columns={[
        { accessorKey: 'id', header: 'ID', size: 80 },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}
`;

interface VirtualRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function Demo() {
  const data = useMemo<VirtualRow[]>(
    () =>
      Array.from({ length: 100000 }, (_, i) => ({
        id: String(i + 1),
        name: `Employee ${i + 1}`,
        email: `employee${i + 1}@example.com`,
        department: departments[i % departments.length],
        salary: 50000 + Math.floor(Math.random() * 80000),
      })),
    []
  );

  return (
    <DataGrid
      data={data}
      withVirtualization
      height={500}
      columns={[
        { accessorKey: 'id', header: 'ID', size: 80 },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}

export const virtualization: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
