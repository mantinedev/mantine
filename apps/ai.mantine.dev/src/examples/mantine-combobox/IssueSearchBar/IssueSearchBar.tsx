import dayjs from 'dayjs';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  IconCircleCheck,
  IconCircleDot,
  IconHistory,
  IconProgress,
  IconSearch,
} from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  CheckIcon,
  ColorSwatch,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  Stack,
  Surface,
  Text,
  ThemeIcon,
  useCombobox,
} from '@mantine/core';
import { ISSUES, LABELS, MEMBERS, type Issue, type IssueStatus } from './data';
import {
  addToken,
  extractTokens,
  FILTERS,
  filterIssues,
  getFilter,
  resolveToken,
  serializeQuery,
  tokenText,
  type FilterDefinition,
  type FilterValue,
  type SearchQuery,
  type Token,
} from './query';
import classes from './IssueSearchBar.module.css';

const EMPTY_QUERY: SearchQuery = { tokens: [], text: '' };
const MAX_RECENT = 5;
const RECENT_SUGGESTIONS = 3;

const STATUSES: Record<IssueStatus, { label: string; color: string; icon: typeof IconCircleDot }> =
  {
    open: { label: 'Open', color: 'green', icon: IconCircleDot },
    'in-progress': { label: 'In progress', color: 'yellow', icon: IconProgress },
    closed: { label: 'Closed', color: 'violet', icon: IconCircleCheck },
  };

