import React from 'react';
import OpenColor from 'open-color';
import { nanoid } from 'nanoid';
import { TrashIcon } from '@modulz/radix-icons';
import { TagPicker } from '@mantine/tag-picker';
import { Paper, Table, ActionIcon, Title, Text, Input, Button } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import * as mockdata from './mockdata';

const colors = Object.keys(OpenColor)
  .filter((key) => key !== 'white' && key !== 'black')
  .map((key) => ({ name: key, color: OpenColor[key][0] as string }));

export function TransactionsTable() {
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
              <th style={{ width: 100 }}>Amount</th>
              <th style={{ width: 140 }}>Category</th>
              <th style={{ width: 60 }}>Date</th>
              <th>Description</th>
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
                      id: nanoid(),
                      amount: 0,
                      category: null,
                      date: new Date(2021, 1, 19),
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
                <Input
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
