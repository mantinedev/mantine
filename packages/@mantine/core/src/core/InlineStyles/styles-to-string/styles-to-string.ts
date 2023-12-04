import { cssObjectToString } from '../css-object-to-string/css-object-to-string';

export interface InlineStylesMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStylesInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStylesMediaQuery[];
}

export function stylesToString({ selector, styles, media }: InlineStylesInput) {
  const baseStyles = styles ? cssObjectToString(styles) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);

  return `${baseStyles ? `${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
}
