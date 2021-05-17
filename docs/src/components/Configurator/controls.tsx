import React from 'react';
import {
  Select,
  TextInput,
  Switch,
  SegmentedControl,
  InputWrapper,
  DEFAULT_THEME,
  useMantineTheme,
} from '@mantine/core';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const sizesData = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => ({
  value: size,
  label: size,
}));

const colorsData = Object.keys(DEFAULT_THEME.colors)
  .filter((color) => color !== 'dark')
  .map((color) => ({
    label: capitalize(color),
    value: color,
  }));

function BooleanControl({
  value,
  label,
  onChange,
  ...others
}: {
  value: boolean;
  label: string;
  onChange(value: boolean): void;
}) {
  return (
    <Switch
      {...others}
      label={label.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase()}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
    />
  );
}

function NumberControl({
  value,
  label,
  onChange,
  ...others
}: {
  value: number;
  label: string;
  onChange(value: number): void;
}) {
  return (
    <TextInput
      {...others}
      type="number"
      label={capitalize(label)}
      value={value.toString()}
      onChange={(event) => onChange(parseFloat(event.currentTarget.value) || 0)}
    />
  );
}

function StringControl({
  value,
  label,
  onChange,
  ...others
}: {
  value: string;
  label: string;
  onChange(value: string): void;
}) {
  const theme = useMantineTheme();
  return (
    <TextInput
      {...others}
      label={capitalize(label)}
      placeholder={capitalize(label)}
      value={value.toString()}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

function ColorControl({
  value,
  label,
  onChange,
  ...others
}: {
  value: string;
  label: string;
  onChange(value: string): void;
}) {
  const theme = useMantineTheme();

  return (
    <Select
      {...others}
      data={colorsData}
      value={value}
      label={capitalize(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

function SelectControl({
  value,
  label,
  onChange,
  data,
  capitalize: capitalizeItems = true,
  ...others
}: {
  value: string;
  label: string;
  capitalize: boolean;
  onChange(value: string): void;
  data: { label: string; value: string }[];
}) {
  const theme = useMantineTheme();
  return (
    <Select
      data={data.map((item) => ({
        value: item.value,
        label: capitalizeItems ? capitalize(item.label) : item.label,
      }))}
      value={value}
      label={capitalize(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      {...others}
    />
  );
}

function SizeControl({
  value,
  label,
  onChange,
  ...others
}: {
  value: string;
  label: string;
  capitalize: boolean;
  onChange(value: string): void;
}) {
  const theme = useMantineTheme();

  return (
    <InputWrapper labelElement="div" label={capitalize(label)} {...others}>
      <div
        style={{
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          borderRadius: theme.radius.sm,
        }}
      >
        <SegmentedControl
          data={sizesData}
          value={value}
          onChange={onChange}
          fullWidth
          color="blue"
          style={{
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          }}
        />
      </div>
    </InputWrapper>
  );
}

export default {
  boolean: BooleanControl,
  number: NumberControl,
  color: ColorControl,
  select: SelectControl,
  string: StringControl,
  size: SizeControl,
};
