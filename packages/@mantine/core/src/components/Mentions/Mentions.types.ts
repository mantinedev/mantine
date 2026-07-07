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

  /** Pagination token, always `null` in the current version (reserved for future use) */
  cursor: string | null;

  /** Reason the data function was called, always `'query'` in the current version */
  reason: 'query' | 'page';
}

/** Result returned by a `data` function */
export type MentionResult =
  | MentionItem[]
  | { items: MentionItem[]; nextCursor?: string | null; hasMore?: boolean };

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
export type MentionsChangeTriggerType =
  | 'input'
  | 'paste'
  | 'cut'
  | 'mention-add'
  | 'mention-remove'
  | 'insert-text';

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
  trigger: {
    type: MentionsChangeTriggerType;
    nativeEvent?: Event;
  };
}

/** Normalized configuration of a single `Mentions.Mention`, consumed by the pure utilities */
export interface MentionConfig {
  /** Trigger that opens this source's dropdown */
  trigger: string | RegExp;

  /** Markup template stored in the value */
  markup: string;

  /** Serializer used to store and parse this source's mentions */
  serializer: MentionSerializer;

  /** Transforms the display text of a stored mention */
  displayTransform: MentionDisplayTransform;

  /** If set, the trigger is kept as a prefix in the visible text of a stored mention */
  withTrigger: boolean;
}

/** Public alias used by the `getMentions` helper */
export type MentionConfigInput = MentionConfig;

/** Direction used when mapping a plain-text index that falls inside a mention */
export type MentionMapDirection = 'START' | 'END' | 'NULL';
