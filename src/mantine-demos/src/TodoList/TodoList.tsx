import React, { useState } from 'react';
import { useListState } from '@mantine/hooks';
import { Cross1Icon, PlusIcon } from '@modulz/radix-icons';
import { Title, Checkbox, TextInput, ActionIcon } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';

interface TodoItem {
  value: string;
  completed: boolean;
}

const INITIAL_STATE: TodoItem[] = [
  { value: 'Buy 23 RTX 3080 cards', completed: false },
  { value: 'Mine Ethereum', completed: false },
  { value: 'Complain about miners on internet to prove innocence', completed: false },
  { value: 'Sell broken cards on ebay to gamers', completed: false },
  { value: 'Spend received money on another video cards', completed: false },
  { value: 'Repeat the cycle', completed: false },
];

export function TodoList() {
  const theme = useMantineTheme();
  const [newItem, setNewItem] = useState('');
  const [state, handlers] = useListState(INITIAL_STATE);

  const items = state.map((item, index) => (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: theme.spacing.xs }}>
      <Checkbox
        checked={item.completed}
        onChange={(event) => {
          handlers.setItemProp(index, 'completed', event.currentTarget.checked);
          if (event.currentTarget.checked) {
            handlers.reorder({ from: index, to: state.length - 1 });
          }
        }}
        size="xl"
      />
      <TextInput
        style={{ flex: 1, marginLeft: theme.spacing.md }}
        placeholder="Your evil plan part"
        inputStyle={{
          textDecoration: item.completed && 'line-through',
          color: item.completed && theme.colors.gray[5],
        }}
        variant="filled"
        value={item.value}
        onChange={(event) => handlers.setItemProp(index, 'value', event.currentTarget.value)}
      />
      <ActionIcon
        size="lg"
        style={{ marginLeft: theme.spacing.xs }}
        onClick={() => handlers.remove(index)}
      >
        <Cross1Icon />
      </ActionIcon>
    </div>
  ));

  return (
    <div>
      <Title style={{ textAlign: 'center', marginBottom: theme.spacing.xl }}>Business Plan</Title>
      {items}
      <TextInput
        style={{ marginTop: theme.spacing.xl }}
        value={newItem}
        onChange={(event) => setNewItem(event.currentTarget.value)}
        icon={<PlusIcon />}
        placeholder="Add evil task"
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Enter') {
            handlers.append({ value: event.currentTarget.value, completed: false });
            setNewItem('');
          }
        }}
      />
    </div>
  );
}
