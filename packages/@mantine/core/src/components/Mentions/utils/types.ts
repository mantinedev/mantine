import type { MentionDisplayTransform, MentionSerializer } from '../Mentions.types';

export interface MentionConfig {
  trigger: string | RegExp;
  serializer: MentionSerializer;
  displayTransform: MentionDisplayTransform;
  withTrigger: boolean;
}

export type MentionMapDirection = 'START' | 'END';
