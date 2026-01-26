import { factory, Factory, MantineSpacing, useProps } from '../../core';
import { Group } from '../Group/Group';
import { PaginationIcon } from './Pagination.icons';
import classes from './Pagination.module.css';
import { PaginationControl } from './PaginationControl/PaginationControl';
import { PaginationDots } from './PaginationDots/PaginationDots';
import {
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from './PaginationEdges/PaginationEdges';
import { PaginationItems } from './PaginationItems/PaginationItems';
import {
  PaginationRoot,
  PaginationRootCssVariables,
  PaginationRootProps,
  PaginationRootStylesNames,
} from './PaginationRoot/PaginationRoot';

export type PaginationStylesNames = PaginationRootStylesNames;
export type PaginationCssVariables = PaginationRootCssVariables;

export interface PaginationProps extends PaginationRootProps {
  /** If set, first/last controls are displayed @default false */
  withEdges?: boolean;

  /** If set, next/previous controls are displayed @default true */
  withControls?: boolean;

  /** Props passed down to next/previous/first/last controls */
  getControlProps?: (control: 'first' | 'previous' | 'last' | 'next') => Record<string, any>;

  /** Next control icon component */
  nextIcon?: PaginationIcon;

  /** Previous control icon component */
  previousIcon?: PaginationIcon;

  /** Last control icon component */
  lastIcon?: PaginationIcon;

  /** First control icon component */
  firstIcon?: PaginationIcon;

  /** Dots icon component */
  dotsIcon?: PaginationIcon;

  /** Key of `theme.spacing`, gap between controls @default 8 */
  gap?: MantineSpacing;

  /** If set, the pagination is hidden when only one page is available (`total={1}`) @default false */
  hideWithOnePage?: boolean;

  /** If set to `false`, pages controls are hidden @default true */
  withPages?: boolean;
}

export type PaginationFactory = Factory<{
  props: PaginationProps;
  ref: HTMLDivElement;
  stylesNames: PaginationStylesNames;
  vars: PaginationCssVariables;
  staticComponents: {
    Root: typeof PaginationRoot;
    Control: typeof PaginationControl;
    Dots: typeof PaginationDots;
    First: typeof PaginationFirst;
    Last: typeof PaginationLast;
    Next: typeof PaginationNext;
    Previous: typeof PaginationPrevious;
    Items: typeof PaginationItems;
  };
}>;

const defaultProps = {
  withControls: true,
  withPages: true,
  siblings: 1,
  boundaries: 1,
  gap: 8,
} satisfies Partial<PaginationProps>;

export const Pagination = factory<PaginationFactory>((_props) => {
  const props = useProps('Pagination', defaultProps, _props);
  const {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap,
    hideWithOnePage,
    withPages,
    ...others
  } = props;

  if (total <= 0 || (hideWithOnePage && total === 1)) {
    return null;
  }

  return (
    <PaginationRoot total={total} {...others}>
      <Group gap={gap}>
        {withEdges && <PaginationFirst icon={firstIcon} {...getControlProps?.('first')} />}
        {withControls && (
          <PaginationPrevious icon={previousIcon} {...getControlProps?.('previous')} />
        )}
        {withPages && <PaginationItems dotsIcon={dotsIcon} />}
        {withControls && <PaginationNext icon={nextIcon} {...getControlProps?.('next')} />}
        {withEdges && <PaginationLast icon={lastIcon} {...getControlProps?.('last')} />}
      </Group>
    </PaginationRoot>
  );
});

Pagination.classes = classes;
Pagination.displayName = '@mantine/core/Pagination';
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;
