import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component clearable defaultValue={new Date()} label="Pick date" placeholder="Pick date" />
  );
}

export function getPickerInputClearableDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
