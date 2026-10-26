import { useEffect, useState } from 'react';
import { Combobox, InputBase, useCombobox, type InputBaseProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { POPULAR_DESTINATIONS } from '../data';
import { getPlace, getPlaceLabel, getSideLabel, placesOverlap, searchPlaces } from '../places';
import type { Place, Side } from '../types';
import { PlaceOption } from './PlaceOption';

interface PlaceInputProps extends Omit<InputBaseProps, 'value' | 'defaultValue' | 'onChange'> {
  label: string;
  placeholder: string;
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string | null) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  otherSide: Side;
  otherValue: string | null;
  recent: string[];
  onPick?: (code: string) => void;
}

export function PlaceInput({
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  otherSide,
  otherValue,
  recent,
  onPick,
  ...others
}: PlaceInputProps) {
  const [current, setCurrent] = useUncontrolled<string | null>({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });
  // null while the input shows the selected place, a string while the user is typing
  const [search, setSearch] = useState<string | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const selected = getPlace(current);
  const other = getPlace(otherValue);
  const query = search ?? '';

  useEffect(() => {
    if (query.trim() !== '') {
      combobox.selectFirstOption();
    }
  }, [query]);

  const renderOption = (place: Place, nested = false) => (
    <PlaceOption
      key={place.code}
      place={place}
      nested={nested}
      active={place.code === current}
      disabledReason={other && placesOverlap(place, other) ? getSideLabel(otherSide) : null}
    />
  );

  const renderSuggestions = () => {
    const popular = POPULAR_DESTINATIONS.filter((code) => !recent.includes(code));
    return (
      <>
        {recent.length > 0 && (
          <Combobox.Group label="Recent">
            {recent.map((code) => renderOption(getPlace(code)!))}
          </Combobox.Group>
        )}
        <Combobox.Group label="Popular destinations">
          {popular.map((code) => renderOption(getPlace(code)!))}
        </Combobox.Group>
      </>
    );
  };

  const renderResults = () => {
    const results = searchPlaces(query);
    return results.length > 0 ? (
      results.map((entry) => renderOption(entry.place, entry.nested))
    ) : (
      <Combobox.Empty>No airports match “{query.trim()}”</Combobox.Empty>
    );
  };

  const handleOptionSubmit = (code: string) => {
    setCurrent(code);
    setSearch(null);
    combobox.closeDropdown();
    onPick?.(code);
  };

  const handleClear = () => {
    setCurrent(null);
    setSearch(null);
  };

  return (
    <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
      <Combobox.Target>
        <InputBase
          {...others}
          value={search ?? (selected ? getPlaceLabel(selected) : '')}
          autoComplete="off"
          rightSection={
            selected ? (
              <Combobox.ClearButton onClear={handleClear} aria-label={`Clear ${others.label}`} />
            ) : (
              <Combobox.Chevron />
            )
          }
          rightSectionPointerEvents={selected ? 'all' : 'none'}
          onChange={(event) => {
            const text = event.currentTarget.value;
            setSearch(text);
            if (text === '' && current !== null) {
              setCurrent(null);
            }
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={(event) => {
            event.currentTarget.select();
            combobox.openDropdown();
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setSearch(null);
            combobox.closeDropdown();
            onBlur?.(event);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.ScrollArea mah={320} viewportProps={{ tabIndex: -1 }}>
          <Combobox.Options>
            {query.trim() === '' ? renderSuggestions() : renderResults()}
          </Combobox.Options>
        </Combobox.ScrollArea>
      </Combobox.Dropdown>
    </Combobox>
  );
}
