import { useEffect, useRef, useState } from 'react';
import {
  IconAt,
  IconChevronDown,
  IconClock,
  IconCode,
  IconLink,
  IconList,
  IconPaperclip,
  IconSend,
} from '@tabler/icons-react';
import { ActionIcon, Button, Combobox, Menu, Textarea, useCombobox } from '@mantine/core';
import { CREW, PEOPLE, SEND_LATER } from './data';
import { PersonAvatar } from './PersonAvatar';
import classes from './Composer.module.css';

type Suggestion =
  | { type: 'at'; key: string; label: string; sub: string }
  | { type: 'cmd'; label: string; sub: string; value: string };

interface Suggestions {
  mode: 'at' | 'cmd';
  items: Suggestion[];
}

const AT_QUERY = /@([\wÀ-ž]*)$/;
const COMMAND = /^\/(\w*)(?:\s+(\d*))?$/;
const WRAP_READY = /^\/wrap \d+$/;

function getSuggestions(text: string, caret: number, nowScene: string | undefined) {
  const at = text.slice(0, caret).match(AT_QUERY);
  if (at) {
    const query = at[1].toLowerCase();
    const items: Suggestion[] = CREW.filter((key) =>
      PEOPLE[key].name.toLowerCase().includes(query)
    ).map((key) => ({ type: 'at', key, label: PEOPLE[key].name, sub: PEOPLE[key].role }));
    return items.length ? ({ mode: 'at', items } satisfies Suggestions) : null;
  }

  const command = text.match(COMMAND);
  if (command) {
    const items: Suggestion[] = [
      {
        type: 'cmd' as const,
        label: '/wrap',
        sub: 'Mark a scene as wrapped',
        value: `/wrap ${nowScene ?? ''}`,
      },
      { type: 'cmd' as const, label: '/hold', sub: 'Pin a weather or light hold', value: '/hold ' },
    ].filter((item) => item.label.startsWith(`/${command[1]}`));
    return items.length ? ({ mode: 'cmd', items } satisfies Suggestions) : null;
  }

  return null;
}

const FORMATS = [
  { marker: '**', label: 'Bold', content: 'B', className: classes.bold },
  { marker: '_', label: 'Italic', content: 'I', className: classes.italic },
  { marker: '`', label: 'Code', content: <IconCode stroke={1.8} /> },
];

interface ComposerProps {
  placeholder: string;
  nowScene: string | undefined;
  top?: React.ReactNode;
  onSend: (text: string) => boolean;
  onSchedule: (when: string, text: string) => void;
  onToast: (text: string) => void;
}

