import { useState } from 'react';
import { Mentions } from './Mentions';
import type { MentionOccurrence, MentionSerializer } from './Mentions.types';

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

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Disabled"
        disabled
        defaultValue="Disabled field with @[Walter White](walter) mention"
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function Static() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Static"
        mode="static"
        defaultValue="Read only @[Walter White](walter) mention"
        renderMention={({ display }) => <span data-testid="static-mention">{display}</span>}
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function PlacementAbove() {
  return (
    <div style={{ padding: 40, paddingTop: 300, maxWidth: 480 }}>
      <Mentions label="Dropdown above" suggestionsPlacement="above" placeholder="Type @">
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function PlacementAuto() {
  return (
    <div
      style={{
        padding: 40,
        maxWidth: 480,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Mentions
        label="Dropdown flips when there is no space below"
        suggestionsPlacement="auto"
        placeholder="Type @"
        style={{ flex: 1 }}
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

const hashSerializer: MentionSerializer = {
  id: 'hash',
  insert: ({ id, display }) => `<@${id}|${display}>`,
  findAll: (value) =>
    [...value.matchAll(/<@([^|>]+)\|([^>]+)>/g)].map((match) => ({
      markup: match[0],
      index: match.index ?? 0,
      id: match[1],
      display: match[2],
    })),
};

export function CustomSerializer() {
  const [value, setValue] = useState('Ping <@walter|Walter White>');

  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Custom serializer"
        value={value}
        onChange={(payload) => setValue(payload.value)}
      >
        <Mentions.Mention trigger="@" data={users} markup={hashSerializer} />
      </Mentions>
      <div style={{ marginTop: 20, fontSize: 12, fontFamily: 'monospace' }}>value: {value}</div>
    </div>
  );
}

export function AsyncError() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Async error and empty states"
        description="Type @fail to reject, @zzz for an empty result"
        placeholder="Type @"
      >
        <Mentions.Mention
          trigger="@"
          data={async (query) => {
            await new Promise((resolve) => setTimeout(resolve, 400));
            if (query.startsWith('fail')) {
              throw new Error('Network error');
            }
            return users.filter((user) => user.display.toLowerCase().includes(query.toLowerCase()));
          }}
          renderError={(query, error) => `Could not load "${query}": ${(error as Error).message}`}
          renderEmpty={(query) => `Nobody matches "${query}"`}
        />
      </Mentions>
    </div>
  );
}

export function RenderSuggestion() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions label="Custom suggestion rows" placeholder="Type @">
        <Mentions.Mention
          trigger="@"
          data={users}
          renderSuggestion={({ item, highlighted, index }) => (
            <div style={{ fontWeight: highlighted ? 700 : 400 }}>
              {index + 1}. {item.display} <span style={{ opacity: 0.6 }}>@{item.id}</span>
            </div>
          )}
        />
      </Mentions>
    </div>
  );
}

export function SelectionChange() {
  const [state, setState] = useState<{
    selection: { start: number; end: number };
    mentions: MentionOccurrence[];
  }>({ selection: { start: 0, end: 0 }, mentions: [] });

  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Selection change"
        defaultValue="Hey @[Walter White](walter) and @[Jesse Pinkman](jesse)"
        onSelectionChange={(selection, mentions) => setState({ selection, mentions })}
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
      <div style={{ marginTop: 20, fontSize: 12, fontFamily: 'monospace' }}>
        selection: {state.selection.start}–{state.selection.end}, mentions:{' '}
        {state.mentions.map((mention) => mention.id).join(', ') || 'none'}
      </div>
    </div>
  );
}

export function CrlfValue() {
  const [value, setValue] = useState('First line\r\n@[Walter White](walter) on the second line');

  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="CRLF value"
        value={value}
        onChange={(payload) => setValue(payload.value)}
        minRows={3}
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
      <div style={{ marginTop: 20, fontSize: 12, fontFamily: 'monospace' }}>
        value: {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function SingleLineLongValue() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Single line with a long value"
        singleLine
        defaultValue="This single line value is long enough to scroll horizontally, it mentions @[Walter White](walter) and keeps going with @[Jesse Pinkman](jesse) at the end"
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}

export function InlineMidLine() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Inline suggestions with text after the caret"
        description="Place the caret before 'text' and type @wa – no ghost is shown mid-line"
        suggestionsDisplay="inline"
        defaultValue={'Hello  text after\nsecond line'}
        minRows={2}
      >
        <Mentions.Mention trigger="@" data={users} appendSpaceOnAdd />
      </Mentions>
    </div>
  );
}

export function InlineMaxRows() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Inline suggestions in a scrolling textarea"
        description="Type four lines, then @wa – the ghost follows the caret after the textarea scrolls"
        suggestionsDisplay="inline"
        defaultValue={'First line\nSecond line\nThird line\nFourth line\n'}
        maxRows={2}
      >
        <Mentions.Mention trigger="@" data={users} appendSpaceOnAdd />
      </Mentions>
    </div>
  );
}

export function SingleLineInlineLongValue() {
  return (
    <div style={{ padding: 40, maxWidth: 480 }}>
      <Mentions
        label="Single line inline suggestions with a long value"
        description="Place the caret at the end and type @wa – the ghost is drawn at the caret"
        singleLine
        suggestionsDisplay="inline"
        defaultValue="This single line value is long enough to scroll horizontally and keeps going until the end "
      >
        <Mentions.Mention trigger="@" data={users} />
      </Mentions>
    </div>
  );
}
