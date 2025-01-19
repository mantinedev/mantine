import type { Template } from '../MdxProvider/MdxTemplatesList/data';
import { GatsbyIcon } from './GatsbyIcon';
import { NextIcon } from './NextIcon';
import { ReactRouterIcon } from './ReactRouterIcon';
import { RedwoodIcon } from './RedwoodIcon';
import { ViteIcon } from './ViteIcon';

export const frameworkIcons: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  vite: ViteIcon,
  gatsby: GatsbyIcon,
  redwood: RedwoodIcon,
  'react-router': ReactRouterIcon,
};

export { NextIcon, ViteIcon, GatsbyIcon, ReactRouterIcon, RedwoodIcon };
