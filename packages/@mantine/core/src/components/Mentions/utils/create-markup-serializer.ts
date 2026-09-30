/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - Combines markupToRegex, makeMentionsMarkup and the placeholder index helpers into one
 *   serializer object (insert + findAll) per markup template
 * - insert replaces both placeholders in one pass with a function replacer, so $ patterns
 *   and placeholder names in an id or display are inserted literally
 * - Placeholders match any character except a newline ([^\n]+?), so an unclosed opening
 *   delimiter cannot capture a mention on a later line
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import { MentionSerializer } from '../Mentions.types';
import { escapeRegex } from './escape-regex';

export const DEFAULT_MENTION_MARKUP = '@[__display__](__id__)';

const DISPLAY_PLACEHOLDER = '__display__';
const ID_PLACEHOLDER = '__id__';
const PLACEHOLDERS_REGEX = /__id__|__display__/g;

interface CompiledMarkup {
  source: string;
  displayGroup: number;
  idGroup: number;
}

function compileMarkup(markup: string): CompiledMarkup {
  const displayIndex = markup.indexOf(DISPLAY_PLACEHOLDER);
  const idIndex = markup.indexOf(ID_PLACEHOLDER);

  const source = escapeRegex(markup)
    .replace(DISPLAY_PLACEHOLDER, '([^\\n]+?)')
    .replace(ID_PLACEHOLDER, '([^\\n]+?)');

  const hasDisplay = displayIndex !== -1;
  const hasId = idIndex !== -1;

  let displayGroup = -1;
  let idGroup = -1;

  if (hasDisplay && hasId) {
    if (displayIndex < idIndex) {
      displayGroup = 1;
      idGroup = 2;
    } else {
      idGroup = 1;
      displayGroup = 2;
    }
  } else if (hasDisplay) {
    displayGroup = 1;
  } else if (hasId) {
    idGroup = 1;
  }

  return { source, displayGroup, idGroup };
}

/** Builds a `MentionSerializer` from a template string, for example `@[__display__](__id__)` */
export function createMarkupSerializer(template: string): MentionSerializer {
  const { source, displayGroup, idGroup } = compileMarkup(template);

  return {
    id: template,

    insert: ({ id, display }) => {
      const replaced = new Set<string>();
      return template.replace(PLACEHOLDERS_REGEX, (placeholder) => {
        if (replaced.has(placeholder)) {
          return placeholder;
        }
        replaced.add(placeholder);
        return placeholder === ID_PLACEHOLDER ? String(id) : display;
      });
    },

    findAll: (value) => {
      const regex = new RegExp(source, 'g');
      const result: Array<{ markup: string; index: number; id: string; display?: string | null }> =
        [];

      for (const match of value.matchAll(regex)) {
        const id = idGroup !== -1 ? match[idGroup] : displayGroup !== -1 ? match[displayGroup] : '';
        const display = displayGroup !== -1 ? match[displayGroup] : id;
        result.push({ markup: match[0], index: match.index ?? 0, id, display });
      }

      return result;
    },
  };
}
