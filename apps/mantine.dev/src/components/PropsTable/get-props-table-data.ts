import Fuse from 'fuse.js';
import {
  OTHER_CATEGORY_LABEL,
  PROP_CATEGORIES,
  PROP_CATEGORY_ORDER,
  PROP_ORIGIN_GROUPS,
  PROP_ORIGIN_ORDER,
} from './prop-groups';

export interface DocgenProp {
  defaultValue: string | null;
  description: string;
  name: string;
  parent: string | null;
  required: boolean;
  tags: Record<string, string>;
  type: {
    name: string;
  };
}

export interface Docgen {
  description: string;
  displayName: string;
  props: Record<string, DocgenProp>;
}

export interface PropGroup {
  key: string;
  label: string;
  note?: string;
  props: DocgenProp[];
}

export interface PropsTableData {
  /** Groups that still have rows after the search query is applied, in render order */
  groups: PropGroup[];

  /** True when the component has labelled groups, regardless of the query */
  withGroups: boolean;

  /** Number of props that match the query */
  matchedCount: number;
}

const docgenCache = new Map<string, Promise<Docgen | null>>();

export function loadDocgen(component: string): Promise<Docgen | null> {
  if (!docgenCache.has(component)) {
    docgenCache.set(
      component,
      import(`../../.docgen/components/${component}.json`)
        .then((module) => module.default as Docgen)
        .catch(() => null)
    );
  }

  return docgenCache.get(component)!;
}

function getOriginKey(prop: DocgenProp) {
  if (prop.parent === '__BaseInputProps') {
    return '__InputProps';
  }

  return prop.parent && prop.parent in PROP_ORIGIN_GROUPS ? prop.parent : null;
}

function groupOwnProps(
  component: string,
  props: DocgenProp[],
  hasSharedGroups: boolean
): PropGroup[] {
  const hasCategories = props.some((prop) => 'category' in prop.tags);

  if (!hasCategories) {
    return [{ key: 'own', label: hasSharedGroups ? `${component} props` : '', props }];
  }

  return PROP_CATEGORY_ORDER.map((category) => ({
    key: category,
    label: PROP_CATEGORIES[category] || OTHER_CATEGORY_LABEL,
    props: props.filter((prop) =>
      category === 'other'
        ? !(prop.tags.category in PROP_CATEGORIES)
        : prop.tags.category === category
    ),
  }));
}

function isOriginOwnerPage(component: string) {
  return Object.values(PROP_ORIGIN_GROUPS).some((group) => group.component === component);
}

export function groupProps(component: string, props: DocgenProp[]): PropGroup[] {
  if (isOriginOwnerPage(component)) {
    return [{ key: 'own', label: '', props }];
  }

  const own = props.filter((prop) => getOriginKey(prop) === null);
  const shared = PROP_ORIGIN_ORDER.map((origin) => ({
    key: origin,
    ...PROP_ORIGIN_GROUPS[origin],
    props: props.filter((prop) => getOriginKey(prop) === origin),
  })).filter((group) => group.props.length > 0);

  return [...groupOwnProps(component, own, shared.length > 0), ...shared];
}

export function filterProps(props: DocgenProp[], query: string): DocgenProp[] {
  if (!query.trim()) {
    return props;
  }

  const fuse = new Fuse(props, {
    keys: ['name', 'description', 'type.name'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const matched = new Set(fuse.search(query).map((result) => result.item.name));
  return props.filter((prop) => matched.has(prop.name));
}

export function getPropsTableData(
  component: string,
  docgen: Docgen,
  query: string
): PropsTableData {
  const props = Object.values(docgen.props);
  const matched = new Set(filterProps(props, query).map((prop) => prop.name));
  const allGroups = groupProps(component, props);

  return {
    withGroups: allGroups.some((group) => group.label),
    matchedCount: matched.size,
    groups: allGroups
      .map((group) => ({ ...group, props: group.props.filter((prop) => matched.has(prop.name)) }))
      .filter((group) => group.props.length > 0),
  };
}
