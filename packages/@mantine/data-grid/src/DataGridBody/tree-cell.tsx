import React from 'react';
import { Row, RowModel } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import { ExpandChevron } from '../icons';
import type { DataGridFeatures } from '../table-features';

type GridRow = Row<DataGridFeatures, any>;

type TreeGuideLine = 'through' | 'branch' | 'end' | 'none';

type GridRowModel = RowModel<DataGridFeatures, any>;

function resolveParent(row: GridRow, rowModel: GridRowModel): GridRow | undefined {
  if (!row.parentId) {
    return undefined;
  }

  return rowModel.rowsById[row.parentId] ?? row.getParentRow();
}

const siblingIndexCache = new WeakMap<GridRow[], Map<string, number>>();

function getSiblingIndex(siblings: GridRow[], rowId: string) {
  let indexById = siblingIndexCache.get(siblings);
  if (!indexById) {
    indexById = new Map();
    for (let index = siblings.length - 1; index >= 0; index -= 1) {
      indexById.set(siblings[index].id, index);
    }
    siblingIndexCache.set(siblings, indexById);
  }

  return indexById.get(rowId) ?? -1;
}

function hasFollowingSibling(row: GridRow, rowModel: GridRowModel) {
  const siblings = resolveParent(row, rowModel)?.subRows ?? rowModel.rows;
  const index = getSiblingIndex(siblings, row.id);
  return index !== -1 && index < siblings.length - 1;
}

function getTreeGuides(row: GridRow, rowModel: GridRowModel): TreeGuideLine[] {
  const chain: GridRow[] = [];
  let current: GridRow | undefined = row;
  while (current && current.depth > 0) {
    chain.unshift(current);
    current = resolveParent(current, rowModel);
  }

  return chain.map((chainRow, level) => {
    const continues = hasFollowingSibling(chainRow, rowModel);
    if (level === chain.length - 1) {
      return continues ? 'branch' : 'end';
    }
    return continues ? 'through' : 'none';
  });
}

interface TreeCellContentProps {
  row: GridRow;
  children: React.ReactNode;
}

export function TreeCellContent({ row, children }: TreeCellContentProps) {
  const ctx = useDataGridContext();
  const expanded = row.getIsExpanded();
  const guides = ctx.withTreeLines ? getTreeGuides(row, ctx.table.getRowModel()) : [];

  return (
    <div
      {...ctx.getStyles('treeIndent', {
        style: { '--dg-tree-depth': row.depth } as React.CSSProperties,
      })}
    >
      {guides.map((line, level) => (
        <span
          key={level}
          data-tree-guide
          data-line={line}
          style={{ '--dg-tree-level': level } as React.CSSProperties}
        />
      ))}
      {row.getCanExpand() ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? ctx.labels.collapseRow : ctx.labels.expandRow}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            row.toggleExpanded();
          }}
          {...ctx.getStyles('treeToggle')}
        >
          <ExpandChevron expanded={expanded} />
        </button>
      ) : (
        <span data-hidden aria-hidden {...ctx.getStyles('treeToggle')} />
      )}
      <span {...ctx.getStyles('treeLabel')}>{children}</span>
    </div>
  );
}
