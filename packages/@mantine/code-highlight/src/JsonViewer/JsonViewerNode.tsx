import { useState } from 'react';
import { type GetStylesApi, Tooltip, UnstyledButton } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { handleJsonViewerKeyDown } from './json-viewer-keyboard';
import {
  formatValue,
  getArrayChunks,
  getChunkSegment,
  getEntries,
  getTypeLabel,
  getValueType,
  isExpandableValue,
  type JsonViewerArrayChunk,
  resolveDisplayValue,
  safeStringify,
  serializePath,
} from './json-viewer-utils';
import type { JsonViewerFactory, JsonViewerHighlightType } from './JsonViewer';

export interface JsonViewerNodeProps {
  value: any;
  path: string[];
  nodeKey?: string;
  level: number;
  ancestors: object[];
  expandedPaths: string[];
  togglePath: (path: string) => void;
  getStyles: GetStylesApi<JsonViewerFactory>;
  maxDisplayLength: number;
  withTypes: boolean;
  withSize: boolean;
  withCopy: boolean;
  withQuotes: boolean;
  withKeyQuotes: boolean;
  collapseStringsAfterLength: number | false;
  sortKeys: boolean | ((a: string, b: string) => number);
  groupArraysAfterLength: number | false;
  copyLabel: string;
  copiedLabel: string;
  onValueSelect?: (path: string[], value: any) => void;
  highlightItems?: Record<string, JsonViewerHighlightType>;
  allExpanded: boolean;
  withChevrons: boolean;
  isRoot?: boolean;
  circular?: boolean;
}

type SharedNodeProps = Omit<
  JsonViewerNodeProps,
  'value' | 'path' | 'nodeKey' | 'isRoot' | 'level' | 'ancestors' | 'circular'
>;

function CopyValueButton({
  value,
  getStyles,
  copyLabel,
  copiedLabel,
}: {
  value: any;
  getStyles: GetStylesApi<JsonViewerFactory>;
  copyLabel: string;
  copiedLabel: string;
}) {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Tooltip label={clipboard.copied ? copiedLabel : copyLabel} position="top" fz="xs">
      <UnstyledButton
        tabIndex={-1}
        data-jv-copy
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          clipboard.copy(safeStringify(value));
        }}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation();
          }
        }}
        {...getStyles('copyButton')}
        aria-label={clipboard.copied ? copiedLabel : copyLabel}
      >
        {clipboard.copied ? (
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
          </svg>
        )}
      </UnstyledButton>
    </Tooltip>
  );
}

const WRAP_AFTER_LENGTH = 20;

