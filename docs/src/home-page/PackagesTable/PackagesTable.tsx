import React from 'react';
import { Table, Group, Button } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import BUNDLE_SIZES from '../../../.docgen/sizes.json';
import GatsbyLink from '../../components/MdxProvider/GatsbyLink/GatsbyLink';
import NpmIcon from '../../components/MdxProvider/PageHeader/NpmIcon';
import data from './data';

export function PackagesTable() {
  const items = data.map((item) => {
    const folder = item.package.replace('@mantine/', 'mantine-');
    return (
      <tr key={item.package}>
        <td>
          <GatsbyLink to={item.link}>{item.package}</GatsbyLink>
        </td>
        <td>{item.description}</td>
        <td>{BUNDLE_SIZES[folder].gzip.toFixed(2)} kB</td>
        <td>
          <Group>
            <Button
              component="a"
              href={`https://github.com/mantinedev/mantine/tree/master/src/${folder}`}
              color="gray"
              variant="outline"
              size="xs"
              leftIcon={<GitHubLogoIcon style={{ width: 12, height: 12 }} />}
            >
              Source code
            </Button>
            <Button
              component="a"
              href={`https://www.npmjs.com/package/${item.package}`}
              color="gray"
              variant="outline"
              size="xs"
              leftIcon={<NpmIcon style={{ width: 12, height: 12 }} />}
            >
              npm
            </Button>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
      <Table highlightOnHover style={{ minWidth: 760, tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th style={{ width: 150 }}>Package</th>
            <th style={{ width: 250 }}>Description</th>
            <th>Gzipped size</th>
            <th style={{ width: 220 }}>Links</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    </div>
  );
}
