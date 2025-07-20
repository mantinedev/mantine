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
      <Checkbox.Group defaultValue={['react']}>
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}

export function UncontrolledForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Checkbox value:', !!formData.get('agreement'));
      }}
    >
      <Checkbox label="Uncontrolled" name="agreement" />
      <button type="submit">Submit</button>
    </form>
  );
}
