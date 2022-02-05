import React, { forwardRef } from 'react';
import { MultiSelect, MultiSelectProps, Box, CloseButton } from '@mantine/core';
import { countriesData, flags } from './_countries-data';

const code = `
import { CloseButton, MultiSelect, Box } from '@mantine/core';

function Value({ value, label, onRemove, classNames, ...others }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          border: \`1px solid \${theme.colors.gray[4]}\`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <div style={{ marginRight: 10 }}>
          <FlagIcon />
        </div>
        <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div>
        <CloseButton onMouseDown={onRemove} variant="transparent" size={22} iconSize={14} tabIndex={-1} />
      </Box>
    </div>
  );
}

const Item = forwardRef(({ label, value, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Box sx={{ display: 'flex' }}>
      <Box mr={10}>
        <FlagIcon />
      </Box>
      <div>{label}</div>
    </Box>
  </div>
));

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
  const Flag = flags[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <Box mr={10}>
          <Flag />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, any>(({ label, value, ...others }: any, ref) => {
  const Flag = flags[value];
  return (
    <div ref={ref} {...others}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box mr={10}>
          <Flag />
        </Box>
        <div>{label}</div>
      </Box>
    </div>
  );
});

export function CountriesSelect(props: Partial<MultiSelectProps>) {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'FI']}
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
