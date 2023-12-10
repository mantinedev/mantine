import type { Template } from '../MdxProvider/MdxTemplatesList/data';
import { GatsbyIcon } from './GatsbyIcon';
import { NextIcon } from './NextIcon';
import { RedwoodIcon } from './RedwoodIcon';
import { RemixIcon } from './RemixIcon';
import { ViteIcon } from './ViteIcon';

export const frameworkIcons: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  vite: ViteIcon,
  gatsby: GatsbyIcon,
  redwood: RedwoodIcon,
  remix: RemixIcon,
};

export { NextIcon, ViteIcon, GatsbyIcon, RemixIcon, RedwoodIcon };
