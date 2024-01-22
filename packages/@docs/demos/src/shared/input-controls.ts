import { ConfiguratorControlOptions } from '@mantinex/demo';

export const inputOnlyControls: ConfiguratorControlOptions[] = [
  {
    type: 'segmented',
    prop: 'variant',
    data: ['default', 'filled', 'unstyled'],
    initialValue: 'default',
    libraryValue: 'default',
  },
  { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'boolean', prop: 'disabled', initialValue: false, libraryValue: false },
  { type: 'boolean', prop: 'error', initialValue: false, libraryValue: false },
];

export const inputWrapperOnlyControls: ConfiguratorControlOptions[] = [
  { type: 'string', prop: 'label', initialValue: 'Input label', libraryValue: null },
  { type: 'boolean', prop: 'withAsterisk', initialValue: false, libraryValue: false },
  { type: 'string', prop: 'description', initialValue: 'Input description', libraryValue: null },
  { type: 'string', prop: 'error', initialValue: 'Input error', libraryValue: null },
  { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
];

export const inputControls: ConfiguratorControlOptions[] = [
  {
    type: 'segmented',
    prop: 'variant',
    data: ['default', 'filled', 'unstyled'],
    initialValue: 'default',
    libraryValue: 'default',
  },
  { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'string', prop: 'label', initialValue: 'Input label', libraryValue: '' },
  { type: 'boolean', prop: 'withAsterisk', initialValue: false, libraryValue: false },
  { type: 'string', prop: 'description', initialValue: 'Input description', libraryValue: '' },
  { type: 'string', prop: 'error', initialValue: '', libraryValue: '' },
];
