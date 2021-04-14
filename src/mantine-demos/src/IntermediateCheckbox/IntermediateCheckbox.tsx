import React from 'react';
import { nanoid } from 'nanoid';
import { useListState } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: nanoid() },
  { label: 'Receive sms notifications', checked: false, key: nanoid() },
  { label: 'Receive push notifications', checked: false, key: nanoid() },
];

export function IntermediateCheckbox() {
  const theme = useMantineTheme();
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const intermediate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      style={{ marginTop: theme.spacing.xs, marginLeft: 33 }}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <div>
      <Checkbox
        checked={allChecked}
        intermediate={intermediate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </div>
  );
}
