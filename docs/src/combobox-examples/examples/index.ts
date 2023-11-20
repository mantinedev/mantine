import { BasicSelect } from './BasicSelect/BasicSelect';
import { BasicAutocomplete } from './BasicAutocomplete/BasicAutocomplete';
import { SearchableSelect } from './SearchableSelect/SearchableSelect';
import { AutocompleteLimit } from './AutocompleteLimit/AutocompleteLimit';
import { AsyncAutocomplete } from './AsyncAutocomplete/AsyncAutocomplete';
import { AutocompleteHighlight } from './AutocompleteHighlight/AutocompleteHighlight';
import { SelectActive } from './SelectActive/SelectActive';
import { SelectOptionComponent } from './SelectOptionComponent/SelectOptionComponent';
import { SelectLimit } from './SelectLimit/SelectLimit';
import { SelectAsync } from './SelectAsync/SelectAsync';
import { AutocompleteSelectFirstOption } from './AutocompleteSelectFirstOption/AutocompleteSelectFirstOption';
import { SelectClearable } from './SelectClearable/SelectClearable';
import { DropdownScroll } from './DropdownScroll/DropdownScroll';
import { DropdownScrollArea } from './DropdownScrollArea/DropdownScrollArea';
import { AutocompleteDynamic } from './AutocompleteDynamic/AutocompleteDynamic';
import { DropdownAnimation } from './DropdownAnimation/DropdownAnimation';
import { DropdownPositionStyles } from './DropdownPositionStyles/DropdownPositionStyles';
import { SelectDropdownSearch } from './SelectDropdownSearch/SelectDropdownSearch';
import { BasicButton } from './BasicButton/BasicButton';
import { ButtonSearch } from './ButtonSearch/ButtonSearch';
import { DropdownOptionsAnimation } from './DropdownOptionsAnimation/DropdownOptionsAnimation';
import { SelectOptionOnHover } from './SelectOptionOnHover/SelectOptionOnHover';
import { SelectedStyles } from './SelectedStyles/SelectedStyles';
import { DropdownFooter } from './DropdownFooter/DropdownFooter';
import { DropdownHeader } from './DropdownHeader/DropdownHeader';
import { SelectedAnimation } from './SelectedAnimation/SelectedAnimation';
import { AutocompleteClearable } from './AutocompleteClearable/AutocompleteClearable';
import { BasicMultiSelect } from './BasicMultiSelect/BasicMultiSelect';
import { SearchableMultiSelect } from './SearchableMultiSelect/SearchableMultiSelect';
import { DropdownSmoothScroll } from './DropdownSmoothScroll/DropdownSmoothScroll';
import { ButtonMultiSelect } from './ButtonMultiSelect/ButtonMultiSelect';
import { MaxSelectedItems } from './MaxSelectedItems/MaxSelectedItems';
import { MultiSelectCheckbox } from './MultiSelectCheckbox/MultiSelectCheckbox';
import { ActiveOptionsFilter } from './ActiveOptionsFilter/ActiveOptionsFilter';
import { MaxDisplayedItems } from './MaxDisplayedItems/MaxDisplayedItems';
import { MultiSelectValueRenderer } from './MultiSelectValueRenderer/MultiSelectValueRenderer';
import { SelectGroups } from './SelectGroups/SelectGroups';
import { SelectGroupsSearchable } from './SelectGroupsSearchable/SelectGroupsSearchable';
import { SelectGroupsStyles } from './SelectGroupsStyles/SelectGroupsStyles';
import { SelectCreatable } from './SelectCreatable/SelectCreatable';
import { MultiSelectCreatable } from './MultiSelectCreatable/MultiSelectCreatable';
import { SelectList } from './SelectList/SelectList';
import { TransferList } from './TransferList/TransferList';

