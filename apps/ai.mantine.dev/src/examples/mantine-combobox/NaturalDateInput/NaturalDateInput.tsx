import { useEffect, useState } from 'react';
import { IconCalendarDue } from '@tabler/icons-react';
import { Combobox, Input, Text, TextInput, useCombobox } from '@mantine/core';
import { formatDueDate, formatRelative } from './formatDueDate';
import { getDateSuggestions } from './getDateSuggestions';
import { parseNaturalDate } from './parseNaturalDate';
import classes from './NaturalDateInput.module.css';

const PRESETS = [
  { label: 'Today', phrase: 'today' },
  { label: 'Tomorrow', phrase: 'tomorrow' },
  { label: 'Next week', phrase: 'next week' },
  { label: 'End of month', phrase: 'end of month' },
];

export interface NaturalDateInputProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
  label: React.ReactNode;
}

export function NaturalDateInput({ value, onChange, label }: NaturalDateInputProps) {
  const now = new Date();
  const formattedValue = value ? formatDueDate(value, now) : '';
  const [text, setText] = useState(formattedValue);
  const [error, setError] = useState<string | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // a value set from outside replaces the text
  useEffect(() => {
    setText(formattedValue);
    setError(null);
  }, [value?.getTime()]);

  const commit = (date: Date | null) => {
    setText(date ? formatDueDate(date, now) : '');
    setError(null);
    onChange(date);
    combobox.closeDropdown();
  };

  // the input shows the value itself until the user types something else
  const showsValue = text.trim() === '' || (value !== null && text === formattedValue);

  /** Sets the value from the text; returns false when the text is not understood */
  const commitText = () => {
    if (text.trim() === '') {
      commit(null);
      return true;
    }
    if (value && text === formattedValue) {
      combobox.closeDropdown();
      return true;
    }
    const parsed = parseNaturalDate(text, now);
    if (!parsed) {
      setError(`Could not understand “${text.trim()}”`);
      return false;
    }
    commit(parsed.date);
    return true;
  };

  const items = showsValue
    ? PRESETS.map((preset) => {
        const parsed = parseNaturalDate(preset.phrase, now)!;
        return { value: preset.phrase, label: preset.label, date: parsed.date };
      })
    : getDateSuggestions(text, now).map((item) => ({
        value: item.phrase,
        label: item.phrase,
        date: item.date,
      }));

  const options = items.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <Text size="sm" className={classes.phrase}>
        {item.label}
      </Text>
      <Text size="xs">
        {formatDueDate(item.date, now)} · {formatRelative(item.date, now)}
      </Text>
    </Combobox.Option>
  ));

  const isPast = value !== null && value.getTime() < now.getTime();
  const canClear = value !== null || text !== '';

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(phrase) => {
        const parsed = parseNaturalDate(phrase, now);
        if (parsed) {
          commit(parsed.date);
        }
      }}
    >
      <Combobox.Target>
        <TextInput
          label={label}
          placeholder="Type a date, e.g. next friday at 3pm"
          value={text}
          error={error}
          description={isPast ? 'This date is in the past' : undefined}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          classNames={{ description: classes.warning }}
          leftSection={<IconCalendarDue size={16} />}
          rightSection={
            canClear ? (
              <Input.ClearButton
                aria-label="Clear due date"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commit(null)}
              />
            ) : null
          }
          rightSectionPointerEvents={canClear ? 'all' : 'none'}
          onChange={(event) => {
            setText(event.currentTarget.value);
            setError(null);
            combobox.resetSelectedOption();
            combobox.openDropdown();
          }}
          onFocus={(event) => {
            if (value) {
              event.currentTarget.select();
            }
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onBlur={() => {
            commitText();
            combobox.closeDropdown();
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && combobox.getSelectedOptionIndex() === -1) {
              event.preventDefault();
              commitText();
            }
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? (
            options
          ) : (
            <Combobox.Empty>Could not understand “{text.trim()}”</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
