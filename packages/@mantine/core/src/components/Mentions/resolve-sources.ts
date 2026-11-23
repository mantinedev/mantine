import { Children, isValidElement } from 'react';
import { toMentionConfig } from './get-mentions';
import { Mention, MentionProps } from './Mention';
import { makeTriggerRegex } from './utils/make-trigger-regex';
import type { MentionConfig } from './utils/types';

export interface ResolvedMentionSource {
  sourceIndex: number;
  props: MentionProps;
  config: MentionConfig;
  regex: RegExp;
}

export function resolveSources(children: React.ReactNode): ResolvedMentionSource[] {
  const sources: ResolvedMentionSource[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child) || child.type !== Mention) {
      return;
    }

    const props = child.props as MentionProps;

    sources.push({
      sourceIndex: sources.length,
      props,
      config: toMentionConfig(props),
      regex: makeTriggerRegex(props.trigger ?? '@', { allowSpaceInQuery: props.allowSpaceInQuery }),
    });
  });

  return sources;
}
