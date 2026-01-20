import { useEffect, useId } from 'react';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  ScrollArea,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import classes from './Spotlight.module.css';
import { spotlightActions } from './spotlight.store';

export type SpotlightActionsListStylesNames = 'actionsList' | 'actionsListInner';

export interface SpotlightActionsListProps
  extends BoxProps, CompoundStylesApiProps<SpotlightActionsListFactory>, ElementProps<'div'> {}

export type SpotlightActionsListFactory = Factory<{
  props: SpotlightActionsListProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsListStylesNames;
  compound: true;
}>;

export const SpotlightActionsList = factory<SpotlightActionsListFactory>((props) => {
  const { className, style, id, children, vars, classNames, styles, ...others } = useProps(
    'SpotlightActionsList',
    null,
    props
  );
  const ctx = useSpotlightContext();
  const generatedId = `mantine-${useId().replace(/:/g, '')}`;
  const listId = id || generatedId;

  useEffect(() => {
    spotlightActions.setListId(listId, ctx.store);
    return () => spotlightActions.setListId('', ctx.store);
  }, []);

  return (
    <ScrollArea.Autosize
      {...ctx.getStyles('actionsList', { className, style, classNames, styles })}
      type="scroll"
      scrollbarSize="var(--spotlight-actions-list-padding)"
      offsetScrollbars="y"
      id={listId}
      {...others}
    >
      {children}
    </ScrollArea.Autosize>
  );
});

SpotlightActionsList.classes = classes;
SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
