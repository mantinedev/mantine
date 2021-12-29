import { Badge } from '..';

const codeTemplate = (props: string, children: string) => `
<Badge${props}>
  ${children}
</Badge>
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Badge,
  codeTemplate,
  configurator: [
    {
      name: 'children',
      type: 'string',
      initialValue: 'Badge',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'light', value: 'light' },
        { label: 'filled', value: 'filled' },
        { label: 'outline', value: 'outline' },
        { label: 'dot', value: 'dot' },
      ],
      initialValue: 'light',
      defaultValue: 'light',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'fullWidth',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};
