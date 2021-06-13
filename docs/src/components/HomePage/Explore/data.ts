export interface ExploreDataItem {
  id: string;
  title: string;
  description: string;
}

const data: readonly ExploreDataItem[] = [
  {
    id: 'core',
    title: 'Core components',
    description:
      'Mantine core library includes all essential components: inputs, buttons, modals, popovers, typography elements, layout management, etc.',
  },
  {
    id: 'customization',
    title: 'Customization',
    description:
      'Extends Mantine theme with additional colors, sizes, etc. or completely overwrite component styles to match your design',
  },
  {
    id: 'animations',
    title: 'Animations',
    description:
      'Animate presence with premade transition or build your own animation with simple API, all Mantine components support custom transitions',
  },
  {
    id: 'dates',
    title: 'Date pickers and inputs',
    description: 'Capture date or dates range from user with date pickers and inputs',
  },
  {
    id: 'notifications',
    title: 'Notifications system',
    description:
      'Notifications system with queue, auto hide timeout and vast customization options',
  },
  {
    id: 'hooks',
    title: 'Hooks library',
    description:
      'Mantine comes with more than 20 hooks to manage state and UI to help you build custom components',
  },
  {
    id: 'prism',
    title: 'Code highlight',
    description:
      'Code highlight like in Mantine docs made with prism with light and dark theme support',
  },
];

export default data;
