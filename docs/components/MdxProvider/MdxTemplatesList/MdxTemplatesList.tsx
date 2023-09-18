import React from 'react';
import { Table, Button, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { frameworkIcons } from '@/components/icons';
import { TEMPLATES_DATA, Template } from './data';
import classes from './MdxTemplatesList.module.css';

interface MdxTemplatesListProps {
  type?: Template['type'];
  name?: string[];
}

export function MdxTemplatesList({ type, name }: MdxTemplatesListProps) {
  const data = name
    ? TEMPLATES_DATA.filter((template) => name.includes(template.name))
    : type
    ? TEMPLATES_DATA.filter((template) => template.type === type)
    : TEMPLATES_DATA;

  const rows = data.map((template) => {
    const Icon = frameworkIcons[template.type];
    return (
      <Table.Tr key={template.name}>
        <Table.Td className={classes.iconCell}>
          <div className={classes.icon} data-type={template.type}>
            <Icon />
          </div>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {template.name}
          </Text>
          <Text fz="xs">{template.description}</Text>
        </Table.Td>
        <Table.Td>
          <Button
            component="a"
            href={template.link}
            target="_blank"
            size="xs"
            variant="default"
            rightSection={<IconExternalLink stroke={1.5} className={classes.externalLinkIcon} />}
          >
            Use template
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover verticalSpacing="sm">
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
