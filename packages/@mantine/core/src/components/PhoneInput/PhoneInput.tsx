import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  Factory,
  factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Combobox, ComboboxProps, useCombobox } from '../Combobox';
import { __BaseInputProps, __InputStylesNames, InputVariant } from '../Input';
import { InputBase } from '../InputBase';
import { PopoverScrollArea } from '../Popover/PopoverScrollArea/PopoverScrollArea';
import { UnstyledButton } from '../UnstyledButton';
import { buildRawValue } from './build-raw-value/build-raw-value';
import { computeCursorPosition } from './compute-cursor-position/compute-cursor-position';
import { CountryOptionContent } from './CountryOptionContent';
import { clampToMask, formatPhoneNumber } from './format-phone-number/format-phone-number';
import { filterCountries, getCountries } from './get-countries/get-countries';
import { getDigits } from './get-digits/get-digits';
import { guessCountry, matchesAreaCode } from './guess-country/guess-country';
import { ALL_COUNTRIES, PhoneInputCountryData } from './phone-data';
import classes from './PhoneInput.module.css';

export type PhoneInputStylesNames =
  | __InputStylesNames
  | 'countryButton'
  | 'countryButtonFlag'
  | 'countryButtonCode'
  | 'dropdown'
  | 'search'
  | 'countryOption'
  | 'optionDialCode'
  | 'optionName'
  | 'divider';

export interface PhoneInputChangeDetails {
  /** Formatted display string, e.g. "+1 (202) 555-1234" */
  formattedValue: string;
  /** Country data for the currently selected country, null when no country is selected */
  country: PhoneInputCountryData | null;
}

export interface PhoneInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<PhoneInputFactory>,
    ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /** Controlled value — raw digits with + prefix, e.g. "+12025551234" @category state */
  value?: string;

  /** Uncontrolled default value @category state */
  defaultValue?: string;

  /** Called when value changes @category state */
  onChange?: (rawValue: string, details: PhoneInputChangeDetails) => void;

  /** Default country ISO2 code, e.g. "us" @category state */
  defaultCountry?: string;

  /** Countries pinned to top of dropdown with separator, ISO2 codes @category appearance */
  preferredCountries?: string[];

  /** Only show these countries, ISO2 codes @category appearance */
  onlyCountries?: string[];

  /** Hide these countries, ISO2 codes @category appearance */
  excludeCountries?: string[];

  /** Called when selected country changes @category state */
  onCountryChange?: (country: PhoneInputCountryData) => void;

  /** Enable search in country dropdown @default true @category behavior */
  searchable?: boolean;

  /** Show +dialCode in input @default true @category appearance */
  international?: boolean;

  /** Auto-detect country from typed dial code digits @default false @category behavior */
  withCountryAutoDetect?: boolean;

  /** Custom flag renderer for country selector button and dropdown options, receives null when no country is selected @category appearance */
  renderFlag?: (country: PhoneInputCountryData | null) => React.ReactNode;

  /** Custom renderer for country dropdown options @category appearance */
  renderCountryOption?: (country: PhoneInputCountryData) => React.ReactNode;

  /** Maximum dropdown height in px @default 250 @category appearance */
  maxDropdownHeight?: number | string;

  /** Controlled dropdown opened state @category state */
  dropdownOpened?: boolean;

  /** Props passed down to the underlying Combobox component */
  comboboxProps?: ComboboxProps;

  /** Called when dropdown opens @category state */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes @category state */
  onDropdownClose?: () => void;

  /** `behavior` passed down to `element.scrollIntoView` when options are scrolled into view with keyboard navigation @default 'instant' @category behavior */
  scrollBehavior?: ScrollBehavior;

  /** Display chevron in the country button @default false @category appearance */
  withChevron?: boolean;

  /** Message displayed when no countries match the search query @category appearance */
  nothingFoundMessage?: React.ReactNode;
}

