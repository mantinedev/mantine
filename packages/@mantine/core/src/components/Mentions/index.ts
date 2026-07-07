export { Mentions } from './Mentions';
export type { MentionsProps, MentionsFactory, MentionsStylesNames } from './Mentions';

export { Mention } from './Mention';
export type { MentionProps, MentionRenderSuggestionInput } from './Mention';
export type { MentionsRenderMentionInput } from './MentionsHighlighter';

export { getMentions } from './get-mentions-public';
export { createMarkupSerializer, DEFAULT_MENTION_MARKUP } from './utils/create-markup-serializer';
export { makeTriggerRegex } from './utils/make-trigger-regex';
export type { MakeTriggerRegexOptions } from './utils/make-trigger-regex';

export type { MentionSourceConfig } from './resolve-sources';
export type { MentionsFilter } from './use-mentions-query';

export type {
  MentionItem,
  MentionConfig,
  MentionDataFn,
  MentionDisplayTransform,
  MentionOccurrence,
  MentionResult,
  MentionSearchContext,
  MentionSerializer,
  MentionsChangePayload,
  MentionsChangeTriggerType,
} from './Mentions.types';
