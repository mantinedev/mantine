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
import { ScrollArea } from '../ScrollArea';
import { UnstyledButton } from '../UnstyledButton';
import { buildRawValue } from './build-raw-value/build-raw-value';
import { computeCursorPosition } from './compute-cursor-position/compute-cursor-position';
import { CountryOptionContent } from './CountryOptionContent';
import {
  clampToMask,
  formatPhoneNumber,
  getMaskDigitCount,
} from './format-phone-number/format-phone-number';
import { filterCountries, getCountries } from './get-countries/get-countries';
import { getDigits } from './get-digits/get-digits';
import { guessCountry, matchesAreaCode } from './guess-country/guess-country';
import { parsePhoneValue } from './parse-phone-value/parse-phone-value';
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
  /** Extension digits when `withExtension` is enabled, empty string when no extension is entered */
  extension?: string;
}

export interface PhoneInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<PhoneInputFactory>,
    ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /** Controlled value — raw digits with + prefix, e.g. "+12025551234", with an optional "x1234" suffix when `withExtension` is enabled */
  value?: string;

  /** Uncontrolled default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (rawValue: string, details: PhoneInputChangeDetails) => void;

  /** Default country ISO2 code, e.g. "us" */
  defaultCountry?: string;

  /** Countries pinned to top of dropdown with separator, ISO2 codes */
  preferredCountries?: string[];

  /** Only show these countries, ISO2 codes */
  onlyCountries?: string[];

  /** Hide these countries, ISO2 codes */
  excludeCountries?: string[];

  /** Called when selected country changes */
  onCountryChange?: (country: PhoneInputCountryData) => void;

  /** Selects a country by ISO2 code when multiple countries share the detected dial code; return undefined to use the default area-code and priority detection */
  resolveCountry?: (rawValue: string, countries: PhoneInputCountryData[]) => string | undefined;

  /** Enable search in country dropdown @default true */
  searchable?: boolean;

  /** Show +dialCode in input @default true */
  international?: boolean;

  /** Allow a phone extension separated by "x", e.g. "+12025551234x1234" @default false */
  withExtension?: boolean;

  /** Auto-detect country from typed dial code digits @default false */
  withCountryAutoDetect?: boolean;

  /** Handling of national trunk prefixes: 'auto' preserves ambiguous typed digits, 'strip' removes a typed prefix, 'preserve' disables prefix removal (the mask still applies) @default 'auto' */
  nationalPrefixBehavior?: 'auto' | 'strip' | 'preserve';

  /** Custom flag renderer for country selector button and dropdown options, receives null when no country is selected */
  renderFlag?: (country: PhoneInputCountryData | null) => React.ReactNode;

  /** Custom renderer for country dropdown options */
  renderCountryOption?: (country: PhoneInputCountryData) => React.ReactNode;

  /** Maximum dropdown height in px @default 250 */
  maxDropdownHeight?: number | string;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Props passed down to the underlying Combobox component */
  comboboxProps?: ComboboxProps;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** Display chevron in the country button @default false */
  withChevron?: boolean;

  /** Message displayed when no countries match the search query */
  nothingFoundMessage?: React.ReactNode;

  /** Placeholder of the search input in the dropdown @default 'Search countries' */
  searchPlaceholder?: string;

  /** `aria-label` of the country button when no country is selected @default 'Select country' */
  selectCountryLabel?: string;

  /** Returns a localized country name, used as the country button `aria-label` and matched in search in addition to the English name */
  getCountryLabel?: (country: PhoneInputCountryData) => string;
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
  nationalPrefixBehavior: 'auto',
  maxDropdownHeight: 250,
  searchPlaceholder: 'Search countries',
  selectCountryLabel: 'Select country',
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
    resolveCountry,
    searchable,
    international,
    withExtension,
    withCountryAutoDetect,
    nationalPrefixBehavior,
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
    withChevron,
    nothingFoundMessage,
    searchPlaceholder,
    selectCountryLabel,
    getCountryLabel,
    autoComplete,
    onKeyDown,
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
  const nationalPrefixConsumedRef = useRef(false);
  const userEnteredDialCodeRef = useRef(false);
  const lastEmittedValueRef = useRef<string | undefined>(undefined);
  const lastEmittedResolverRef = useRef(resolveCountry);
  const lastEmittedDetectedCountryRef = useRef<string | undefined>(undefined);

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

  const detectCountry = useCallback(
    (rawValue: string) => {
      const { phoneNumber } = parsePhoneValue(rawValue, withExtension);
      const detected = guessCountry(phoneNumber, filteredCountries);
      if (!detected || !resolveCountry) {
        return { country: detected, resolvedByCallback: false };
      }

      const candidates = filteredCountries.filter(
        (country) => country.dialCode === detected.dialCode
      );
      if (candidates.length < 2) {
        return { country: detected, resolvedByCallback: false };
      }

      const iso2 = resolveCountry(phoneNumber, candidates);
      const resolved = candidates.find((country) => country.iso2 === iso2?.toLowerCase());
      return { country: resolved ?? detected, resolvedByCallback: !!resolved };
    },
    [filteredCountries, resolveCountry, withExtension]
  );

  const initialValue = value ?? defaultValue;
  const initialDetection = initialValue ? detectCountry(initialValue) : undefined;
  const inferredFromValue = initialDetection?.country;
  const defaultCountryData = defaultCountry ? findCountryByIso2(defaultCountry) : undefined;
  const initialCountry = inferredFromValue || defaultCountryData || null;

  const [selectedCountry, setSelectedCountry] = useState<PhoneInputCountryData | null>(
    initialCountry
  );
  const countryResolvedByCallbackRef = useRef(initialDetection?.resolvedByCallback ?? false);
  const [search, setSearch] = useState('');
  const [activeOptionId, setActiveOptionId] = useState<string | null>(null);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: initialCountry && international ? `+${initialCountry.dialCode}` : '',
    onChange: () => {},
  });
  const { phoneNumber: phoneValue, extension } = parsePhoneValue(_value, withExtension);

  const formatValue = (rawValue: string, country: PhoneInputCountryData | null) => {
    const { phoneNumber, extension: phoneExtension } = parsePhoneValue(rawValue, withExtension);
    const formatted =
      phoneNumber === '+' ? '+' : country ? formatPhoneNumber(phoneNumber, country) : phoneNumber;
    return phoneExtension === undefined ? formatted : `${formatted.trimEnd()} x${phoneExtension}`;
  };

  const combobox = useCombobox({
    opened: dropdownOpened,
    onDropdownOpen: () => {
      if (searchable) {
        combobox.focusSearchInput();
      } else {
        combobox.focusTarget();
      }
      onDropdownOpen?.();
    },
    onDropdownClose: () => {
      setSearch('');
      setActiveOptionId(null);
      onDropdownClose?.();
    },
  });

  const isDetectedCountryDifferent = (
    detected: PhoneInputCountryData,
    current: PhoneInputCountryData | null,
    rawValue: string,
    resolvedByCallback = false
  ) =>
    detected.iso2 !== current?.iso2 &&
    (detected.dialCode !== current?.dialCode ||
      matchesAreaCode(detected, parsePhoneValue(rawValue, withExtension).phoneNumber) ||
      resolvedByCallback ||
      countryResolvedByCallbackRef.current);

  useEffect(() => {
    if (value !== undefined && value !== lastEmittedValueRef.current) {
      userEnteredDialCodeRef.current = false;
      nationalPrefixConsumedRef.current = false;
    }

    const isOwnEcho =
      value !== undefined &&
      value === lastEmittedValueRef.current &&
      (countryLockedRef.current ||
        resolveCountry === lastEmittedResolverRef.current ||
        detectCountry(value).country?.iso2 === lastEmittedDetectedCountryRef.current);
    const { country: detected, resolvedByCallback } =
      value && !isOwnEcho
        ? detectCountry(value)
        : { country: undefined, resolvedByCallback: false };

    if (detected) {
      if (isDetectedCountryDifferent(detected, selectedCountry, value ?? '', resolvedByCallback)) {
        countryResolvedByCallbackRef.current = resolvedByCallback;
        setSelectedCountry(detected);
        onCountryChange?.(detected);
      } else if (detected.iso2 === selectedCountry?.iso2) {
        countryResolvedByCallbackRef.current = resolvedByCallback;
      }
      return;
    }

    if (selectedCountry && !filteredCountries.find((c) => c.iso2 === selectedCountry.iso2)) {
      const fallback = filteredCountries[0] || null;
      countryResolvedByCallbackRef.current = false;
      setSelectedCountry(fallback);
      if (fallback) {
        onCountryChange?.(fallback);
      }
    }
  }, [value, filteredCountries, detectCountry]);

  useEffect(() => {
    if (combobox.dropdownOpened) {
      combobox.selectFirstOption();
    }
  }, [search]);

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

  const emitChange = (rawValue: string, details: PhoneInputChangeDetails) => {
    lastEmittedValueRef.current = rawValue;
    lastEmittedResolverRef.current = resolveCountry;
    lastEmittedDetectedCountryRef.current = detectCountry(rawValue).country?.iso2;
    setValue(rawValue);
    onChange?.(
      rawValue,
      withExtension
        ? { ...details, extension: parsePhoneValue(rawValue, true).extension ?? '' }
        : details
    );
  };

  const handleValueChange = (rawValue: string, country: PhoneInputCountryData | null) => {
    const formattedValue = formatValue(rawValue, country);
    emitChange(rawValue, { formattedValue, country });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const restartIndex = Math.max(input.value.lastIndexOf('+'), 0);
    const inputValue = input.value.slice(restartIndex);
    const { phoneNumber: inputNumber, extension: inputExtension } = parsePhoneValue(
      inputValue,
      withExtension
    );
    const cursorPos = Math.max((input.selectionStart ?? input.value.length) - restartIndex, 0);
    const digitsOnly = getDigits(inputNumber).replace(/^\+/, '');
    const hasPlus = inputNumber.includes('+');
    const autoDetectEnabled = withCountryAutoDetect || !selectedCountry;
    const canAutoDetect = autoDetectEnabled && !countryLockedRef.current;

    if (!digitsOnly) {
      nationalPrefixConsumedRef.current = false;
      userEnteredDialCodeRef.current = hasPlus;
      if (withCountryAutoDetect || !selectedCountry) {
        countryLockedRef.current = false;
      }

      if (hasPlus) {
        emitChange('+', { formattedValue: '+', country: selectedCountry });
        requestAnimationFrame(() => {
          input.setSelectionRange(1, 1);
        });
      } else {
        handleValueChange('', selectedCountry);
      }
      return;
    }

    const typedRaw = getDigits(inputNumber);
    const hasInternationalPrefix = typedRaw.startsWith('+');
    const dialCodeTyped = hasInternationalPrefix || (autoDetectEnabled && international);
    const typedCountry =
      selectedCountry && dialCodeTyped && (countryLockedRef.current || !autoDetectEnabled)
        ? detectCountry(typedRaw).country
        : undefined;
    const dialCodeChanged = !!typedCountry && typedCountry.dialCode !== selectedCountry?.dialCode;
    const dialCodeIncomplete = hasInternationalPrefix && !canAutoDetect && !typedCountry;
    const detectNow = canAutoDetect || dialCodeChanged || dialCodeIncomplete;

    if (dialCodeChanged) {
      countryLockedRef.current = false;
    }

    const preferSelectedCountry =
      !!selectedCountry &&
      !hasInternationalPrefix &&
      (nationalPrefixBehavior === 'strip' ||
        (international && typedRaw.length <= getMaskDigitCount(selectedCountry.format)) ||
        (nationalPrefixBehavior === 'auto' &&
          international &&
          !!selectedCountry.nationalPrefix &&
          typedRaw.startsWith(selectedCountry.nationalPrefix) &&
          typedRaw.length <=
            getMaskDigitCount(selectedCountry.format) + selectedCountry.nationalPrefix.length));
    const detectedFromDigits =
      detectNow && international && !hasInternationalPrefix && !preferSelectedCountry
        ? detectCountry(typedRaw).country
        : undefined;
    const inputCountry =
      detectedFromDigits && detectedFromDigits.dialCode !== selectedCountry?.dialCode
        ? null
        : selectedCountry;

    const nationalDigits =
      international && typedRaw.startsWith(`+${selectedCountry?.dialCode}`)
        ? typedRaw.slice((selectedCountry?.dialCode.length ?? 0) + 1)
        : typedRaw.replace(/^\+/, '');
    const hasNationalPrefix =
      !!inputCountry?.nationalPrefix && nationalDigits.startsWith(inputCountry.nationalPrefix);
    const previousDisplay = selectedCountry
      ? toDisplayValue(formatPhoneNumber(phoneValue, selectedCountry), selectedCountry)
      : phoneValue;
    const addedLength = inputNumber.length - previousDisplay.length;
    const isInsertion =
      addedLength > 0 &&
      Array.from({ length: previousDisplay.length + 1 }, (_, index) => index).some(
        (index) =>
          inputNumber.slice(0, index) + inputNumber.slice(index + addedLength) === previousDisplay
      );
    const replacesValue =
      !inputNumber.startsWith(previousDisplay) &&
      !previousDisplay.startsWith(inputNumber) &&
      !isInsertion;
    if (!previousDisplay || replacesValue || restartIndex > 0 || phoneValue === '+') {
      userEnteredDialCodeRef.current = hasInternationalPrefix;
    }

    const forceNationalPrefix =
      (nationalPrefixBehavior === 'strip' ||
        (nationalPrefixBehavior === 'auto' && international && !hasInternationalPrefix)) &&
      hasNationalPrefix &&
      !userEnteredDialCodeRef.current &&
      !nationalPrefixConsumedRef.current &&
      (!phoneValue ||
        phoneValue === `+${inputCountry.dialCode}` ||
        (replacesValue &&
          (nationalDigits.length === inputCountry.nationalPrefix?.length ||
            inputNumber[0] !== previousDisplay[0]))) &&
      (!hasInternationalPrefix || nationalDigits === inputCountry.nationalPrefix);
    const normalizeNationalPrefix =
      nationalPrefixBehavior !== 'preserve' &&
      (!hasNationalPrefix ||
        inputCountry.nationalPrefix === '0' ||
        forceNationalPrefix ||
        (nationalDigits.length > getMaskDigitCount(inputCountry.format) &&
          (!phoneValue || phoneValue === `+${inputCountry.dialCode}` || replacesValue)));

    const fullRaw = buildRawValue(inputNumber, {
      canAutoDetect: detectNow,
      international,
      selectedCountry: inputCountry,
      normalizeNationalPrefix,
      forceNationalPrefix,
      preferSelectedCountry,
    });
    let country = selectedCountry;

    if (detectNow) {
      const { country: detected, resolvedByCallback } = detectCountry(fullRaw);
      if (
        detected &&
        isDetectedCountryDifferent(detected, selectedCountry, fullRaw, resolvedByCallback)
      ) {
        country = detected;
        countryResolvedByCallbackRef.current = resolvedByCallback;
        setSelectedCountry(detected);
        onCountryChange?.(detected);
      } else if (detected?.iso2 === country?.iso2) {
        countryResolvedByCallbackRef.current = resolvedByCallback;
      }
    }

    const newRaw = detectNow ? fullRaw : clampToMask(fullRaw, country);
    if (international && !hasInternationalPrefix && fullRaw === `+${typedRaw}`) {
      userEnteredDialCodeRef.current = true;
    }

    nationalPrefixConsumedRef.current = forceNationalPrefix && newRaw === `+${country?.dialCode}`;
    const newValue = inputExtension === undefined ? newRaw : `${newRaw}x${inputExtension}`;
    const newFormatted = formatValue(newValue, country);
    const formattedNumber = country ? formatPhoneNumber(newRaw, country) : newRaw;
    const newDisplayRaw =
      international || !country ? newRaw : newRaw.slice(country.dialCode.length + 1);
    const extensionIndex = inputExtension === undefined ? -1 : inputValue.search(/x/i);
    const newCursor =
      inputExtension !== undefined && cursorPos > extensionIndex
        ? toDisplayValue(newFormatted, country).length -
          inputExtension.length +
          inputValue.slice(extensionIndex + 1, cursorPos).replace(/\D/g, '').length
        : computeCursorPosition(
            inputNumber,
            Math.min(cursorPos, inputNumber.length),
            newDisplayRaw,
            toDisplayValue(formattedNumber, country)
          );

    emitChange(newValue, { formattedValue: newFormatted, country });

    requestAnimationFrame(() => {
      input.setSelectionRange(newCursor, newCursor);
    });
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (readOnly || !combobox.dropdownOpened || event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveOptionId(combobox.selectNextOption());
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveOptionId(combobox.selectPreviousOption());
    } else if (event.key === 'Enter' && combobox.getSelectedOptionIndex() !== -1) {
      event.preventDefault();
      combobox.clickSelectedOption();
    } else if (event.key === 'Escape') {
      combobox.closeDropdown('keyboard');
    }
  };

  const handleCountrySelect = (iso2: string) => {
    const country = findCountryByIso2(iso2);
    if (!country) {
      return;
    }

    countryLockedRef.current = true;
    countryResolvedByCallbackRef.current = false;
    nationalPrefixConsumedRef.current = false;
    userEnteredDialCodeRef.current = false;
    setSelectedCountry(country);
    onCountryChange?.(country);

    const currentDigits = phoneValue.replace(/\D/g, '');
    const oldDialCode = selectedCountry?.dialCode;
    let newRaw: string;

    if (oldDialCode && currentDigits.startsWith(oldDialCode)) {
      newRaw = `+${country.dialCode}${currentDigits.slice(oldDialCode.length)}`;
    } else {
      newRaw = `+${country.dialCode}`;
    }

    const clamped = clampToMask(newRaw, country);
    handleValueChange(extension === undefined ? clamped : `${clamped}x${extension}`, country);
    combobox.closeDropdown();
    focusInputAfterDialCode(country, clamped);
  };

  const formattedValue = formatValue(_value, selectedCountry);
  const displayValue = toDisplayValue(formattedValue, selectedCountry);

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

  const searchedCountries = search
    ? filterCountries(mainCountries, search, getCountryLabel)
    : mainCountries;

  const searchedPreferred = search
    ? filterCountries(preferredList, search, getCountryLabel)
    : preferredList;

  const countryButtonLabel = selectedCountry
    ? (getCountryLabel?.(selectedCountry) ?? selectedCountry.name)
    : selectCountryLabel;

  const countryButtonContent = renderFlag ? (
    <span {...getStyles('countryButtonFlag')}>{renderFlag(selectedCountry)}</span>
  ) : selectedCountry ? (
    <span {...getStyles('countryButtonCode')}>{selectedCountry.iso2.toUpperCase()}</span>
  ) : null;

  return (
    <Combobox
      store={combobox}
      __staticSelector="PhoneInput"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      readOnly={readOnly}
      onOptionSubmit={handleCountrySelect}
      {...comboboxProps}
    >
      <Combobox.DropdownTarget refProp="rootRef">
        <Combobox.EventsTarget
          targetType="input"
          withKeyboardNavigation={false}
          withAriaAttributes={false}
          {...others}
        >
          <InputBase
            ref={inputRef}
            type="tel"
            inputMode={withExtension ? 'text' : undefined}
            __staticSelector="PhoneInput"
            autoComplete={autoComplete ?? 'off'}
            aria-controls={combobox.dropdownOpened && combobox.listId ? combobox.listId : undefined}
            aria-activedescendant={
              combobox.dropdownOpened ? activeOptionId || undefined : undefined
            }
            data-expanded={combobox.dropdownOpened || undefined}
            data-mantine-stop-propagation={combobox.dropdownOpened || undefined}
            leftSection={
              <UnstyledButton
                type="button"
                disabled={disabled || readOnly}
                onClick={() => combobox.toggleDropdown()}
                aria-label={countryButtonLabel}
                aria-haspopup="listbox"
                aria-expanded={combobox.dropdownOpened}
                aria-controls={
                  combobox.dropdownOpened && combobox.listId ? combobox.listId : undefined
                }
                {...getStyles('countryButton', { focusable: true })}
              >
                {countryButtonContent}
                {withChevron && <Combobox.Chevron size={size} />}
              </UnstyledButton>
            }
            leftSectionPointerEvents="all"
            leftSectionWidth={leftSectionWidth[size]}
            size={size}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            value={displayValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            attributes={attributes}
          />
        </Combobox.EventsTarget>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown hidden={readOnly || disabled}>
        {searchable && (
          <Combobox.Search
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              combobox.resetSelectedOption();
            }}
            placeholder={searchPlaceholder}
            autoComplete="search-countries"
          />
        )}

        <Combobox.Options>
          <ScrollArea.Autosize mah={maxDropdownHeight} type="scroll">
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
          </ScrollArea.Autosize>
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
