import React from 'react';
import Flag from 'react-flagpack';
import { useMantineTheme } from '@mantine/tss';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { countriesData } from './_countries-data';
import { MultiSelect, MultiSelectProps } from '../MultiSelect';

const code = `
import Flag from 'react-flagpack';
import { CloseButton, MultiSelect } from '@mantine/core';

function Value({ value, label, onRemove, classNames, ...others }) {
  const theme = useMantineTheme();

  return (
    <div {...others}>
      <div
        style={{
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          border: \`1px solid \${theme.colors.gray[4]}\`,
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

function Item({ label, value, elementRef, ...others }) {
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
      label="Which countries you visited last year?"
    />
  );
}
`;

function Value({ value, label, onRemove, classNames, ...others }: any) {
  const theme = useMantineTheme();

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

function Item({ label, value, elementRef, ...others }: any) {
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

export function CountriesSelect(props: Partial<MultiSelectProps>) {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'DE']}
      placeholder="Pick countries"
      label="Which countries you visited last year?"
      {...props}
    />
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <CountriesSelect />
    </div>
  );
}

export const countries: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
