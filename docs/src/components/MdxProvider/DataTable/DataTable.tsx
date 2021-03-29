import React from 'react';
import { Table, Code, Badge } from '@mantine/core';
import DocsSection from '../../DocsSection/DocsSection';

interface DataTableProps {
  data: React.ReactNode[][];
  head?: string[];
}

export default function DataTable({ data, head }: DataTableProps) {
  const rows = data.map((row, index) => {
    const cells = row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>);
    return <tr key={index}>{cells}</tr>;
  });

  const ths = Array.isArray(head) ? head.map((cell, index) => <th key={index}>{cell}</th>) : null;

  return (
    <DocsSection>
      <Table>
        {ths && (
          <thead>
            <tr>{ths}</tr>
          </thead>
        )}
        <tbody>{rows}</tbody>
      </Table>
    </DocsSection>
  );
}

interface PackageJson {
  dependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
}

export function DependenciesTable({ packageJson }: { packageJson: PackageJson }) {
  const dependencies = Object.keys(packageJson.dependencies).map((p) => [
    <a href={`https://npmjs.com/package/${p}`} style={{ textDecoration: 'none' }}>
      <Code>{p}</Code>
    </a>,
    <Badge color="gray">dependency</Badge>,
    packageJson.dependencies[p],
  ]);

  const peerDependencies = Object.keys(packageJson.peerDependencies).map((p) => [
    <a href={`https://npmjs.com/package/${p}`} style={{ textDecoration: 'none' }}>
      <Code>{p}</Code>
    </a>,
    <Badge>peer dependency</Badge>,
    packageJson.peerDependencies[p],
  ]);

  return (
    <DataTable
      data={[...peerDependencies, ...dependencies]}
      head={['Dependency', 'Type', 'Version']}
    />
  );
}
