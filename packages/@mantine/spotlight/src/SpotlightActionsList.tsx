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
import { spotlightActions } from './spotlight.store';
import classes from './Spotlight.module.css';

export type SpotlightActionsListStylesNames = 'actionsList' | 'actionsListInner';

export interface SpotlightActionsListProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightActionsListFactory>,
    ElementProps<'div'> {}

export type SpotlightActionsListFactory = Factory<{
  props: SpotlightActionsListProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsListStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = factory<SpotlightActionsListFactory>((props, ref) => {
  const { className, style, id, children, vars, classNames, styles, ...others } = useProps(
    'SpotlightActionsList',
    defaultProps,
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
      ref={ref}
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
