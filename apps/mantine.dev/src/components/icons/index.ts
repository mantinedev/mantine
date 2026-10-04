import type { Template } from '../MdxProvider/MdxTemplatesList/data';
import { NextIcon } from './NextIcon';
import { ReactRouterIcon } from './ReactRouterIcon';
import { TanStackIcon } from './TanStackIcon';
import { ViteIcon } from './ViteIcon';

export * as PhosphorIcons from './Phosphor';

export const frameworkIcons: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  vite: ViteIcon,
  'react-router': ReactRouterIcon,
  'tanstack-start': TanStackIcon,
};

export { NextIcon, ViteIcon, ReactRouterIcon, TanStackIcon };
