import { useMemo, useRef, useState } from 'react';
import { useId, useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
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
import { detectQuery, ActiveMentionQuery } from './detect-query';
import { buildHighlightSegments } from './highlight-segments';
import { Mention, MentionProps } from './Mention';
import {
  MentionOccurrence,
  MentionsChangePayload,
  MentionsChangeReason,
  MentionsFilter,
  MentionsRenderMentionInput,
} from './Mentions.types';
import { MentionsControl } from './MentionsControl';
import { MentionsDropdown } from './MentionsDropdown';
import { MentionsHighlighter } from './MentionsHighlighter';
import { MentionsInlineSuggestion } from './MentionsInlineSuggestion';
import { resolveSources } from './resolve-sources';
import { splitWrapperProps } from './split-wrapper-props';
import { useMentionsClipboard } from './use-mentions-clipboard';
import { useMentionsDropdown } from './use-mentions-dropdown';
import { useMentionsInlineSuggestion } from './use-mentions-inline-suggestion';
import { useMentionsOverlayPosition } from './use-mentions-overlay-position';
import { useMentionsQuery } from './use-mentions-query';
import { useMentionsSelection } from './use-mentions-selection';
import { useMentionsValue } from './use-mentions-value';
import { applyChangeToValue } from './utils/apply-change-to-value';
import { getInputChangeType } from './utils/get-input-change-type';
import { insertMention } from './utils/insert-mention';
import { normalizeNewlines } from './utils/normalize-newlines';
import { getSelectionStates } from './utils/selection';
import { MentionWalk } from './utils/walk-mentions';
import classes from './Mentions.module.css';

export type MentionsStylesNames =
  | __InputStylesNames
  | 'field'
  | 'highlighter'
  | 'highlight'
  | 'dropdown'
  | 'options'
  | 'option'
  | 'nothingFound'
  | 'inlineSuggestion'
  | 'inlineSuggestionPrefix'
  | 'inlineSuggestionText';

export type MentionsCssVariables = {
  highlight: '--mentions-highlight-color' | '--mentions-highlight-bg';
};

export interface MentionsProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<MentionsFactory>,
    ElementProps<'textarea', 'onChange' | 'value' | 'defaultValue' | 'size'> {
  /** Controlled markup value, `\r\n` line breaks are normalized to `\n` @category state */
  value?: string;

  /** Uncontrolled markup value initial state, `\r\n` line breaks are normalized to `\n` @category state */
  defaultValue?: string;

  /** Called on every value change with a rich payload @category state */
  onChange?: (payload: MentionsChangePayload) => void;

  /** `Mentions.Mention` nodes, one per trigger/data source @category appearance */
  children?: React.ReactNode;

  /** If set, renders a single-line `input` instead of a `textarea` @default false @category appearance */
  singleLine?: boolean;

  /** Minimum rows of the underlying control @category appearance */
  minRows?: number;

  /** Maximum rows before the control scrolls @category appearance */
  maxRows?: number;

  /** Anchors the dropdown to the caret position or the input's left edge @default 'caret' @category appearance */
  anchorMode?: 'caret' | 'left';

  /** Dropdown placement relative to the anchor @default 'below' @category appearance */
  suggestionsPlacement?: 'auto' | 'above' | 'below';

  /** Displays suggestions as a dropdown list or as inline ghost text @default 'overlay' @category appearance */
  suggestionsDisplay?: 'overlay' | 'inline';

  /** Called whenever the caret or selection changes (including after edits), with the mentions it overlaps (empty array when none) @category behavior */
  onSelectionChange?: (
    selection: { start: number; end: number },
    mentions: MentionOccurrence[]
  ) => void;

  /** Local filtering of array data, `false` to disable (server-driven) @category behavior */
  filter?: false | MentionsFilter;

  /** Message shown when a query returns no matches @category appearance */
  nothingFoundMessage?: React.ReactNode;

  /** Message shown while an async `data` function is pending @default 'Loading…' @category appearance */
  loadingMessage?: React.ReactNode;

  /** Message shown when an async `data` function rejects, `renderError` of `Mentions.Mention` takes precedence @default 'Failed to load suggestions' @category appearance */
  errorMessage?: React.ReactNode;

  /** Function to customize how mentions are rendered in the overlay, for example to add a tooltip or a `HoverCard`. The returned content must keep the same text metrics as `display` to stay aligned. @category appearance */
  renderMention?: (input: MentionsRenderMentionInput) => React.ReactNode;

  /** Dropdown `max-height` before scroll @default 220 @category appearance */
  maxDropdownHeight?: number | string;

  /** Props passed down to the underlying `Combobox` @category appearance */
  comboboxProps?: ComboboxProps;

  /** Screen-reader label for the suggestions list @default 'Suggestions' @category accessibility */
  a11ySuggestionsListLabel?: string;

  /** `static` disables all interactions @default 'interactive' @category behavior */
  mode?: 'interactive' | 'static';
}

export type MentionsFactory = Factory<{
  props: MentionsProps;
  ref: HTMLTextAreaElement | HTMLInputElement;
  stylesNames: MentionsStylesNames;
  vars: MentionsCssVariables;
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
  loadingMessage: 'Loading…',
  errorMessage: 'Failed to load suggestions',
  a11ySuggestionsListLabel: 'Suggestions',
} satisfies Partial<MentionsProps>;

const varsResolver = createVarsResolver<MentionsFactory>(() => ({
  highlight: {
    '--mentions-highlight-color': undefined,
    '--mentions-highlight-bg': undefined,
  },
}));

function isComposingEvent(event: React.KeyboardEvent) {
  return event.nativeEvent.isComposing || event.keyCode === 229;
}

export const Mentions = factory<MentionsFactory>((_props) => {
  const props = useProps('Mentions', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
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
    loadingMessage,
    errorMessage,
    renderMention,
    maxDropdownHeight,
    comboboxProps,
    a11ySuggestionsListLabel,
    mode,
    size,
    id,
    disabled,
    readOnly,
    required,
    attributes,
    ref,
    name,
    form,
    onKeyDown,
    onBlur,
    onClick,
    onSelect,
    onScroll,
    onCopy,
    onCut,
    onPaste,
    onCompositionStart,
    onCompositionEnd,
    ...others
  } = props;

  const { styleProps, rest } = extractStyleProps(others);
  const { wrapperProps, controlProps } = splitWrapperProps(rest);

  const _id = useId(id);
  const optionIdPrefix = useId();
  const interactive = mode === 'interactive' && !disabled && !readOnly;

  const sources = useMemo(() => resolveSources(children), [children]);
  const configs = useMemo(() => sources.map((source) => source.config), [sources]);

  const controlRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);
  const inlineSuggestionRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(controlRef, ref);

  const [query, setQuery] = useState<ActiveMentionQuery | null>(null);

  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const selectionApi = useMentionsSelection({
    controlRef,
    onSelectionChange,
    onCompositionStart,
    onCompositionEnd,
  });
  const { selection, selectionRef, setCaret, readLiveSelection } = selectionApi;

  const { walk, applyEdit, undo, redo } = useMentionsValue({
    value,
    defaultValue,
    onChange,
    singleLine,
    configs,
    setCaret,
  });
  const { plainText } = walk;
  const selectionStates = getSelectionStates(walk.spans, selection.start, selection.end);
  const segments = buildHighlightSegments(plainText, walk.spans, sources, selectionStates);

  const activeSource = query ? sources[query.sourceIndex] : null;
  const queryState = useMentionsQuery({
    source: activeSource,
    query: query?.query ?? null,
    enabled: interactive,
    filter,
  });
  const suggestions = queryState.items;

  const hasOptions = suggestions.length > 0;
  const shouldOpenDropdown =
    interactive &&
    suggestionsDisplay === 'overlay' &&
    query != null &&
    (queryState.loading ||
      !!queryState.error ||
      hasOptions ||
      !!nothingFoundMessage ||
      !!activeSource?.props.renderEmpty);

  const { selectedOptionId, selectNext, selectPrevious, activeDescendant } = useMentionsDropdown({
    combobox: store,
    shouldOpen: shouldOpenDropdown,
    hasOptions,
    optionsKey: `${query?.sourceIndex}\u0000${query?.query}\u0000${queryState.generation}\u0000${suggestions.map((item) => item.id).join('\u0000')}`,
  });

  const getStyles = useStyles<MentionsFactory>({
    name: 'Mentions',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MentionsFactory>({
    props,
    styles,
    classNames,
  });

  const updateActiveQuery = (nextWalk: MentionWalk, caret: number) => {
    setQuery(interactive ? detectQuery(nextWalk.plainText, caret, sources, nextWalk.spans) : null);
  };

  const commitEdit = (
    nextValue: string,
    caret: number,
    caretBefore: number,
    reason: MentionsChangeReason
  ) => {
    updateActiveQuery(applyEdit(nextValue, caret, caretBefore, reason), caret);
  };

  const syncSelectionAndQuery = (target: HTMLTextAreaElement | HTMLInputElement) => {
    const { start, end } = selectionApi.syncSelection(target, walk);
    if (start === end) {
      updateActiveQuery(walk, start);
    } else {
      setQuery(null);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    const nextPlainText = normalizeNewlines(target.value, singleLine);
    const caretAfter = target.selectionStart ?? nextPlainText.length;
    const before = selectionRef.current;

    const result = applyChangeToValue(
      walk,
      nextPlainText,
      {
        selectionStartBefore: before.start,
        selectionEndBefore: before.end,
        selectionEndAfter: caretAfter,
      },
      configs
    );

    commitEdit(result.value, result.caretPlainTextIndex, before.end, {
      type: getInputChangeType(event.nativeEvent, result.removedMention),
      nativeEvent: event.nativeEvent,
    });
  };

  const handleOptionSubmit = (id: string) => {
    const item = suggestions.find((suggestion) => suggestion.id === id);
    if (!activeSource || !query || !item) {
      return;
    }

    const display = item.display ?? item.id;
    const insertion = insertMention({
      walk,
      config: activeSource.config,
      queryStart: query.queryStart,
      queryEnd: query.queryEnd,
      id: item.id,
      display,
      appendSpace: activeSource.props.appendSpaceOnAdd ?? false,
    });

    applyEdit(insertion.value, insertion.caret, query.queryEnd, { type: 'mention-add' }, item.id);
    setQuery(null);
    activeSource.props.onAdd?.({
      id: item.id,
      display,
      startPos: query.queryStart,
      endPos: query.queryEnd,
    });
  };

  const inline = useMentionsInlineSuggestion({
    enabled: suggestionsDisplay === 'inline',
    query,
    queryState,
    selection,
    plainText,
    onAccept: handleOptionSubmit,
  });

  const clipboardHandlers = useMentionsClipboard({
    walk,
    configs,
    singleLine,
    interactive,
    readLiveSelection,
    commitEdit,
    onCopy,
    onCut,
    onPaste,
  });

  const { caretStyle, handleScroll } = useMentionsOverlayPosition({
    controlRef,
    overlayRefs: [highlighterRef, inlineSuggestionRef],
    anchorMode,
    query,
    singleLine,
    value: walk.value,
  });

  /** Keyboard handling is not delegated to `Combobox.EventsTarget` because arrows and Enter must keep their textarea behavior while the dropdown is closed */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(event);
    readLiveSelection(event.currentTarget);

    if (event.defaultPrevented || !interactive || isComposingEvent(event)) {
      return;
    }

    if (event.metaKey || event.ctrlKey) {
      const key = event.key.toLowerCase();
      if (key === 'z' || key === 'y') {
        const type = key === 'y' || event.shiftKey ? 'redo' : 'undo';
        const entry = type === 'redo' ? redo() : undo();
        if (entry) {
          event.preventDefault();
          commitEdit(entry.value, entry.caret, entry.caret, { type });
        }
        return;
      }
    }

    if (suggestionsDisplay === 'inline') {
      inline.handleInlineKeyDown(event);
      return;
    }

    if (!store.dropdownOpened) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (event.key === 'ArrowDown') {
        selectNext();
      } else {
        selectPrevious();
      }
    } else if (
      (event.key === 'Enter' || (event.key === 'Tab' && !event.shiftKey)) &&
      store.getSelectedOptionIndex() !== -1
    ) {
      event.preventDefault();
      store.clickSelectedOption();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      store.closeDropdown();
      setQuery(null);
    }
  };

  const handleMentionPress = (caret: number) => {
    const control = controlRef.current;
    if (!control) {
      return;
    }

    control.focus();
    control.setSelectionRange(caret, caret);
    syncSelectionAndQuery(control);
  };

  const field = (
    <InputBase
      component="div"
      multiline
      data-no-overflow
      withAria={false}
      __staticSelector="Mentions"
      __stylesApiProps={singleLine ? props : { ...props, multiline: true }}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      className={className}
      style={style}
      size={size}
      id={_id}
      disabled={disabled}
      required={required}
      attributes={attributes}
      {...wrapperProps}
      pointer={wrapperProps.pointer ?? false}
      onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
          controlRef.current?.focus();
        }
      }}
      {...styleProps}
    >
      <div
        className={classes.control}
        data-single-line={singleLine || undefined}
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
          onMentionPress={interactive ? handleMentionPress : undefined}
        />

        <MentionsControl
          form={form}
          aria-invalid={wrapperProps.error ? true : undefined}
          {...controlProps}
          {...getStyles('field')}
          {...clipboardHandlers}
          {...selectionApi.compositionHandlers}
          singleLine={singleLine}
          controlRef={mergedRef}
          value={plainText}
          disabled={disabled}
          required={required}
          readOnly={readOnly || mode === 'static'}
          rows={singleLine ? undefined : (minRows ?? 1)}
          interactive={interactive}
          dropdownOpened={store.dropdownOpened}
          listId={store.getListId()}
          activeDescendant={activeDescendant}
          popupVisible={!!inline.inlineItem}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSelect={(event: React.SyntheticEvent<HTMLTextAreaElement>) => {
            onSelect?.(event);
            if (!selectionApi.isCaretRestorePending()) {
              syncSelectionAndQuery(event.currentTarget);
            }
          }}
          onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => {
            onBlur?.(event);
            setQuery(null);
          }}
          onClick={(event: React.MouseEvent<HTMLTextAreaElement>) => {
            onClick?.(event);
            syncSelectionAndQuery(event.currentTarget);
          }}
          onScroll={(event: React.UIEvent<HTMLTextAreaElement>) => {
            onScroll?.(event);
            handleScroll();
          }}
        />

        {inline.inlineItem && query ? (
          <MentionsInlineSuggestion
            ref={inlineSuggestionRef}
            getStyles={getStyles}
            prefix={plainText.slice(0, query.queryEnd)}
            completion={inline.inlineCompletion}
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
      store={store}
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
      onOptionSubmit={handleOptionSubmit}
      {...comboboxProps}
    >
      {anchorMode === 'caret' ? field : <Combobox.DropdownTarget>{field}</Combobox.DropdownTarget>}

      {name ? (
        <input type="hidden" name={name} form={form} value={walk.value} disabled={disabled} />
      ) : null}

      <MentionsDropdown
        query={suggestionsDisplay === 'overlay' && query ? query.query : null}
        label={a11ySuggestionsListLabel}
        maxHeight={maxDropdownHeight}
        unstyled={unstyled}
        queryState={queryState}
        source={activeSource}
        optionIdPrefix={optionIdPrefix}
        selectedOptionId={selectedOptionId}
        nothingFoundMessage={nothingFoundMessage}
        loadingMessage={loadingMessage}
        errorMessage={errorMessage}
        getStyles={getStyles}
      />
    </Combobox>
  );
});

Mentions.classes = { ...InputBase.classes, ...Combobox.classes, ...classes };
Mentions.varsResolver = varsResolver;
Mentions.displayName = '@mantine/core/Mentions';
Mentions.Mention = Mention;

export namespace Mentions {
  export type Props = MentionsProps;
  export type StylesNames = MentionsStylesNames;
  export type CssVariables = MentionsCssVariables;
  export type Factory = MentionsFactory;

  export namespace Mention {
    export type Props = MentionProps;
  }
}
