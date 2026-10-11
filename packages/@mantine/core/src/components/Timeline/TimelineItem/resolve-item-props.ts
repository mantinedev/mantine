import type { TimelineContextValue } from '../Timeline.context';

export interface ResolveItemPropsInput {
  index: number | undefined;
  active: boolean | undefined;
  lineActive: boolean | undefined;
  alternate: boolean | undefined;
}

export interface ResolvedItemProps {
  active: boolean;
  lineActive: boolean;
  current: boolean;
  bodyFirst: boolean;
  first: boolean;
  last: boolean;
  align: 'right' | 'left' | undefined;
}

export function getItemActiveState(
  index: number | undefined,
  ctx: Pick<TimelineContextValue, 'active' | 'itemsCount' | 'reverseActive'>
): { active: boolean; lineActive: boolean } {
  if (index === undefined) {
    return { active: false, lineActive: false };
  }

  if (ctx.reverseActive) {
    const reversed = ctx.active >= ctx.itemsCount - index - 1;
    return { active: reversed, lineActive: reversed };
  }

  return { active: ctx.active >= index, lineActive: ctx.active - 1 >= index };
}

export function isCurrentItem(
  index: number | undefined,
  ctx: Pick<TimelineContextValue, 'active' | 'itemsCount' | 'reverseActive'>
) {
  if (index === undefined || ctx.active < 0) {
    return false;
  }

  return ctx.reverseActive ? index === ctx.itemsCount - ctx.active - 1 : index === ctx.active;
}

export function resolveItemProps(
  input: ResolveItemPropsInput,
  ctx: TimelineContextValue
): ResolvedItemProps {
  const derived = getItemActiveState(input.index, ctx);

  return {
    active: input.active ?? derived.active,
    lineActive: input.lineActive ?? derived.lineActive,
    current: isCurrentItem(input.index, ctx),
    bodyFirst:
      (ctx.align === 'left' && !!input.alternate) || (ctx.align === 'right' && !input.alternate),
    first: input.index === 0,
    last: input.index !== undefined && input.index === ctx.itemsCount - 1,
    align: ctx.align,
  };
}
