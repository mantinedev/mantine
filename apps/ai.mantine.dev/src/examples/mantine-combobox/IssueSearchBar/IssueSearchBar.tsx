import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import {
  IconCheck,
  IconCircleCheck,
  IconCircleDot,
  IconHistory,
  IconProgress,
} from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  CloseButton,
  ColorSwatch,
  Combobox,
  Group,
  Pill,
  PillsInput,
  Stack,
  Surface,
  Text,
  ThemeIcon,
  useCombobox,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Issue, ISSUES, LABELS, MEMBERS } from './data';
import {
  FilterDefinition,
  FilterKey,
  FILTERS,
  filterIssues,
  formatQuery,
  getFilter,
  getFilterValue,
  isEmptyQuery,
  matchValues,
  normalizeQuery,
  parseToken,
  SearchQuery,
  splitWord,
  Token,
  withToken,
} from './query';
import classes from './IssueSearchBar.module.css';

export const RECENT_STORAGE_KEY = 'issue-search-bar:recent';
const MAX_RECENT = 5;
const MAX_RECENT_SUGGESTIONS = 3;
const MAX_RESULTS = 10;

const STATUS_ICONS = {
  open: { icon: IconCircleDot, color: 'var(--mantine-color-green-text)' },
  'in-progress': { icon: IconProgress, color: 'var(--mantine-color-blue-text)' },
  closed: { icon: IconCircleCheck, color: 'var(--mantine-color-grape-text)' },
};

const getMember = (username: string) => MEMBERS.find((member) => member.username === username)!;
const getLabelColor = (name: string) => LABELS.find((label) => label.name === name)!.color;

function MemberAvatar({ username }: { username: string }) {
  const member = getMember(username);
  return (
    <Avatar variant="default" size="sm" alt={member.name} title={member.name}>
      {member.initials}
    </Avatar>
  );
}

function ValueOption({ filterKey, value }: { filterKey: FilterKey; value: string }) {
  const filterValue = getFilterValue(filterKey, value)!;

  if ((filterKey === 'author' || filterKey === 'assignee') && value !== 'none') {
    const member = getMember(value);
    return (
      <Group gap="sm" wrap="nowrap">
        <MemberAvatar username={value} />
        <div>
          <Text size="sm">{member.name}</Text>
          <Text size="xs">{member.username}</Text>
        </div>
      </Group>
    );
  }

  if (filterKey === 'label') {
    return (
      <Group gap="xs" wrap="nowrap">
        <ColorSwatch color={getLabelColor(value)} size={8} withShadow={false} />
        <span>{filterValue.label}</span>
      </Group>
    );
  }

  return <span>{filterValue.label}</span>;
}

function TokenPill({ token, onRemove }: { token: Token; onRemove: () => void }) {
  const text = `${token.key}:${token.value}`;
  return (
    <Pill
      withRemoveButton
      onRemove={onRemove}
      removeButtonProps={{ 'aria-label': `Remove ${text}`, 'aria-hidden': false }}
    >
      <span className={classes.tokenKey}>{token.key}:</span>
      {token.value}
    </Pill>
  );
}

function IssueRow({ issue }: { issue: Issue }) {
  const status = STATUS_ICONS[issue.status];
  const StatusIcon = status.icon;
  const statusLabel = getFilterValue('status', issue.status)!.label;
  const meta = [
    `#${issue.number}`,
    statusLabel,
    getFilterValue('priority', issue.priority)!.label,
    issue.due ? `Due ${dayjs(issue.due).format('MMM D')}` : 'No due date',
    `by ${getMember(issue.author).name}`,
  ].join(' · ');

  return (
    <li className={classes.issue} aria-label={`#${issue.number} ${issue.title}`}>
      <ThemeIcon variant="default" size="lg" aria-label={statusLabel} role="img">
        <StatusIcon size={18} color={status.color} />
      </ThemeIcon>
      <div className={classes.issueBody}>
        <Group gap="xs">
          <Text size="sm" className={classes.issueTitle}>
            {issue.title}
          </Text>
          {issue.labels.map((label) => (
            <Badge
              key={label}
              variant="default"
              size="sm"
              leftSection={<ColorSwatch color={getLabelColor(label)} size={8} withShadow={false} />}
            >
              {label}
            </Badge>
          ))}
        </Group>
        <Text size="xs">{meta}</Text>
      </div>
      {issue.assignees.length > 0 && (
        <Avatar.Group>
          {issue.assignees.map((username) => (
            <MemberAvatar key={username} username={username} />
          ))}
        </Avatar.Group>
      )}
    </li>
  );
}

