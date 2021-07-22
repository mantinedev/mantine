import React from 'react';
import { Table, TableProps } from '../Table';
import { elements } from './data';

function Wrapper(props: TableProps) {
  return (
    <Table {...props}>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const codeTemplate = (props: string) => `
<Table${props}>
  <thead>
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  </thead>
  <tbody>
    {elements.map((element) => (
      <tr key={element.name}>
        <td>{element.position}</td>
        <td>{element.name}</td>
        <td>{element.symbol}</td>
        <td>{element.mass}</td>
      </tr>
    ))}
  </tbody>
</Table>
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'striped', type: 'boolean', defaultValue: false },
    { name: 'highlightOnHover', type: 'boolean', defaultValue: false },
  ],
};