import BasicSelectCode from './BasicSelect/code.json';
import BasicAutocompleteCode from './BasicAutocomplete/code.json';
import SearchableSelectCode from './SearchableSelect/code.json';
import AutocompleteLimitCode from './AutocompleteLimit/code.json';
import AsyncAutocompleteCode from './AsyncAutocomplete/code.json';
import AutocompleteHighlightCode from './AutocompleteHighlight/code.json';
import SelectActiveCode from './SelectActive/code.json';
import SelectOptionComponentCode from './SelectOptionComponent/code.json';
import SelectLimitCode from './SelectLimit/code.json';
import SelectAsyncCode from './SelectAsync/code.json';
import AutocompleteSelectFirstOptionCode from './AutocompleteSelectFirstOption/code.json';
import SelectClearableCode from './SelectClearable/code.json';
import DropdownScrollCode from './DropdownScroll/code.json';
import DropdownScrollAreaCode from './DropdownScrollArea/code.json';
import AutocompleteDynamicCode from './AutocompleteDynamic/code.json';
import DropdownAnimationCode from './DropdownAnimation/code.json';
import DropdownPositionStylesCode from './DropdownPositionStyles/code.json';
import SelectDropdownSearchCode from './SelectDropdownSearch/code.json';
import BasicButtonCode from './BasicButton/code.json';
import ButtonSearchCode from './ButtonSearch/code.json';
import DropdownOptionsAnimationCode from './DropdownOptionsAnimation/code.json';
import SelectOptionOnHoverCode from './SelectOptionOnHover/code.json';
import SelectedStylesCode from './SelectedStyles/code.json';
import DropdownFooterCode from './DropdownFooter/code.json';
import DropdownHeaderCode from './DropdownHeader/code.json';
import SelectedAnimationCode from './SelectedAnimation/code.json';
import AutocompleteClearableCode from './AutocompleteClearable/code.json';
import BasicMultiSelectCode from './BasicMultiSelect/code.json';
import SearchableMultiSelectCode from './SearchableMultiSelect/code.json';
import DropdownSmoothScrollCode from './DropdownSmoothScroll/code.json';
import ButtonMultiSelectCode from './ButtonMultiSelect/code.json';
import MaxSelectedItemsCode from './MaxSelectedItems/code.json';
import MultiSelectCheckboxCode from './MultiSelectCheckbox/code.json';
import ActiveOptionsFilterCode from './ActiveOptionsFilter/code.json';
import MaxDisplayedItemsCode from './MaxDisplayedItems/code.json';
import MultiSelectValueRendererCode from './MultiSelectValueRenderer/code.json';
import SelectGroupsCode from './SelectGroups/code.json';
import SelectGroupsSearchableCode from './SelectGroupsSearchable/code.json';
import SelectGroupsStylesCode from './SelectGroupsStyles/code.json';
import SelectCreatableCode from './SelectCreatable/code.json';
import MultiSelectCreatableCode from './MultiSelectCreatable/code.json';
import SelectListCode from './SelectList/code.json';
import TransferListCode from './TransferList/code.json';

interface ComboboxExampleComponent {
  component: () => JSX.Element;
  code: {
    fileName: string;
    language: string;
    code: string;
  }[];
}

