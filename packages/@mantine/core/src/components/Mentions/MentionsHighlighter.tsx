import { Fragment } from 'react';
import { GetStylesApi } from '../../core';
import type { MentionsFactory } from './Mentions';

export type MentionSelectionState = 'inside' | 'boundary' | 'partial' | 'full';

export interface HighlightTextSegment {
  type: 'text';
  text: string;
}

export interface HighlightMentionSegment {
  type: 'mention';
  text: string;
  key: string;
  id: string;
  display: string;
  trigger: string;
  className?: string;
  style?: React.CSSProperties;
  selectionState: MentionSelectionState | null;
}

export type HighlightSegment = HighlightTextSegment | HighlightMentionSegment;

export interface MentionsRenderMentionInput {
  id: string;
  display: string;
  trigger: string;
  selectionState: MentionSelectionState | null;
}

export interface MentionsHighlighterProps {
  segments: HighlightSegment[];
  getStyles: GetStylesApi<MentionsFactory>;
  trailingNewline: boolean;
  renderMention?: (input: MentionsRenderMentionInput) => React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export function MentionsHighlighter({
  segments,
  getStyles,
  trailingNewline,
  renderMention,
  ref,
}: MentionsHighlighterProps) {
  return (
    <div
      ref={ref}
      {...getStyles('highlighter')}
      data-interactive={!!renderMention || undefined}
      aria-hidden
    >
      {segments.map((segment, index) => {
        if (segment.type === 'text') {
          return <Fragment key={index}>{segment.text}</Fragment>;
        }

        return (
          <span
            key={segment.key}
            {...getStyles('highlight', {
              className: segment.className,
              style: segment.style,
            })}
            data-trigger={segment.trigger}
            data-mention-selection={segment.selectionState ?? undefined}
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
        );
      })}
      {trailingNewline ? ' ' : null}
    </div>
  );
}

MentionsHighlighter.displayName = '@mantine/core/MentionsHighlighter';
