import type { ContentModel, ReferenceEntry, ReferenceModel } from './types';

export const LANGUAGES = [
  { value: 'en-US', label: 'English (en-US)' },
  { value: 'de-DE', label: 'German (de-DE)' },
  { value: 'fr-FR', label: 'French (fr-FR)' },
  { value: 'es-ES', label: 'Spanish (es-ES)' },
];

export const DEFAULT_LANGUAGE = 'en-US';

export const SUGGESTED_TAGS = ['featured', 'news', 'tutorial', 'release', 'archive'];

export const MAX_TAGS = 10;

export const REFERENCE_MODELS: { value: ReferenceModel; label: string }[] = [
  { value: 'author', label: 'Author' },
  { value: 'category', label: 'Category' },
  { value: 'page', label: 'Page' },
  { value: 'product', label: 'Product' },
];

export const REFERENCE_ENTRIES: ReferenceEntry[] = [
  { key: 'ada-lovelace', title: 'Ada Lovelace', model: 'author' },
  { key: 'grace-hopper', title: 'Grace Hopper', model: 'author' },
  { key: 'alan-turing', title: 'Alan Turing', model: 'author' },
  { key: 'engineering', title: 'Engineering', model: 'category' },
  { key: 'design', title: 'Design', model: 'category' },
  { key: 'product-updates', title: 'Product updates', model: 'category' },
  { key: 'pricing', title: 'Pricing', model: 'page' },
  { key: 'about-us', title: 'About us', model: 'page' },
  { key: 'contact', title: 'Contact', model: 'page' },
  { key: 'starter-plan', title: 'Starter plan', model: 'product' },
  { key: 'team-plan', title: 'Team plan', model: 'product' },
];

export const BLOG_POST_MODEL: ContentModel = {
  name: 'Blog post',
  key: 'blog_post',
  fields: [
    {
      type: 'text',
      key: 'title',
      label: 'Title',
      description: 'Shown as the page heading',
      required: true,
      display: 'input',
      maxLength: 80,
      defaultValue: '',
    },
    {
      type: 'text',
      key: 'excerpt',
      label: 'Excerpt',
      description: 'Short summary for listings',
      required: false,
      display: 'textarea',
      maxLength: 200,
      defaultValue: '',
    },
    {
      type: 'richText',
      key: 'body',
      label: 'Body',
      description: '',
      required: true,
    },
    {
      type: 'select',
      key: 'category',
      label: 'Category',
      description: '',
      required: true,
      options: [
        { value: 'news', label: 'News' },
        { value: 'tutorial', label: 'Tutorial' },
        { value: 'release', label: 'Release notes' },
      ],
      defaultValue: 'news',
    },
    {
      type: 'boolean',
      key: 'featured',
      label: 'Featured',
      description: 'Pin the post to the top of the blog',
      required: false,
      defaultValue: false,
    },
    {
      type: 'reference',
      key: 'author',
      label: 'Author',
      description: '',
      required: true,
      targetModel: 'author',
      multiple: false,
    },
    {
      type: 'reference',
      key: 'related',
      label: 'Related entries',
      description: 'Linked at the end of the post',
      required: false,
      targetModel: null,
      multiple: true,
    },
    {
      type: 'image',
      key: 'cover_image',
      label: 'Cover image',
      description: 'Displayed above the title',
      required: true,
    },
    {
      type: 'file',
      key: 'attachment',
      label: 'Attachment',
      description: '',
      required: false,
    },
    {
      type: 'json',
      key: 'seo',
      label: 'SEO metadata',
      description: '',
      required: false,
      defaultValue: '{"index":true}',
    },
  ],
};

export const LANDING_PAGE_HERO_MODEL: ContentModel = {
  name: 'Landing page hero',
  key: 'landing_page_hero',
  fields: [
    {
      type: 'text',
      key: 'headline',
      label: 'Headline',
      description: '',
      required: true,
      display: 'input',
      maxLength: 60,
      defaultValue: 'Build faster',
    },
    {
      type: 'text',
      key: 'subheadline',
      label: 'Subheadline',
      description: '',
      required: false,
      display: 'textarea',
      maxLength: null,
      defaultValue: '',
    },
    {
      type: 'select',
      key: 'theme',
      label: 'Theme',
      description: '',
      required: true,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
      ],
      defaultValue: 'dark',
    },
    {
      type: 'boolean',
      key: 'show_badge',
      label: 'Show badge',
      description: 'Small "New" badge above the headline',
      required: false,
      defaultValue: true,
    },
    {
      type: 'reference',
      key: 'cta_target',
      label: 'Call to action target',
      description: '',
      required: true,
      targetModel: 'page',
      multiple: false,
    },
    {
      type: 'image',
      key: 'background',
      label: 'Background image',
      description: '',
      required: false,
    },
    {
      type: 'json',
      key: 'animation',
      label: 'Animation settings',
      description: '',
      required: true,
      defaultValue: '{"type":"fade","duration":300}',
    },
  ],
};

export const EXAMPLE_MODELS = [BLOG_POST_MODEL, LANDING_PAGE_HERO_MODEL];
