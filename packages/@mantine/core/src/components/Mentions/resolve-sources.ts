import { Children, isValidElement } from 'react';
import { Mention, MentionProps } from './Mention';
import { MentionConfig, MentionDisplayTransform, MentionSerializer } from './Mentions.types';
import { createMarkupSerializer } from './utils/create-markup-serializer';
import { makeTriggerRegex } from './utils/make-trigger-regex';

export interface ResolvedMentionSource {
  index: number;
  props: MentionProps;
  config: MentionConfig;
  regex: RegExp;
}

/** Lightweight source descriptor accepted by the public `getMentions` helper */
export interface MentionSourceConfig {
  /** Trigger that opens this source's dropdown @default '@' */
  trigger?: string | RegExp;

  /** Markup template or serializer, defaults to `${trigger}[__display__](__id__)` */
  markup?: string | MentionSerializer;

  /** Customizes the visible text of a stored mention @default (_, display) => display */
  displayTransform?: MentionDisplayTransform;

  /** If set, the trigger character is kept as a prefix in the visible text of the mention @default false */
  withTrigger?: boolean;
}

const defaultDisplayTransform: MentionDisplayTransform = (_id, display) => display;

function getDefaultMarkup(trigger: string | RegExp): string {
  return typeof trigger === 'string' ? `${trigger}[__display__](__id__)` : '@[__display__](__id__)';
}

/** Normalizes a lightweight source descriptor into a `MentionConfig` */
export function toMentionConfig(input: MentionSourceConfig): MentionConfig {
  const trigger = input.trigger ?? '@';
  const displayTransform = input.displayTransform ?? defaultDisplayTransform;

  const serializer =
    input.markup && typeof input.markup !== 'string'
      ? input.markup
      : createMarkupSerializer(input.markup ?? getDefaultMarkup(trigger));

  const markup = typeof input.markup === 'string' ? input.markup : serializer.id;

  return { trigger, markup, serializer, displayTransform, withTrigger: input.withTrigger ?? false };
}

/** Reads `Mentions.Mention` children and resolves them into normalized sources for the pure utilities */
export function resolveSources(children: React.ReactNode): ResolvedMentionSource[] {
  const sources: ResolvedMentionSource[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child) || child.type !== Mention) {
      return;
    }

    const props = child.props as MentionProps;

    sources.push({
      index: sources.length,
      props,
      config: toMentionConfig(props),
      regex: makeTriggerRegex(props.trigger ?? '@', {
        allowSpaceInQuery: props.allowSpaceInQuery,
        ignoreAccents: props.ignoreAccents,
      }),
    });
  });

  return sources;
}

/** Returns the normalized `MentionConfig[]` used by `getMentions`, `getPlainText`, etc. */
export function getSourceConfigs(sources: ResolvedMentionSource[]): MentionConfig[] {
  return sources.map((source) => source.config);
}
