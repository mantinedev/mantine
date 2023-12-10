import type { InlineStylesMediaQuery } from '../../../InlineStyles';
import type { ParseStylePropsResult } from './parse-style-props';

export interface SortMediaQueriesResult extends Omit<ParseStylePropsResult, 'media'> {
  media: InlineStylesMediaQuery[];
}

function replaceMediaQuery(query: string) {
  return query.replace('(min-width: ', '').replace('em)', '');
}

export function sortMediaQueries({
  media,
  ...props
}: ParseStylePropsResult): SortMediaQueriesResult {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints
    .sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b)))
    .map((query) => ({ query, styles: media[query] }));

  return { ...props, media: sortedMedia };
}
