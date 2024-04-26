import { Pill } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { PillStylesApi } from '@docs/styles-api';
import classes from './_demo.module.css';

const code = `
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`;

function Demo(props: any) {
  return (
    <div className={classes.demoWrapper}>
      <Pill {...props} withRemoveButton style={{ flex: 0 }}>
        Test pill
      </Pill>
    </div>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PillStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 200,
};
