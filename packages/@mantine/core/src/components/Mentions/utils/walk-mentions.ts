/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - walkMentions replaces the iterateMentionsMarkup callback: one pass over the value builds the
 *   plain text and a span per mention (markup and plain-text ranges), getPlainText,
 *   findMentionOccurrences, mapPlainTextIndex and mapMarkupIndex derive from these spans instead
 *   of running their own iterateMentionsMarkup callbacks
 * - Each source parses its mentions with its own serializer (template or custom), the matches
 *   of all sources are merged by index and overlapping matches are dropped, instead of one
 *   combined regex over all markup templates
 * - The trigger prefix is part of the plain text only when withTrigger is set
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import type { MentionConfig } from './types';

export interface MentionSpan {
  markupStart: number;
  markupEnd: number;
  sourceIndex: number;
  id: string;
  display: string;
  trigger: string;
  plainStart: number;
  plainEnd: number;
  rendered: string;
}

export interface MentionWalk {
  value: string;
  plainText: string;
  spans: MentionSpan[];
}

interface FoundMention {
  configIndex: number;
  markup: string;
  index: number;
  id: string;
  display: string;
}

function getTriggerText(config: MentionConfig): string {
  return typeof config.trigger === 'string' ? config.trigger : '';
}

export function getMentionPlainText(config: MentionConfig, id: string, display: string): string {
  return (config.withTrigger ? getTriggerText(config) : '') + config.displayTransform(id, display);
}

function findAllMentions(value: string, configs: MentionConfig[]): FoundMention[] {
  const all: FoundMention[] = [];

  configs.forEach((config, configIndex) => {
    for (const match of config.serializer.findAll(value)) {
      if (match.markup.length === 0) {
        continue;
      }

      all.push({
        configIndex,
        markup: match.markup,
        index: match.index,
        id: String(match.id),
        display: match.display == null ? String(match.id) : String(match.display),
      });
    }
  });

  all.sort((a, b) => a.index - b.index);

  const result: FoundMention[] = [];
  let cursor = 0;

  for (const mention of all) {
    if (mention.index >= cursor) {
      result.push(mention);
      cursor = mention.index + mention.markup.length;
    }
  }

  return result;
}

export function walkMentions(value: string, configs: MentionConfig[]): MentionWalk {
  const spans: MentionSpan[] = [];
  let plainText = '';
  let markupCursor = 0;

  for (const mention of findAllMentions(value, configs)) {
    const config = configs[mention.configIndex];
    plainText += value.slice(markupCursor, mention.index);

    const rendered = getMentionPlainText(config, mention.id, mention.display);
    const markupEnd = mention.index + mention.markup.length;

    spans.push({
      markupStart: mention.index,
      markupEnd,
      sourceIndex: mention.configIndex,
      id: mention.id,
      display: mention.display,
      trigger: getTriggerText(config),
      plainStart: plainText.length,
      plainEnd: plainText.length + rendered.length,
      rendered,
    });

    plainText += rendered;
    markupCursor = markupEnd;
  }

  plainText += value.slice(markupCursor);
  return { value, plainText, spans };
}
