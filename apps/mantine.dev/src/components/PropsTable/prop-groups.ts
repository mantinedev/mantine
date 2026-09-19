export interface PropOriginGroup {
  label: string;
  note: string;

  /** Component that declares the origin; its own page renders flat and unlabelled */
  component?: string;
}

export const PROP_ORIGIN_GROUPS: Record<string, PropOriginGroup> = {
  __InputProps: {
    label: 'Input props',
    note: 'Shared by all Input-based components',
    component: 'Input',
  },
  __BaseInputProps: {
    label: 'Input props',
    note: 'Shared by all Input-based components',
    component: 'Input',
  },
  __InputWrapperProps: {
    label: 'Input.Wrapper props',
    note: 'Shared by all Input-based components',
    component: 'InputWrapper',
  },
  ComboboxLikeProps: {
    label: 'Combobox props',
    note: 'Shared by all Combobox-based components',
  },
  __PopoverProps: {
    label: 'Popover props',
    note: 'Shared by all Popover-based components',
    component: 'Popover',
  },
};

export const PROP_ORIGIN_ORDER = [
  '__InputProps',
  '__InputWrapperProps',
  'ComboboxLikeProps',
  '__PopoverProps',
];

export const PROP_CATEGORIES: Record<string, string> = {
  state: 'State',
  accessibility: 'Accessibility',
  behavior: 'Behavior',
  appearance: 'Appearance',
};

export const PROP_CATEGORY_ORDER = [...Object.keys(PROP_CATEGORIES), 'other'];

export const OTHER_CATEGORY_LABEL = 'Other';
