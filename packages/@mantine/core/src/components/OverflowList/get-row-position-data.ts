import React from 'react';

interface NodePosition {
  elements: Set<HTMLElement>;
  bottom: number;
  top: number;
}
function groupNodesByTopPosition(nodes: HTMLElement[]): Record<number, NodePosition> {
  if (nodes.length === 0) {
    return {};
  }

  const result: Record<number, NodePosition> = {};

  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const top = Math.round(rect.top);
    const bottom = Math.round(rect.bottom);

    if (!result[top]) {
      result[top] = {
        elements: new Set<HTMLElement>(),
        bottom,
        top,
      };
    } else {
      result[top].bottom = Math.max(result[top].bottom, bottom);
    }

    result[top].elements.add(node);
  });

  return result;
}
export function getRowPositionsData(
  containerRef: React.RefObject<HTMLElement | null>,
  overflowRef: React.RefObject<HTMLElement | null>
): {
  itemsSizesMap: Record<number, NodePosition>;
  rowPositions: number[];
  children: HTMLElement[];
} | null {
  if (!containerRef.current) {
    return null;
  }

  const container = containerRef.current;
  const children = Array.from(container.children).filter(
    (child) => overflowRef.current !== child
  ) as HTMLElement[];

  if (children.length === 0) {
    return null;
  }

  const itemsSizesMap = groupNodesByTopPosition(children);
  const rowPositions = Object.keys(itemsSizesMap).map(Number);

  return { itemsSizesMap, rowPositions, children };
}
