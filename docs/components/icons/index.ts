import { NextIcon } from './NextIcon';
import { T3Icon } from './T3Icon';
import { ViteIcon } from './ViteIcon';
import { GatsbyIcon } from './GatsbyIcon';
import { RemixIcon } from './RemixIcon';
import { RedwoodIcon } from './RedwoodIcon';
import type { Template } from '../MdxProvider/MdxTemplatesList/data';

export const frameworkIcons: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  t3: T3Icon,
  vite: ViteIcon,
  gatsby: GatsbyIcon,
  redwood: RedwoodIcon,
  remix: RemixIcon,
};

export { NextIcon, ViteIcon, GatsbyIcon, RemixIcon, RedwoodIcon };