export const COMBOBOX_EXAMPLES_COMPONENTS = {
  BasicSelect: {
    component: BasicSelect,
    code: BasicSelectCode,
  },

  SearchableSelect: {
    component: SearchableSelect,
    code: SearchableSelectCode,
  },

  BasicAutocomplete: {
    component: BasicAutocomplete,
    code: BasicAutocompleteCode,
  },

  AutocompleteLimit: {
    component: AutocompleteLimit,
    code: AutocompleteLimitCode,
  },

  AsyncAutocomplete: {
    component: AsyncAutocomplete,
    code: AsyncAutocompleteCode,
  },

  AutocompleteHighlight: {
    component: AutocompleteHighlight,
    code: AutocompleteHighlightCode,
  },

  SelectActive: {
    component: SelectActive,
    code: SelectActiveCode,
  },

  SelectOptionComponent: {
    component: SelectOptionComponent,
    code: SelectOptionComponentCode,
  },

  SelectLimit: {
    component: SelectLimit,
    code: SelectLimitCode,
  },

  SelectAsync: {
    component: SelectAsync,
    code: SelectAsyncCode,
  },

  AutocompleteSelectFirstOption: {
    component: AutocompleteSelectFirstOption,
    code: AutocompleteSelectFirstOptionCode,
  },

  SelectClearable: {
    component: SelectClearable,
    code: SelectClearableCode,
  },

  DropdownScroll: {
    component: DropdownScroll,
    code: DropdownScrollCode,
  },

  DropdownScrollArea: {
    component: DropdownScrollArea,
    code: DropdownScrollAreaCode,
  },

  AutocompleteDynamic: {
    component: AutocompleteDynamic,
    code: AutocompleteDynamicCode,
  },

  DropdownAnimation: {
    component: DropdownAnimation,
    code: DropdownAnimationCode,
  },

  DropdownPositionStyles: {
    component: DropdownPositionStyles,
    code: DropdownPositionStylesCode,
  },

  SelectDropdownSearch: {
    component: SelectDropdownSearch,
    code: SelectDropdownSearchCode,
  },

  BasicButton: {
    component: BasicButton,
    code: BasicButtonCode,
  },

  ButtonSearch: {
    component: ButtonSearch,
    code: ButtonSearchCode,
  },

  DropdownOptionsAnimation: {
    component: DropdownOptionsAnimation,
    code: DropdownOptionsAnimationCode,
  },

  SelectOptionOnHover: {
    component: SelectOptionOnHover,
    code: SelectOptionOnHoverCode,
  },

  SelectedStyles: {
    component: SelectedStyles,
    code: SelectedStylesCode,
  },

  DropdownFooter: {
    component: DropdownFooter,
    code: DropdownFooterCode,
  },

  DropdownHeader: {
    component: DropdownHeader,
    code: DropdownHeaderCode,
  },

  SelectedAnimation: {
    component: SelectedAnimation,
    code: SelectedAnimationCode,
  },

  AutocompleteClearable: {
    component: AutocompleteClearable,
    code: AutocompleteClearableCode,
  },

  BasicMultiSelect: {
    component: BasicMultiSelect,
    code: BasicMultiSelectCode,
  },

  SearchableMultiSelect: {
    component: SearchableMultiSelect,
    code: SearchableMultiSelectCode,
  },

  DropdownSmoothScroll: {
    component: DropdownSmoothScroll,
    code: DropdownSmoothScrollCode,
  },

  ButtonMultiSelect: {
    component: ButtonMultiSelect,
    code: ButtonMultiSelectCode,
  },

  MaxSelectedItems: {
    component: MaxSelectedItems,
    code: MaxSelectedItemsCode,
  },

  MultiSelectCheckbox: {
    component: MultiSelectCheckbox,
    code: MultiSelectCheckboxCode,
  },

  ActiveOptionsFilter: {
    component: ActiveOptionsFilter,
    code: ActiveOptionsFilterCode,
  },

  MaxDisplayedItems: {
    component: MaxDisplayedItems,
    code: MaxDisplayedItemsCode,
  },

  MultiSelectValueRenderer: {
    component: MultiSelectValueRenderer,
    code: MultiSelectValueRendererCode,
  },

  SelectGroups: {
    component: SelectGroups,
    code: SelectGroupsCode,
  },

  SelectGroupsSearchable: {
    component: SelectGroupsSearchable,
    code: SelectGroupsSearchableCode,
  },

  SelectGroupsStyles: {
    component: SelectGroupsStyles,
    code: SelectGroupsStylesCode,
  },

  SelectCreatable: {
    component: SelectCreatable,
    code: SelectCreatableCode,
  },

  MultiSelectCreatable: {
    component: MultiSelectCreatable,
    code: MultiSelectCreatableCode,
  },

  SelectList: {
    component: SelectList,
    code: SelectListCode,
  },

  TransferList: {
    component: TransferList,
    code: TransferListCode,
  },
} satisfies Record<string, ComboboxExampleComponent>;

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
