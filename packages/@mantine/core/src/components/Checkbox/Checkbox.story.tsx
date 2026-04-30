import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default { title: 'Checkbox' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" value="hello" />
      <Checkbox label="Read only" value="hello" readOnly mt="sm" />
      <Checkbox label="Disabled" checked disabled mt="sm" />
      <Checkbox label="Indeterminate" indeterminate mt="sm" />
      <Checkbox
        label="With error message"
        error="Error message"
        value="hello"
        mt="sm"
        withErrorStyles={false}
      />
      <Checkbox label="With boolean error" error value="hello" mt="sm" />
    </div>
  );
}

export function CheckboxGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group defaultValue={['react']} id="test-group" label="Frameworks">
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}

export function CheckboxGroupPrimitiveGeneric() {
  const [stringValue, setStringValue] = useState<('react' | 'ng')[]>(['react']);
  const [numberValue, setNumberValue] = useState<(1 | 2 | 3)[]>([1]);

  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group<'react' | 'ng'>
        value={stringValue}
        onChange={setStringValue}
        label="String generic"
      >
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>

      <Checkbox.Group<1 | 2 | 3>
        value={numberValue}
        onChange={setNumberValue}
        label="Number generic"
        mt="md"
      >
        <Checkbox label="One" value="1" />
        <Checkbox label="Two" value="2" />
        <Checkbox label="Three" value="3" />
      </Checkbox.Group>

      <div style={{ marginTop: 20 }}>
        <div>String value: {JSON.stringify(stringValue)}</div>
        <div>Number value: {JSON.stringify(numberValue)}</div>
      </div>
    </div>
  );
}

export function UncontrolledForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Checkbox group value:', formData.get('frameworks'));
      }}
    >
      <Checkbox.Group label="Frameworks" name="frameworks" hiddenInputValuesSeparator="|">
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
      <button type="submit">Submit</button>
    </form>
  );
}
