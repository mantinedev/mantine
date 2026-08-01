import type {
  MentionDataFn,
  MentionDisplayTransform,
  MentionItem,
  MentionSerializer,
} from './Mentions.types';

export interface MentionRenderSuggestionInput {
  item: MentionItem;
  query: string;
  highlighted: boolean;
  index: number;
  focused: boolean;
}

export interface MentionProps {
  /** Character(s) or pattern that opens this source's dropdown @default '@' */
  trigger?: string | RegExp;

  /** Static array of suggestions or a sync/async function that returns matches */
  data?: MentionItem[] | MentionDataFn;

  /** Template controlling how this mention is stored in the value, or a full serializer @default '@[__display__](__id__)' */
  markup?: string | MentionSerializer;

  /** Customizes the visible text of a stored mention @default (_, display) => display */
  displayTransform?: MentionDisplayTransform;

  /** If set, the trigger character is kept as a prefix in the visible text of the mention @default false */
  withTrigger?: boolean;

  /** Custom function to render a suggestion row */
  renderSuggestion?: (input: MentionRenderSuggestionInput) => React.ReactNode;

  /** Custom empty state for this source */
  renderEmpty?: (query: string) => React.ReactNode;

  /** Custom error state when an async `data` function rejects */
  renderError?: (query: string, error: unknown) => React.ReactNode;

  /** Called when a suggestion from this source is inserted */
  onAdd?: (item: { id: string; display: string; startPos: number; endPos: number }) => void;

  /** If set, a space is appended after inserting a mention @default false */
  appendSpaceOnAdd?: boolean;

  /** Debounce async `data` calls, in milliseconds @default 0 */
  debounceMs?: number;

  /** Maximum number of suggestions rendered from array results */
  maxSuggestions?: number;

  /** If set, the query is allowed to contain whitespace @default false */
  allowSpaceInQuery?: boolean;

  /** If set, accents are ignored when the query is matched against array data @default false */
  ignoreAccents?: boolean;

  /** Class name applied to this source's mentions in the overlay */
  className?: string;

  /** Styles applied to this source's mentions in the overlay */
  style?: React.CSSProperties;
}

/**
 * Declares a single mention data source. Renders nothing on its own – the parent `Mentions`
 * component reads its props to configure a trigger, its data and how its mentions are serialized.
 */
export function Mention(_props: MentionProps): React.ReactElement | null {
  return null;
}

Mention.displayName = '@mantine/core/Mentions.Mention';
