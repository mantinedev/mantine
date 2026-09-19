import { Highlight, Table, Text } from '@mantine/core';
import { HtmlText } from '@/components/HtmlText';
import { TableError } from '@/components/TableError';
import { TableInlineCode } from '@/components/TableInlineCode';
import { getPropsTableData } from './get-props-table-data';
import { prepareType } from './replace-types';
import classes from './PropsTable.module.css';

interface PropsTableProps {
  component: string;
  query: string;
}

export function PropsTable({ component, query }: PropsTableProps) {
  const data = getPropsTableData(component, query);

  if (!data) {
    return <TableError errorOf="props" />;
  }

  const rows = data.groups.flatMap((group) =>
    group.props.map((prop, index) => (
      <Table.Tr key={prop.name} data-props-table-row>
        {data.withGroups && index === 0 && (
          <Table.Td rowSpan={group.props.length} className={classes.groupCell}>
            <div className={classes.groupSticky}>
              <Text component="span" className={classes.groupLabel}>
                {group.label}
              </Text>
              {group.note && (
                <Text component="span" className={classes.groupNote}>
                  {group.note}
                </Text>
              )}
            </div>
          </Table.Td>
        )}
        <Table.Td style={{ whiteSpace: 'nowrap' }}>
          <Highlight
            className={classes.propName}
            highlight={query}
            component="span"
            data-deprecated={'deprecated' in prop.tags || undefined}
            title={prop.name}
          >
            {prop.name}
          </Highlight>
          {prop.required && (
            <Text component="sup" c="red">
              {' '}
              *
            </Text>
          )}
        </Table.Td>

        <Table.Td>
          <TableInlineCode>{prepareType(prop.type.name)}</TableInlineCode>
        </Table.Td>
        <Table.Td>
          <HtmlText fz="sm">{prop.description}</HtmlText>
          {prop.defaultValue && (
            <HtmlText
              fz="sm"
              display="block"
            >{`Default value: <code>${prop.defaultValue}</code>`}</HtmlText>
          )}
        </Table.Td>
      </Table.Tr>
    ))
  );

  return (
    <Table.ScrollContainer
      minWidth={800}
      type="native"
      classNames={{ scrollContainer: classes.scroll, scrollContainerInner: classes.scrollInner }}
      data-visible={data.matchedCount > 0 || undefined}
    >
      <Table
        layout="fixed"
        className={classes.table}
        data-with-groups={data.withGroups || undefined}
      >
        <Table.Thead>
          <Table.Tr>
            {data.withGroups && (
              <Table.Th w={150} className={classes.groupCell}>
                Group
              </Table.Th>
            )}
            <Table.Th w={200}>Name</Table.Th>
            <Table.Th w={300}>Type</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
