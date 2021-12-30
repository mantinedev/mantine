import { Divider } from '..';

const codeTemplate = (props: string) => `
<Divider${props} />
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Divider,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'solid', value: 'solid' },
        { label: 'dashed', value: 'dashed' },
        { label: 'dotted', value: 'dotted' },
      ],
      initialValue: 'solid',
      defaultValue: 'solid',
    },
    {
      name: 'orientation',
      type: 'select',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
    { name: 'size', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'label', type: 'string', initialValue: '' },
    {
      name: 'labelPosition',
      type: 'select',
      data: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
  ],
};
