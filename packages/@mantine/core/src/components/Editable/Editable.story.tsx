import { useState } from 'react';
import { ActionIcon } from '../ActionIcon';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Editable } from './Editable';
import { useEditable } from './use-editable';

export default { title: 'Editable' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Editable defaultValue="Project name" onValueCommit={(v) => console.log('commit', v)} />
    </div>
  );
}

export function ActivationModes() {
  return (
    <Stack p={40} maw={320}>
      <Editable defaultValue="Focus to edit" activationMode="focus" />
      <Editable defaultValue="Click to edit" activationMode="click" />
      <Editable defaultValue="Double click to edit" activationMode="dblclick" />
    </Stack>
  );
}

export function WithPlaceholder() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Editable placeholder={{ preview: 'Click to add a name', edit: 'Type a name...' }} />
    </div>
  );
}

export function Multiline() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Editable
        multiline
        autosize
        w={320}
        defaultValue={'Multi\nline\nvalue'}
        activationMode="click"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <Stack p={40} maw={320}>
      <Editable defaultValue="Disabled" disabled />
      <Editable defaultValue="Read only" readOnly />
    </Stack>
  );
}

export function CustomLayout() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Editable defaultValue="Custom layout" activationMode="none">
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.EditTrigger>
            <ActionIcon component="span" variant="default" size="sm">
              ✎
            </ActionIcon>
          </Editable.EditTrigger>
          <Editable.SubmitTrigger>
            <ActionIcon component="span" variant="light" color="green" size="sm">
              ✓
            </ActionIcon>
          </Editable.SubmitTrigger>
          <Editable.CancelTrigger>
            <ActionIcon component="span" variant="light" color="red" size="sm">
              ✕
            </ActionIcon>
          </Editable.CancelTrigger>
        </Editable.Control>
      </Editable>
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('Controlled value');
  const [editing, setEditing] = useState(false);

  return (
    <Stack p={40} maw={320}>
      <Editable
        value={value}
        onChange={setValue}
        editing={editing}
        onEditingChange={setEditing}
        activationMode="click"
      />
      <Text>value: {value}</Text>
      <Text>editing: {String(editing)}</Text>
    </Stack>
  );
}

export function ExternalController() {
  const editable = useEditable({ defaultValue: 'Controller value', activationMode: 'click' });

  return (
    <Stack p={40} maw={320}>
      <Editable controller={editable} />
      <Text>value: {editable.value}</Text>
      <Text>editing: {String(editable.editing)}</Text>
      <Group>
        <button type="button" onClick={editable.edit}>
          edit
        </button>
        <button type="button" onClick={editable.submit}>
          submit
        </button>
        <button type="button" onClick={editable.cancel}>
          cancel
        </button>
      </Group>
    </Stack>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Editable unstyled defaultValue="Unstyled" activationMode="click" />
    </div>
  );
}
