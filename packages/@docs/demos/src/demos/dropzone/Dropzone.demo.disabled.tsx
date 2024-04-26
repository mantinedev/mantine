import { MantineDemo } from '@mantinex/demo';
import { BaseDemo } from './_base';
import classes from './Dropzone.disabled.module.css';

const cssCode = `
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
`;

const code = `
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone disabled className={classes.disabled} onDrop={() => {}}>
      {/* children... */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo disabled className={classes.disabled} />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
};
