import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  findElementAncestor,
  getFontSize,
  getRadius,
  MantineRadius,
  MantineSize,
  rem,
  ScrollArea,
  StylesApiProps,
  Tooltip,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { useClipboard, useUncontrolled } from '@mantine/hooks';
import {
  getAllExpandablePaths,
  getDefaultExpandedPaths,
  safeStringify,
  serializePath,
} from './json-viewer-utils';
import { JsonViewerNode } from './JsonViewerNode';
import classes from './JsonViewer.module.css';

export { PATH_SEPARATOR, serializePath } from './json-viewer-utils.js';

export type JsonViewerStylesNames =
  | 'root'
  | 'node'
  | 'toggle'
  | 'key'
  | 'value'
  | 'bracket'
  | 'type'
  | 'size'
  | 'ellipsis'
  | 'copyButton'
  | 'content'
  | 'row'
  | 'scrollarea'
  | 'lineNumbers'
  | 'wrapper'
  | 'copyAllButton';

export type JsonViewerCssVariables = {
  root: '--jv-radius' | '--jv-fz' | '--jv-indent';
};

export type JsonViewerHighlightType = 'added' | 'removed';

export interface JsonViewerProps
  extends BoxProps, StylesApiProps<JsonViewerFactory>, ElementProps<'div'> {
  /** JSON data to display */
  value: any;

  /** Label displayed for the root node @default false */
  rootName?: string | false;

  /** Number of levels to expand by default. Applied only to the `value` present on mount; pass a `key` or use controlled `expandedPaths` to re-apply it after `value` changes. @default 1 */
  defaultExpandDepth?: number;

  /** Controlled expanded paths */
  expandedPaths?: string[];

  /** Called when expanded paths change */
  onExpandedPathsChange?: (paths: string[]) => void;

  /** Max number of items to show before truncation @default 100 */
  maxDisplayLength?: number;

  /** Whether to show type badges next to values @default false */
  withTypes?: boolean;

  /** Whether to show item count for objects/arrays @default false */
  withSize?: boolean;

  /** Whether to show copy button on hover for individual nodes @default false */
  withCopy?: boolean;

  /** Whether to show a copy button to copy the entire JSON @default false */
  withCopyButton?: boolean;

  /** Whether to show quotes around string values @default true */
  withQuotes?: boolean;

  /** Whether to show quotes around keys @default false */
  withKeyQuotes?: boolean;

  /** Collapse strings longer than this value @default false */
  collapseStringsAfterLength?: number | false;

  /** Sort object keys @default false */
  sortKeys?: boolean | ((a: string, b: string) => number);

  /** Group arrays into chunks when array length exceeds this value @default false */
  groupArraysAfterLength?: number | false;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default 'sm' */
  radius?: MantineRadius;

  /** Font size @default '13px' */
  fontSize?: MantineSize | (string & {}) | number;

  /** Indent width in px @default 16 */
  indentWidth?: number;

  /** Adds border to the root element @default false */
  withBorder?: boolean;

  /** Label for copy button @default 'Copy' */
  copyLabel?: string;

  /** Label for copied state @default 'Copied' */
  copiedLabel?: string;

  /** Called when a value is selected/clicked */
  onValueSelect?: (path: string[], value: any) => void;

  /** Label for expand all button @default 'Expand all' */
  expandAllLabel?: string;

  /** Label for collapse all button @default 'Collapse all' */
  collapseAllLabel?: string;

  /** Whether to show expand all / collapse all controls @default false */
  withControls?: boolean;

  /** Map of JSON paths to highlight type ('added' or 'removed'), use serializeJsonViewerPath to build keys */
  highlightItems?: Record<string, JsonViewerHighlightType>;

  /** When true, all nodes are expanded and expand/collapse is disabled @default false */
  allExpanded?: boolean;

  /** Whether to show line numbers @default false */
  withLineNumbers?: boolean;

  /** Whether to show expand/collapse chevrons @default false */
  withChevrons?: boolean;
}

export type JsonViewerFactory = Factory<{
  props: JsonViewerProps;
  ref: HTMLDivElement;
  stylesNames: JsonViewerStylesNames;
  vars: JsonViewerCssVariables;
}>;

