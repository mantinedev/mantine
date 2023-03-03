import { MANTINE_SIZES } from '@mantine/styles';
import React from 'react';
import { Select } from './Select';

export default { title: 'Select' };

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={data} clearable defaultValue="React" readOnly searchable />
    </div>
  );
}

export function CreatableWithNoFilter() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        creatable
        searchable
        getCreateLabel={() => 'createLabel'}
        shouldCreate={() => true}
        data={['8.0.0', '8.1.0']}
        value="8.0.0"
      />
    </div>
  );
}

export function OverrideDropdownPadding() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        styles={{
          itemsWrapper: {
            padding: 40,
          },
        }}
        data={Array(100)
          .fill(0)
          .map((_, index) => `Item ${index}`)}
      />
    </div>
  );
}

export function Scroll() {
  const content = Array(20)
    .fill(0)
    .map((_, index) => <p key={index}>`Item ${index}`</p>);

  return (
    <div>
      {content}
      <Select data={['react']} />
      {content}
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Select
      data={data}
      placeholder={`Select ${size}`}
      size={size}
      clearable
      defaultValue={data[0]}
      key={size}
      mt="md"
      styles={{ rightSection: { backgroundColor: 'pink' } }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
