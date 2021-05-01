import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/core';
import { TagPickerContainer as TagPicker } from './TagPickerContainer';
import { TagPickerTag } from './types';

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

const colors = Object.keys(DEFAULT_THEME.colors)
  .filter((color) => color !== 'dark')
  .map((color) => ({ name: color, color }));

type TagPickerWrapperProps = Omit<
  React.ComponentProps<typeof TagPicker>,
  | 'value'
  | 'onChange'
  | 'data'
  | 'colors'
  | 'description'
  | 'createLabel'
  | 'deleteLabel'
  | 'noValueLabel'
  | 'onTagCreate'
  | 'onTagDelete'
  | 'onTagUpdate'
>;

const defaultData: TagPickerTag[] = [
  { id: '1', name: 'Pets', color: 'indigo' },
  { id: '2', name: 'Home', color: 'red' },
  { id: '3', name: 'Subscriptions', color: 'teal' },
];

function TagPickerWrapper(props: TagPickerWrapperProps) {
  const [value, onChange] = useState<TagPickerTag>(null);
  const [data, setData] = useState(defaultData);

  return (
    <div style={{ padding: 50 }}>
      <TagPicker
        enableCreate
        enableUpdate
        enableDelete
        enableColorChange
        value={value}
        onChange={onChange}
        data={data}
        searchPlaceholder="Search categories"
        colors={colors}
        description="Select category or create new one"
        createLabel="+ Create new category"
        deleteLabel="Delete category"
        noValueLabel="Not selected"
        onTagCreate={(values) => {
          const tag = { ...values, id: randomId() };
          setData((current) => [...current, { ...values, id: randomId() }]);
          return tag;
        }}
        onTagDelete={(id) => setData((current) => current.filter((item) => item.id !== id))}
        onTagUpdate={(id, values) =>
          setData((current) => {
            const copy = [...current];
            const index = current.findIndex((item) => item.id === id);
            copy[index] = { id, ...values };
            return copy;
          })
        }
        {...props}
      />
    </div>
  );
}

storiesOf('@mantine/tag-picker', module).add('General Usage', () => <TagPickerWrapper />);
