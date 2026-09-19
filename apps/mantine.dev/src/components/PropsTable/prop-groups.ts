export interface PropOriginGroup {
  label: string;
  note: string;
}

export const PROP_ORIGIN_GROUPS: Record<string, PropOriginGroup> = {
  __InputProps: {
    label: 'Input props',
    note: 'Shared by all Input-based components',
  },
  __BaseInputProps: {
    label: 'Input props',
    note: 'Shared by all Input-based components',
  },
  __InputWrapperProps: {
    label: 'Input.Wrapper props',
    note: 'Shared by all Input-based components',
  },
  ComboboxLikeProps: {
    label: 'Combobox props',
    note: 'Shared by all Combobox-based components',
  },
};

export const PROP_ORIGIN_ORDER = ['__InputProps', '__InputWrapperProps', 'ComboboxLikeProps'];

export const PROP_CATEGORIES: Record<string, string> = {
  state: 'State',
  accessibility: 'Accessibility',
  behavior: 'Behavior',
  appearance: 'Appearance',
};

export const PROP_CATEGORY_ORDER = [...Object.keys(PROP_CATEGORIES), 'other'];

export const OTHER_CATEGORY_LABEL = 'Other';
