import React from 'react';
import { TrashIcon } from '@modulz/radix-icons';
import { TagPicker } from '@mantine/tag-picker';
import { DEFAULT_THEME, Paper, Table, ActionIcon, Text, TextInput, Button } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import * as mockdata from './mockdata';

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

const colors = Object.keys(DEFAULT_THEME.colors)
  .filter((color) => color !== 'dark')
  .map((color) => ({ name: color, color }));

export function TransactionsTable() {
  const [transactionsState, transactionsHandlers] = useListState(mockdata.transactions);
  const [categoriesState, categoriesHandlers] = useListState(mockdata.categories);

  const transactions = transactionsState.map((transaction, index) => (
    <tr key={transaction.id}>
      <td>
        <TextInput
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
          enableColorChange
          enableCreate
          enableUpdate
          enableDelete
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
        <TextInput
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
      <Paper shadow="xs" padding="lg" style={{ overflowX: 'auto' }}>
        <Table style={{ tableLayout: 'fixed', minWidth: 500 }}>
          <thead>
            <tr>
              <th style={{ width: 100 }}>Amount</th>
              <th style={{ width: 140 }}>Category</th>
              <th style={{ width: '100%' }}>Description</th>
              <th style={{ width: 40 }} />
            </tr>
          </thead>
          <tbody>
            {transactions}
            <tr>
              <td colSpan={5} style={{ borderBottomStyle: 'dashed' }}>
                <Button
                  variant="link"
                  style={{ width: '100%' }}
                  size="lg"
                  onClick={() =>
                    transactionsHandlers.append({
                      id: randomId(),
                      amount: 0,
                      category: null,
                      title: '',
                    })
                  }
                >
                  + Add new transaction
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <TextInput
                  readOnly
                  icon="$"
                  inputStyle={{ textAlign: 'right' }}
                  variant="unstyled"
                  value={transactionsState.reduce(
                    (acc, transaction) => acc + transaction.amount,
                    0
                  )}
                />
              </td>
              <td colSpan={4}>
                <Text size="sm" weight={500} style={{ paddingTop: 2 }}>
                  Total for February 2021
                </Text>
              </td>
            </tr>
          </tbody>
        </Table>
      </Paper>
    </div>
  );
}
