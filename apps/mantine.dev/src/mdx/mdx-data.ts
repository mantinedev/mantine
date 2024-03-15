import { Frontmatter } from '@/types';
import { MDX_CHARTS_DATA } from './data/mdx-charts-data';
import { MDX_CORE_DATA } from './data/mdx-core-data';
import { MDX_DATES_DATA } from './data/mdx-dates-data';
import { MDX_FORM_DATA } from './data/mdx-form-data';
import { MDX_GUIDES_DATA } from './data/mdx-guides-data';
import { MDX_HOOKS_DATA } from './data/mdx-hooks-data';
import { MDX_META_DATA } from './data/mdx-meta-data';
import { MDX_OTHERS_DATA } from './data/mdx-others-data';
import { MDX_STYLES_DATA } from './data/mdx-styles-data';
import { MDX_THEMING_DATA } from './data/mdx-theming-data';

export const MDX_DATA: Record<string, Frontmatter> = {
  ...MDX_META_DATA,
  ...MDX_THEMING_DATA,
  ...MDX_STYLES_DATA,
  ...MDX_GUIDES_DATA,
  ...MDX_CORE_DATA,
  ...MDX_HOOKS_DATA,
  ...MDX_OTHERS_DATA,
  ...MDX_FORM_DATA,
  ...MDX_DATES_DATA,
  ...MDX_CHARTS_DATA,
};