const CHEVRON_SVG = (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

function NodeKey({
  nodeKey,
  withKeyQuotes,
  getStyles,
}: {
  nodeKey: string | undefined;
  withKeyQuotes: boolean;
  getStyles: GetStylesApi<JsonViewerFactory>;
}) {
  if (nodeKey === undefined) {
    return null;
  }

  return (
    <span {...getStyles('key')} data-key>
      {withKeyQuotes ? JSON.stringify(nodeKey) : nodeKey}
      {': '}
    </span>
  );
}

function CollapsibleNode({
  nodeKey,
  value,
  path,
  level,
  ancestors,
  expandedPaths,
  togglePath,
  getStyles,
  maxDisplayLength,
  withTypes,
  withSize,
  withCopy,
  withQuotes,
  withKeyQuotes,
  collapseStringsAfterLength,
  sortKeys,
  groupArraysAfterLength,
  copyLabel,
  copiedLabel,
  onValueSelect,
  highlightItems,
  allExpanded,
  withChevrons,
  isRoot,
}: JsonViewerNodeProps) {
  const pathStr = serializePath(path);
  const isArray = Array.isArray(value);
  const openBracket = isArray ? '[' : '{';
  const closeBracket = isArray ? ']' : '}';
  const highlightType = highlightItems?.[pathStr];
  const childAncestors = [...ancestors, value];

  let entries = getEntries(value);

  if (!isArray && sortKeys) {
    const comparator = typeof sortKeys === 'function' ? sortKeys : undefined;
    entries = entries.sort((a, b) =>
      comparator ? comparator(a[0], b[0]) : a[0].localeCompare(b[0])
    );
  }

  const totalLength = entries.length;
  const isEmpty = totalLength === 0;
  const isExpanded = !isEmpty && (isRoot || allExpanded || expandedPaths.includes(pathStr));
  const canCollapse = !isEmpty && !isRoot && !allExpanded;
  const showChevron = canCollapse && withChevrons;
  const chunks = isArray ? getArrayChunks(totalLength, groupArraysAfterLength) : null;

  let displayEntries = entries;
  const isTruncated = !chunks && totalLength > maxDisplayLength;
  if (isTruncated) {
    displayEntries = entries.slice(0, maxDisplayLength);
  }

  const sizeLabel = isArray ? `${totalLength} items` : `${totalLength} keys`;
  const toggle = canCollapse ? () => togglePath(pathStr) : undefined;

  const sharedNodeProps: SharedNodeProps = {
    expandedPaths,
    togglePath,
    getStyles,
    maxDisplayLength,
    withTypes,
    withSize,
    withCopy,
    withQuotes,
    withKeyQuotes,
    collapseStringsAfterLength,
    sortKeys,
    groupArraysAfterLength,
    copyLabel,
    copiedLabel,
    onValueSelect,
    highlightItems,
    allExpanded,
    withChevrons,
  };

  const rowContent = (
    <>
      {showChevron && (
        <span {...getStyles('toggle')} data-expanded={isExpanded || undefined}>
          {CHEVRON_SVG}
        </span>
      )}
      <NodeKey nodeKey={nodeKey} withKeyQuotes={withKeyQuotes} getStyles={getStyles} />
      {isEmpty ? (
        <span {...getStyles('bracket')}>
          {openBracket}
          {closeBracket}
        </span>
      ) : (
        <>
          <span {...getStyles('bracket')}>{openBracket}</span>
          {!isExpanded && <span {...getStyles('ellipsis')}>...</span>}
          {!isExpanded && <span {...getStyles('bracket')}>{closeBracket}</span>}
        </>
      )}
      {withTypes && (
        <span {...getStyles('type')} data-value-type={isArray ? 'array' : 'object'}>
          {isArray ? 'array' : 'object'}
        </span>
      )}
      {withSize && <span {...getStyles('size')}>{sizeLabel}</span>}
      {withCopy && (
        <CopyValueButton
          value={value}
          getStyles={getStyles}
          copyLabel={copyLabel}
          copiedLabel={copiedLabel}
        />
      )}
    </>
  );

  const childContent = isExpanded ? (
    <>
      <div role="group" style={{ paddingLeft: 'var(--jv-indent)' }}>
        {chunks
          ? chunks.map((chunk) => (
              <ArrayChunkNode
                key={chunk.start}
                chunk={chunk}
                entries={entries.slice(chunk.start, chunk.end + 1)}
                parentPath={path}
                level={level + 1}
                ancestors={childAncestors}
                nodeProps={sharedNodeProps}
              />
            ))
          : displayEntries.map(([key, val]) => (
              <JsonViewerNode
                key={key}
                value={val}
                path={[...path, key]}
                nodeKey={isArray ? undefined : key}
                level={level + 1}
                ancestors={childAncestors}
                {...sharedNodeProps}
              />
            ))}
        {isTruncated && (
          <div {...getStyles('row')} data-jv-row>
            <span {...getStyles('size')}>
              ... {totalLength - maxDisplayLength} more {isArray ? 'items' : 'keys'}
            </span>
          </div>
        )}
      </div>
      <div {...getStyles('row')} data-jv-row aria-hidden>
        <span {...getStyles('bracket')}>{closeBracket}</span>
      </div>
    </>
  ) : null;

  return (
    <div
      {...getStyles('node')}
      data-type={isArray ? 'array' : 'object'}
      data-jv-node-wrapper
      data-highlight={highlightType || undefined}
    >
      <div
        {...getStyles('row')}
        role="treeitem"
        aria-expanded={isEmpty ? undefined : isExpanded}
        aria-level={level}
        data-hoverable
        data-jv-node
        data-jv-row
        data-root={isRoot || undefined}
        tabIndex={isRoot ? 0 : -1}
        onClick={
          toggle
            ? (e: React.MouseEvent) => {
                e.stopPropagation();
                toggle();
              }
            : undefined
        }
        onKeyDown={(e) =>
          handleJsonViewerKeyDown(e, {
            expanded: isEmpty ? undefined : isExpanded,
            onToggle: toggle,
          })
        }
      >
        {rowContent}
      </div>
      {childContent}
    </div>
  );
}

function ArrayChunkNode({
  chunk,
  entries,
  parentPath,
  level,
  ancestors,
  nodeProps,
}: {
  chunk: JsonViewerArrayChunk;
  entries: [string, any][];
  parentPath: string[];
  level: number;
  ancestors: object[];
  nodeProps: SharedNodeProps;
}) {
  const label = getChunkSegment(chunk);
  const chunkPathStr = serializePath([...parentPath, label]);
  const isExpanded = nodeProps.allExpanded || nodeProps.expandedPaths.includes(chunkPathStr);
  const toggle = nodeProps.allExpanded ? undefined : () => nodeProps.togglePath(chunkPathStr);

  return (
    <div {...nodeProps.getStyles('node')} data-type="array" data-jv-node-wrapper>
      <div
        {...nodeProps.getStyles('row')}
        role="treeitem"
        aria-expanded={isExpanded}
        aria-level={level}
        data-hoverable
        data-jv-node
        data-jv-row
        tabIndex={-1}
        onClick={
          toggle
            ? (e: React.MouseEvent) => {
                e.stopPropagation();
                toggle();
              }
            : undefined
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) =>
          handleJsonViewerKeyDown(e, { expanded: isExpanded, onToggle: toggle })
        }
      >
        {toggle && nodeProps.withChevrons && (
          <span {...nodeProps.getStyles('toggle')} data-expanded={isExpanded || undefined}>
            {CHEVRON_SVG}
          </span>
        )}
        <span {...nodeProps.getStyles('key')} data-key>
          {label}
        </span>
        <span {...nodeProps.getStyles('bracket')}>[</span>
        {!isExpanded && <span {...nodeProps.getStyles('ellipsis')}>...</span>}
        {!isExpanded && <span {...nodeProps.getStyles('bracket')}>]</span>}
        {nodeProps.withSize && <span {...nodeProps.getStyles('size')}>{entries.length} items</span>}
      </div>
      {isExpanded && (
        <>
          <div role="group" style={{ paddingLeft: 'var(--jv-indent)' }}>
            {entries.map(([key, val]) => (
              <JsonViewerNode
                key={key}
                value={val}
                path={[...parentPath, key]}
                level={level + 1}
                ancestors={ancestors}
                {...nodeProps}
              />
            ))}
          </div>
          <div {...nodeProps.getStyles('row')} data-jv-row aria-hidden>
            <span {...nodeProps.getStyles('bracket')}>]</span>
          </div>
        </>
      )}
    </div>
  );
}

