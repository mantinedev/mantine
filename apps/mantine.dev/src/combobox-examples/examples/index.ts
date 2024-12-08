import { ShikiLanguage } from '@mantinex/shiki';
import { ActiveOptionsFilter } from './ActiveOptionsFilter/ActiveOptionsFilter';
import ActiveOptionsFilterCode from './ActiveOptionsFilter/code.json';
import { AsyncAutocomplete } from './AsyncAutocomplete/AsyncAutocomplete';
import AsyncAutocompleteCode from './AsyncAutocomplete/code.json';
import { AutocompleteClearable } from './AutocompleteClearable/AutocompleteClearable';
import AutocompleteClearableCode from './AutocompleteClearable/code.json';
import { AutocompleteDynamic } from './AutocompleteDynamic/AutocompleteDynamic';
import AutocompleteDynamicCode from './AutocompleteDynamic/code.json';
import { AutocompleteHighlight } from './AutocompleteHighlight/AutocompleteHighlight';
import AutocompleteHighlightCode from './AutocompleteHighlight/code.json';
import { AutocompleteLimit } from './AutocompleteLimit/AutocompleteLimit';
import AutocompleteLimitCode from './AutocompleteLimit/code.json';
import { AutocompleteSelectFirstOption } from './AutocompleteSelectFirstOption/AutocompleteSelectFirstOption';
import AutocompleteSelectFirstOptionCode from './AutocompleteSelectFirstOption/code.json';
import { BasicAutocomplete } from './BasicAutocomplete/BasicAutocomplete';
import BasicAutocompleteCode from './BasicAutocomplete/code.json';
import { BasicButton } from './BasicButton/BasicButton';
import BasicButtonCode from './BasicButton/code.json';
import { BasicMultiSelect } from './BasicMultiSelect/BasicMultiSelect';
import BasicMultiSelectCode from './BasicMultiSelect/code.json';
import { BasicSelect } from './BasicSelect/BasicSelect';
import BasicSelectCode from './BasicSelect/code.json';
import { ButtonMultiSelect } from './ButtonMultiSelect/ButtonMultiSelect';
import ButtonMultiSelectCode from './ButtonMultiSelect/code.json';
import { ButtonSearch } from './ButtonSearch/ButtonSearch';
import ButtonSearchCode from './ButtonSearch/code.json';
import DropdownAnimationCode from './DropdownAnimation/code.json';
import { DropdownAnimation } from './DropdownAnimation/DropdownAnimation';
import DropdownFooterCode from './DropdownFooter/code.json';
import { DropdownFooter } from './DropdownFooter/DropdownFooter';
import DropdownHeaderCode from './DropdownHeader/code.json';
import { DropdownHeader } from './DropdownHeader/DropdownHeader';
import DropdownOptionsAnimationCode from './DropdownOptionsAnimation/code.json';
import { DropdownOptionsAnimation } from './DropdownOptionsAnimation/DropdownOptionsAnimation';
import DropdownPositionStylesCode from './DropdownPositionStyles/code.json';
import { DropdownPositionStyles } from './DropdownPositionStyles/DropdownPositionStyles';
import DropdownScrollCode from './DropdownScroll/code.json';
import { DropdownScroll } from './DropdownScroll/DropdownScroll';
import DropdownScrollAreaCode from './DropdownScrollArea/code.json';
import { DropdownScrollArea } from './DropdownScrollArea/DropdownScrollArea';
import DropdownSmoothScrollCode from './DropdownSmoothScroll/code.json';
import { DropdownSmoothScroll } from './DropdownSmoothScroll/DropdownSmoothScroll';
import MaxDisplayedItemsCode from './MaxDisplayedItems/code.json';
import { MaxDisplayedItems } from './MaxDisplayedItems/MaxDisplayedItems';
import MaxSelectedItemsCode from './MaxSelectedItems/code.json';
import { MaxSelectedItems } from './MaxSelectedItems/MaxSelectedItems';
import MultiSelectCheckboxCode from './MultiSelectCheckbox/code.json';
import { MultiSelectCheckbox } from './MultiSelectCheckbox/MultiSelectCheckbox';
import MultiSelectCreatableCode from './MultiSelectCreatable/code.json';
import { MultiSelectCreatable } from './MultiSelectCreatable/MultiSelectCreatable';
import MultiSelectValueRendererCode from './MultiSelectValueRenderer/code.json';
import { MultiSelectValueRenderer } from './MultiSelectValueRenderer/MultiSelectValueRenderer';
import SearchableMultiSelectCode from './SearchableMultiSelect/code.json';
import { SearchableMultiSelect } from './SearchableMultiSelect/SearchableMultiSelect';
import SearchableSelectCode from './SearchableSelect/code.json';
import { SearchableSelect } from './SearchableSelect/SearchableSelect';
import SelectActiveCode from './SelectActive/code.json';
import { SelectActive } from './SelectActive/SelectActive';
import SelectAsyncCode from './SelectAsync/code.json';
import { SelectAsync } from './SelectAsync/SelectAsync';
import SelectClearableCode from './SelectClearable/code.json';
import { SelectClearable } from './SelectClearable/SelectClearable';
import SelectCreatableCode from './SelectCreatable/code.json';
import { SelectCreatable } from './SelectCreatable/SelectCreatable';
import SelectDropdownSearchCode from './SelectDropdownSearch/code.json';
import { SelectDropdownSearch } from './SelectDropdownSearch/SelectDropdownSearch';
import SelectedAnimationCode from './SelectedAnimation/code.json';
import { SelectedAnimation } from './SelectedAnimation/SelectedAnimation';
import SelectedStylesCode from './SelectedStyles/code.json';
import { SelectedStyles } from './SelectedStyles/SelectedStyles';
import SelectGroupsCode from './SelectGroups/code.json';
import { SelectGroups } from './SelectGroups/SelectGroups';
import SelectGroupsSearchableCode from './SelectGroupsSearchable/code.json';
import { SelectGroupsSearchable } from './SelectGroupsSearchable/SelectGroupsSearchable';
import SelectGroupsStylesCode from './SelectGroupsStyles/code.json';
import { SelectGroupsStyles } from './SelectGroupsStyles/SelectGroupsStyles';
import SelectLimitCode from './SelectLimit/code.json';
import { SelectLimit } from './SelectLimit/SelectLimit';
import SelectListCode from './SelectList/code.json';
import { SelectList } from './SelectList/SelectList';
import SelectOptionComponentCode from './SelectOptionComponent/code.json';
import { SelectOptionComponent } from './SelectOptionComponent/SelectOptionComponent';
import SelectOptionOnHoverCode from './SelectOptionOnHover/code.json';
import { SelectOptionOnHover } from './SelectOptionOnHover/SelectOptionOnHover';
import TransferListCode from './TransferList/code.json';
import { TransferList } from './TransferList/TransferList';