export function IssueSearchBar() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [text, setText] = useState('');
  const [recent, setRecent] = useLocalStorage<SearchQuery[]>({
    key: RECENT_STORAGE_KEY,
    defaultValue: [],
    getInitialValueInEffect: false,
  });
  const [pickCount, setPickCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // A pick that continues the query highlights the first option of the next list
  useEffect(() => {
    if (pickCount > 0 && combobox.dropdownOpened) {
      combobox.selectFirstOption();
    }
  }, [pickCount]);

  const currentWord = /\S*$/.exec(text)![0];
  const textBeforeWord = text.slice(0, text.length - currentWord.length);
  const query: SearchQuery = { tokens, text };

  const runSearch = (next: SearchQuery) => {
    const normalized = normalizeQuery(next);
    setTokens(normalized.tokens);
    setText(normalized.text);
    if (!isEmptyQuery(normalized)) {
      const formatted = formatQuery(normalized);
      setRecent((current) =>
        [normalized, ...current.filter((item) => formatQuery(item) !== formatted)].slice(
          0,
          MAX_RECENT
        )
      );
    }
    combobox.closeDropdown();
  };

  const addToken = (token: Token) => setTokens((current) => withToken(current, token));

  const removeToken = (index: number) =>
    setTokens((current) => current.filter((_, i) => i !== index));

  const clear = () => {
    setTokens([]);
    setText('');
    inputRef.current?.focus();
    combobox.openDropdown();
  };

  const handleOptionSubmit = (optionValue: string) => {
    const [kind, ...rest] = optionValue.split(':');
    if (kind === 'recent') {
      runSearch(recent[Number(rest[0])]);
      return;
    }
    if (kind === 'key') {
      setText(`${textBeforeWord}${rest[0]}:`);
    } else {
      addToken({ key: rest[0] as FilterKey, value: rest[1] });
      setText(textBeforeWord);
    }
    combobox.openDropdown();
    setPickCount((count) => count + 1);
  };

  const handleChange = (value: string) => {
    const completed = /(\S+)\s$/.exec(value);
    const token = completed && parseToken(completed[1]);
    if (completed && token) {
      addToken(token);
      setText(value.slice(0, completed.index));
    } else {
      setText(value);
    }
    combobox.openDropdown();
    combobox.resetSelectedOption();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = event.currentTarget;
    if (
      event.key === 'Backspace' &&
      selectionStart === 0 &&
      selectionEnd === 0 &&
      tokens.length > 0
    ) {
      event.preventDefault();
      removeToken(tokens.length - 1);
    }
    if (
      event.key === 'Enter' &&
      (!combobox.dropdownOpened || combobox.getSelectedOptionIndex() === -1)
    ) {
      event.preventDefault();
      runSearch(query);
    }
  };

  const renderKeyOptions = (filters: FilterDefinition[]) =>
    filters.map((filter) => (
      <Combobox.Option value={`key:${filter.key}`} key={filter.key}>
        <div className={classes.keyOption}>
          <Text size="sm" className={classes.keyName}>
            {filter.key}:
          </Text>
          <Text size="xs">{filter.description}</Text>
        </div>
      </Combobox.Option>
    ));

  const renderOptions = () => {
    if (currentWord === '') {
      const recentOptions = isEmptyQuery(query)
        ? recent.slice(0, MAX_RECENT_SUGGESTIONS).map((item, index) => (
            <Combobox.Option value={`recent:${index}`} key={formatQuery(item)}>
              <Group gap="xs" wrap="nowrap">
                <IconHistory size={16} className={classes.optionIcon} />
                <span>{formatQuery(item)}</span>
              </Group>
            </Combobox.Option>
          ))
        : [];

      return (
        <>
          <Combobox.Group label="Filters">{renderKeyOptions(FILTERS)}</Combobox.Group>
          {recentOptions.length > 0 && (
            <Combobox.Group label="Recent searches">{recentOptions}</Combobox.Group>
          )}
        </>
      );
    }

    const parts = splitWord(currentWord);
    if (!parts) {
      const word = currentWord.toLowerCase();
      const keys = FILTERS.filter((filter) => filter.key.startsWith(word));
      return keys.length > 0 ? renderKeyOptions(keys) : null;
    }

    const filter = getFilter(parts.key);
    if (!filter) {
      return null;
    }
    const used = tokens.filter((token) => token.key === filter.key).map((token) => token.value);
    const values = matchValues(filter, parts.value).filter(
      (item) => !filter.repeatable || !used.includes(item.value)
    );
    if (values.length === 0) {
      return null;
    }
    return values.map((item) => {
      const active = used.includes(item.value);
      return (
        <Combobox.Option
          value={`value:${filter.key}:${item.value}`}
          key={item.value}
          active={active}
          className={classes.valueOption}
        >
          <ValueOption filterKey={filter.key} value={item.value} />
          {active && <IconCheck size={16} className={classes.optionIcon} />}
        </Combobox.Option>
      );
    });
  };

  const options = renderOptions();
  const results = filterIssues(ISSUES, {
    tokens,
    text: currentWord.includes(':') ? textBeforeWord : text,
  });

  return (
    <Stack gap="md">
      <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
        <Combobox.DropdownTarget>
          <PillsInput
            onClick={() => combobox.openDropdown()}
            rightSection={
              isEmptyQuery(query) ? null : (
                <CloseButton
                  aria-label="Clear search"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={clear}
                />
              )
            }
          >
            <Pill.Group>
              {tokens.map((token, index) => (
                <TokenPill
                  key={`${token.key}:${token.value}`}
                  token={token}
                  onRemove={() => removeToken(index)}
                />
              ))}
              <Combobox.EventsTarget>
                <PillsInput.Field
                  ref={inputRef}
                  aria-label="Search issues"
                  placeholder={tokens.length === 0 ? 'Search issues' : undefined}
                  value={text}
                  onChange={(event) => handleChange(event.currentTarget.value)}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                  onKeyDown={handleKeyDown}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown hidden={options === null}>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <div>
        <Group gap="xs" mb="xs">
          <Text size="sm" className={classes.count}>
            {results.length === 1 ? '1 issue' : `${results.length} issues`}
          </Text>
          {results.length > MAX_RESULTS && <Text size="xs">Showing the first {MAX_RESULTS}</Text>}
        </Group>
        {results.length === 0 ? (
          <Text size="sm">No issues match this search</Text>
        ) : (
          <Surface withBorder component="ul" className={classes.issues} aria-label="Issues">
            {results.slice(0, MAX_RESULTS).map((issue) => (
              <IssueRow key={issue.number} issue={issue} />
            ))}
          </Surface>
        )}
      </div>
    </Stack>
  );
}
