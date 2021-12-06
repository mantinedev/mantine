import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';

export function TagPicker() {
  const [data, setData] = useState(['JavaScript', 'React', 'Angular', 'Vue', 'Svelte']);

  return (
    <MultiSelect
      label="Select tags or create new one"
      placeholder="What you article is about?"
      data={data}
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => setData((current) => [...current, query])}
      nothingFound="Nothing found..."
    />
  );
}
