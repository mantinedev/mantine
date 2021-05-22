import React, { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { useListState, randomId } from '@mantine/hooks';
import { TagPicker, TagPickerTag } from '@mantine/tag-picker';
import mockdata from './mockdata';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { useListState, randomId } from '@mantine/hooks';
import { TagPicker } from '@mantine/tag-picker';

function Demo() {
  const theme = useMantineTheme();
  const [value, onChange] = useState(null);
  const [categoriesState, categoriesHandlers] = useListState(mockdata);
  const colors = Object.keys(theme.colors)
    .filter((color) => color !== 'dark')
    .map((color) => ({ name: color, color }));

  return (
    <TagPicker
      data={categoriesState}
      colors={colors}
      value={value}
      description="Select or create new category"
      createLabel="Create category"
      deleteLabel="Delete category"
      noValueLabel="Select category"
      searchPlaceholder="Search categories"
      enableColorChange
      enableCreate
      enableUpdate
      enableDelete
      onChange={onChange}
      onTagCreate={(val) => {
        const category = { ...val, id: randomId() };
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
      }}
    />
  );
}`;

export function TagPickerBaseDemo() {
  const theme = useMantineTheme();
  const [value, onChange] = useState<TagPickerTag>(null);
  const [categoriesState, categoriesHandlers] = useListState(mockdata);
  const colors = Object.keys(theme.colors)
    .filter((color) => color !== 'dark')
    .map((color) => ({ name: color, color }));

  return (
    <CodeDemo code={code} language="tsx">
      <div>
        <TagPicker
          data={categoriesState}
          colors={colors}
          value={value}
          description="Select or create new category"
          createLabel="Create category"
          deleteLabel="Delete category"
          noValueLabel="Select category"
          searchPlaceholder="Search categories"
          enableColorChange
          enableCreate
          enableUpdate
          enableDelete
          onChange={onChange}
          onTagCreate={(val) => {
            const category = { ...val, id: randomId() };
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
          }}
        />
      </div>
    </CodeDemo>
  );
}
