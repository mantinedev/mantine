import { use, useEffect, useMemo, useRef, useState } from 'react';
import { useId, useIsomorphicEffect, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Combobox, ComboboxProps, useCombobox } from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { InputWrapperContext } from '../Input/InputWrapper.context';
import { ScrollArea } from '../ScrollArea';
import { detectQuery } from './detect-query';
import { buildHighlightSegments, getMentionModel, getSelectionStates } from './get-mention-model';
import { Mention, MentionProps } from './Mention';
import { MentionsHighlighter, MentionsRenderMentionInput } from './MentionsHighlighter';
import { MentionsInlineSuggestion } from './MentionsInlineSuggestion';
import type {
  MentionOccurrence,
  MentionsChangePayload,
  MentionsChangeTriggerType,
} from './Mentions.types';
import { getSourceConfigs, resolveSources } from './resolve-sources';
import { MentionsFilter, useMentionsQuery } from './use-mentions-query';
import { applyChangeToValue } from './utils/apply-change-to-value';
import { getCaretCoordinates } from './utils/get-caret-coordinates';
import { getMentions } from './utils/get-mentions';
import { getPlainText } from './utils/get-plain-text';
import { getMentionPlainText } from './utils/iterate-mentions';
import { mapPlainTextIndex } from './utils/map-plain-text-index';
import classes from './Mentions.module.css';

export type MentionsStylesNames =
  | __InputStylesNames
  | 'highlighter'
  | 'highlight'
  | 'dropdown'
  | 'options'
  | 'option'
  | 'nothingFound'
  | 'inlineSuggestion'
  | 'inlineSuggestionPrefix'
  | 'inlineSuggestionText'
  | 'inlineSuggestionSuffix';

export interface MentionsProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<MentionsFactory>,
    ElementProps<'textarea', 'onChange' | 'value' | 'defaultValue' | 'size'> {
  /** Controlled markup value */
  value?: string;

  /** Uncontrolled markup value initial state */
  defaultValue?: string;

  /** Called on every value change with a rich payload */
  onChange?: (payload: MentionsChangePayload) => void;

  /** `Mentions.Mention` nodes, one per trigger/data source */
  children?: React.ReactNode;

  /** If set, renders a single-line `input` instead of a `textarea` @default false */
  singleLine?: boolean;

  /** Minimum rows of the underlying control */
  minRows?: number;

  /** Maximum rows before the control scrolls */
  maxRows?: number;

  /** Anchors the dropdown to the caret position or the input's left edge @default 'caret' */
  anchorMode?: 'caret' | 'left';

  /** Dropdown placement relative to the anchor @default 'below' */
  suggestionsPlacement?: 'auto' | 'above' | 'below';

  /** Displays suggestions as a dropdown list or as inline ghost text @default 'overlay' */
  suggestionsDisplay?: 'overlay' | 'inline';

  /** Called when the caret/selection overlaps one or more mentions */
  onSelectionChange?: (
    selection: { start: number; end: number },
    mentions: MentionOccurrence[]
  ) => void;

  /** Local filtering of array data, `false` to disable (server-driven) */
  filter?: false | MentionsFilter;

  /** Message shown when a query returns no matches */
  nothingFoundMessage?: React.ReactNode;

  /** Function to customize how mentions are rendered in the overlay, for example to add a tooltip or a `HoverCard`. The returned content must keep the same text metrics as `display` to stay aligned. */
  renderMention?: (input: MentionsRenderMentionInput) => React.ReactNode;

  /** Dropdown `max-height` before scroll @default 220 */
  maxDropdownHeight?: number | string;

  /** Props passed down to the underlying `Combobox` */
  comboboxProps?: ComboboxProps;

  /** Screen-reader label for the suggestions list */
  a11ySuggestionsListLabel?: string;

  /** Ref forwarded to the underlying control */
  inputRef?: React.Ref<HTMLTextAreaElement | HTMLInputElement>;

  /** `static` disables all interactions @default 'interactive' */
  mode?: 'interactive' | 'static';
}

export type MentionsFactory = Factory<{
  props: MentionsProps;
  ref: HTMLTextAreaElement;
  stylesNames: MentionsStylesNames;
  staticComponents: {
    Mention: typeof Mention;
  };
}>;

const defaultProps = {
  singleLine: false,
  anchorMode: 'caret',
  suggestionsPlacement: 'below',
  suggestionsDisplay: 'overlay',
  spellCheck: false,
  mode: 'interactive',
  size: 'sm',
} satisfies Partial<MentionsProps>;

