import type { ReactNode } from 'react';

export interface SpotlightAction {
  /** Action id, may be used to trigger action or find it in actions array, if not provided random string will be generated instead */
  id?: string;

  /** Action title, topmost large text, used for default filtering */
  title: string;

  /** Action description, small text displayed after title, used for default filtering */
  description?: string;

  /** Action group, used to render group label */
  group?: string;

  /** Keywords that are used for default filtering, not displayed anywhere, can be a string: "react,router,javascript" or an array: ['react', 'router', 'javascript'] */
  keywords?: string | string[];

  /** Decorative icon */
  icon?: ReactNode;

  /** Function that is called when action is triggered */
  onTrigger(action: SpotlightAction): void;

  /** Any other properties that will be consumed by SpotlightProvider */
  [key: string]: any;
}
