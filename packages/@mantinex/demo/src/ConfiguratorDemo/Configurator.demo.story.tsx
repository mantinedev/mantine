import { Highlight, HighlightProps } from '@mantine/core';
import { ConfiguratorDemo } from './ConfiguratorDemo';

export default { title: 'DS/ConfiguratorDemo' };

const code = `import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight highlight="this"%%props%%>
      %%children%%
    </Highlight>
  );
}`;

const defaultProps: HighlightProps = {
  children: 'Highlight this',
  highlight: 'this',
};

function Demo(props: Partial<HighlightProps>) {
  return <Highlight {...defaultProps} {...props} />;
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ConfiguratorDemo
        code={code}
        centered
        controls={[
          // {
          //   Type: 'color',
          //   Prop: 'color',
          //   InitialValue: 'yellow',
          //   LibraryValue: 'yellow',
          // },
          {
            type: 'select',
            prop: 'color',
            data: ['yellow', 'red', 'blue', 'green', 'gray', 'cyan', 'violet', 'pink'],
            initialValue: 'yellow',
            libraryValue: 'yellow',
          },
          {
            type: 'number',
            prop: 'fz',
            min: 10,
            max: 50,
            initialValue: 14,
            libraryValue: null,
          },
          {
            type: 'string',
            prop: 'highlight',
            initialValue: 'this',
            libraryValue: null,
          },
          {
            type: 'string',
            prop: 'children',
            initialValue: 'Highlight this',
            libraryValue: null,
          },
        ]}
      >
        <Demo />
      </ConfiguratorDemo>
    </div>
  );
}
