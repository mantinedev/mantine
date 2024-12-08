import { factory, Factory, MantineSize, useProps } from '../../core';
import { Group } from '../Group/Group';
import { PaginationIcon } from './Pagination.icons';
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
import classes from './Pagination.module.css';

export type PaginationStylesNames = PaginationRootStylesNames;
export type PaginationCssVariables = PaginationRootCssVariables;

export interface PaginationProps extends PaginationRootProps {
  /** Determines whether first/last controls should be rendered, false by default */
  withEdges?: boolean;

  /** Determines whether next/previous controls should be rendered, true by default */
  withControls?: boolean;

  /** Adds props to next/previous/first/last controls */
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

  /** Key of `theme.spacing`, gap between controls, `8` by default */
  gap?: MantineSize | (string & {}) | number;

  /** Determines whether the pagination should be hidden when only one page is available (`total={1}`), `false` by default */
  hideWithOnePage?: boolean;

  /** Determines whether pages controls should be displayed, `true` by default */
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

const defaultProps: Partial<PaginationProps> = {
  withControls: true,
  withPages: true,
  siblings: 1,
  boundaries: 1,
  gap: 8,
};

export const Pagination = factory<PaginationFactory>((_props, ref) => {
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
    <PaginationRoot ref={ref} total={total} {...others}>
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
