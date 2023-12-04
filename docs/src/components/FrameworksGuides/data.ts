import { Template } from '../MdxProvider/MdxTemplatesList/data';

export interface FrameworkData {
  name: string;
  link: string;
  type: Template['type'];
}

export const FRAMEWORKS_GUIDES_DATA: FrameworkData[] = [
  { name: 'Next.js', link: '/guides/next', type: 'next' },
  { name: 'Vite', link: '/guides/vite', type: 'vite' },
  { name: 'Remix', link: '/guides/remix', type: 'remix' },
  { name: 'RedwoodJS', link: '/guides/redwood', type: 'redwood' },
  { name: 'Gatsby', link: '/guides/gatsby', type: 'gatsby' },
];