interface MentionsControlProps extends React.ComponentPropsWithoutRef<'textarea'> {
  singleLine: boolean;
  inputRef: React.Ref<HTMLTextAreaElement | HTMLInputElement>;
}

function MentionsControl({ singleLine, inputRef, ...rest }: MentionsControlProps) {
  const ctx = use(InputWrapperContext);
  const sharedProps = {
    ref: inputRef as any,
    id: ctx.inputId,
    'aria-describedby': ctx.describedBy,
    ...rest,
  };

  return singleLine ? (
    <input {...(sharedProps as React.ComponentPropsWithoutRef<'input'>)} />
  ) : (
    <textarea {...sharedProps} />
  );
}

export const Mentions = factory<MentionsFactory>((_props) => {
  const props = useProps('Mentions', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    value,
    defaultValue,
    onChange,
    children,
    singleLine,
    minRows,
    maxRows,
    anchorMode,
    suggestionsPlacement,
    suggestionsDisplay,
    onSelectionChange,
    filter,
    nothingFoundMessage,
    renderMention,
    maxDropdownHeight,
    comboboxProps,
    a11ySuggestionsListLabel,
    inputRef,
    mode,
    size,
    id,
    disabled,
    readOnly,
    required,
    spellCheck,
    onKeyDown,
    onFocus,
    onBlur,
    onClick,
    onSelect,
    onScroll,
    placeholder,
    attributes,
    ref,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    name,
    form,
    autoComplete,
    autoFocus,
    maxLength,
    minLength,
    wrap,
    inputMode,
    autoCapitalize,
    autoCorrect,
    enterKeyHint,
    onPaste,
    onCopy,
    onCut,
    onInput,
    onKeyUp,
    onDrop,
    onCompositionStart,
    onCompositionUpdate,
    onCompositionEnd,
    ...others
  } = props;

  const nativeControlProps = {
    name,
    form,
    required,
    autoComplete,
    autoFocus,
    maxLength,
    minLength,
    wrap,
    inputMode,
    autoCapitalize,
    autoCorrect,
    enterKeyHint,
    onPaste,
    onCopy,
    onCut,
    onInput,
    onKeyUp,
    onDrop,
    onCompositionStart,
    onCompositionUpdate,
    onCompositionEnd,
  };

  const _id = useId(id);
  const interactive = mode === 'interactive' && !disabled && !readOnly;

  const sources = useMemo(() => resolveSources(children), [children]);
  const configs = useMemo(() => getSourceConfigs(sources), [sources]);

  const [_value, setValueState] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
  });

  const textareaRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);
  const selectionRef = useRef({ start: 0, end: 0 });
  const pendingCaretRef = useRef<number | null>(null);
  const initialValue = value ?? defaultValue ?? '';
  const historyRef = useRef<{
    entries: { value: string; caret: number }[];
    index: number;
    lastType: string | null;
    lastTime: number;
  }>({
    entries: [{ value: initialValue, caret: getPlainText(initialValue, configs).length }],
    index: 0,
    lastType: null,
    lastTime: 0,
  });
  const mergedRef = useMergedRef(textareaRef, ref, inputRef);

  const [query, setQuery] = useState<ReturnType<typeof detectQuery>>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [caretStyle, setCaretStyle] = useState<React.CSSProperties | null>(null);
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const { plainText, spans } = getMentionModel(_value, sources);
  const selectionStates = getSelectionStates(spans, selection.start, selection.end);
  const segments = buildHighlightSegments(plainText, spans, sources, selectionStates);

  const activeSource = query ? sources[query.sourceIndex] : null;
  const queryState = useMentionsQuery({
    source: activeSource,
    query: query?.query ?? null,
    enabled: interactive,
    filter,
  });
  const suggestions = queryState.items;

  const getStyles = useStyles<MentionsFactory>({
    name: 'Mentions',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MentionsFactory>({
    props,
    styles,
    classNames,
  });

  const buildPayload = (
    newValue: string,
    trigger: { type: MentionsChangeTriggerType; nativeEvent?: Event },
    mentionId?: string
  ): MentionsChangePayload => ({
    value: newValue,
    plainTextValue: getPlainText(newValue, configs),
    idValue: getPlainText(newValue, configs, { idOnly: true }),
    mentions: getMentions(newValue, configs),
    mentionId,
    previousValue: _value,
    trigger,
  });

  const commitValue = (
    newValue: string,
    trigger: { type: MentionsChangeTriggerType; nativeEvent?: Event },
    mentionId?: string
  ) => {
    const payload = buildPayload(newValue, trigger, mentionId);
    setValueState(newValue);
    onChange?.(payload);
  };

  // React overwrites the transformed value on the textarea, which discards the browser's native undo
  // history. A small internal history stack restores it for Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z (Ctrl+Y).
  const pushHistory = (newValue: string, caret: number, changeType: string) => {
    const history = historyRef.current;
    const now = Date.now();
    const shouldCoalesce =
      changeType === 'input' && history.lastType === 'input' && now - history.lastTime < 400;

    if (shouldCoalesce) {
      history.entries[history.index] = { value: newValue, caret };
    } else {
      history.entries = history.entries.slice(0, history.index + 1);
      history.entries.push({ value: newValue, caret });
      if (history.entries.length > 100) {
        history.entries.shift();
      }
      history.index = history.entries.length - 1;
    }

    history.lastType = changeType;
    history.lastTime = now;
  };

  const restoreHistoryEntry = (entry: { value: string; caret: number }) => {
    commitValue(entry.value, { type: 'input' });
    pendingCaretRef.current = entry.caret;
    setSelection({ start: entry.caret, end: entry.caret });
    setQuery(null);
    combobox.closeDropdown();
    historyRef.current.lastType = null;
  };

  const undo = () => {
    const history = historyRef.current;
    if (history.index <= 0) {
      return false;
    }
    history.index -= 1;
    restoreHistoryEntry(history.entries[history.index]);
    return true;
  };

  const redo = () => {
    const history = historyRef.current;
    if (history.index >= history.entries.length - 1) {
      return false;
    }
    history.index += 1;
    restoreHistoryEntry(history.entries[history.index]);
    return true;
  };

  const updateActiveQuery = (markupValue: string, caret: number) => {
    if (!interactive) {
      setQuery(null);
      return;
    }
    const model = getMentionModel(markupValue, sources);
    setQuery(detectQuery(model.plainText, caret, sources, model.spans));
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    const nextPlainText = target.value;
    const caretAfter = target.selectionStart ?? nextPlainText.length;
    const before = selectionRef.current;

    const result = applyChangeToValue(
      _value,
      nextPlainText,
      {
        selectionStartBefore: before.start,
        selectionEndBefore: before.end,
        selectionEndAfter: caretAfter,
      },
      configs
    );

    commitValue(result.value, {
      type: result.removedMention ? 'mention-remove' : 'input',
      nativeEvent: event.nativeEvent,
    });
    pushHistory(
      result.value,
      result.caretPlainTextIndex,
      result.removedMention ? 'mention-remove' : 'input'
    );

    pendingCaretRef.current = result.caretPlainTextIndex;
    setSelection({ start: result.caretPlainTextIndex, end: result.caretPlainTextIndex });
    updateActiveQuery(result.value, result.caretPlainTextIndex);
  };

  const syncSelection = (target: HTMLTextAreaElement) => {
    const start = target.selectionStart ?? 0;
    const end = target.selectionEnd ?? 0;
    selectionRef.current = { start, end };
    setSelection({ start, end });
    return { start, end };
  };

  const handleSelect = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    onSelect?.(event);
    const target = event.currentTarget;
    const { start, end } = syncSelection(target);

    if (start === end) {
      updateActiveQuery(_value, start);
    } else {
      setQuery(null);
    }

    if (onSelectionChange) {
      const freshStates = getSelectionStates(spans, start, end);
      const overlapping = spans
        .filter((span) => freshStates.has(span.index))
        .map<MentionOccurrence>((span) => ({
          id: span.id,
          display: span.display,
          index: span.index,
          plainTextIndex: span.plainStart,
          trigger: span.trigger,
        }));
      onSelectionChange({ start, end }, overlapping);
    }
  };

  const insertMention = (id: string) => {
    if (!activeSource || !query) {
      return;
    }

    const item = suggestions.find((suggestion) => suggestion.id === id);
    if (!item) {
      return;
    }

    const display = item.display ?? item.id;
    const queryEnd = query.queryEnd;

    const markupStart = mapPlainTextIndex(_value, configs, query.queryStart, 'START') ?? 0;
    const markupEnd = mapPlainTextIndex(_value, configs, queryEnd, 'END') ?? _value.length;
    const appendSpace = activeSource.props.appendSpaceOnAdd ?? false;

    const insertMarkup = activeSource.config.serializer.insert({ id: item.id, display });
    const newValue =
      _value.slice(0, markupStart) +
      insertMarkup +
      (appendSpace ? ' ' : '') +
      _value.slice(markupEnd);

    const caretPlain =
      getPlainText(_value.slice(0, markupStart), configs).length +
      getMentionPlainText(activeSource.config, item.id, display).length +
      (appendSpace ? 1 : 0);

    commitValue(newValue, { type: 'mention-add' }, item.id);
    pushHistory(newValue, caretPlain, 'mention-add');
    pendingCaretRef.current = caretPlain;
    setSelection({ start: caretPlain, end: caretPlain });
    setQuery(null);
    combobox.closeDropdown();
    activeSource.props.onAdd?.({
      id: item.id,
      display,
      startPos: query.queryStart,
      endPos: queryEnd,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented || !interactive) {
      return;
    }

    if (event.metaKey || event.ctrlKey) {
      const key = event.key.toLowerCase();
      if (key === 'z') {
        if (event.shiftKey ? redo() : undo()) {
          event.preventDefault();
        }
        return;
      }
      if (key === 'y') {
        if (redo()) {
          event.preventDefault();
        }
        return;
      }
    }

    if (suggestionsDisplay === 'inline') {
      if (
        query &&
        suggestions.length > 0 &&
        (event.key === 'Tab' || event.key === 'Enter' || event.key === 'ArrowRight')
      ) {
        if (event.key !== 'ArrowRight' || selection.start === plainText.length) {
          event.preventDefault();
          insertMention(suggestions[0].id);
        }
      }
      return;
    }

    if (!combobox.dropdownOpened) {
      return;
    }

    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      setSelectedOptionId(combobox.selectNextOption());
      setSelectedIndex(combobox.getSelectedOptionIndex());
    } else if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      setSelectedOptionId(combobox.selectPreviousOption());
      setSelectedIndex(combobox.getSelectedOptionIndex());
    } else if (
      (event.nativeEvent.code === 'Enter' ||
        event.nativeEvent.code === 'NumpadEnter' ||
        event.key === 'Tab') &&
      !event.nativeEvent.isComposing &&
      combobox.getSelectedOptionIndex() !== -1
    ) {
      event.preventDefault();
      combobox.clickSelectedOption();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      combobox.closeDropdown();
      setQuery(null);
    }
  };

  useEffect(() => {
    if (pendingCaretRef.current != null && textareaRef.current) {
      const caret = pendingCaretRef.current;
      textareaRef.current.setSelectionRange(caret, caret);
      selectionRef.current = { start: caret, end: caret };
      pendingCaretRef.current = null;
    }
  }, [_value]);

  useEffect(() => {
    const shouldOpen =
      interactive &&
      suggestionsDisplay === 'overlay' &&
      query != null &&
      (queryState.loading ||
        !!queryState.error ||
        suggestions.length > 0 ||
        !!nothingFoundMessage ||
        !!activeSource?.props.renderEmpty);

    if (shouldOpen) {
      combobox.openDropdown();
    } else {
      combobox.closeDropdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, queryState.loading, queryState.error, suggestions.length]);

  useEffect(() => {
    if (combobox.dropdownOpened && suggestions.length > 0) {
      setSelectedOptionId(combobox.selectFirstOption());
      setSelectedIndex(combobox.getSelectedOptionIndex());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions, combobox.dropdownOpened]);

  useIsomorphicEffect(() => {
    if (anchorMode !== 'caret' || !query || !textareaRef.current) {
      return;
    }
    const coords = getCaretCoordinates(textareaRef.current, query.queryStart);
    // Anchor spans the caret line (top + height) rather than being a zero-height point at the line's
    // bottom edge. A point on the bottom clip edge of the overflow-hidden field is reported as hidden
    // by the floating-ui `hide` middleware, which would set `display: none` on the dropdown.
    setCaretStyle({
      top: coords.top - textareaRef.current.scrollTop,
      left: coords.left - textareaRef.current.scrollLeft,
      height: coords.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, _value]);

  const inlineTopItem = suggestionsDisplay === 'inline' && query ? suggestions[0] : undefined;
  const inlineCompletion = inlineTopItem
    ? (inlineTopItem.display ?? inlineTopItem.id).slice(query!.query.length)
    : '';

  const optionsContent = () => {
    if (query == null || suggestionsDisplay === 'inline') {
      return null;
    }

    if (queryState.error) {
      return (
        <Combobox.Empty {...getStyles('nothingFound')}>
          {activeSource?.props.renderError?.(query.query, queryState.error) ??
            'Failed to load suggestions'}
        </Combobox.Empty>
      );
    }

    if (queryState.loading) {
      return <Combobox.Empty {...getStyles('nothingFound')}>Loading…</Combobox.Empty>;
    }

    if (suggestions.length === 0) {
      const empty = activeSource?.props.renderEmpty?.(query.query) ?? nothingFoundMessage;
      return empty ? <Combobox.Empty {...getStyles('nothingFound')}>{empty}</Combobox.Empty> : null;
    }

    return suggestions.map((item, index) => (
      <Combobox.Option value={item.id} key={item.id}>
        {activeSource?.props.renderSuggestion?.({
          item,
          query: query.query,
          highlighted: index === selectedIndex,
          index,
          focused: index === selectedIndex,
        }) ??
          item.display ??
          item.id}
      </Combobox.Option>
    ));
  };

  const field = (
    <InputBase
      component="div"
      multiline
      data-no-overflow
      withAria={false}
      __staticSelector="Mentions"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      id={_id}
      disabled={disabled}
      required={required}
      attributes={attributes}
      pointer={false}
      onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
          textareaRef.current?.focus();
        }
      }}
      {...(others as any)}
    >
      <div
        className={classes.control}
        style={
          {
            '--mentions-min-rows': minRows ?? 1,
            '--mentions-max-rows': maxRows,
          } as React.CSSProperties
        }
      >
        <MentionsHighlighter
          ref={highlighterRef}
          getStyles={getStyles}
          segments={segments}
          trailingNewline={plainText.endsWith('\n')}
          renderMention={renderMention}
        />

        <MentionsControl
          {...nativeControlProps}
          {...getStyles('input', { className: classes.field })}
          singleLine={singleLine}
          inputRef={mergedRef}
          value={plainText}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly || mode === 'static'}
          spellCheck={spellCheck}
          rows={singleLine ? undefined : (minRows ?? 1)}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          role={singleLine ? 'combobox' : undefined}
          aria-autocomplete="list"
          aria-expanded={singleLine ? combobox.dropdownOpened : undefined}
          aria-controls={combobox.dropdownOpened ? (combobox.listId ?? undefined) : undefined}
          aria-activedescendant={
            combobox.dropdownOpened ? (selectedOptionId ?? undefined) : undefined
          }
          aria-haspopup="listbox"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSelect={handleSelect}
          onFocus={onFocus}
          onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => {
            onBlur?.(event);
            combobox.closeDropdown();
          }}
          onClick={(event: React.MouseEvent<HTMLTextAreaElement>) => {
            onClick?.(event);
            syncSelection(event.currentTarget);
          }}
          onScroll={(event: React.UIEvent<HTMLTextAreaElement>) => {
            onScroll?.(event);
            if (highlighterRef.current) {
              highlighterRef.current.scrollTop = event.currentTarget.scrollTop;
              highlighterRef.current.scrollLeft = event.currentTarget.scrollLeft;
            }
          }}
        />

        {inlineTopItem && inlineCompletion ? (
          <MentionsInlineSuggestion
            getStyles={getStyles}
            prefix={plainText.slice(0, selection.start)}
            completion={inlineCompletion}
          />
        ) : null}

        {anchorMode === 'caret' ? (
          <Combobox.DropdownTarget>
            <div
              className={classes.caretAnchor}
              style={caretStyle ?? { top: 0, left: 0 }}
              aria-hidden
            />
          </Combobox.DropdownTarget>
        ) : null}
      </div>
    </InputBase>
  );

  return (
    <Combobox
      store={combobox}
      __staticSelector="Mentions"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      readOnly={readOnly}
      position={suggestionsPlacement === 'above' ? 'top-start' : 'bottom-start'}
      middlewares={{ flip: suggestionsPlacement === 'auto', shift: true }}
      width={anchorMode === 'caret' ? 'max-content' : 'target'}
      attributes={attributes}
      onOptionSubmit={insertMention}
      {...comboboxProps}
    >
      {anchorMode === 'caret' ? field : <Combobox.DropdownTarget>{field}</Combobox.DropdownTarget>}

      <Combobox.Dropdown>
        <Combobox.Options aria-label={a11ySuggestionsListLabel}>
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbars="y"
            unstyled={unstyled}
          >
            {optionsContent()}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
});

Mentions.classes = { ...InputBase.classes, ...Combobox.classes, ...classes };
Mentions.displayName = '@mantine/core/Mentions';
Mentions.Mention = Mention;

export namespace Mentions {
  export type Props = MentionsProps;
  export type StylesNames = MentionsStylesNames;
  export type Factory = MentionsFactory;

  export namespace Mention {
    export type Props = MentionProps;
  }
}
