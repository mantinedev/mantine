/* eslint-disable no-spaced-func */
import React, { useCallback, useState, useRef, memo } from 'react';
import { TextInput, TextInputProps, MultiSelect, MultiSelectProps } from '@mantine/core';

export default { title: 'Form' };

const TestInput = memo((props: TextInputProps) => {
  console.log(`Rerender ${props.name}`);
  return <TextInput {...props} />;
});

const TestMultiSelect = memo((props: MultiSelectProps) => {
  console.log(`Rerender ${props.name}`);
  return <MultiSelect {...props} />;
});

function useTestForm() {
  const [state, setState] = useState({ first: '', second: [] });
  const handleChange = useCallback((path: string, value: any) => {
    setState((current) => ({ ...current, [path]: value }));
  }, []);

  const callbacks = useRef<Record<string, (event: any) => void>>({});

  const getInputProps = (path: string) => {
    if (!(path in callbacks.current)) {
      callbacks.current[path] = (event: any) =>
        handleChange(path, 'currentTarget' in event ? event.currentTarget.value : event);
    }

    return {
      value: state[path],
      onChange: callbacks.current[path],
    };
  };

  return { getInputProps, values: state };
}

const data = ['1', '2', '3'];

export function RerenderingTest() {
  const form = useTestForm();

  return (
    <div style={{ padding: 40 }}>
      <TestInput name="first" {...form.getInputProps('first')} />
      <TestMultiSelect name="second" {...form.getInputProps('second')} data={data} />
    </div>
  );
}
