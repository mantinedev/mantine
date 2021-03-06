import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { nanoid } from 'nanoid';
import oc from 'open-color';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import TagPicker from './TagPickerContainer';
import { TagPickerTag } from './types';

const colors = Object.keys(DEFAULT_THEME.colors).filter(
  (color) => color !== 'white' && color !== 'black'
);

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
  { id: '1', name: 'Pets', color: oc.indigo[0] },
  { id: '2', name: 'Home', color: oc.red[0] },
  { id: '3', name: 'Subscriptions', color: oc.teal[0] },
];

function TagPickerWrapper(props: TagPickerWrapperProps) {
  const [value, onChange] = useState<TagPickerTag>(null);
  const [data, setData] = useState(defaultData);

  return (
    <TagPicker
      enableCreate
      value={value}
      onChange={onChange}
      data={data}
      searchPlaceholder="Search categories"
      colors={colors.map((theme) => ({ name: theme, color: oc[theme][0] }))}
      description="Select category or create new one"
      createLabel="+ Create new category"
      deleteLabel="Delete category"
      noValueLabel="Not selected"
      onTagCreate={(values) => {
        const tag = { ...values, id: nanoid() };
        setData((current) => [...current, { ...values, id: nanoid() }]);
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
  );
}

storiesOf('@mantine/tag-picker', module).add('General Usage', () => (
  <MantineProvider>
    <TagPickerWrapper />
  </MantineProvider>
));
