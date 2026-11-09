import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker yearLabelFormat="YYYY [year]" decadeLabelFormat="YY" />;
}
`;

function Demo() {
  return <QuarterPicker yearLabelFormat="YYYY [year]" decadeLabelFormat="YY" />;
}

export const labelFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
