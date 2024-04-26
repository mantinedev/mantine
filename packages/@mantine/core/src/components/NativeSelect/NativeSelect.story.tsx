import { rem } from '../../core';
import { TextInput } from '../TextInput';
import { NativeSelect } from './NativeSelect';

export default { title: 'NativeSelect' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <NativeSelect data={['React']} size="lg" label="Disabled input within fieldset" />
      <NativeSelect data={['React']} size="lg" label="Disabled input" disabled mt="md" />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect data={['React', 'Angular', 'Vue']} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect data={['React', 'Angular', 'Vue']} unstyled />
    </div>
  );
}

export function Groups() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect
        data={[
          {
            group: 'Frontend',
            items: ['React', 'Angular', 'Vue'],
          },
          {
            group: 'Backend',
            items: ['Node', 'PHP', 'Python'],
          },
        ]}
      />
    </div>
  );
}

export function OptionsAsChildren() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect error="test-error" size="xl">
        <optgroup label="Front">
          <option>React</option>
          <option>Angular</option>
          <option>Vue</option>
        </optgroup>
        <optgroup label="Back">
          <option>Node</option>
          <option>PHP</option>
          <option>Python</option>
        </optgroup>
      </NativeSelect>
    </div>
  );
}

const data = [
  { value: 'eur', label: '🇪🇺 EUR' },
  { value: 'usd', label: '🇺🇸 USD' },
  { value: 'cad', label: '🇨🇦 CAD' },
  { value: 'gbp', label: '🇬🇧 GBP' },
  { value: 'aud', label: '🇦🇺 AUD' },
];

export function WithinRightSection() {
  const select = (
    <NativeSelect
      data={data}
      rightSectionWidth={28}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: rem(92),
          marginRight: rem(-2),
        },
      }}
    />
  );

  return (
    <TextInput
      type="number"
      placeholder="1000"
      label="Transfer amount"
      rightSection={select}
      rightSectionWidth={92}
    />
  );
}
