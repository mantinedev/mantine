import type { MentionSerializer } from '../Mentions.types';
import { escapeRegex } from './escape-regex';

export const DEFAULT_MENTION_MARKUP = '@[__display__](__id__)';

const DISPLAY_PLACEHOLDER = '__display__';
const ID_PLACEHOLDER = '__id__';

interface CompiledMarkup {
  source: string;
  displayGroup: number;
  idGroup: number;
}

function compileMarkup(markup: string): CompiledMarkup {
  const displayIndex = markup.indexOf(DISPLAY_PLACEHOLDER);
  const idIndex = markup.indexOf(ID_PLACEHOLDER);

  const source = escapeRegex(markup)
    .replace(DISPLAY_PLACEHOLDER, '([\\s\\S]+?)')
    .replace(ID_PLACEHOLDER, '([\\s\\S]+?)');

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

    insert: ({ id, display }) =>
      template.replace(ID_PLACEHOLDER, String(id)).replace(DISPLAY_PLACEHOLDER, display),

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
