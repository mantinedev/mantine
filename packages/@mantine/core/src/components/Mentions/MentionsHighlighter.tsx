import { Fragment } from 'react';
import { GetStylesApi } from '../../core';
import { HighlightMentionSegment, HighlightSegment } from './highlight-segments';
import type { MentionsFactory } from './Mentions';
import type { MentionsRenderMentionInput } from './Mentions.types';

const INTERACTIVE_SELECTOR =
  'a[href], button, input, select, textarea, label, [tabindex], [contenteditable=""], [contenteditable="true"], [role="button"], [role="link"]';

export interface MentionsHighlighterProps {
  segments: HighlightSegment[];
  getStyles: GetStylesApi<MentionsFactory>;
  trailingNewline: boolean;
  renderMention?: (input: MentionsRenderMentionInput) => React.ReactNode;
  onMentionPress?: (caret: number) => void;
  ref?: React.Ref<HTMLDivElement>;
}

function handleMentionMouseDown(
  event: React.MouseEvent<HTMLSpanElement>,
  segment: HighlightMentionSegment,
  onMentionPress: (caret: number) => void
) {
  const interactiveTarget = (event.target as HTMLElement).closest(INTERACTIVE_SELECTOR);
  if (interactiveTarget && event.currentTarget.contains(interactiveTarget)) {
    return;
  }

  event.preventDefault();
  const rect = event.currentTarget.getBoundingClientRect();
  onMentionPress(
    event.clientX < rect.left + rect.width / 2 ? segment.plainStart : segment.plainEnd
  );
}

export function MentionsHighlighter({
  segments,
  getStyles,
  trailingNewline,
  renderMention,
  onMentionPress,
  ref,
}: MentionsHighlighterProps) {
  return (
    <div
      ref={ref}
      {...getStyles('highlighter')}
      data-interactive={(!!renderMention && !!onMentionPress) || undefined}
      aria-hidden="true"
    >
      {segments.map((segment, index) =>
        segment.type === 'text' ? (
          <Fragment key={`text-${index}`}>{segment.text}</Fragment>
        ) : (
          <span
            key={`mention-${segment.key}`}
            {...getStyles('highlight', {
              className: segment.className,
              style: segment.style,
            })}
            role="presentation"
            data-trigger={segment.trigger}
            data-mention-selection={segment.selectionState ?? undefined}
            onMouseDown={
              renderMention && onMentionPress
                ? (event) => handleMentionMouseDown(event, segment, onMentionPress)
                : undefined
            }
          >
            {renderMention
              ? renderMention({
                  id: segment.id,
                  display: segment.display,
                  trigger: segment.trigger,
                  selectionState: segment.selectionState,
                })
              : segment.text}
          </span>
        )
      )}
      {trailingNewline ? ' ' : null}
    </div>
  );
}

MentionsHighlighter.displayName = '@mantine/core/MentionsHighlighter';