interface ComboboxExampleComponent {
  component: () => React.JSX.Element;
  code: {
    fileName: string;
    language: ShikiLanguage;
    code: string;
  }[];
}

export const COMBOBOX_EXAMPLES_COMPONENTS: Record<string, ComboboxExampleComponent> = {
  BasicSelect: {
    component: BasicSelect,
    code: BasicSelectCode as ComboboxExampleComponent['code'],
  },

  SearchableSelect: {
    component: SearchableSelect,
    code: SearchableSelectCode as ComboboxExampleComponent['code'],
  },

  BasicAutocomplete: {
    component: BasicAutocomplete,
    code: BasicAutocompleteCode as ComboboxExampleComponent['code'],
  },

  AutocompleteLimit: {
    component: AutocompleteLimit,
    code: AutocompleteLimitCode as ComboboxExampleComponent['code'],
  },

  AsyncAutocomplete: {
    component: AsyncAutocomplete,
    code: AsyncAutocompleteCode as ComboboxExampleComponent['code'],
  },

  AutocompleteHighlight: {
    component: AutocompleteHighlight,
    code: AutocompleteHighlightCode as ComboboxExampleComponent['code'],
  },

  SelectActive: {
    component: SelectActive,
    code: SelectActiveCode as ComboboxExampleComponent['code'],
  },

  SelectOptionComponent: {
    component: SelectOptionComponent,
    code: SelectOptionComponentCode as ComboboxExampleComponent['code'],
  },

  SelectLimit: {
    component: SelectLimit,
    code: SelectLimitCode as ComboboxExampleComponent['code'],
  },

  SelectAsync: {
    component: SelectAsync,
    code: SelectAsyncCode as ComboboxExampleComponent['code'],
  },

  AutocompleteSelectFirstOption: {
    component: AutocompleteSelectFirstOption,
    code: AutocompleteSelectFirstOptionCode as ComboboxExampleComponent['code'],
  },

  SelectClearable: {
    component: SelectClearable,
    code: SelectClearableCode as ComboboxExampleComponent['code'],
  },

  DropdownScroll: {
    component: DropdownScroll,
    code: DropdownScrollCode as ComboboxExampleComponent['code'],
  },

  DropdownScrollArea: {
    component: DropdownScrollArea,
    code: DropdownScrollAreaCode as ComboboxExampleComponent['code'],
  },

  AutocompleteDynamic: {
    component: AutocompleteDynamic,
    code: AutocompleteDynamicCode as ComboboxExampleComponent['code'],
  },

  DropdownAnimation: {
    component: DropdownAnimation,
    code: DropdownAnimationCode as ComboboxExampleComponent['code'],
  },

  DropdownPositionStyles: {
    component: DropdownPositionStyles,
    code: DropdownPositionStylesCode as ComboboxExampleComponent['code'],
  },

  SelectDropdownSearch: {
    component: SelectDropdownSearch,
    code: SelectDropdownSearchCode as ComboboxExampleComponent['code'],
  },

  BasicButton: {
    component: BasicButton,
    code: BasicButtonCode as ComboboxExampleComponent['code'],
  },

  ButtonSearch: {
    component: ButtonSearch,
    code: ButtonSearchCode as ComboboxExampleComponent['code'],
  },

  DropdownOptionsAnimation: {
    component: DropdownOptionsAnimation,
    code: DropdownOptionsAnimationCode as ComboboxExampleComponent['code'],
  },

  SelectOptionOnHover: {
    component: SelectOptionOnHover,
    code: SelectOptionOnHoverCode as ComboboxExampleComponent['code'],
  },

  SelectedStyles: {
    component: SelectedStyles,
    code: SelectedStylesCode as ComboboxExampleComponent['code'],
  },

  DropdownFooter: {
    component: DropdownFooter,
    code: DropdownFooterCode as ComboboxExampleComponent['code'],
  },

  DropdownHeader: {
    component: DropdownHeader,
    code: DropdownHeaderCode as ComboboxExampleComponent['code'],
  },

  SelectedAnimation: {
    component: SelectedAnimation,
    code: SelectedAnimationCode as ComboboxExampleComponent['code'],
  },

  AutocompleteClearable: {
    component: AutocompleteClearable,
    code: AutocompleteClearableCode as ComboboxExampleComponent['code'],
  },

  BasicMultiSelect: {
    component: BasicMultiSelect,
    code: BasicMultiSelectCode as ComboboxExampleComponent['code'],
  },

  SearchableMultiSelect: {
    component: SearchableMultiSelect,
    code: SearchableMultiSelectCode as ComboboxExampleComponent['code'],
  },

  DropdownSmoothScroll: {
    component: DropdownSmoothScroll,
    code: DropdownSmoothScrollCode as ComboboxExampleComponent['code'],
  },

  ButtonMultiSelect: {
    component: ButtonMultiSelect,
    code: ButtonMultiSelectCode as ComboboxExampleComponent['code'],
  },

  MaxSelectedItems: {
    component: MaxSelectedItems,
    code: MaxSelectedItemsCode as ComboboxExampleComponent['code'],
  },

  MultiSelectCheckbox: {
    component: MultiSelectCheckbox,
    code: MultiSelectCheckboxCode as ComboboxExampleComponent['code'],
  },

  ActiveOptionsFilter: {
    component: ActiveOptionsFilter,
    code: ActiveOptionsFilterCode as ComboboxExampleComponent['code'],
  },

  MaxDisplayedItems: {
    component: MaxDisplayedItems,
    code: MaxDisplayedItemsCode as ComboboxExampleComponent['code'],
  },

  MultiSelectValueRenderer: {
    component: MultiSelectValueRenderer,
    code: MultiSelectValueRendererCode as ComboboxExampleComponent['code'],
  },

  SelectGroups: {
    component: SelectGroups,
    code: SelectGroupsCode as ComboboxExampleComponent['code'],
  },

  SelectGroupsSearchable: {
    component: SelectGroupsSearchable,
    code: SelectGroupsSearchableCode as ComboboxExampleComponent['code'],
  },

  SelectGroupsStyles: {
    component: SelectGroupsStyles,
    code: SelectGroupsStylesCode as ComboboxExampleComponent['code'],
  },

  SelectCreatable: {
    component: SelectCreatable,
    code: SelectCreatableCode as ComboboxExampleComponent['code'],
  },

  MultiSelectCreatable: {
    component: MultiSelectCreatable,
    code: MultiSelectCreatableCode as ComboboxExampleComponent['code'],
  },

  SelectList: {
    component: SelectList,
    code: SelectListCode as ComboboxExampleComponent['code'],
  },

  TransferList: {
    component: TransferList,
    code: TransferListCode as ComboboxExampleComponent['code'],
  },
};

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
