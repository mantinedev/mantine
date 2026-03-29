import type {
  DataListCssVariables,
  DataListFactory,
  DataListProps,
  DataListStylesNames,
} from './DataList';
import type { DataListContextValue } from './DataList.context';
import type {
  DataListItemFactory,
  DataListItemProps,
  DataListItemStylesNames,
} from './DataListItem/DataListItem';
import type {
  DataListItemLabelFactory,
  DataListItemLabelProps,
  DataListItemLabelStylesNames,
} from './DataListItemLabel/DataListItemLabel';
import type {
  DataListItemValueFactory,
  DataListItemValueProps,
  DataListItemValueStylesNames,
} from './DataListItemValue/DataListItemValue';

export { DataList } from './DataList';
export { DataListItem } from './DataListItem/DataListItem';
export { DataListItemLabel } from './DataListItemLabel/DataListItemLabel';
export { DataListItemValue } from './DataListItemValue/DataListItemValue';
export { useDataListContext } from './DataList.context';

export type {
  DataListProps,
  DataListStylesNames,
  DataListCssVariables,
  DataListFactory,
  DataListItemProps,
  DataListItemStylesNames,
  DataListItemFactory,
  DataListItemLabelProps,
  DataListItemLabelStylesNames,
  DataListItemLabelFactory,
  DataListItemValueProps,
  DataListItemValueStylesNames,
  DataListItemValueFactory,
  DataListContextValue,
};

export namespace DataList {
  export type Props = DataListProps;
  export type StylesNames = DataListStylesNames;
  export type CssVariables = DataListCssVariables;
  export type Factory = DataListFactory;

  export namespace Item {
    export type Props = DataListItemProps;
    export type StylesNames = DataListItemStylesNames;
    export type Factory = DataListItemFactory;
  }

  export namespace ItemLabel {
    export type Props = DataListItemLabelProps;
    export type StylesNames = DataListItemLabelStylesNames;
    export type Factory = DataListItemLabelFactory;
  }

  export namespace ItemValue {
    export type Props = DataListItemValueProps;
    export type StylesNames = DataListItemValueStylesNames;
    export type Factory = DataListItemValueFactory;
  }
}
