import { MentionDisplayTransform } from '../Mentions.types';
import { createMarkupSerializer } from './create-markup-serializer';
import type { MentionConfig } from './types';

export function createTestConfig(
  trigger: string,
  markup: string = `${trigger}[__display__](__id__)`,
  displayTransform: MentionDisplayTransform = (_id, display) => display,
  withTrigger = true
): MentionConfig {
  return {
    trigger,
    serializer: createMarkupSerializer(markup),
    displayTransform,
    withTrigger,
  };
}
