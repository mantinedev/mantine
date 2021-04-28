import {
  DashboardIcon,
  StackIcon,
  InputIcon,
  MixIcon,
  Link2Icon,
  ExclamationTriangleIcon,
  LetterCaseCapitalizeIcon,
} from '@modulz/radix-icons';

const order = [
  'typography',
  'inputs',
  'data-display',
  'overlay',
  'feedback',
  'navigation',
  'misc',
] as const;

const categories = {
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
};

export function getComponentsData(query: any) {
  const data: Record<
    typeof order[number],
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

  return order.map((item) => ({
    ...categories[item],
    items: data[item],
  }));
}
