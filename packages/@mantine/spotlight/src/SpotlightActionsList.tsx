import { useEffect, useId } from 'react';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  ScrollArea,
  ScrollAreaAutosizeProps,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';
import classes from './Spotlight.module.css';

export type SpotlightActionsListStylesNames = 'actionsList' | 'actionsListInner';

export interface SpotlightActionsListProps
  extends BoxProps, CompoundStylesApiProps<SpotlightActionsListFactory>, ElementProps<'div'> {
  /** Total number of actions when the list is virtualized and only a part of actions is rendered. Keyboard navigation uses this number instead of rendered actions. @category behavior */
  totalActionsCount?: number;

  /** Ref of the scrollable viewport element, used as the scroll element of a virtualizer @category state */
  viewportRef?: ScrollAreaAutosizeProps['viewportRef'];
}

export type SpotlightActionsListFactory = Factory<{
  props: SpotlightActionsListProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsListStylesNames;
  compound: true;
}>;

export const SpotlightActionsList = factory<SpotlightActionsListFactory>((props) => {
  const {
    className,
    style,
    id,
    children,
    vars,
    classNames,
    styles,
    totalActionsCount,
    viewportRef,
    ...others
  } = useProps('SpotlightActionsList', null, props);
  const ctx = useSpotlightContext();
  const generatedId = `mantine-${useId().replace(/:/g, '')}`;
  const listId = id || generatedId;

  useEffect(() => {
    spotlightActions.setListId(listId, ctx.store);
    return () => spotlightActions.setListId('', ctx.store);
  }, []);

  useEffect(() => {
    if (typeof totalActionsCount !== 'number') {
      if (ctx.store.getState().totalActionsCount !== null) {
        spotlightActions.setTotalActionsCount(null, ctx.store);
      }
      return;
    }

    spotlightActions.setTotalActionsCount(totalActionsCount, ctx.store);
    const { selected } = ctx.store.getState();

    if (totalActionsCount === 0 && selected !== -1) {
      spotlightActions.setSelectedAction(-1, ctx.store, null);
    } else if (selected >= totalActionsCount) {
      spotlightActions.selectAction(totalActionsCount - 1, ctx.store);
    } else if (selected === -1 && totalActionsCount > 0 && ctx.query.trim().length > 0) {
      spotlightActions.selectAction(0, ctx.store);
    }
  }, [totalActionsCount]);

  useEffect(() => () => spotlightActions.setTotalActionsCount(null, ctx.store), []);

  return (
    <ScrollArea.Autosize
      {...ctx.getStyles('actionsList', { className, style, classNames, styles })}
      type="scroll"
      scrollbarSize="var(--spotlight-actions-list-padding)"
      offsetScrollbars="y"
      id={listId}
      role="listbox"
      viewportRef={viewportRef}
      {...others}
    >
      {children}
    </ScrollArea.Autosize>
  );
});

SpotlightActionsList.classes = classes;
SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
