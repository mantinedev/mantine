import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Mentions.demo.caretStyling.module.css';

const code = `
import { Mentions } from '@mantine/core';
import classes from './Demo.module.css';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
];

function Demo() {
  return (
    <Mentions
      label="Move the caret over a mention to highlight it"
      defaultValue="Ping @[Walter White](walter) and @[Jesse Pinkman](jesse)"
      classNames={{ highlight: classes.highlight }}
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}
`;

const styles = `.highlight {
  background-color: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);

  &[data-mention-selection='inside'],
  &[data-mention-selection='full'] {
    background-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }
}`;

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
];

function Demo() {
  return (
    <Mentions
      label="Move the caret over a mention to highlight it"
      defaultValue="Ping @[Walter White](walter) and @[Jesse Pinkman](jesse)"
      classNames={{ highlight: classes.highlight }}
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}

export const caretStyling: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: styles, language: 'scss' },
  ],
  maxWidth: 400,
  centered: true,
};
