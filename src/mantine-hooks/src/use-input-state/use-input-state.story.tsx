import React from 'react';
import { storiesOf } from '@storybook/react';
import { useInputState } from './use-input-state';

function InputEvent() {
  const [inputValue, onInputChange] = useInputState('');
  const [checkbox, onCheckboxChange] = useInputState(false);
  const [radio, onRadioChange] = useInputState('');
  const [select, onSelectChange] = useInputState<string>(null);

  return (
    <>
      <div>Text input value: {inputValue}</div>
      <input type="text" placeholder="Text input" value={inputValue} onChange={onInputChange} />

      <div style={{ marginTop: 20 }}>
        <div>Checkbox input value: {checkbox.toString()}</div>
        <input type="checkbox" checked={checkbox} onChange={onCheckboxChange} />
      </div>
      <div style={{ marginTop: 20 }}>
        <div>Radio input value: {radio}</div>
        <input type="radio" value="1" checked={radio === '1'} onChange={onRadioChange} />
        <input type="radio" value="2" checked={radio === '2'} onChange={onRadioChange} />
        <input type="radio" value="3" checked={radio === '3'} onChange={onRadioChange} />
      </div>
      <div style={{ marginTop: 20 }}>
        <div>Select value: {select}</div>
        <select value={select} onChange={onSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </>
  );
}

function ValueInput() {
  const [value, onChange] = useInputState('');
  return (
    <>
      <div>Input value: {value}</div>
      <input
        placeholder="Value input"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </>
  );
}

storiesOf('Hooks/use-input-state', module)
  .add('Native input events', () => (
    <div style={{ padding: 40 }}>
      <InputEvent />
    </div>
  ))
  .add('Custom inputs', () => (
    <div style={{ padding: 40 }}>
      <ValueInput />
    </div>
  ));
