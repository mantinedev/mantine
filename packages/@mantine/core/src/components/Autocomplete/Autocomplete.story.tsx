import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

const options = [
  { value: 're', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'vu', label: 'Vue' },
  { value: 'sv', label: 'Svelte' },
  {
    group: 'backend',
    items: [
      { value: 'no', label: 'Node' },
      { value: 'ex', label: 'Express' },
    ],
  },

  {
    group: 'python',
    items: [
      { value: 'dj', label: 'Django' },
      { value: 'fl', label: 'Flask' },
    ],
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Autocomplete
        data={options}
        placeholder="Select something"
        autoSelectOnBlur
        error="This field is required"
        leftSection="$"
        attributes={{
          input: { 'data-test-id': 'input' },
          section: { 'data-test-id': 'section' },
          error: { 'data-test-id': 'err' },
        }}
      />
    </div>
  );
}

export function WithFormData() {
  return (
    <div style={{ padding: 40 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          console.log('Checkbox group value:', formData.get('framework'));
        }}
      >
        <Autocomplete name="framework" defaultValue="React" data={['React', 'Angular']} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
