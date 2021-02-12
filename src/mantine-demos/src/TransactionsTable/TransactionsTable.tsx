import React from 'react';
import { TrashIcon } from '@modulz/radix-icons';
import { Paper, Table, ActionIcon, Title, Input } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import * as mockdata from './mockdata';

export default function TransactionsTable() {
  const [transactionsState, transactionsHandlers] = useListState(mockdata.transactions);

  const transactions = transactionsState.map((transaction, index) => (
    <tr key={transaction.id}>
      <td>
        <Input
          icon="$"
          inputStyle={{ textAlign: 'right' }}
          variant="unstyled"
          value={transaction.amount}
          onChange={(event) =>
            transactionsHandlers.setItemProp(
              index,
              'amount',
              Number.isNaN(parseFloat(event.currentTarget.value))
                ? 0
                : parseFloat(event.currentTarget.value)
            )
          }
        />
      </td>
      <td>{transaction.category.name}</td>
      <td>
        {transaction.date.getDate()} {transaction.date.toLocaleDateString('en', { month: 'short' })}
      </td>
      <td>
        <Input
          placeholder="Transaction description"
          variant="unstyled"
          value={transaction.title}
          onChange={(event) =>
            transactionsHandlers.setItemProp(index, 'title', event.currentTarget.value)
          }
        />
      </td>
      <td>
        <ActionIcon
          color="red"
          title="Remove transaction"
          onClick={() => transactionsHandlers.remove(index)}
        >
          <TrashIcon />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <div>
      <Title style={{ marginBottom: 15 }} order={3}>
        February 2021 spendings
      </Title>

      <Paper shadow="xs" padding="lg">
        <Table style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: 80 }}>Amount</th>
              <th style={{ width: 100 }}>Category</th>
              <th style={{ width: 60 }}>Date</th>
              <th>Description</th>
              <th style={{ width: 40 }} />
            </tr>
          </thead>
          <tbody>{transactions}</tbody>
        </Table>
      </Paper>
    </div>
  );
}
