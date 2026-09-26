import React from 'react';
import { DataGridSelectionBar } from './DataGridSelectionBar';
import { DataGridToolbar } from './DataGridToolbar';

interface PartitionedChildren {
  toolbarChildren: React.ReactNode[];
  selectionBarChild: React.ReactElement<{ floating?: boolean }> | undefined;
  otherChildren: React.ReactNode[];
}

const isToolbar = (child: React.ReactNode) =>
  React.isValidElement(child) && child.type === DataGridToolbar;

const isSelectionBar = (child: React.ReactNode) =>
  React.isValidElement(child) && child.type === DataGridSelectionBar;

export function partitionChildren(children: React.ReactNode): PartitionedChildren {
  const childArray = React.Children.toArray(children);
  return {
    toolbarChildren: childArray.filter(isToolbar),
    selectionBarChild: childArray.find(isSelectionBar) as
      | React.ReactElement<{ floating?: boolean }>
      | undefined,
    otherChildren: childArray.filter((child) => !isToolbar(child) && !isSelectionBar(child)),
  };
}
