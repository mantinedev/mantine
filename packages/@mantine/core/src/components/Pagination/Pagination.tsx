import { Box, factory, Factory, MantineSpacing, useProps } from '../../core';
import { Group } from '../Group/Group';
import { usePaginationContext } from './Pagination.context';
import { PaginationIcon } from './Pagination.icons';
import { PaginationControl, PaginationControlProps } from './PaginationControl/PaginationControl';
import { PaginationDots, PaginationDotsProps } from './PaginationDots/PaginationDots';
import {
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationEdgeProps,
} from './PaginationEdges/PaginationEdges';
import { PaginationItems, PaginationItemsProps } from './PaginationItems/PaginationItems';
import {
  PaginationFormatLabel,
  PaginationLabel,
  PaginationLabelProps,
} from './PaginationLabel/PaginationLabel';
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
  /** If set, first/last controls are displayed @default false @category appearance */
  withEdges?: boolean;

  /** If set, next/previous controls are displayed @default true @category appearance */
  withControls?: boolean;

  /** Props passed down to next/previous/first/last controls */
  getControlProps?: (control: 'first' | 'previous' | 'last' | 'next') => Record<string, any>;

  /** Next control icon component @category appearance */
  nextIcon?: PaginationIcon;

  /** Previous control icon component @category appearance */
  previousIcon?: PaginationIcon;

  /** Last control icon component @category appearance */
  lastIcon?: PaginationIcon;

  /** First control icon component @category appearance */
  firstIcon?: PaginationIcon;

  /** Dots icon component @category appearance */
  dotsIcon?: PaginationIcon;

  /** Key of `theme.spacing`, gap between controls @default 8 @category appearance */
  gap?: MantineSpacing;

  /** If set, the pagination is hidden when only one page is available (`total={1}`) @default false @category appearance */
  hideWithOnePage?: boolean;

  /** If set to `false`, page number buttons are hidden, only next/previous controls remain @default `true` @category appearance */
  withPages?: boolean;

  /** Function to format the label text displayed in responsive mode @category appearance */
  formatLabel?: PaginationFormatLabel;
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
    Label: typeof PaginationLabel;
  };
}>;

const defaultProps = {
  withControls: true,
  withPages: true,
  siblings: 1,
  boundaries: 1,
  gap: 8,
} satisfies Partial<PaginationProps>;

interface PaginationItemsGroupProps {
  children: React.ReactNode;
}

function PaginationItemsGroup({ children }: PaginationItemsGroupProps) {
  const ctx = usePaginationContext();
  return <Box {...ctx.getStyles('items')}>{children}</Box>;
}

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
    controller,
    total,
    gap,
    hideWithOnePage,
    withPages,
    layout,
    formatLabel,
    ...others
  } = props;

  const resolvedTotal = controller ? controller.total : (total ?? 0);

  if (resolvedTotal <= 0 || (hideWithOnePage && resolvedTotal === 1)) {
    return null;
  }

  const isResponsive = layout === 'responsive';

  const pagesContent = withPages ? (
    isResponsive ? (
      <>
        <PaginationItemsGroup>
          <PaginationItems dotsIcon={dotsIcon} />
        </PaginationItemsGroup>
        <PaginationLabel formatLabel={formatLabel} />
      </>
    ) : (
      <PaginationItems dotsIcon={dotsIcon} />
    )
  ) : null;

  return (
    <PaginationRoot controller={controller} total={total} layout={layout} {...others}>
      <Group gap={gap}>
        {withEdges && <PaginationFirst icon={firstIcon} {...getControlProps?.('first')} />}
        {withControls && (
          <PaginationPrevious icon={previousIcon} {...getControlProps?.('previous')} />
        )}
        {pagesContent}
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
Pagination.Label = PaginationLabel;

export namespace Pagination {
  export type Props = PaginationProps;
  export type StylesNames = PaginationStylesNames;
  export type CssVariables = PaginationCssVariables;
  export type Factory = PaginationFactory;

  export namespace Root {
    export type Props = PaginationRootProps;
  }

  export namespace Control {
    export type Props = PaginationControlProps;
  }

  export namespace Dots {
    export type Props = PaginationDotsProps;
  }

  export namespace Edge {
    export type Props = PaginationEdgeProps;
  }

  export namespace Items {
    export type Props = PaginationItemsProps;
  }

  export namespace Label {
    export type Props = PaginationLabelProps;
  }
}
