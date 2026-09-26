import { GetStylesApi } from '../../core';
import type { MentionsFactory } from './Mentions';

export interface MentionsInlineSuggestionProps {
  getStyles: GetStylesApi<MentionsFactory>;
  prefix: string;
  completion: string;
}

/**
 * Ghost-text inline suggestion rendered when `suggestionsDisplay="inline"`. It is a full overlay that
 * mirrors the highlighter box (same font, padding and wrapping) so the transparent prefix positions
 * the muted completion exactly at the caret without any pixel measurement.
 */
export function MentionsInlineSuggestion({
  getStyles,
  prefix,
  completion,
}: MentionsInlineSuggestionProps) {
  return (
    <div {...getStyles('inlineSuggestion')} aria-hidden>
      <span {...getStyles('inlineSuggestionPrefix')}>{prefix}</span>
      <span {...getStyles('inlineSuggestionText')}>{completion}</span>
    </div>
  );
}

MentionsInlineSuggestion.displayName = '@mantine/core/MentionsInlineSuggestion';
