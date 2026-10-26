import { Paper, ScrollArea, Table, VisuallyHidden } from '@mantine/core';
import { DueChip, InkList, PersonAvatar, StageTag } from './Chips';
import { type Order, STAGES, stageName } from './data';
import classes from './Views.module.css';

interface ListViewProps {
  orders: Order[];
  onOpen: (id: number) => void;
}

const ORDER = STAGES.map((stage) => stage.id);

export function ListView({ orders, onOpen }: ListViewProps) {
  const rows = [...orders].sort(
    (a, b) => ORDER.indexOf(a.stage) - ORDER.indexOf(b.stage) || a.due - b.due
  );

  return (
    <ScrollArea
      className={classes.wrap}
      classNames={{ content: `${classes.wrapContent} ${classes.listContent}` }}
    >
      <Paper shadow="xs" radius="lg" className={classes.listCard}>
        <Table.ScrollContainer minWidth={660}>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Order</Table.Th>
                <Table.Th>Stage</Table.Th>
                <Table.Th>Inks</Table.Th>
                <Table.Th>Due</Table.Th>
                <Table.Th>
                  <VisuallyHidden>Assignee</VisuallyHidden>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows.length ? (
                rows.map((order) => (
                  <Table.Tr key={order.id} className={classes.row} onClick={() => onOpen(order.id)}>
                    <Table.Td>
                      <div className={classes.rowCustomer}>{order.customer}</div>
                      <div className={classes.rowJob}>{order.job}</div>
                    </Table.Td>
                    <Table.Td>
                      <StageTag>{stageName(order.stage)}</StageTag>
                    </Table.Td>
                    <Table.Td>
                      <InkList inks={order.inks} />
                    </Table.Td>
                    <Table.Td>
                      <DueChip order={order} />
                    </Table.Td>
                    <Table.Td>
                      <PersonAvatar who={order.who} />
                    </Table.Td>
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={5} className={classes.noRows}>
                    No orders match these filters. Clear a filter to see more.
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </ScrollArea>
  );
}
