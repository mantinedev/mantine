import { NextIcon } from './NextIcon';
import { ViteIcon } from './ViteIcon';
import { GatsbyIcon } from './GatsbyIcon';
import { RemixIcon } from './RemixIcon';
import { RedwoodIcon } from './RedwoodIcon';
import type { Template } from '../MdxProvider/MdxTemplatesList/data';

export const frameworkIcons: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  vite: ViteIcon,
  gatsby: GatsbyIcon,
  redwood: RedwoodIcon,
  remix: RemixIcon,
};

export { NextIcon, ViteIcon, GatsbyIcon, RemixIcon, RedwoodIcon };
