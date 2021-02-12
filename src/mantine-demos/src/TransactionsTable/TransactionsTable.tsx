import React from 'react';
import OpenColor from 'open-color';
import { TrashIcon } from '@modulz/radix-icons';
import { TagPicker } from '@mantine/tag-picker';
import { Paper, Table, ActionIcon, Title, Input } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import * as mockdata from './mockdata';

const colors = Object.keys(OpenColor)
  .filter((key) => key !== 'white' && key !== 'black')
  .map((key) => ({ name: key, color: OpenColor[key][0] as string }));

export default function TransactionsTable() {
  const [transactionsState, transactionsHandlers] = useListState(mockdata.transactions);
  const [categoriesState, categoriesHandlers] = useListState(mockdata.categories);

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
      <td style={{ position: 'relative' }}>
        <TagPicker
          data={categoriesState}
          colors={colors}
          value={transaction.category}
          description="Select or create new category"
          createLabel="Create category"
          deleteLabel="Delete category"
          noValueLabel="Select category"
          searchPlaceholder="Search categories"
          onChange={(value) => transactionsHandlers.setItemProp(index, 'category', value)}
          onTagCreate={(value) => {
            const category = { ...value, id: value.name };
            categoriesHandlers.append(category);
            return category;
          }}
          onTagDelete={(id) =>
            categoriesHandlers.setState(categoriesState.filter((c) => c.id !== id))
          }
          onTagUpdate={(id, values) => {
            const category = { id, ...values };

            categoriesHandlers.setItem(
              categoriesState.findIndex((c) => c.id === id),
              category
            );

            transactionsHandlers.setState(
              transactionsState.map((t) => (t.category.id === category.id ? { ...t, category } : t))
            );
          }}
        />
      </td>
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
              <th style={{ width: 140 }}>Category</th>
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
