import React, { forwardRef } from 'react';
import {
  MultiSelect,
  MultiSelectProps,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
} from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { countriesData, flags } from './_countries-data';

const code = `
import { forwardRef } from 'react';
import {
  MultiSelect,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
} from '@mantine/core';

const countriesData = [
  { label: 'United States', value: 'US' },
  { label: 'Great Britain', value: 'GB' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Russia', value: 'RU' },
];

const flags = { /* Record with flag icon components */ };

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const Flag = flags[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: \`\${rem(1)} solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }\`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          <Flag />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
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

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  const Flag = flags[value];
  return (
    <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>
          <Flag />
        </Box>
        <div>{label}</div>
      </Flex>
    </div>
  );
});

function Demo() {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'FI']}
      placeholder="Pick countries"
      label="Which countries did you visit last year?"
    />
  );
}
`;

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const Flag = flags[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          <Flag />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
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

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  const Flag = flags[value];
  return (
    <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>
          <Flag />
        </Box>
        <div>{label}</div>
      </Flex>
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
      label="Which countries did you visit last year?"
      {...props}
    />
  );
}

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <CountriesSelect />
    </Box>
  );
}

export const countries: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
