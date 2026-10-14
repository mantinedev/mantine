import { createSafeContext, GetStylesApi, MantineSize } from '../../core';
import type { ComboboxFactory } from './Combobox';
import type { ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxStore } from './use-combobox/use-combobox';

export interface ComboboxContextValue {
  getStyles: GetStylesApi<ComboboxFactory>;
  store: ComboboxStore;
  onOptionSubmit?: (value: string, optionProps: ComboboxOptionProps) => void;
  size: MantineSize | (string & {});
  resetSelectionOnOptionHover: boolean | undefined;
  readOnly: boolean | undefined;
  floatingHeight: 'viewport' | undefined;
  /** Id of the mounted `Combobox.Options` listbox, `null` when it is not mounted */
  listId: string | null;

  /** Internal: used by `Combobox.Options` to register its id */
  setListId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const [ComboboxProvider, useComboboxContext] = createSafeContext<ComboboxContextValue>(
  'Combobox component was not found in tree'
);
