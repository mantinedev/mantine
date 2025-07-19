import { Checkbox } from './Checkbox';

export default { title: 'Checkbox' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" value="hello" />
      <Checkbox label="Disabled" checked disabled mt="sm" />
      <Checkbox label="Indeterminate" indeterminate mt="sm" />
    </div>
  );
}

export function CheckboxGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group defaultValue={['react']}>
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}
