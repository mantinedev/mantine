import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      dropdownType="drawer"
      applyOnSubmit={false}
      label="Applied on selection"
      placeholder="Pick date"
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component
      dropdownType="drawer"
      applyOnSubmit={false}
      label="Applied on selection"
      placeholder="Pick date"
    />
  );
}

export function getPickerInputApplyOnSubmitDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
