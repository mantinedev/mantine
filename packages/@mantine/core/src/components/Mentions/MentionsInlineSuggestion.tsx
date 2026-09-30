import { GetStylesApi } from '../../core';
import type { MentionsFactory } from './Mentions';

export interface MentionsInlineSuggestionProps {
  getStyles: GetStylesApi<MentionsFactory>;
  prefix: string;
  completion: string;
  ref?: React.Ref<HTMLDivElement>;
}

export function MentionsInlineSuggestion({
  getStyles,
  prefix,
  completion,
  ref,
}: MentionsInlineSuggestionProps) {
  return (
    <div ref={ref} {...getStyles('inlineSuggestion')} aria-hidden>
      <span {...getStyles('inlineSuggestionPrefix')}>{prefix}</span>
      <span {...getStyles('inlineSuggestionText')}>{completion}</span>
    </div>
  );
}

MentionsInlineSuggestion.displayName = '@mantine/core/MentionsInlineSuggestion';
