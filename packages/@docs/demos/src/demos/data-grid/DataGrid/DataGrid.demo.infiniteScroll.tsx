import { useCallback, useMemo, useState } from 'react';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useCallback, useMemo, useState } from 'react';
import { DataGrid } from '@mantine/data-grid';

interface Row {
  id: string;
  name: string;
  email: string;
  department: string;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function generateRows(start: number, count: number): Row[] {
  return Array.from({ length: count }, (_, i) => {
    const index = start + i;
    return {
      id: String(index + 1),
      name: \`Employee \${index + 1}\`,
      email: \`employee\${index + 1}@example.com\`,
      department: departments[index % departments.length],
    };
  });
}

function Demo() {
  const [data, setData] = useState(() => generateRows(0, 50));
  const [loading, setLoading] = useState(false);

  const handleScrollToBottom = useCallback(() => {
    if (loading) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...generateRows(prev.length, 50)]);
      setLoading(false);
    }, 500);
  }, [loading]);

  const columns = useMemo(
    () => [
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name' },
      { accessorKey: 'email' as const, header: 'Email', size: 220 },
      { accessorKey: 'department' as const, header: 'Department' },
    ],
    []
  );

  return (
    <DataGrid
      data={data}
      virtualize="rows"
      height={400}
      loading={loading}
      loadingVariant="bar"
      onScrollToBottom={handleScrollToBottom}
      columns={columns}
    />
  );
}
`;

interface Row {
  id: string;
  name: string;
  email: string;
  department: string;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function generateRows(start: number, count: number): Row[] {
  return Array.from({ length: count }, (_, i) => {
    const index = start + i;
    return {
      id: String(index + 1),
      name: `Employee ${index + 1}`,
      email: `employee${index + 1}@example.com`,
      department: departments[index % departments.length],
    };
  });
}

function Demo() {
  const [data, setData] = useState(() => generateRows(0, 50));
  const [loading, setLoading] = useState(false);

  const handleScrollToBottom = useCallback(() => {
    if (loading) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...generateRows(prev.length, 50)]);
      setLoading(false);
    }, 500);
  }, [loading]);

  const columns = useMemo(
    () => [
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name' },
      { accessorKey: 'email' as const, header: 'Email', size: 220 },
      { accessorKey: 'department' as const, header: 'Department' },
    ],
    []
  );

  return (
    <DataGrid
      data={data}
      virtualize="rows"
      height={400}
      loading={loading}
      loadingVariant="bar"
      onScrollToBottom={handleScrollToBottom}
      columns={columns}
    />
  );
}

export const infiniteScroll: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
