import { useRef, useState } from 'react';
import { IconAlertTriangle, IconCalendar } from '@tabler/icons-react';
import { CloseButton, Combobox, Group, Text, TextInput, useCombobox } from '@mantine/core';
import { formatDueDate, formatRelative, parseNaturalDate } from './parseNaturalDate';
import { getSuggestions } from './suggestions';
import classes from './NaturalDateInput.module.css';

export interface NaturalDateInputProps {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  placeholder?: string;
}

function sameDate(a: Date | null, b: Date | null) {
  return (a?.getTime() ?? null) === (b?.getTime() ?? null);
}

const PROPER_NAMES = new Set([
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'mon',
  'tue',
  'tues',
  'wed',
  'thu',
  'thur',
  'thurs',
  'fri',
  'sat',
  'sun',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
  'jan',
  'feb',
  'mar',
  'apr',
  'jun',
  'jul',
  'aug',
  'sep',
  'sept',
  'oct',
  'nov',
  'dec',
]);

function toDisplayLabel(phrase: string) {
  const label = phrase.replace(/[a-z]+/g, (word) =>
    PROPER_NAMES.has(word) ? word.charAt(0).toUpperCase() + word.slice(1) : word
  );
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function NaturalDateInput({
  label,
  value,
  onChange,
  placeholder = 'e.g. tomorrow at 3pm',
}: NaturalDateInputProps) {
  const now = new Date();
  const formattedValue = value ? formatDueDate(value, now) : '';

  const [text, setText] = useState(formattedValue);
  const [error, setError] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState(value);
  const selectOnMouseUp = useRef(false);

  // Show the new value when it changes from outside
  if (!sameDate(previousValue, value)) {
    setPreviousValue(value);
    setText(formattedValue);
    setError(null);
  }

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // The formatted value in the input is not a query: show presets for it
  const query = text === formattedValue ? '' : text;
  const suggestions = getSuggestions(query, now);

  const commit = (date: Date | null) => {
    onChange(date);
    setText(date ? formatDueDate(date, now) : '');
    setError(null);
    combobox.closeDropdown();
  };

  const handleOptionSubmit = (optionValue: string) => {
    const suggestion = suggestions[Number(optionValue)];
    if (suggestion) {
      commit(suggestion.date);
    }
  };

  const handleEnter = () => {
    if (text.trim() === '') {
      commit(null);
      return;
    }
    if (text === formattedValue) {
      combobox.closeDropdown();
      return;
    }
    const parsed = parseNaturalDate(text, now);
    if (parsed) {
      commit(parsed.date);
    }
  };

  const handleBlur = () => {
    combobox.closeDropdown();
    if (text.trim() === '') {
      if (value) {
        onChange(null);
      }
      setText('');
      setError(null);
      return;
    }
    if (text === formattedValue) {
      return;
    }
    const parsed = parseNaturalDate(text, now);
    if (parsed) {
      commit(parsed.date);
    } else {
      setError(`Could not understand “${text.trim()}”`);
    }
  };

  const isPast = value !== null && value.getTime() < now.getTime();

  const options = suggestions.map((suggestion, index) => (
    <Combobox.Option value={String(index)} key={suggestion.label} className={classes.option}>
      <Text size="sm">{toDisplayLabel(suggestion.label)}</Text>
      <Text size="xs">
        {formatDueDate(suggestion.date, now)} · {formatRelative(suggestion.date, now)}
      </Text>
    </Combobox.Option>
  ));

  const clearButton =
    text !== '' || value ? (
      <CloseButton
        size="sm"
        aria-label="Clear date"
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commit(null)}
      />
    ) : null;

  return (
    <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
      <Combobox.Target>
        <TextInput
          label={label}
          placeholder={placeholder}
          value={text}
          error={error}
          description={
            isPast && !error ? (
              <Group gap={4} component="span" className={classes.warning}>
                <IconAlertTriangle size={14} />
                This date is in the past
              </Group>
            ) : undefined
          }
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          leftSection={<IconCalendar size={16} />}
          rightSection={clearButton}
          onChange={(event) => {
            setText(event.currentTarget.value);
            setError(null);
            combobox.resetSelectedOption();
            combobox.openDropdown();
          }}
          onFocus={(event) => {
            if (value) {
              event.currentTarget.select();
              selectOnMouseUp.current = true;
            }
            combobox.openDropdown();
          }}
          onMouseUp={(event) => {
            // Keep the text selected when focus came from a click
            if (selectOnMouseUp.current) {
              event.preventDefault();
              selectOnMouseUp.current = false;
            }
          }}
          onClick={() => combobox.openDropdown()}
          onBlur={() => {
            selectOnMouseUp.current = false;
            handleBlur();
          }}
          onKeyDown={(event) => {
            selectOnMouseUp.current = false;
            if (event.key === 'Enter' && combobox.getSelectedOptionIndex() === -1) {
              event.preventDefault();
              handleEnter();
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