function PrimitiveNode({
  nodeKey,
  value,
  path,
  level,
  getStyles,
  withTypes,
  withCopy,
  withQuotes,
  withKeyQuotes,
  collapseStringsAfterLength,
  copyLabel,
  copiedLabel,
  onValueSelect,
  highlightItems,
  isRoot,
  circular,
}: JsonViewerNodeProps) {
  const [isStringExpanded, setIsStringExpanded] = useState(false);
  const type = circular ? 'circular' : getValueType(value);
  const highlightType = highlightItems?.[serializePath(path)];
  const select = onValueSelect ? () => onValueSelect(path, value) : undefined;

  const shouldCollapseString =
    typeof value === 'string' &&
    collapseStringsAfterLength !== false &&
    value.length > collapseStringsAfterLength;

  let formatted: { display: string; collapsed: boolean };
  if (circular) {
    formatted = { display: '[Circular]', collapsed: false };
  } else if (shouldCollapseString && !isStringExpanded) {
    formatted = formatValue(value, withQuotes, collapseStringsAfterLength);
  } else {
    formatted = formatValue(value, withQuotes, false);
  }

  return (
    <div
      {...getStyles('node')}
      data-type={type}
      data-jv-node-wrapper
      data-highlight={highlightType || undefined}
    >
      <div
        {...getStyles('row')}
        role="treeitem"
        aria-level={level}
        aria-selected={onValueSelect ? false : undefined}
        data-hoverable
        data-jv-node
        data-jv-row
        data-root={isRoot || undefined}
        tabIndex={isRoot ? 0 : -1}
        onClick={
          select
            ? (e: React.MouseEvent) => {
                e.stopPropagation();
                select();
              }
            : undefined
        }
        onKeyDown={(e) => handleJsonViewerKeyDown(e, { onSelect: select })}
      >
        <NodeKey nodeKey={nodeKey} withKeyQuotes={withKeyQuotes} getStyles={getStyles} />
        <span
          {...getStyles('value')}
          data-value-type={type}
          data-wrap={
            (type === 'string' && formatted.display.length > WRAP_AFTER_LENGTH) || undefined
          }
        >
          {formatted.display}
        </span>
        {shouldCollapseString && (
          <UnstyledButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setIsStringExpanded(!isStringExpanded);
            }}
            aria-expanded={isStringExpanded}
            {...getStyles('ellipsis')}
            data-clickable
          >
            {isStringExpanded ? 'show less' : 'show more'}
          </UnstyledButton>
        )}
        {withTypes && (
          <span {...getStyles('type')} data-value-type={type}>
            {circular ? 'circular' : getTypeLabel(value)}
          </span>
        )}
        {withCopy && (
          <CopyValueButton
            value={value}
            getStyles={getStyles}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
          />
        )}
      </div>
    </div>
  );
}

export function JsonViewerNode(props: JsonViewerNodeProps) {
  const value = resolveDisplayValue(props.value);

  if (isExpandableValue(value) && props.ancestors.includes(value)) {
    return <PrimitiveNode {...props} value={value} circular />;
  }

  if (isExpandableValue(value)) {
    return <CollapsibleNode {...props} value={value} />;
  }

  return <PrimitiveNode {...props} value={value} />;
}
