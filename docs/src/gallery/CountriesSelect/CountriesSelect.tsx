import React from 'react';
import Flag from 'react-flagpack';
import {
  useMantineTheme,
  CloseButton,
  MultiSelect,
  MultiSelectValueProps,
  SelectItemProps,
} from '@mantine/core';
import { countriesData } from './countries-data';

function Value({
  value,
  label,
  onRemove,
  themeOverride,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const theme = useMantineTheme(themeOverride);

  return (
    <div {...others}>
      <div
        style={{
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: 10,
          borderRadius: 4,
        }}
      >
        <div style={{ marginRight: 10 }}>
          <Flag code={value} size="S" />
        </div>
        <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div>
        <CloseButton onClick={onRemove} variant="transparent" size={22} iconSize={14} />
      </div>
    </div>
  );
}

function Item({ label, value, elementRef, ...others }: SelectItemProps) {
  return (
    <div ref={elementRef} {...others}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 10 }}>
          <Flag code={value} size="S" />
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
}

export function CountriesSelect() {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'DE']}
      placeholder="Pick countries"
      label="Which countries did you visit last year?"
    />
  );
}
