import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={[
          {
            value: 'React',
            label: 'React',
            description:
              'React is a JavaScript library for building fast, interactive user interfaces using a component-based architecture.',
          },
          {
            value: 'Angular',
            label: 'Angular',
            description:
              'Angular is a TypeScript-based web application framework for building large-scale, single-page applications with a structured, full-featured approach.',
          },
          {
            value: 'Svelte',
            label: 'Svelte',
            description:
              'Svelte is a modern JavaScript framework that compiles components into highly efficient vanilla JavaScript at build time, eliminating the need for a virtual DOM.',
          }
        ]}
      />
  );
}
`;

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        {
          value: 'React',
          label: 'React',
          description:
            'React is a JavaScript library for building fast, interactive user interfaces using a component-based architecture.',
        },
        {
          value: 'Angular',
          label: 'Angular',
          description:
            'Angular is a TypeScript-based web application framework for building large-scale, single-page applications with a structured, full-featured approach.',
        },
        {
          value: 'Svelte',
          label: 'Svelte',
          description:
            'Svelte is a modern JavaScript framework that compiles components into highly efficient vanilla JavaScript at build time, eliminating the need for a virtual DOM.',
        },
      ]}
    />
  );
}

export const withDescription: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
