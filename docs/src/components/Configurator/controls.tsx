import React from 'react';
import { Select, TextInput, Switch } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const sizesData = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => ({ value: size, label: size }));

const colorsData = Object.keys(DEFAULT_THEME.colors).map((color) => ({
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
      label={capitalize(label)}
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
  return (
    <TextInput
      {...others}
      label={capitalize(label)}
      value={value.toString()}
      onChange={(event) => onChange(event.currentTarget.value)}
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
  return (
    <Select
      {...others}
      data={colorsData}
      value={value}
      label={capitalize(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
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
  return (
    <Select
      data={data.map((item) => ({
        value: item.value,
        label: capitalizeItems ? capitalize(item.label) : item.label,
      }))}
      value={value}
      label={capitalize(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
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
  return (
    <Select
      {...others}
      data={sizesData}
      value={value}
      label={capitalize(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
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
