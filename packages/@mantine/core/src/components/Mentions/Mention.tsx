import {
  MentionDataFn,
  MentionDisplayTransform,
  MentionItem,
  MentionRenderSuggestionInput,
  MentionSerializer,
} from './Mentions.types';

export interface MentionProps {
  /** Character(s) or pattern that opens this source's dropdown. A `RegExp` with fewer than two capture groups matches the trigger itself (for example `/[@#]/`) and the query is everything after it up to a whitespace. A `RegExp` with two or more capture groups is used as is: it must be anchored to the end of the text (`$`), group 1 must capture the trigger and the query, group 2 the query @default '@' @category behavior */
  trigger?: string | RegExp;

  /** Static array of suggestions or a sync/async function that returns matches @category appearance */
  data?: MentionItem[] | MentionDataFn;

  /** Template controlling how this mention is stored in the value, or a full serializer @default `${trigger}[__display__](__id__)` @category state */
  markup?: string | MentionSerializer;

  /** Customizes the visible text of a stored mention @default (_, display) => display @category appearance */
  displayTransform?: MentionDisplayTransform;

  /** If set, the trigger character is kept as a prefix in the visible text of the mention @default false @category appearance */
  withTrigger?: boolean;

  /** Custom function to render a suggestion row @category appearance */
  renderSuggestion?: (input: MentionRenderSuggestionInput) => React.ReactNode;

  /** Custom empty state for this source @category appearance */
  renderEmpty?: (query: string) => React.ReactNode;

  /** Custom error state when an async `data` function rejects @category appearance */
  renderError?: (query: string, error: unknown) => React.ReactNode;

  /** Called when a suggestion from this source is inserted, `startPos` and `endPos` are plain-text indices of the replaced trigger and query @category behavior */
  onAdd?: (item: { id: string; display: string; startPos: number; endPos: number }) => void;

  /** If set, a space is appended after inserting a mention @default false @category behavior */
  appendSpaceOnAdd?: boolean;

  /** Debounce async `data` calls, in milliseconds @default 0 @category behavior */
  debounceMs?: number;

  /** Maximum number of suggestions rendered from array results @category appearance */
  maxSuggestions?: number;

  /** If set, the query is allowed to contain whitespace @default false @category behavior */
  allowSpaceInQuery?: boolean;

  /** If set, accents are ignored when the query is matched against array data @default false @category behavior */
  ignoreAccents?: boolean;

  /** Class name applied to this source's mentions in the overlay */
  className?: string;

  /** Styles applied to this source's mentions in the overlay */
  style?: React.CSSProperties;
}

/**
 * Configuration component that declares a single mention data source. It renders nothing – the parent
 * `Mentions` component reads its props to configure a trigger, its data and how its mentions are
 * serialized. It is not created with `factory`, so theme `defaultProps` and Styles API do not apply to it.
 */
export function Mention(_props: MentionProps): React.ReactElement | null {
  return null;
}

Mention.displayName = '@mantine/core/Mentions.Mention';
