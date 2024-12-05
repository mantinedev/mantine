import { IconAt } from '@tabler/icons-react';
import { Badge } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { BadgeStylesApi } from '@docs/styles-api';

const code = `
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`;

function Demo(props: any) {
  const icon = <IconAt size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon} {...props}>
      Badge component
    </Badge>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: BadgeStylesApi,
  component: Demo,
  centered: true,
  code,
};