const defaultProps = {
  defaultExpandDepth: 1,
  maxDisplayLength: 100,
  withTypes: false,
  withSize: false,
  withCopy: false,
  withCopyButton: false,
  withQuotes: true,
  withKeyQuotes: false,
  collapseStringsAfterLength: false as const,
  sortKeys: false as const,
  groupArraysAfterLength: false as const,
  rootName: false as const,
  indentWidth: 16,
  withBorder: false,
  copyLabel: 'Copy',
  copiedLabel: 'Copied',
  expandAllLabel: 'Expand all',
  collapseAllLabel: 'Collapse all',
  withControls: false,
  allExpanded: false,
  withLineNumbers: false,
  withChevrons: false,
} satisfies Partial<JsonViewerProps>;

const varsResolver = createVarsResolver<JsonViewerFactory>(
  (_, { radius, fontSize, indentWidth }) => ({
    root: {
      '--jv-radius': typeof radius !== 'undefined' ? getRadius(radius) : undefined,
      '--jv-fz': typeof fontSize !== 'undefined' ? getFontSize(fontSize) : undefined,
      '--jv-indent': typeof indentWidth !== 'undefined' ? rem(indentWidth) : undefined,
    },
  })
);

const EMPTY_ANCESTORS: object[] = [];

export function handleJsonViewerKeyDown(
  event: React.KeyboardEvent,
  togglePath?: (path: string) => void,
  pathStr?: string,
  isExpanded?: boolean
) {
  const { code } = event.nativeEvent;
  const current = event.currentTarget as HTMLElement;

  if (code === 'KeyC' && (event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
    const copyControl = current.querySelector<HTMLElement>('[data-jv-copy]');
    if (copyControl && !window.getSelection()?.toString()) {
      event.stopPropagation();
      event.preventDefault();
      copyControl.click();
    }
    return;
  }

  if (
    (code === 'Enter' || code === 'Space') &&
    togglePath &&
    pathStr &&
    event.target === event.currentTarget
  ) {
    event.stopPropagation();
    event.preventDefault();
    togglePath(pathStr);
    return;
  }

  if (code === 'ArrowDown' || code === 'ArrowUp') {
    const root = findElementAncestor(current, '[data-jv-root]');
    if (!root) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-jv-node]')).filter(
      (n) => n.style.display !== 'none'
    );
    const index = nodes.indexOf(current);
    if (index === -1) {
      return;
    }
    const nextIndex = code === 'ArrowDown' ? index + 1 : index - 1;
    nodes[nextIndex]?.focus();
  }

  if (code === 'ArrowRight' && togglePath && pathStr) {
    event.stopPropagation();
    event.preventDefault();
    if (isExpanded) {
      const wrapper = current.closest<HTMLElement>('[data-jv-node-wrapper]');
      const group = wrapper
        ? Array.from(wrapper.children).find((child) => child.getAttribute('role') === 'group')
        : undefined;
      group?.querySelector<HTMLElement>('[data-jv-node]')?.focus();
    } else {
      togglePath(pathStr);
    }
  }

  if (code === 'ArrowLeft' && togglePath && pathStr) {
    event.stopPropagation();
    event.preventDefault();
    if (isExpanded) {
      togglePath(pathStr);
    } else {
      const parentWrapper = findElementAncestor(current, '[data-jv-node-wrapper]');
      const grandparent = parentWrapper
        ? findElementAncestor(parentWrapper, '[data-jv-node-wrapper]')
        : null;
      grandparent?.querySelector<HTMLElement>('[data-jv-node]')?.focus();
    }
  }

  if (code === 'ArrowLeft' && !togglePath) {
    event.stopPropagation();
    event.preventDefault();
    const parentWrapper = findElementAncestor(current, '[data-jv-node-wrapper]');
    const grandparent = parentWrapper
      ? findElementAncestor(parentWrapper, '[data-jv-node-wrapper]')
      : null;
    grandparent?.querySelector<HTMLElement>('[data-jv-node]')?.focus();
  }
}

