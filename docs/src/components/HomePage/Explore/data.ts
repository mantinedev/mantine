export interface ExploreDataItem {
  id: string;
  title: string;
  description: string;
}

const placeholder =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum provident modi dolore optio eos commodi ratione autem odit dicta?';

const data: readonly ExploreDataItem[] = [
  {
    id: 'core',
    title: 'Core components',
    description:
      'Mantine core library includes all essential components: inputs, buttons, modals, popovers, typography elements, layout management, etc.',
  },
  { id: 'customization', title: 'Customization', description: `${placeholder}` },
  { id: 'animations', title: 'Animations', description: `${placeholder}` },
  { id: 'dates', title: 'Date pickers and inputs', description: `${placeholder}` },
  { id: 'notifications', title: 'Notifications system', description: `${placeholder}` },
  { id: 'hooks', title: 'Hooks library', description: `${placeholder}` },
  { id: 'prism', title: 'Code highlight', description: `${placeholder}` },
];

export default data;
