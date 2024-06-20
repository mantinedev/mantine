import { MantineDemo } from '@mantinex/demo';

const getCodeTemplate = (component: string) =>
  `import { ${component} } from '@mantine/dates';


function Demo() {
  return (
    <${component}
      {{props}}
    />
  );
}
`;

export function getPickerInputConfiguratorDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'configurator',
    component: Component,
    centered: true,
    maxWidth: 400,
    code: getCodeTemplate(Component.displayName!.replace('@mantine/dates/', '')),
    controls: [
      { prop: 'placeholder', type: 'string', initialValue: 'Pick date', libraryValue: '__' },
      {
        prop: 'label',
        type: 'string',
        initialValue: 'Pick date',
        libraryValue: '',
      },
      {
        prop: 'description',
        type: 'string',
        initialValue: '',
        libraryValue: '',
      },
      {
        prop: 'error',
        type: 'string',
        initialValue: '',
        libraryValue: '',
      },
      {
        prop: 'variant',
        type: 'select',
        data: [
          { label: 'default', value: 'default' },
          { label: 'filled', value: 'filled' },
          { label: 'unstyled', value: 'unstyled' },
        ],
        initialValue: 'default',
        libraryValue: 'default',
      },
      { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
      { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
      { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
      {
        prop: 'withAsterisk',
        type: 'boolean',
        initialValue: true,
        libraryValue: false,
      },
    ],
  };
}
