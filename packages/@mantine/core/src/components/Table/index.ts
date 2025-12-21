import type {
  TableCssVariables,
  TableData,
  TableFactory,
  TableProps,
  TableStylesNames,
} from './Table';
import type {
  TableCaptionProps,
  TableTbodyProps,
  TableTdProps,
  TableTfootProps,
  TableTheadProps,
  TableThProps,
  TableTrProps,
} from './Table.components';
import type { TableContextValue } from './Table.context';
import type { TableScrollContainerProps } from './TableScrollContainer';

export { Table } from './Table';
export {
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTr,
  TableTh,
  TableThead,
} from './Table.components';
export { TableScrollContainer } from './TableScrollContainer';
export { useTableContext } from './Table.context';

export type {
  TableProps,
  TableStylesNames,
  TableCssVariables,
  TableFactory,
  TableData,
  TableTbodyProps,
  TableTdProps,
  TableThProps,
  TableTrProps,
  TableCaptionProps,
  TableTfootProps,
  TableTheadProps,
  TableScrollContainerProps,
  TableContextValue,
};

export namespace Table {
  export type Props = TableProps;
  export type StylesNames = TableStylesNames;
  export type CssVariables = TableCssVariables;
  export type Factory = TableFactory;
  export type Data = TableData;
  export type ContextValue = TableContextValue;

  export namespace Caption {
    export type Props = TableCaptionProps;
  }

  export namespace Tbody {
    export type Props = TableTbodyProps;
  }

  export namespace Td {
    export type Props = TableTdProps;
  }

  export namespace Th {
    export type Props = TableThProps;
  }

  export namespace Tr {
    export type Props = TableTrProps;
  }

  export namespace Thead {
    export type Props = TableTheadProps;
  }

  export namespace Tfoot {
    export type Props = TableTfootProps;
  }

  export namespace ScrollContainer {
    export type Props = TableScrollContainerProps;
  }
}