export const JsonViewer = factory<JsonViewerFactory>((_props) => {
  const props = useProps('JsonViewer', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    rootName,
    defaultExpandDepth,
    expandedPaths,
    onExpandedPathsChange,
    maxDisplayLength,
    withTypes,
    withSize,
    withCopy,
    withCopyButton,
    withQuotes,
    withKeyQuotes,
    collapseStringsAfterLength,
    sortKeys,
    groupArraysAfterLength,
    radius,
    fontSize,
    indentWidth,
    withBorder,
    copyLabel,
    copiedLabel,
    onValueSelect,
    expandAllLabel,
    collapseAllLabel,
    withControls,
    highlightItems,
    allExpanded,
    withLineNumbers,
    withChevrons,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<JsonViewerFactory>({
    name: 'JsonViewer',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'root',
  });

  const [_expandedPaths, setExpandedPaths] = useUncontrolled({
    value: expandedPaths,
    defaultValue: [
      serializePath([]),
      ...getDefaultExpandedPaths(value, defaultExpandDepth!, [], 0, groupArraysAfterLength!),
    ],
    finalValue: [],
    onChange: onExpandedPathsChange,
  });

  const togglePath = useCallback(
    (path: string) => {
      if (allExpanded) {
        return;
      }
      setExpandedPaths(
        _expandedPaths.includes(path)
          ? _expandedPaths.filter((p) => p !== path)
          : [..._expandedPaths, path]
      );
    },
    [_expandedPaths, allExpanded, setExpandedPaths]
  );

  const expandAll = () => {
    setExpandedPaths(getAllExpandablePaths(value, [], groupArraysAfterLength!));
  };

  const collapseAll = () => {
    setExpandedPaths([]);
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [lineHeights, setLineHeights] = useState<number[]>([]);

  useEffect(() => {
    if (!withLineNumbers || !contentRef.current) {
      return undefined;
    }

    const syncLineNumbers = () => {
      const rows = contentRef.current!.querySelectorAll<HTMLElement>(':scope [data-jv-row]');
      const heights: number[] = [];
      rows.forEach((row) => {
        heights.push(row.offsetHeight);
      });
      setLineHeights(heights);
    };

    syncLineNumbers();

    const observer = new ResizeObserver(syncLineNumbers);
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [withLineNumbers, _expandedPaths, allExpanded, value]);

  const clipboard = useClipboard();

  return (
    <Box {...getStyles('root')} {...others} data-with-border={withBorder || undefined} data-jv-root>
      {withCopyButton && (
        <Tooltip label={clipboard.copied ? copiedLabel : copyLabel} position="left" fz="xs">
          <UnstyledButton
            {...getStyles('copyAllButton')}
            onClick={() => clipboard.copy(safeStringify(value))}
            aria-label={clipboard.copied ? copiedLabel : `${copyLabel} JSON`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={16}
              height={16}
            >
              {clipboard.copied ? (
                <>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </>
              ) : (
                <>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </>
              )}
            </svg>
          </UnstyledButton>
        </Tooltip>
      )}
      {withControls && !allExpanded && (
        <div {...getStyles('content')} data-controls>
          <UnstyledButton onClick={expandAll} data-control>
            {expandAllLabel}
          </UnstyledButton>
          <UnstyledButton onClick={collapseAll} data-control>
            {collapseAllLabel}
          </UnstyledButton>
        </div>
      )}
      <ScrollArea type="hover" scrollbarSize={4} {...getStyles('scrollarea')}>
        <div {...getStyles('wrapper')}>
          {withLineNumbers && (
            <div {...getStyles('lineNumbers')} ref={lineNumbersRef} aria-hidden>
              {lineHeights.map((height, i) => (
                <div key={i} style={{ height }}>
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <div
            {...getStyles('content')}
            ref={contentRef}
            role="tree"
            aria-label={rootName || 'JSON'}
          >
            <JsonViewerNode
              value={value}
              path={[]}
              nodeKey={rootName || undefined}
              level={1}
              ancestors={EMPTY_ANCESTORS}
              expandedPaths={_expandedPaths}
              togglePath={togglePath}
              getStyles={getStyles}
              maxDisplayLength={maxDisplayLength!}
              withTypes={withTypes!}
              withSize={withSize!}
              withCopy={withCopy!}
              withQuotes={withQuotes!}
              withKeyQuotes={withKeyQuotes!}
              collapseStringsAfterLength={collapseStringsAfterLength!}
              sortKeys={sortKeys!}
              groupArraysAfterLength={groupArraysAfterLength!}
              copyLabel={copyLabel!}
              copiedLabel={copiedLabel!}
              onValueSelect={onValueSelect}
              highlightItems={highlightItems}
              allExpanded={allExpanded!}
              withChevrons={withChevrons!}
              isRoot
            />
          </div>
        </div>
      </ScrollArea>
    </Box>
  );
});

JsonViewer.displayName = '@mantine/code-highlight/JsonViewer';
JsonViewer.classes = classes;
JsonViewer.varsResolver = varsResolver;