export type PhoneInputFactory = Factory<{
  props: PhoneInputProps;
  ref: HTMLInputElement;
  stylesNames: PhoneInputStylesNames;
  variant: InputVariant;
}>;

const leftSectionWidth: Record<string, number> = {
  xs: 42,
  sm: 42,
  md: 50,
  lg: 54,
  xl: 58,
};

const defaultProps = {
  size: 'sm',
  searchable: true,
  international: true,
  maxDropdownHeight: 250,
} satisfies Partial<PhoneInputProps>;

export const PhoneInput = factory<PhoneInputFactory>((_props) => {
  const props = useProps('PhoneInput', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    value,
    defaultValue,
    onChange,
    defaultCountry,
    preferredCountries,
    onlyCountries,
    excludeCountries,
    onCountryChange,
    searchable,
    international,
    withCountryAutoDetect,
    renderFlag,
    renderCountryOption,
    readOnly,
    disabled,
    size,
    error,
    attributes,
    maxDropdownHeight,
    dropdownOpened,
    comboboxProps,
    onDropdownOpen,
    onDropdownClose,
    scrollBehavior,
    withChevron,
    nothingFoundMessage,
    autoComplete,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<PhoneInputFactory>({
    name: 'PhoneInput',
    props,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PhoneInputFactory>({
    classNames,
    styles,
    props,
  });

  const internalRef = useRef<HTMLInputElement>(null);
  const inputRef = useMergedRef(ref, internalRef);
  const countryLockedRef = useRef(false);

  const { countries: filteredCountries, preferredList } = useMemo(
    () =>
      getCountries(ALL_COUNTRIES, {
        onlyCountries,
        excludeCountries,
        preferredCountries,
      }),
    [onlyCountries, excludeCountries, preferredCountries]
  );

  const findCountryByIso2 = useCallback(
    (iso2: string) => filteredCountries.find((c) => c.iso2 === iso2.toLowerCase()),
    [filteredCountries]
  );

  const initialValue = value ?? defaultValue;
  const inferredFromValue = initialValue
    ? guessCountry(initialValue, filteredCountries)
    : undefined;
  const defaultCountryData = defaultCountry ? findCountryByIso2(defaultCountry) : undefined;
  const initialCountry = inferredFromValue || defaultCountryData || null;

  const [selectedCountry, setSelectedCountry] = useState<PhoneInputCountryData | null>(
    initialCountry
  );
  const [search, setSearch] = useState('');

  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: initialCountry && international ? `+${initialCountry.dialCode}` : '',
    onChange,
  });

  const store = useCombobox({
    opened: dropdownOpened,
    scrollBehavior,
    onDropdownOpen: () => {
      if (searchable) {
        store.focusSearchInput();
      } else {
        store.focusTarget();
      }
      onDropdownOpen?.();
    },
    onDropdownClose: () => {
      setSearch('');
      onDropdownClose?.();
    },
  });

  const isDetectedCountryDifferent = (
    detected: PhoneInputCountryData,
    current: PhoneInputCountryData | null,
    rawValue: string
  ) =>
    detected.iso2 !== current?.iso2 &&
    (detected.dialCode !== current?.dialCode || matchesAreaCode(detected, rawValue));

  const controlledValue = controlled ? _value : undefined;

  useEffect(() => {
    const detected = controlledValue ? guessCountry(controlledValue, filteredCountries) : undefined;

    if (detected) {
      if (isDetectedCountryDifferent(detected, selectedCountry, controlledValue ?? '')) {
        setSelectedCountry(detected);
        onCountryChange?.(detected);
      }
      return;
    }

    if (selectedCountry && !filteredCountries.find((c) => c.iso2 === selectedCountry.iso2)) {
      const fallback = filteredCountries[0] || null;
      setSelectedCountry(fallback);
      if (fallback) {
        onCountryChange?.(fallback);
      }
    }
  }, [controlledValue, filteredCountries]);

  const toDisplayValue = (formatted: string, country: PhoneInputCountryData | null) =>
    international || !country ? formatted : formatted.replace(`+${country.dialCode} `, '');

  const focusInputAfterDialCode = useCallback(
    (country: PhoneInputCountryData, rawValue: string) => {
      requestAnimationFrame(() => {
        const input = internalRef.current;
        if (!input) {
          return;
        }
        input.focus();
        if (!international) {
          input.setSelectionRange(0, 0);
          return;
        }
        const formatted = formatPhoneNumber(rawValue, country);
        const dialCodePrefix = `+${country.dialCode} `;
        const cursorPos = formatted.startsWith(dialCodePrefix)
          ? dialCodePrefix.length
          : formatted.length;
        input.setSelectionRange(cursorPos, cursorPos);
      });
    },
    [international]
  );

  const handleValueChange = (rawValue: string, country: PhoneInputCountryData | null) => {
    const formattedValue = country ? formatPhoneNumber(rawValue, country) : rawValue;
    setValue(rawValue, { formattedValue, country });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const inputValue = input.value;
    const cursorPos = input.selectionStart ?? inputValue.length;
    const digitsOnly = getDigits(inputValue).replace(/^\+/, '');
    const hasPlus = inputValue.includes('+');
    const canAutoDetect = (withCountryAutoDetect || !selectedCountry) && !countryLockedRef.current;

    if (!digitsOnly) {
      if (withCountryAutoDetect || !selectedCountry) {
        countryLockedRef.current = false;
        if (hasPlus) {
          setValue('+', { formattedValue: '+', country: selectedCountry });
          requestAnimationFrame(() => {
            input.setSelectionRange(1, 1);
          });
        } else {
          handleValueChange('', selectedCountry);
        }
      } else if (!international) {
        handleValueChange('', selectedCountry);
      } else {
        const minRaw = `+${selectedCountry.dialCode}`;
        handleValueChange(minRaw, selectedCountry);
        const minFormatted = formatPhoneNumber(minRaw, selectedCountry);
        requestAnimationFrame(() => {
          input.setSelectionRange(minFormatted.length, minFormatted.length);
        });
      }
      return;
    }

    const fullRaw = buildRawValue(inputValue, { canAutoDetect, international, selectedCountry });
    let country = selectedCountry;

    if (canAutoDetect) {
      const detected = guessCountry(fullRaw, filteredCountries);
      if (detected && isDetectedCountryDifferent(detected, selectedCountry, fullRaw)) {
        country = detected;
        setSelectedCountry(detected);
        onCountryChange?.(detected);
      }
    }

    const newRaw = canAutoDetect ? fullRaw : clampToMask(fullRaw, country);
    const newFormatted = country ? formatPhoneNumber(newRaw, country) : newRaw;
    const newDisplayRaw =
      international || !country ? newRaw : newRaw.slice(country.dialCode.length + 1);
    const newCursor = computeCursorPosition(
      inputValue,
      cursorPos,
      newDisplayRaw,
      toDisplayValue(newFormatted, country)
    );

    setValue(newRaw, { formattedValue: newFormatted, country });

    requestAnimationFrame(() => {
      input.setSelectionRange(newCursor, newCursor);
    });
  };

  const handleCountrySelect = (iso2: string) => {
    const country = findCountryByIso2(iso2);
    if (!country) {
      return;
    }

    countryLockedRef.current = true;
    setSelectedCountry(country);
    onCountryChange?.(country);

    const currentDigits = _value.replace(/\D/g, '');
    const oldDialCode = selectedCountry?.dialCode;
    let newRaw: string;

    if (oldDialCode && currentDigits.startsWith(oldDialCode)) {
      newRaw = `+${country.dialCode}${currentDigits.slice(oldDialCode.length)}`;
    } else {
      newRaw = `+${country.dialCode}`;
    }

    const clamped = clampToMask(newRaw, country);
    handleValueChange(clamped, country);
    store.closeDropdown();
    focusInputAfterDialCode(country, clamped);
  };

  const formattedValue =
    _value === '+' ? '+' : selectedCountry ? formatPhoneNumber(_value, selectedCountry) : _value;
  const displayValue =
    _value === '' && international && selectedCountry
      ? formatPhoneNumber(`+${selectedCountry.dialCode}`, selectedCountry)
      : toDisplayValue(formattedValue, selectedCountry);

  const preferredIso2Set = useMemo(
    () => new Set(preferredList.map((c) => c.iso2)),
    [preferredList]
  );

  const mainCountries = useMemo(
    () =>
      preferredIso2Set.size > 0
        ? filteredCountries.filter((c) => !preferredIso2Set.has(c.iso2))
        : filteredCountries,
    [filteredCountries, preferredIso2Set]
  );

  const searchedCountries = search ? filterCountries(mainCountries, search) : mainCountries;

  const searchedPreferred = search ? filterCountries(preferredList, search) : preferredList;

  const countryButtonContent = renderFlag ? (
    <span {...getStyles('countryButtonFlag')}>{renderFlag(selectedCountry)}</span>
  ) : selectedCountry ? (
    <span {...getStyles('countryButtonCode')}>{selectedCountry.iso2.toUpperCase()}</span>
  ) : null;

  return (
    <Combobox
      store={store}
      __staticSelector="PhoneInput"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      readOnly={readOnly}
      onOptionSubmit={handleCountrySelect}
      {...comboboxProps}
    >
      <Combobox.Target targetType="input" autoComplete={autoComplete} withExpandedAttribute={false}>
        <InputBase
          ref={inputRef}
          type="tel"
          __staticSelector="PhoneInput"
          leftSection={
            <UnstyledButton
              type="button"
              disabled={disabled || readOnly}
              onClick={() => store.toggleDropdown()}
              aria-label={selectedCountry ? selectedCountry.name : 'Select country'}
              aria-haspopup="listbox"
              aria-expanded={store.dropdownOpened}
              aria-controls={store.dropdownOpened ? (store.getListId() ?? undefined) : undefined}
              {...getStyles('countryButton', { focusable: true })}
            >
              {countryButtonContent}
              {withChevron && <Combobox.Chevron size={size} />}
            </UnstyledButton>
          }
          leftSectionPointerEvents="all"
          leftSectionWidth={leftSectionWidth[size]}
          {...others}
          size={size}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          value={displayValue}
          onChange={handleInputChange}
          attributes={attributes}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={readOnly || disabled}>
        {searchable && (
          <Combobox.Search
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              store.resetSelectedOption();
            }}
            placeholder="Search countries"
          />
        )}

        <Combobox.Options>
          <PopoverScrollArea mah={maxDropdownHeight}>
            {searchedPreferred.length > 0 && (
              <>
                {searchedPreferred.map((country) => (
                  <Combobox.Option key={`preferred-${country.iso2}`} value={country.iso2}>
                    <CountryOptionContent
                      country={country}
                      renderFlag={renderFlag}
                      renderCountryOption={renderCountryOption}
                      getStyles={getStyles}
                    />
                  </Combobox.Option>
                ))}
                <div {...getStyles('divider')} />
              </>
            )}

            {searchedCountries.map((country) => (
              <Combobox.Option key={country.iso2} value={country.iso2}>
                <CountryOptionContent
                  country={country}
                  renderFlag={renderFlag}
                  renderCountryOption={renderCountryOption}
                  getStyles={getStyles}
                />
              </Combobox.Option>
            ))}

            {searchedCountries.length === 0 &&
              searchedPreferred.length === 0 &&
              nothingFoundMessage && <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>}
          </PopoverScrollArea>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
});

PhoneInput.classes = { ...InputBase.classes, ...Combobox.classes, ...classes };
PhoneInput.displayName = '@mantine/core/PhoneInput';

export namespace PhoneInput {
  export type Props = PhoneInputProps;
  export type StylesNames = PhoneInputStylesNames;
  export type Factory = PhoneInputFactory;
}
