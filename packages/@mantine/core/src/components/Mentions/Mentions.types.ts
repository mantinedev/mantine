/** A single suggestion item associated with a `Mentions.Mention` data source */
export interface MentionItem {
  /** Unique identifier of the item, stored in the markup value */
  id: string;

  /** Text displayed to the user, defaults to `id` when not set */
  display?: string;

  /** Any additional data associated with the item */
  [key: string]: any;
}

/** Function that transforms the display text of a stored mention */
export type MentionDisplayTransform = (id: string, display: string) => string;

/** Custom serializer used to store and parse mentions in formats a template string cannot express */
export interface MentionSerializer {
  /** Unique serializer id, usually the markup template it is built from */
  id: string;

  /** Returns the markup string stored in the value for the given item */
  insert: (input: { id: string | number; display: string }) => string;

  /** Finds all mentions produced by this serializer in the given value */
  findAll: (
    value: string
  ) => Array<{ markup: string; index: number; id: string; display?: string | null }>;
}

/** Context passed to an async/sync `data` function */
export interface MentionSearchContext {
  /** Aborted automatically when the request becomes stale */
  signal: AbortSignal;
}

/** Result returned by a `data` function */
export type MentionResult = MentionItem[] | { items: MentionItem[] };

/** Function based on which suggestions are resolved, can be sync or async */
export type MentionDataFn = (
  query: string,
  ctx: MentionSearchContext
) => MentionResult | Promise<MentionResult>;

/** Mention occurrence extracted from a markup value */
export interface MentionOccurrence {
  /** Mention id stored in the value */
  id: string;

  /** Mention display text */
  display: string;

  /** Index of the mention in the markup string */
  index: number;

  /** Index of the mention in the plain-text string */
  plainTextIndex: number;

  /** Trigger of the `Mentions.Mention` that produced the occurrence */
  trigger: string;
}

/** Type of the change that produced a new value */
export type MentionsChangeReasonType =
  | 'input'
  | 'paste'
  | 'cut'
  | 'mention-add'
  | 'mention-remove'
  | 'insert-text'
  | 'undo'
  | 'redo';

/** Information about what caused a value change */
export interface MentionsChangeReason {
  /** Type of the change */
  type: MentionsChangeReasonType;

  /** Native event that caused the change, not set when the change has no DOM event (mention insertion, keyboard undo/redo) */
  nativeEvent?: Event;
}

/** Payload passed to the `Mentions` `onChange` handler */
export interface MentionsChangePayload {
  /** Latest markup value, for example `Hey @[Walter White](walter)` */
  value: string;

  /** Text visible to the user, for example `Hey @Walter White` */
  plainTextValue: string;

  /** Plain text with each display replaced by its id, for example `Hey @walter` */
  idValue: string;

  /** Mentions present in the new value */
  mentions: MentionOccurrence[];

  /** Id of the mention that triggered the change, if any */
  mentionId?: string;

  /** Previous markup value */
  previousValue: string;

  /** Information about what caused the change */
  reason: MentionsChangeReason;
}

/** Caret-aware state of a mention relative to the current selection */
export type MentionSelectionState = 'inside' | 'boundary' | 'partial' | 'full';

/** Input passed to the `Mentions` `renderMention` function */
export interface MentionsRenderMentionInput {
  /** Mention id stored in the value */
  id: string;

  /** Mention display text */
  display: string;

  /** Trigger of the `Mentions.Mention` that produced the mention */
  trigger: string;

  /** Caret-aware state of the mention, `null` when the selection does not touch it */
  selectionState: MentionSelectionState | null;
}

/** Input passed to the `Mentions.Mention` `renderSuggestion` function */
export interface MentionRenderSuggestionInput {
  /** Suggestion item */
  item: MentionItem;

  /** Current query typed after the trigger */
  query: string;

  /** `true` when the option is selected with the keyboard, or is the first option when the dropdown opens */
  highlighted: boolean;

  /** Index of the option in the suggestions list */
  index: number;
}

/** Function that filters the items of a static `data` array for the current query */
export type MentionsFilter = (input: { query: string; items: MentionItem[] }) => MentionItem[];

/** Lightweight source descriptor accepted by the public `getMentions` helper */
export interface MentionSourceConfig {
  /** Trigger that opens this source's dropdown @default '@' */
  trigger?: string | RegExp;

  /** Markup template or serializer @default `${trigger}[__display__](__id__)` */
  markup?: string | MentionSerializer;

  /** Customizes the visible text of a stored mention @default (_, display) => display */
  displayTransform?: MentionDisplayTransform;

  /** If set, the trigger character is kept as a prefix in the visible text of the mention @default false */
  withTrigger?: boolean;
}