const PRIORITIES: Record<Issue['priority'], string> = {
  urgent: 'Urgent',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

const memberByUsername = (username: string) =>
  MEMBERS.find((member) => member.username === username)!;
const labelByName = (name: string) => LABELS.find((label) => label.name === name)!;

/** The word around the caret: [start, end) is replaced on pick, `word` is the part before the caret */
function wordAt(text: string, caret: number) {
  const start = caret === 0 ? 0 : text.lastIndexOf(' ', caret - 1) + 1;
  const space = text.indexOf(' ', caret);
  return { start, end: space === -1 ? text.length : space, word: text.slice(start, caret) };
}

export interface IssueSearchBarProps {
  issues?: Issue[];
}

export function IssueSearchBar({ issues = ISSUES }: IssueSearchBarProps) {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [text, setText] = useState('');
  const [caret, setCaret] = useState(0);
  const [applied, setApplied] = useState<SearchQuery>(EMPTY_QUERY);
  const [recent, setRecent] = useState<SearchQuery[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingCaret = useRef<number | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useLayoutEffect(() => {
    if (pendingCaret.current !== null && inputRef.current) {
      inputRef.current.setSelectionRange(pendingCaret.current, pendingCaret.current);
      pendingCaret.current = null;
    }
  });

  const results = useMemo(() => filterIssues(applied, issues), [applied, issues]);

  const updateText = (next: string, nextCaret: number) => {
    setText(next);
    setCaret(nextCaret);
    pendingCaret.current = nextCaret;
  };

  const runSearch = (query: SearchQuery) => {
    const next = extractTokens(query);
    const serialized = serializeQuery(next);
    setTokens(next.tokens);
    updateText(next.text, next.text.length);
    setApplied(next);
    if (serialized !== '') {
      setRecent((current) =>
        [next, ...current.filter((item) => serializeQuery(item) !== serialized)].slice(
          0,
          MAX_RECENT
        )
      );
    }
    combobox.closeDropdown();
  };

  const removeToken = (token: Token) => {
    runSearch({ tokens: tokens.filter((item) => item !== token), text });
  };

  const clear = () => {
    setTokens([]);
    updateText('', 0);
    setApplied(EMPTY_QUERY);
    inputRef.current?.focus();
  };

  const { start, end, word } = wordAt(text, caret);
  const colon = word.indexOf(':');
  const queryIsEmpty = tokens.length === 0 && text.trim() === '';

  const keySuggestions =
    colon === -1 ? FILTERS.filter((filter) => filter.key.startsWith(word.toLowerCase())) : [];
  const recentSuggestions = word === '' && queryIsEmpty ? recent.slice(0, RECENT_SUGGESTIONS) : [];

  const valueFilter = colon === -1 ? undefined : getFilter(word.slice(0, colon));
  const valueSearch = word.slice(colon + 1).toLowerCase();
  const valueSuggestions = valueFilter
    ? valueFilter.values.filter(
        (item) =>
          !(
            valueFilter.repeatable &&
            tokens.some((token) => token.key === valueFilter.key && token.value === item.value)
          ) && item.search.some((search) => search.toLowerCase().includes(valueSearch))
      )
    : [];

  const hasSuggestions =
    keySuggestions.length + recentSuggestions.length + valueSuggestions.length > 0;

  const handleOptionSubmit = (option: string) => {
    const [kind, payload] = option.split(':');

    if (kind === 'key') {
      const inserted = `${payload}:`;
      updateText(text.slice(0, start) + inserted + text.slice(end), start + inserted.length);
      combobox.resetSelectedOption();
      return;
    }

    if (kind === 'value') {
      setTokens((current) => addToken(current, { key: valueFilter!.key, value: payload }));
      updateText(text.slice(0, start) + text.slice(end).replace(/^ /, ''), start);
      combobox.closeDropdown();
      return;
    }

    runSearch(recent[Number(payload)]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const position = event.currentTarget.selectionStart ?? value.length;

    combobox.resetSelectedOption();
    combobox.openDropdown();

    // A space after a complete `key:value` turns the word into a token
    if (position > 0 && value[position - 1] === ' ') {
      const before = value.slice(0, position - 1);
      const wordStart = before.lastIndexOf(' ') + 1;
      const token = resolveToken(before.slice(wordStart));
      if (token) {
        setTokens((current) => addToken(current, token));
        updateText(value.slice(0, wordStart) + value.slice(position), wordStart);
        return;
      }
    }

    setText(value);
    setCaret(position);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = event.currentTarget;

    if (event.key === 'Enter' && combobox.getSelectedOptionIndex() === -1) {
      event.preventDefault();
      runSearch({ tokens, text });
    }

    if (
      event.key === 'Backspace' &&
      selectionStart === 0 &&
      selectionEnd === 0 &&
      tokens.length > 0
    ) {
      event.preventDefault();
      const editable = tokenText(tokens[tokens.length - 1]);
      setTokens(tokens.slice(0, -1));
      updateText(text === '' ? editable : `${editable} ${text}`, editable.length);
      combobox.openDropdown();
    }
  };

  const renderValue = (filter: FilterDefinition, item: FilterValue) => {
    if ((filter.key === 'author' || filter.key === 'assignee') && item.value !== 'none') {
      const member = memberByUsername(item.value);
      return (
        <Group gap="sm" wrap="nowrap">
          <Avatar size="sm">{member.initials}</Avatar>
          <Text size="sm">{member.name}</Text>
          <Text size="xs">{member.username}</Text>
        </Group>
      );
    }

    if (filter.key === 'label') {
      return (
        <Group gap="sm" wrap="nowrap">
          <ColorSwatch
            size={12}
            color={`var(--mantine-color-${labelByName(item.value).color}-filled)`}
          />
          <Text size="sm">{item.label}</Text>
        </Group>
      );
    }

    return <Text size="sm">{item.label}</Text>;
  };

  const options = valueFilter ? (
    valueSuggestions.map((item) => {
      const active = tokens.some(
        (token) => token.key === valueFilter.key && token.value === item.value
      );
      return (
        <Combobox.Option value={`value:${item.value}`} key={item.value} active={active}>
          <Group gap="sm" wrap="nowrap" justify="space-between">
            {renderValue(valueFilter, item)}
            {active && <CheckIcon size={12} />}
          </Group>
        </Combobox.Option>
      );
    })
  ) : (
    <>
      {keySuggestions.length > 0 && (
        <Combobox.Group label="Filters">
          {keySuggestions.map((filter) => (
            <Combobox.Option value={`key:${filter.key}`} key={filter.key}>
              <Group gap="sm" wrap="nowrap" justify="space-between">
                <Text size="sm" className={classes.key}>
                  {filter.key}:
                </Text>
                <Text size="xs">{filter.description}</Text>
              </Group>
            </Combobox.Option>
          ))}
        </Combobox.Group>
      )}
      {recentSuggestions.length > 0 && (
        <Combobox.Group label="Recent searches">
          {recentSuggestions.map((query, index) => (
            <Combobox.Option value={`recent:${index}`} key={serializeQuery(query)}>
              <Group gap="sm" wrap="nowrap">
                <IconHistory size={16} aria-hidden />
                <Text size="sm">{serializeQuery(query)}</Text>
              </Group>
            </Combobox.Option>
          ))}
        </Combobox.Group>
      )}
    </>
  );

  return (
    <Stack>
      <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
        <Combobox.DropdownTarget>
          <PillsInput
            leftSection={<IconSearch size={16} />}
            rightSection={
              queryIsEmpty ? null : <Input.ClearButton aria-label="Clear search" onClick={clear} />
            }
            rightSectionPointerEvents="all"
            onClick={() => inputRef.current?.focus()}
          >
            <Pill.Group>
              {tokens.map((token) => (
                <Pill
                  key={tokenText(token)}
                  withRemoveButton
                  onRemove={() => removeToken(token)}
                  removeButtonProps={{ 'aria-label': `Remove ${tokenText(token)}` }}
                >
                  {tokenText(token)}
                </Pill>
              ))}
              <Combobox.EventsTarget>
                <PillsInput.Field
                  ref={inputRef}
                  value={text}
                  aria-label="Search issues"
                  placeholder={
                    tokens.length === 0
                      ? 'Search issues or filter by status:, label:, due:…'
                      : undefined
                  }
                  onChange={handleChange}
                  onSelect={(event) => setCaret(event.currentTarget.selectionStart ?? 0)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown hidden={!hasSuggestions}>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <Text size="sm" aria-live="polite">
        {results.length === 1 ? '1 issue' : `${results.length} issues`}
      </Text>

      {results.length === 0 ? (
        <Text size="sm">No issues match this search</Text>
      ) : (
        <Surface withBorder component="ul" aria-label="Issues" className={classes.list}>
          {results.map((issue) => (
            <IssueRow issue={issue} key={issue.number} />
          ))}
        </Surface>
      )}
    </Stack>
  );
}

function IssueRow({ issue }: { issue: Issue }) {
  const status = STATUSES[issue.status];
  const author = memberByUsername(issue.author);
  const meta = [
    `#${issue.number}`,
    `opened by ${author.name}`,
    issue.due ? `due ${dayjs(issue.due).format('MMM D')}` : 'no due date',
  ].join(' · ');

  return (
    <li className={classes.row}>
      <Group gap="sm" wrap="nowrap" align="flex-start">
        <ThemeIcon variant="default" size="lg" role="img" aria-label={status.label}>
          <status.icon size={18} color={`var(--mantine-color-${status.color}-text)`} />
        </ThemeIcon>

        <div className={classes.texts}>
          <Text component="h3" size="sm" className={classes.title}>
            {issue.title}
          </Text>
          <Text size="xs">{meta}</Text>
          <Group gap={6} mt="xs">
            <Badge variant="default" size="sm">
              {PRIORITIES[issue.priority]}
            </Badge>
            {issue.labels.map((name) => (
              <Badge key={name} size="sm" color={labelByName(name).color}>
                {name}
              </Badge>
            ))}
          </Group>
        </div>

        {issue.assignees.length > 0 && (
          <Avatar.Group>
            {issue.assignees.map((username) => {
              const member = memberByUsername(username);
              return (
                <Avatar key={username} size="sm" title={member.name}>
                  {member.initials}
                </Avatar>
              );
            })}
          </Avatar.Group>
        )}
      </Group>
    </li>
  );
}
