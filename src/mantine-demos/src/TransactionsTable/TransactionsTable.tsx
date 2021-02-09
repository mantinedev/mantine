import React from 'react';
import { TrashIcon } from '@modulz/radix-icons';
import { Paper, Table, ActionIcon, Title } from '@mantine/core';
import * as mockdata from './mockdata';

export default function TransactionsTable() {
  const transactions = mockdata.transactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.amount}</td>
      <td>{transaction.category.toString()}</td>
      <td>
        {transaction.date.getDate()} {transaction.date.toLocaleDateString('en', { month: 'short' })}
      </td>
      <td>{transaction.title}</td>
      <td>
        <ActionIcon color="red" title="Remove transaction">
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
              <th style={{ width: 80 }}>Amount, $</th>
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
