import {
  DashboardIcon,
  StackIcon,
  InputIcon,
  MixIcon,
  Link2Icon,
  ExclamationTriangleIcon,
  LetterCaseCapitalizeIcon,
  ContainerIcon,
} from '@modulz/radix-icons';
import React from 'react';

export const MANTINE_CORE_COMPONENTS_ORDER = [
  'typography',
  'inputs',
  'layout',
  'data-display',
  'overlay',
  'feedback',
  'navigation',
  'misc',
] as const;

export const MANTINE_CORE_COMPONENTS_CATEGORIES: Record<
  typeof MANTINE_CORE_COMPONENTS_ORDER[number],
  {
    title: string;
    icon: (props: React.ComponentProps<typeof DashboardIcon>) => JSX.Element;
    color: string;
  }
> = {
  'data-display': {
    title: 'Data display',
    icon: DashboardIcon,
    color: 'red',
  },

  overlay: {
    title: 'Overlay',
    icon: StackIcon,
    color: 'indigo',
  },

  inputs: {
    title: 'Inputs',
    icon: InputIcon,
    color: 'orange',
  },

  misc: {
    title: 'Miscellaneous',
    icon: MixIcon,
    color: 'teal',
  },

  navigation: {
    title: 'Navigation',
    icon: Link2Icon,
    color: 'violet',
  },

  feedback: {
    title: 'Feedback',
    icon: ExclamationTriangleIcon,
    color: 'yellow',
  },

  typography: {
    title: 'Typography',
    icon: LetterCaseCapitalizeIcon,
    color: 'blue',
  },

  layout: {
    title: 'Layout',
    icon: ContainerIcon,
    color: 'grape',
  },
};

export function getComponentsData(query: any) {
  const data: Record<
    typeof MANTINE_CORE_COMPONENTS_ORDER[number],
    { name: string; description: string; to: string }[]
  > = query.allMdx.edges.reduce((acc, item) => {
    if (!item.node.frontmatter.category) {
      return acc;
    }
    if (!Array.isArray(acc[item.node.frontmatter.category])) {
      acc[item.node.frontmatter.category] = [];
    }

    acc[item.node.frontmatter.category].push({
      name: item.node.frontmatter.title,
      description: item.node.frontmatter.description,
      to: item.node.frontmatter.slug,
    });
    return acc;
  }, {});

  return MANTINE_CORE_COMPONENTS_ORDER.map((item) => ({
    ...MANTINE_CORE_COMPONENTS_CATEGORIES[item],
    items: data[item],
  }));
}