export function Composer({
  placeholder,
  nowScene,
  top,
  onSend,
  onSchedule,
  onToast,
}: ComposerProps) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pendingSelection = useRef<[number, number] | null>(null);
  const store = useCombobox({ onDropdownClose: () => setSuggestions(null) });

  useEffect(() => {
    if (suggestions) {
      store.openDropdown();
      const frame = requestAnimationFrame(() => store.selectFirstOption());
      return () => cancelAnimationFrame(frame);
    }
    store.closeDropdown();
    return undefined;
  }, [suggestions]);

  useEffect(() => {
    const selection = pendingSelection.current;
    const textarea = textareaRef.current;
    if (selection && textarea) {
      textarea.focus();
      textarea.setSelectionRange(selection[0], selection[1]);
      pendingSelection.current = null;
    }
  }, [value]);

  const update = (text: string, caret: number) => {
    setValue(text);
    setSuggestions(getSuggestions(text, caret, nowScene));
  };

  const setText = (text: string, start: number, end = start) => {
    pendingSelection.current = [start, end];
    setValue(text);
  };

  const choose = (index: number) => {
    const item = suggestions?.items[index];
    const textarea = textareaRef.current;
    if (!item || !textarea) {
      return;
    }

    if (item.type === 'at') {
      const caret = textarea.selectionStart;
      const before = value.slice(0, caret).replace(AT_QUERY, `@${item.label} `);
      setText(before + value.slice(caret), before.length);
    } else {
      setText(item.value, item.value.length);
    }
    setSuggestions(null);
  };

  const send = () => {
    const text = value.trim();
    if (!text) {
      textareaRef.current?.focus();
      return;
    }

    if (onSend(text)) {
      setValue('');
      setSuggestions(null);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const hasSelection =
      suggestions !== null && store.dropdownOpened && store.getSelectedOptionIndex() !== -1;

    if (event.key === 'Tab' && hasSelection) {
      event.preventDefault();
      store.clickSelectedOption();
      return;
    }

    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      if (hasSelection && !(suggestions?.mode === 'cmd' && WRAP_READY.test(value))) {
        return;
      }
      event.preventDefault();
      store.resetSelectedOption();
      send();
    }
  };

  const applyFormat = (marker: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.slice(start, end) || 'text';
    setText(
      value.slice(0, start) + marker + selected + marker + value.slice(end),
      start + marker.length,
      start + marker.length + selected.length
    );
  };

  const mention = () => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }
    const caret = textarea.selectionStart;
    const text = `${value.slice(0, caret)}@${value.slice(caret)}`;
    setText(text, caret + 1);
    setSuggestions(getSuggestions(text, caret + 1, nowScene));
  };

  const schedule = (when: string) => {
    const text = value.trim();
    if (!text) {
      onToast('Write a message first, then schedule it');
      textareaRef.current?.focus();
      return;
    }
    onSchedule(when, text.length > 48 ? `${text.slice(0, 48)}…` : text);
    setValue('');
  };

  return (
    <div className={classes.wrap}>
      {top}
      <Combobox
        store={store}
        position="top-start"
        offset={6}
        width="max-content"
        onOptionSubmit={(option) => choose(Number(option))}
      >
        <Combobox.DropdownTarget>
          <div className={classes.composer}>
            <div className={classes.toolbar} role="toolbar" aria-label="Formatting">
              {FORMATS.map((format) => (
                <ActionIcon
                  key={format.label}
                  variant="subtle"
                  size={28}
                  radius="sm"
                  aria-label={format.label}
                  className={`${classes.tool} ${format.className ?? ''}`}
                  onClick={() => applyFormat(format.marker)}
                >
                  {format.content}
                </ActionIcon>
              ))}
              <span className={classes.separator} />
              <ActionIcon
                variant="subtle"
                size={28}
                radius="sm"
                aria-label="Link"
                className={classes.tool}
              >
                <IconLink stroke={1.8} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                size={28}
                radius="sm"
                aria-label="List"
                className={classes.tool}
              >
                <IconList stroke={1.8} />
              </ActionIcon>
            </div>

            <Combobox.EventsTarget>
              <Textarea
                ref={textareaRef}
                variant="unstyled"
                autosize
                minRows={1}
                maxRows={5}
                placeholder={placeholder}
                aria-label="Message"
                value={value}
                classNames={{ input: classes.textarea }}
                onChange={(event) =>
                  update(event.currentTarget.value, event.currentTarget.selectionStart)
                }
                onKeyDown={handleKeyDown}
              />
            </Combobox.EventsTarget>

            <div className={classes.foot}>
              <div className={classes.footActions}>
                <ActionIcon
                  variant="subtle"
                  aria-label="Attach a file"
                  onClick={() => onToast('Choose a file to share with the channel')}
                >
                  <IconPaperclip stroke={1.8} />
                </ActionIcon>
                <ActionIcon variant="subtle" aria-label="Mention someone" onClick={mention}>
                  <IconAt stroke={1.8} />
                </ActionIcon>
              </div>
              <span className={classes.hint}>Enter to send, Shift and Enter for a new line</span>
              <Button.Group>
                <Button leftSection={<IconSend stroke={1.8} />} onClick={send}>
                  Send
                </Button>
                <Menu position="top-end" offset={6}>
                  <Menu.Target>
                    <Button className={classes.caret} aria-label="Schedule send">
                      <IconChevronDown size={16} stroke={1.8} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Send later</Menu.Label>
                    {SEND_LATER.map((option) => (
                      <Menu.Item
                        key={option.when}
                        leftSection={<IconClock stroke={1.8} />}
                        rightSection={<span className={classes.menuTime}>{option.time}</span>}
                        onClick={() => schedule(option.when)}
                      >
                        {option.label}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              </Button.Group>
            </div>
          </div>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown hidden={!suggestions} className={classes.suggestions}>
          <Combobox.Header>
            {suggestions?.mode === 'at' ? 'Mention someone on the crew' : 'Commands'}
          </Combobox.Header>
          <Combobox.Options>
            {suggestions?.items.map((item, index) => (
              <Combobox.Option key={item.label} value={String(index)}>
                {item.type === 'at' && <PersonAvatar who={item.key} size={20} />}
                <span>{item.label}</span>
                <span className={classes.sub}>{item.sub}</span>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
