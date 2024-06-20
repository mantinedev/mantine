import { InputBase } from './InputBase';

export default { title: 'InputBase' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <InputBase label="Disabled by fieldset" placeholder="Disabled by fieldset" />
      <InputBase label="Disabled by prop" placeholder="Disabled by prop" disabled mt="md" />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <InputBase
        label="This is input base"
        error="test-error"
        placeholder="test-placeholder"
        data-test="orange"
      />
    </div>
  );
}

export function WithoutAria() {
  return (
    <div style={{ padding: 40 }}>
      <InputBase label="This is input base" placeholder="test-placeholder" withAria={false} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <InputBase label="This is input base" placeholder="test-placeholder" unstyled />
    </div>
  );
}
