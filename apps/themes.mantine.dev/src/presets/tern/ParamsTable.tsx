import { Anchor, Badge, Code, Table } from '@mantine/core';
import classes from './Tern.module.css';

interface Param {
  name: string;
  type: string;
  required?: boolean;
  description: React.ReactNode;
  defaultValue?: string;
}

const params: Param[] = [
  {
    name: 'lat',
    type: 'number',
    required: true,
    description: 'Latitude in decimal degrees, from −90 to 90.',
  },
  {
    name: 'lon',
    type: 'number',
    required: true,
    description: 'Longitude in decimal degrees, from −180 to 180.',
  },
  {
    name: 'hours',
    type: 'integer',
    description: 'How many hours to return, from 1 to 240.',
    defaultValue: '48',
  },
  {
    name: 'fields',
    type: 'string',
    description: (
      <>
        Comma-separated list of values to include. See the{' '}
        <Anchor href="#" onClick={(event) => event.preventDefault()} className={classes.inlineLink}>
          field reference
        </Anchor>{' '}
        for all 31 fields.
      </>
    ),
    defaultValue: 'temp,precip,wind',
  },
  {
    name: 'units',
    type: 'string',
    description: (
      <>
        Either <Code>metric</Code> or <Code>imperial</Code>.
      </>
    ),
    defaultValue: 'metric',
  },
  {
    name: 'tz',
    type: 'string',
    description: (
      <>
        IANA time zone for the returned times, such as <Code>Europe/London</Code>.
      </>
    ),
    defaultValue: 'UTC',
  },
];

export function ParamsTable() {
  return (
    <Table.ScrollContainer minWidth={560} className={classes.tableWrap}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Parameter</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {params.map((param) => (
            <Table.Tr key={param.name}>
              <Table.Td className={classes.pname}>
                <code>{param.name}</code>
                <br />
                {param.required ? (
                  <Badge variant="outline" className={classes.required}>
                    Required
                  </Badge>
                ) : (
                  <span className={classes.optional}>Optional</span>
                )}
              </Table.Td>
              <Table.Td className={classes.ptype}>{param.type}</Table.Td>
              <Table.Td>
                {param.description}
                {param.defaultValue && (
                  <span className={classes.default}>
                    Default: <Code>{param.defaultValue}</Code>
                  </span>
                )}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
