import { useState } from 'react';
import { Mentions } from './Mentions';

export default { title: 'Mentions' };

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
  { id: 'gus', display: 'Gustavo Fring' },
  { id: 'mike', display: 'Mike Ehrmantraut' },
];

const tags = [
  { id: '1', display: 'announcement' },
  { id: '2', display: 'question' },
  { id: '3', display: 'bug' },
  { id: '4', display: 'feature' },
];

export function Usage() {
  const [value, setValue] = useState('Hey @[Walter White](walter), are you ready?');

  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Comment"
        placeholder="Type @ to mention someone, # to tag"
        value={value}
        onChange={(payload) => setValue(payload.value)}
        minRows={3}
        maxRows={5}
      >
        <Mentions.Mention trigger="@" data={users} />
        <Mentions.Mention trigger="#" data={tags} appendSpaceOnAdd />
      </Mentions>

      <div style={{ marginTop: 20, fontSize: 12, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        value: {value}
      </div>
    </div>
  );
}

export function SingleLine() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions label="Single line" singleLine placeholder="Mention someone with @">
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function LeftAnchor() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions label="Left anchored" anchorMode="left" placeholder="Type @">
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function Inline() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions label="Inline suggestions" suggestionsDisplay="inline" placeholder="Type @">
        <Mentions.Mention trigger="@" data={users} appendSpaceOnAdd />
      </Mentions>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions label="Disabled" disabled defaultValue="Static @[Walter White](walter) preview">
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}
