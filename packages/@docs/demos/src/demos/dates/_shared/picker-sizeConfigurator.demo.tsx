import { MantineDemo } from '@mantinex/demo';

const getCodeTemplate = (component: string) =>
  `import { ${component} } from '@mantine/dates';

function Demo() {
  return <${component} defaultValue={new Date()}{{props}} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return (props: any) => <Component defaultValue={new Date()} {...props} />;
}

export function getPickerSizeConfiguratorDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'configurator',
    centered: true,
    code: getCodeTemplate(Component.displayName!.replace('@mantine/dates/', '')),
    controls: [{ prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' }],
    component: getDemo(Component),
  };
}
