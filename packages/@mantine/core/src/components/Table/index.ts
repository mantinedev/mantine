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
