import { useState } from 'react';
import { Button } from '../Button';
import { ComboboxPopover } from './ComboboxPopover';

export default { title: 'ComboboxPopover' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover data={['React', 'Angular', 'Vue', 'Svelte']}>
        <ComboboxPopover.Target>
          <Button>Open dropdown</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
      >
        <ComboboxPopover.Target>
          <Button>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function Multiple() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        multiple
      >
        <ComboboxPopover.Target>
          <Button>{value.length > 0 ? value.join(', ') : 'Select frameworks'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function WithCheckIcon() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        withCheckIcon
      >
        <ComboboxPopover.Target>
          <Button>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function WithGroups() {
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover
        data={[
          { group: 'Frontend', items: ['React', 'Vue', 'Angular'] },
          { group: 'Backend', items: ['Node.js', 'Django', 'Rails'] },
        ]}
      >
        <ComboboxPopover.Target>
          <Button>Select technology</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function NothingFound() {
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover data={[]} nothingFoundMessage="No options available">
        <ComboboxPopover.Target>
          <Button>Open dropdown</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function AllowDeselectFalse() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        allowDeselect={false}
      >
        <ComboboxPopover.Target>
          <Button>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </div>
  );
}

export function WithHiddenInput() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Selected:', formData.get('framework'));
      }}
    >
      <ComboboxPopover data={['React', 'Angular', 'Vue', 'Svelte']} name="framework">
        <ComboboxPopover.Target>
          <Button type="button">Select framework</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
